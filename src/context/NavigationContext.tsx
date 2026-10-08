import React, { createContext, useContext, useState, useEffect } from 'react';

export interface RouteState {
  path: string;
  params: Record<string, string>;
  searchParams: URLSearchParams;
}

interface NavigationContextType {
  currentPath: string;
  currentHash: string;
  params: Record<string, string>;
  searchParams: URLSearchParams;
  navigate: (path: string, options?: { replace?: boolean; scroll?: boolean }) => void;
  isSearchOpen: boolean;
  setIsSearchOpen: (open: boolean) => void;
  openSearch: () => void;
  closeSearch: () => void;
  isProjectInquiryOpen: boolean;
  setIsProjectInquiryOpen: (open: boolean) => void;
  openProjectInquiry: () => void;
}

const NavigationContext = createContext<NavigationContextType | undefined>(undefined);

const normalizePath = (path: string) => {
  const normalized = path.replace(/\/+$/, '');
  return normalized || '/';
};

export const isPathActive = (currentPath: string, targetPath: string) => {
  const current = normalizePath(currentPath);
  const target = normalizePath(targetPath);
  return current === target || (target !== '/' && current.startsWith(`${target}/`));
};

export const isNavigationTargetActive = (
  href: string,
  currentPath: string,
  searchParams: URLSearchParams,
  currentHash: string,
  matchDescendants = false
) => {
  const target = new URL(href, window.location.origin);
  const pathMatches = matchDescendants
    ? isPathActive(currentPath, target.pathname)
    : normalizePath(target.pathname) === normalizePath(currentPath);
  if (!pathMatches) return false;
  if (target.hash !== currentHash) return false;

  const targetParams = Array.from(target.searchParams.entries()).sort(([keyA, valueA], [keyB, valueB]) =>
    keyA === keyB ? valueA.localeCompare(valueB) : keyA.localeCompare(keyB)
  );
  const currentParams = Array.from(searchParams.entries()).sort(([keyA, valueA], [keyB, valueB]) =>
    keyA === keyB ? valueA.localeCompare(valueB) : keyA.localeCompare(keyB)
  );

  return targetParams.length === currentParams.length &&
    targetParams.every(([key, value], index) => key === currentParams[index][0] && value === currentParams[index][1]);
};

export const NavigationProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentPath, setCurrentPath] = useState<string>(() => {
    return window.location.pathname || '/';
  });

  const [currentHash, setCurrentHash] = useState<string>(() => window.location.hash);

  const [searchParams, setSearchParams] = useState<URLSearchParams>(() => {
    return new URLSearchParams(window.location.search);
  });

  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isProjectInquiryOpen, setIsProjectInquiryOpen] = useState(false);

  // Synchronize with window history events
  useEffect(() => {
    const syncLocation = () => {
      setCurrentPath(window.location.pathname || '/');
      setSearchParams(new URLSearchParams(window.location.search));
      setCurrentHash(window.location.hash);
      if (!window.location.hash) window.scrollTo(0, 0);
    };

    window.addEventListener('popstate', syncLocation);
    window.addEventListener('hashchange', syncLocation);
    return () => {
      window.removeEventListener('popstate', syncLocation);
      window.removeEventListener('hashchange', syncLocation);
    };
  }, []);

  useEffect(() => {
    if (!currentHash) return;

    const targetId = currentHash.slice(1);
    document.getElementById(targetId)?.scrollIntoView();
  }, [currentPath, currentHash]);

  // Keyboard shortcut Cmd+K or Ctrl+K for search
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsSearchOpen(prev => !prev);
      }
      if (e.key === 'Escape') {
        setIsSearchOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const navigate = (path: string, options?: { replace?: boolean; scroll?: boolean }) => {
    const destination = new URL(path, window.location.href);

    if (options?.replace) {
      window.history.replaceState({}, '', destination);
    } else {
      window.history.pushState({}, '', destination);
    }

    setCurrentPath(destination.pathname || '/');
    setSearchParams(new URLSearchParams(destination.search));
    setCurrentHash(destination.hash);
    if (!destination.hash && options?.scroll !== false) window.scrollTo(0, 0);
  };

  // Derive route params
  const params: Record<string, string> = {};
  const segments = currentPath.split('/').filter(Boolean);

  if (segments[0] === 'services' && segments[1]) {
    params.slug = segments[1];
  } else if (segments[0] === 'projects' && segments[1]) {
    params.slug = segments[1];
  } else if (segments[0] === 'markets' && segments[1]) {
    params.slug = segments[1];
  } else if (segments[0] === 'news' && segments[1]) {
    params.slug = segments[1];
  } else if (segments[0] === 'commitments' && segments[1]) {
    params.tab = segments[1];
  } else if (segments[0] === 'careers' && segments[1]) {
    params.jobId = segments[1];
  }

  return (
    <NavigationContext.Provider
      value={{
        currentPath,
        currentHash,
        params,
        searchParams,
        navigate,
        isSearchOpen,
        setIsSearchOpen,
        openSearch: () => setIsSearchOpen(true),
        closeSearch: () => setIsSearchOpen(false),
        isProjectInquiryOpen,
        setIsProjectInquiryOpen,
        openProjectInquiry: () => setIsProjectInquiryOpen(true),
      }}
    >
      {children}
    </NavigationContext.Provider>
  );
};

export const useNavigation = () => {
  const context = useContext(NavigationContext);
  if (!context) {
    throw new Error('useNavigation must be used within a NavigationProvider');
  }
  return context;
};
