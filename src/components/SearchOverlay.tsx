import React, { useState, useEffect, useRef } from 'react';
import { useNavigation } from '../context/NavigationContext';
import { Search, X, Building2, Briefcase, FileText, Compass, MapPin, ArrowRight } from 'lucide-react';
import { PROJECTS_DATA } from '../data/projects';
import { SERVICES_DATA } from '../data/services';
import { MARKETS_DATA } from '../data/markets';
import { NEWS_DATA } from '../data/news';
import { CAREERS_DATA } from '../data/careers';
import { LOCATIONS_DATA } from '../data/locations';

export const SearchOverlay: React.FC = () => {
  const { isSearchOpen, closeSearch, navigate } = useNavigation();
  const [query, setQuery] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isSearchOpen) {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 50);
    } else {
      setQuery('');
    }
  }, [isSearchOpen]);

  if (!isSearchOpen) return null;

  const q = query.trim().toLowerCase();

  // Search matches
  const matchedProjects = q
    ? PROJECTS_DATA.filter(
        p =>
          p.name.toLowerCase().includes(q) ||
          p.city.toLowerCase().includes(q) ||
          p.market.toLowerCase().includes(q)
      ).slice(0, 3)
    : [];

  const matchedServices = q
    ? SERVICES_DATA.filter(
        s =>
          s.title.toLowerCase().includes(q) ||
          s.shortDescription.toLowerCase().includes(q)
      ).slice(0, 3)
    : [];

  const matchedMarkets = q
    ? MARKETS_DATA.filter(
        m =>
          m.title.toLowerCase().includes(q) ||
          m.shortDescription.toLowerCase().includes(q)
      ).slice(0, 3)
    : [];

  const matchedNews = q
    ? NEWS_DATA.filter(
        n =>
          n.title.toLowerCase().includes(q) ||
          n.category.toLowerCase().includes(q)
      ).slice(0, 3)
    : [];

  const matchedCareers = q
    ? CAREERS_DATA.filter(
        c =>
          c.title.toLowerCase().includes(q) ||
          c.department.toLowerCase().includes(q) ||
          c.location.toLowerCase().includes(q)
      ).slice(0, 3)
    : [];

  const matchedLocations = q
    ? LOCATIONS_DATA.filter(
        l =>
          l.name.toLowerCase().includes(q) ||
          l.city.toLowerCase().includes(q) ||
          l.state.toLowerCase().includes(q)
      ).slice(0, 3)
    : [];

  const totalResults =
    matchedProjects.length +
    matchedServices.length +
    matchedMarkets.length +
    matchedNews.length +
    matchedCareers.length +
    matchedLocations.length;

  const handleSelect = (url: string) => {
    closeSearch();
    navigate(url);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Global Search"
      className="fixed inset-0 z-[70] flex items-start justify-center bg-black/70 p-0 backdrop-blur-md transition-all"
    >
      <div
        className="fixed inset-0"
        onClick={closeSearch}
        aria-hidden="true"
      />

      <div className="relative z-10 flex h-full max-h-full w-full max-w-none flex-col overflow-hidden bg-[#12161A] text-white shadow-2xl">
        {/* Search Input Bar */}
        <div className="flex items-center px-6 py-5 border-b border-white/10">
          <Search className="w-5 h-5 text-[#D97706] mr-4 shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={e => setQuery(e.target.value)}
            placeholder="Search projects, services, markets, news, careers, locations..."
            className="w-full bg-transparent text-white placeholder-neutral-500 text-base focus:outline-none"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="text-neutral-500 hover:text-white mr-3 text-xs uppercase"
            >
              Clear
            </button>
          )}
          <button
            onClick={closeSearch}
            className="p-1.5 text-neutral-400 hover:text-white transition-colors"
            aria-label="Close search overlay"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Search Results Container */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {!query && (
            <div className="py-8 text-center">
              <p className="text-xs uppercase tracking-wider text-neutral-500 mb-4 font-semibold">
                Quick Navigation &amp; Topics
              </p>
              <div className="flex flex-wrap justify-center gap-2 max-w-lg mx-auto">
                {[
                  { label: 'Four Seasons Modernization', href: '/projects/four-seasons-modernization' },
                  { label: 'Virtual Design & Construction', href: '/services/virtual-design-and-construction' },
                  { label: 'Preconstruction Estimating', href: '/services/preconstruction' },
                  { label: 'Healthcare & Life Sciences', href: '/markets/healthcare' },
                  { label: 'Data Centers', href: '/markets/data-centers' },
                  { label: '2026 Building Cost Index', href: '/news/2026-construction-cost-index' },
                  { label: 'Careers & Job Openings', href: '/careers' },
                  { label: 'Subcontractor Prequalification', href: '/subcontractors' }
                ].map((item, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleSelect(item.href)}
                    className="px-3 py-1.5 bg-neutral-900 hover:bg-neutral-800 border border-white/10 text-xs text-neutral-300 hover:text-white transition-colors text-left"
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>
          )}

          {query && totalResults === 0 && (
            <div className="py-12 text-center text-neutral-400">
              <p className="text-base text-neutral-300 mb-1">No matching results found for &ldquo;{query}&rdquo;</p>
              <p className="text-xs text-neutral-500">Try searching for a project name, market sector, office city, or service.</p>
            </div>
          )}

          {/* Grouped results */}
          {matchedProjects.length > 0 && (
            <div>
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#D97706] mb-3">
                <Building2 className="w-4 h-4" />
                <span>Projects ({matchedProjects.length})</span>
              </div>
              <div className="space-y-2">
                {matchedProjects.map(p => (
                  <button
                    key={p.id}
                    onClick={() => handleSelect(`/projects/${p.slug}`)}
                    className="w-full text-left p-3 bg-neutral-900/60 hover:bg-neutral-800/80 border border-white/5 hover:border-white/20 transition-all flex items-center justify-between group"
                  >
                    <div>
                      <div className="text-sm font-semibold text-white group-hover:text-[#D97706] transition-colors">
                        {p.name}
                      </div>
                      <div className="text-xs text-neutral-400 mt-0.5">
                        <span>{p.city}, {p.state || p.country}</span>
                        <span className="mx-2">·</span>
                        <span>{p.market}</span>
                      </div>
                    </div>
                    <ArrowRight className="w-4 h-4 text-neutral-600 group-hover:text-[#D97706] transition-colors" />
                  </button>
                ))}
              </div>
            </div>
          )}

          {matchedServices.length > 0 && (
            <div>
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#D97706] mb-3">
                <Compass className="w-4 h-4" />
                <span>Services ({matchedServices.length})</span>
              </div>
              <div className="space-y-2">
                {matchedServices.map(s => (
                  <button
                    key={s.id}
                    onClick={() => handleSelect(`/services/${s.slug}`)}
                    className="w-full text-left p-3 bg-neutral-900/60 hover:bg-neutral-800/80 border border-white/5 hover:border-white/20 transition-all flex items-center justify-between group"
                  >
                    <div>
                      <div className="text-sm font-semibold text-white group-hover:text-[#D97706] transition-colors">
                        {s.number}. {s.title}
                      </div>
                      <div className="text-xs text-neutral-400 mt-0.5 line-clamp-1">
                        {s.shortDescription}
                      </div>
                    </div>
                    <ArrowRight className="w-4 h-4 text-neutral-600 group-hover:text-[#D97706] transition-colors" />
                  </button>
                ))}
              </div>
            </div>
          )}

          {matchedMarkets.length > 0 && (
            <div>
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#D97706] mb-3">
                <Building2 className="w-4 h-4" />
                <span>Market Sectors ({matchedMarkets.length})</span>
              </div>
              <div className="space-y-2">
                {matchedMarkets.map(m => (
                  <button
                    key={m.id}
                    onClick={() => handleSelect(`/markets/${m.slug}`)}
                    className="w-full text-left p-3 bg-neutral-900/60 hover:bg-neutral-800/80 border border-white/5 hover:border-white/20 transition-all flex items-center justify-between group"
                  >
                    <div>
                      <div className="text-sm font-semibold text-white group-hover:text-[#D97706] transition-colors">
                        {m.title}
                      </div>
                      <div className="text-xs text-neutral-400 mt-0.5">
                        <span>{m.projectCount}+ Completed Projects</span>
                      </div>
                    </div>
                    <ArrowRight className="w-4 h-4 text-neutral-600 group-hover:text-[#D97706] transition-colors" />
                  </button>
                ))}
              </div>
            </div>
          )}

          {matchedNews.length > 0 && (
            <div>
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#D97706] mb-3">
                <FileText className="w-4 h-4" />
                <span>News &amp; Insights ({matchedNews.length})</span>
              </div>
              <div className="space-y-2">
                {matchedNews.map(n => (
                  <button
                    key={n.id}
                    onClick={() => handleSelect(`/news/${n.slug}`)}
                    className="w-full text-left p-3 bg-neutral-900/60 hover:bg-neutral-800/80 border border-white/5 hover:border-white/20 transition-all flex items-center justify-between group"
                  >
                    <div>
                      <div className="text-sm font-semibold text-white group-hover:text-[#D97706] transition-colors">
                        {n.title}
                      </div>
                      <div className="text-xs text-neutral-400 mt-0.5">
                        <span>{n.category}</span>
                        <span className="mx-2">·</span>
                        <span>{n.date}</span>
                      </div>
                    </div>
                    <ArrowRight className="w-4 h-4 text-neutral-600 group-hover:text-[#D97706] transition-colors" />
                  </button>
                ))}
              </div>
            </div>
          )}

          {matchedCareers.length > 0 && (
            <div>
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#D97706] mb-3">
                <Briefcase className="w-4 h-4" />
                <span>Careers ({matchedCareers.length})</span>
              </div>
              <div className="space-y-2">
                {matchedCareers.map(c => (
                  <button
                    key={c.id}
                    onClick={() => handleSelect(`/careers/${c.id}`)}
                    className="w-full text-left p-3 bg-neutral-900/60 hover:bg-neutral-800/80 border border-white/5 hover:border-white/20 transition-all flex items-center justify-between group"
                  >
                    <div>
                      <div className="text-sm font-semibold text-white group-hover:text-[#D97706] transition-colors">
                        {c.title}
                      </div>
                      <div className="text-xs text-neutral-400 mt-0.5">
                        <span>{c.location}</span>
                        <span className="mx-2">·</span>
                        <span>{c.department}</span>
                      </div>
                    </div>
                    <ArrowRight className="w-4 h-4 text-neutral-600 group-hover:text-[#D97706] transition-colors" />
                  </button>
                ))}
              </div>
            </div>
          )}

          {matchedLocations.length > 0 && (
            <div>
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#D97706] mb-3">
                <MapPin className="w-4 h-4" />
                <span>Offices ({matchedLocations.length})</span>
              </div>
              <div className="space-y-2">
                {matchedLocations.map(l => (
                  <button
                    key={l.id}
                    onClick={() => handleSelect(`/locations?office=${l.id}`)}
                    className="w-full text-left p-3 bg-neutral-900/60 hover:bg-neutral-800/80 border border-white/5 hover:border-white/20 transition-all flex items-center justify-between group"
                  >
                    <div>
                      <div className="text-sm font-semibold text-white group-hover:text-[#D97706] transition-colors">
                        {l.name}
                      </div>
                      <div className="text-xs text-neutral-400 mt-0.5">
                        <span>{l.address}</span>
                      </div>
                    </div>
                    <ArrowRight className="w-4 h-4 text-neutral-600 group-hover:text-[#D97706] transition-colors" />
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Footer Hint */}
        <div className="px-6 py-3 bg-neutral-950 border-t border-white/10 flex items-center justify-between text-xs text-neutral-400">
          <span>Press <kbd className="px-1.5 py-0.5 bg-white/10 text-neutral-300 rounded-xs">ESC</kbd> to exit</span>
          <span>Sindh Real Estate with Samina Developers Global Search</span>
        </div>
      </div>
    </div>
  );
};
