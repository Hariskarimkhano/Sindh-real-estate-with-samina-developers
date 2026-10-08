import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { isNavigationTargetActive, isPathActive, useNavigation } from '../context/NavigationContext';
import { ChevronDown, X, Search, ArrowRight } from 'lucide-react';
import { MegaMenuCategory } from './MegaMenu';
import { SindhRealEstateLogo } from './SindhRealEstateLogo';
import { Button } from './ui/Button';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  categories: MegaMenuCategory[];
}

export const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose, categories }) => {
  const { currentPath, currentHash, searchParams, navigate, openSearch, openProjectInquiry } = useNavigation();
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const routeActiveCategory = categories.find(category =>
    isPathActive(currentPath, new URL(category.href, window.location.origin).pathname)
  ) ?? categories.find(category =>
    category.columns.some(column => column.items.some(item =>
      isNavigationTargetActive(item.href, currentPath, searchParams, currentHash, item.matchDescendants)
    )) || isNavigationTargetActive(category.featured.href, currentPath, searchParams, currentHash)
  );
  const isHomeActive = currentPath === '/' && !currentHash;

  useEffect(() => {
    if (!isOpen) {
      setExpandedId(null);
      return;
    }

    const previousOverflow = document.body.style.overflow;
    const desktopBreakpoint = window.matchMedia('(min-width: 1280px)');
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose();
    };
    const handleBreakpointChange = (event: MediaQueryListEvent) => {
      if (event.matches) onClose();
    };

    window.addEventListener('keydown', handleKeyDown);
    desktopBreakpoint.addEventListener('change', handleBreakpointChange);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', handleKeyDown);
      desktopBreakpoint.removeEventListener('change', handleBreakpointChange);
    };
  }, [isOpen, onClose]);

  useEffect(() => {
    if (isOpen) setExpandedId(routeActiveCategory?.id ?? null);
  }, [isOpen, routeActiveCategory?.id]);

  if (!isOpen) return null;

  const toggleAccordion = (id: string) => {
    setExpandedId(prev => (prev === id ? null : id));
  };

  return createPortal(
    <div
      className="fixed inset-0 z-[60] flex xl:hidden"
      role="dialog"
      aria-modal="true"
      aria-label="Mobile navigation"
    >
      {/* Backdrop */}
      <button
        type="button"
        aria-label="Close menu"
        className="absolute inset-0 bg-black/60 backdrop-blur-xs transition-opacity"
        onClick={onClose}
      />

      {/* Drawer */}
      <div id="mobile-navigation-drawer" className="relative z-10 ml-auto flex h-dvh min-h-0 w-full max-w-none flex-col overflow-hidden bg-[#12161A] text-white shadow-2xl">
        {/* Top bar inside drawer */}
        <div className="flex shrink-0 items-center justify-between border-b border-white/10 p-5">
          <button
            type="button"
            onClick={() => {
              onClose();
              navigate('/');
            }}
            aria-label="Sindhi Real Estate with Samina Developer Homepage"
            aria-current={isHomeActive ? 'page' : undefined}
            className="flex flex-col items-center rounded-xs focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#D97706]"
          >
            <SindhRealEstateLogo variant="stacked" height={50} />
            {isHomeActive && <span className="mt-1 h-0.5 w-8 bg-[#DFB257]" />}
          </button>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close menu"
            className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-xs text-neutral-400 transition-colors hover:bg-white/5 hover:text-white active:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D97706]"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Quick Search */}
        <div className="shrink-0 border-b border-white/10 p-4 sm:p-6">
          <button
            type="button"
            onClick={() => {
              onClose();
              openSearch();
            }}
            className="flex min-h-12 w-full items-center justify-between gap-2 rounded-sm border border-white/10 bg-neutral-900/80 px-3 sm:px-4 py-3 text-left text-sm text-neutral-400 transition-colors hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D97706]"
          >
            <span className="flex items-center gap-2.5">
              <Search className="w-4 h-4 text-[#D97706]" />
              <span>Search projects, services, insights...</span>
            </span>
            <span className="text-xs bg-white/10 px-1.5 py-0.5 rounded-xs text-neutral-400">⌘K</span>
          </button>
        </div>

        {/* Accordions */}
        <nav aria-label="Mobile navigation links" className="min-h-0 flex-1 divide-y divide-white/5 overflow-y-auto overscroll-contain px-5 py-4 sm:px-6">
          {categories.map(category => {
            const isExpanded = expandedId === category.id;
            const isRouteActive = routeActiveCategory?.id === category.id;
            return (
              <div key={category.id} className="py-2.5">
                <div className="flex items-center justify-between">
                  <button
                    type="button"
                    onClick={() => {
                      onClose();
                      navigate(category.href);
                    }}
                    aria-current={isRouteActive ? 'page' : undefined}
                    className={`min-h-11 flex-1 border-b-2 pr-2 text-left font-display text-base font-bold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#D97706] ${
                      isRouteActive
                        ? 'border-[#DFB257] text-[#DFB257]'
                        : 'border-transparent text-neutral-200 hover:text-white'
                    }`}
                  >
                    {category.label}
                  </button>
                  <button
                    type="button"
                    onClick={() => toggleAccordion(category.id)}
                    aria-label={`Toggle ${category.label}`}
                    aria-expanded={isExpanded}
                    aria-controls={`mobile-submenu-${category.id}`}
                    className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-xs text-neutral-400 transition-colors hover:bg-white/5 hover:text-white active:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#D97706]"
                  >
                    <ChevronDown
                      className={`w-4 h-4 transition-transform duration-200 ${
                        isExpanded ? 'rotate-180 text-[#D97706]' : ''
                      }`}
                    />
                  </button>
                </div>

                {isExpanded && (
                  <div id={`mobile-submenu-${category.id}`} className="mt-2 ml-1 space-y-4 border-l border-[#D97706]/40 py-1 pl-3">
                    {category.columns.map((col, idx) => (
                      <div key={idx} className="space-y-2">
                        <div className="text-[11px] font-semibold uppercase tracking-wider text-neutral-500">
                          {col.title}
                        </div>
                        <ul className="space-y-1">
                          {col.items.map((item, itemIdx) => (
                            <li key={itemIdx}>
                              <button
                                type="button"
                                onClick={() => {
                                  onClose();
                                  navigate(item.href);
                                }}
                                aria-current={isNavigationTargetActive(item.href, currentPath, searchParams, currentHash, item.matchDescendants) ? 'page' : undefined}
                                className={`block min-h-11 border-l-2 py-2 pl-2 text-left text-sm transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#D97706] ${
                                  isNavigationTargetActive(item.href, currentPath, searchParams, currentHash, item.matchDescendants)
                                    ? 'border-[#DFB257] text-[#DFB257]'
                                    : 'border-transparent text-neutral-300 hover:text-white'
                                }`}
                              >
                                {item.label}
                              </button>
                              {item.description && (
                                <p className={`pb-2 pl-2 text-xs leading-relaxed ${
                                  isNavigationTargetActive(item.href, currentPath, searchParams, currentHash, item.matchDescendants)
                                    ? 'text-neutral-300'
                                    : 'text-neutral-500'
                                }`}>
                                  {item.description}
                                </p>
                              )}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            );
          })}

          <div className="space-y-1 py-4">
            <button
              type="button"
              onClick={() => {
                onClose();
                navigate('/subcontractors');
              }}
              aria-current={isPathActive(currentPath, '/subcontractors') ? 'page' : undefined}
              className={`block min-h-11 w-full border-l-2 py-2 pl-2 text-left text-sm font-medium focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#D97706] ${
                isPathActive(currentPath, '/subcontractors')
                  ? 'border-[#DFB257] text-[#DFB257]'
                  : 'border-transparent text-neutral-300 hover:text-white'
              }`}
            >
              Subcontractors &amp; Prequalification
            </button>
            <button
              type="button"
              onClick={() => {
                onClose();
                navigate('/locations');
              }}
              aria-current={isPathActive(currentPath, '/locations') ? 'page' : undefined}
              className={`block min-h-11 w-full border-l-2 py-2 pl-2 text-left text-sm font-medium focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#D97706] ${
                isPathActive(currentPath, '/locations')
                  ? 'border-[#DFB257] text-[#DFB257]'
                  : 'border-transparent text-neutral-300 hover:text-white'
              }`}
            >
              Find a Regional Office
            </button>
          </div>
        </nav>

        {/* Drawer Footer CTA */}
        <div className="shrink-0 space-y-3 border-t border-white/10 bg-neutral-950 p-4 sm:p-6">
          <Button
            variant="primary"
            size="md"
            showArrow
            onClick={() => {
              onClose();
              openProjectInquiry();
            }}
            className="w-full justify-center"
          >
            START A PROJECT
          </Button>
          <Button
            variant="outline"
            size="md"
            onClick={() => {
              onClose();
              navigate('/contact');
            }}
            aria-current={isPathActive(currentPath, '/contact') ? 'page' : undefined}
            className={`w-full justify-center ${
              isPathActive(currentPath, '/contact')
                ? '!border-[#DFB257] !text-[#DFB257]'
                : ''
            }`}
          >
            CONTACT HEADQUARTERS
          </Button>
        </div>
      </div>
    </div>,
    document.body
  );
};
