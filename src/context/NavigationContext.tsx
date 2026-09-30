import React, { createContext, useContext, useState, useEffect } from 'react';

export interface RouteState {
  path: string;
  params: Record<string, string>;
  searchParams: URLSearchParams;
}

interface NavigationContextType {
  currentPath: string;
  params: Record<string, string>;
  searchParams: URLSearchParams;
  navigate: (path: string, options?: { replace?: boolean }) => void;
  isSearchOpen: boolean;
  setIsSearchOpen: (open: boolean) => void;
  openSearch: () => void;
  closeSearch: () => void;
  isProjectInquiryOpen: boolean;
  setIsProjectInquiryOpen: (open: boolean) => void;
  openProjectInquiry: () => void;
}

const NavigationContext = createContext<NavigationContextType | undefined>(undefined);

export const NavigationProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentPath, setCurrentPath] = useState<string>(() => {
    return window.location.pathname || '/';
  });

  const [searchParams, setSearchParams] = useState<URLSearchParams>(() => {
    return new URLSearchParams(window.location.search);
  });

  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isProjectInquiryOpen, setIsProjectInquiryOpen] = useState(false);

  // Synchronize with window history events
  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname || '/');
      setSearchParams(new URLSearchParams(window.location.search));
      window.scrollTo(0, 0);
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

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

  const navigate = (path: string, options?: { replace?: boolean }) => {
    const [pathname, search] = path.split('?');
    const newSearchParams = new URLSearchParams(search || '');

    if (options?.replace) {
      window.history.replaceState({}, '', path);
    } else {
      window.history.pushState({}, '', path);
    }

    setCurrentPath(pathname);
    setSearchParams(newSearchParams);
    window.scrollTo(0, 0);
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
