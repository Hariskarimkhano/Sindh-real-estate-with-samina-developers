import React from 'react';
import { isNavigationTargetActive, useNavigation } from '../context/NavigationContext';
import { ArrowRight } from 'lucide-react';

export interface MegaMenuCategory {
  id: string;
  label: string;
  href: string;
  columns: {
    title: string;
    items: { label: string; href: string; description?: string; matchDescendants?: boolean }[];
  }[];
  featured: {
    title: string;
    tag: string;
    description: string;
    href: string;
    image: string;
  };
}

interface MegaMenuProps {
  category: MegaMenuCategory;
  isOpen: boolean;
  onClose: () => void;
}

export const MegaMenu: React.FC<MegaMenuProps> = ({ category, isOpen, onClose }) => {
  const { currentPath, currentHash, searchParams, navigate } = useNavigation();

  if (!isOpen) return null;

  return (
    <div
      role="region"
      aria-label={`${category.label} Submenu`}
      className="absolute top-full left-0 w-full bg-[#12161A] text-white border-t border-white/10 shadow-2xl z-50 transition-all duration-200"
      onMouseLeave={onClose}
    >
      <div className="max-w-7xl mx-auto px-6 py-10">
        <div className="grid grid-cols-12 gap-8">
          {/* Nav columns */}
          <div className="col-span-8 grid grid-cols-2 md:grid-cols-3 gap-8 border-r border-white/10 pr-8">
            {category.columns.map((col, idx) => (
              <div key={idx} className="space-y-4">
                <h4 className="text-xs font-semibold uppercase tracking-wider text-[#D97706]">
                  {col.title}
                </h4>
                <ul className="space-y-3">
                  {col.items.map((item, itemIdx) => {
                    const isRouteActive = isNavigationTargetActive(item.href, currentPath, searchParams, currentHash, item.matchDescendants);
                    return (
                      <li key={itemIdx}>
                        <button
                          onClick={() => {
                            onClose();
                            navigate(item.href);
                          }}
                          aria-current={isRouteActive ? 'page' : undefined}
                          className={`group flex items-baseline gap-1 border-l-2 pl-2 text-left text-sm transition-colors ${
                            isRouteActive
                              ? 'border-[#DFB257] text-[#DFB257]'
                              : 'border-transparent text-neutral-300 hover:border-white/30 hover:text-white'
                          }`}
                        >
                          <span className={`inline-block transition-transform ${
                            isRouteActive ? '' : 'group-hover:translate-x-1'
                          }`}>
                            {item.label}
                          </span>
                        </button>
                        {item.description && (
                          <p className={`mt-0.5 line-clamp-1 text-xs ${
                            isRouteActive ? 'text-neutral-300' : 'text-neutral-500'
                          }`}>
                            {item.description}
                          </p>
                        )}
                      </li>
                    );
                  })}
                </ul>
              </div>
            ))}
          </div>

          {/* Featured Spotlight Card */}
          <div className="col-span-4 pl-2 flex flex-col justify-between">
            <div>
              <div className="text-xs font-medium text-neutral-400 mb-2">
                <span>Featured Focus</span>
                <span className="mx-2">·</span>
                <span className="text-[#D97706]">{category.featured.tag}</span>
              </div>
              <h3 className="text-lg font-bold text-white mb-2 leading-tight">
                {category.featured.title}
              </h3>
              <p className="text-xs text-neutral-400 line-clamp-2 mb-4 leading-relaxed">
                {category.featured.description}
              </p>
            </div>

            <div className="relative rounded-sm overflow-hidden aspect-video bg-neutral-900 border border-white/10 group mb-4">
              <img
                src={category.featured.image}
                alt={category.featured.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            </div>

            <button
              onClick={() => {
                onClose();
                navigate(category.featured.href);
              }}
              aria-current={isNavigationTargetActive(category.featured.href, currentPath, searchParams, currentHash) ? 'page' : undefined}
              className={`inline-flex items-center gap-2 text-xs font-semibold transition-colors uppercase tracking-wider ${
                isNavigationTargetActive(category.featured.href, currentPath, searchParams, currentHash)
                  ? 'text-[#DFB257]'
                  : 'text-[#D97706] hover:text-amber-400'
              }`}
            >
              <span>Explore Story</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
