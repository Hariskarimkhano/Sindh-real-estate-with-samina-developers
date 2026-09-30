import React from 'react';
import { useNavigation } from '../context/NavigationContext';
import { ArrowRight } from 'lucide-react';

export interface MegaMenuCategory {
  id: string;
  label: string;
  href: string;
  columns: {
    title: string;
    items: { label: string; href: string; description?: string }[];
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
  const { navigate } = useNavigation();

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
                  {col.items.map((item, itemIdx) => (
                    <li key={itemIdx}>
                      <button
                        onClick={() => {
                          onClose();
                          navigate(item.href);
                        }}
                        className="text-left text-sm text-neutral-300 hover:text-white transition-colors group flex items-baseline gap-1"
                      >
                        <span className="group-hover:translate-x-1 transition-transform inline-block">
                          {item.label}
                        </span>
                      </button>
                      {item.description && (
                        <p className="text-xs text-neutral-500 mt-0.5 line-clamp-1">
                          {item.description}
                        </p>
                      )}
                    </li>
                  ))}
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
              className="inline-flex items-center gap-2 text-xs font-semibold text-[#D97706] hover:text-amber-400 transition-colors uppercase tracking-wider"
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
