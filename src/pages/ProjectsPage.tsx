import React, { useState, useMemo } from 'react';
import { useNavigation } from '../context/NavigationContext';
import { PROJECTS_DATA } from '../data/projects';
import { Project } from '../types';
import { Search, Filter, MapPin, ArrowRight, ArrowUpRight, X } from 'lucide-react';

export const ProjectsPage: React.FC = () => {
  const { navigate, searchParams } = useNavigation();

  // Initial filter state from search params or default
  const initialMarket = searchParams.get('market') || 'All';
  const initialLocation = searchParams.get('location') || 'All';

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedMarket, setSelectedMarket] = useState(initialMarket);
  const [selectedLocation, setSelectedLocation] = useState(initialLocation);
  const [selectedStatus, setSelectedStatus] = useState('All');
  const [selectedYear, setSelectedYear] = useState('All');

  // Markets list
  const markets = [
    'All',
    'Commercial & Mixed-Use',
    'Healthcare & Life Sciences',
    'Sports & Entertainment',
    'Education & Higher Learning',
    'Data Centers & Mission Critical',
    'Aviation & Transportation',
    'Pharmaceutical & Biotechnology'
  ];

  // Locations list
  const locations = [
    'All',
    'New York',
    'Los Angeles',
    'Boston',
    'San Francisco',
    'Chicago',
    'Kuala Lumpur',
    'Dubai',
    'Taipei'
  ];

  const statuses = ['All', 'Completed', 'Under Construction', 'Preconstruction'];
  const years = ['All', '2025', '2024', '2023', '2022', '2021', '2020'];

  const filteredProjects = useMemo(() => {
    return PROJECTS_DATA.filter((project: Project) => {
      // Search
      if (searchQuery) {
        const q = searchQuery.toLowerCase();
        const matchesQuery =
          project.name.toLowerCase().includes(q) ||
          project.description.toLowerCase().includes(q) ||
          project.city.toLowerCase().includes(q) ||
          project.client.toLowerCase().includes(q) ||
          project.market.toLowerCase().includes(q);
        if (!matchesQuery) return false;
      }

      // Market
      if (selectedMarket !== 'All') {
        if (!project.market.toLowerCase().includes(selectedMarket.toLowerCase())) return false;
      }

      // Location
      if (selectedLocation !== 'All') {
        if (project.city.toLowerCase() !== selectedLocation.toLowerCase()) return false;
      }

      // Status
      if (selectedStatus !== 'All') {
        if (project.status !== selectedStatus) return false;
      }

      // Year
      if (selectedYear !== 'All') {
        if (project.year.toString() !== selectedYear) return false;
      }

      return true;
    });
  }, [searchQuery, selectedMarket, selectedLocation, selectedStatus, selectedYear]);

  const resetFilters = () => {
    setSearchQuery('');
    setSelectedMarket('All');
    setSelectedLocation('All');
    setSelectedStatus('All');
    setSelectedYear('All');
  };

  const hasActiveFilters =
    searchQuery ||
    selectedMarket !== 'All' ||
    selectedLocation !== 'All' ||
    selectedStatus !== 'All' ||
    selectedYear !== 'All';

  return (
    <div className="w-full">
      {/* Portfolio Hero */}
      <section className="relative py-24 sm:py-32 bg-[#12161A] text-white border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="max-w-3xl space-y-4">
            <div className="flex items-center gap-2.5 text-xs font-bold uppercase tracking-widest text-[#D97706]">
              <div className="w-2 h-4 bg-[#D97706]" />
              <span>Project Portfolio</span>
            </div>
            <h1 className="font-display text-4xl sm:text-6xl font-extrabold uppercase tracking-tight text-white leading-tight">
              OUR PROJECTS
            </h1>
            <p className="text-lg sm:text-xl font-light text-neutral-300 leading-relaxed">
              Explore over a century of landmark commercial supertalls, advanced medical centers, high-tech AI campuses, and world-class civic arenas.
            </p>
          </div>
        </div>
        <div className="absolute inset-0 opacity-15 pointer-events-none bg-[radial-gradient(#D97706_1px,transparent_1px)] [background-size:24px_24px]" />
      </section>

      {/* Filter and Search Bar (Sticky or Top) */}
      <section className="bg-white border-b border-neutral-200 py-6 sticky top-20 z-30 shadow-xs">
        <div className="max-w-7xl mx-auto px-6 space-y-4">
          {/* Top row: search & active counter */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="relative w-full sm:max-w-md">
              <Search className="w-4 h-4 text-neutral-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search projects by name, city, client..."
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 bg-neutral-50 border border-neutral-300 focus:border-[#D97706] text-xs text-[#12161A] focus:outline-none"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-neutral-400 hover:text-black"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>

            <div className="flex items-center gap-4 text-xs text-neutral-600 w-full sm:w-auto justify-between sm:justify-end">
              <span className="font-mono-numbers">
                Showing <strong className="text-[#12161A] font-bold">{filteredProjects.length}</strong> of {PROJECTS_DATA.length} Projects
              </span>
              {hasActiveFilters && (
                <button
                  onClick={resetFilters}
                  className="text-xs font-semibold text-[#D97706] hover:underline"
                >
                  Reset All Filters
                </button>
              )}
            </div>
          </div>

          {/* Bottom row: Filter Selectors */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
            <div>
              <label className="block text-[10px] font-bold uppercase tracking-wider text-neutral-500 mb-1">
                Market Sector
              </label>
              <select
                value={selectedMarket}
                onChange={e => setSelectedMarket(e.target.value)}
                className="w-full px-3 py-1.5 bg-neutral-50 border border-neutral-300 text-xs text-[#12161A] focus:outline-none focus:border-[#D97706]"
              >
                {markets.map(m => (
                  <option key={m} value={m}>{m}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-[10px] font-bold uppercase tracking-wider text-neutral-500 mb-1">
                Location
              </label>
              <select
                value={selectedLocation}
                onChange={e => setSelectedLocation(e.target.value)}
                className="w-full px-3 py-1.5 bg-neutral-50 border border-neutral-300 text-xs text-[#12161A] focus:outline-none focus:border-[#D97706]"
              >
                {locations.map(l => (
                  <option key={l} value={l}>{l}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-[10px] font-bold uppercase tracking-wider text-neutral-500 mb-1">
                Status
              </label>
              <select
                value={selectedStatus}
                onChange={e => setSelectedStatus(e.target.value)}
                className="w-full px-3 py-1.5 bg-neutral-50 border border-neutral-300 text-xs text-[#12161A] focus:outline-none focus:border-[#D97706]"
              >
                {statuses.map(s => (
                  <option key={s} value={s}>{s}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-[10px] font-bold uppercase tracking-wider text-neutral-500 mb-1">
                Completion Year
              </label>
              <select
                value={selectedYear}
                onChange={e => setSelectedYear(e.target.value)}
                className="w-full px-3 py-1.5 bg-neutral-50 border border-neutral-300 text-xs text-[#12161A] focus:outline-none focus:border-[#D97706]"
              >
                {years.map(y => (
                  <option key={y} value={y}>{y}</option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16 sm:py-24 bg-[#F8F9FA]">
        <div className="max-w-7xl mx-auto px-6">
          {filteredProjects.length === 0 ? (
            <div className="py-24 text-center space-y-4 bg-white border border-neutral-200 p-8">
              <h3 className="font-display text-xl font-bold uppercase text-[#12161A]">
                No Projects Match Your Search Criteria
              </h3>
              <p className="text-xs text-neutral-500 max-w-md mx-auto">
                Try selecting a different market sector, clearing your search keyword, or resetting all filters.
              </p>
              <button
                onClick={resetFilters}
                className="px-6 py-2.5 bg-[#12161A] text-white text-xs font-bold uppercase tracking-wider hover:bg-neutral-800 transition-colors"
              >
                Reset All Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project: Project) => (
                <div
                  key={project.id}
                  onClick={() => navigate(`/projects/${project.slug}`)}
                  className="group bg-white border border-neutral-200 hover:border-neutral-400 flex flex-col justify-between overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
                >
                  {/* Project Image */}
                  <div className="relative aspect-16/10 overflow-hidden bg-neutral-900">
                    <img
                      src={project.heroImage}
                      alt={project.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

                    <div className="absolute top-4 left-4 flex items-center gap-1.5">
                      <span className="bg-black/70 backdrop-blur-xs text-white text-[11px] font-mono-numbers px-2.5 py-1">
                        {project.year}
                      </span>
                      <span className="bg-[#D97706] text-white text-[10px] font-bold uppercase tracking-wider px-2 py-1">
                        {project.status}
                      </span>
                    </div>

                    <div className="absolute bottom-4 right-4 p-2 rounded-full bg-white/20 text-white group-hover:bg-[#D97706] transition-colors">
                      <ArrowUpRight className="w-4 h-4" />
                    </div>
                  </div>

                  {/* Project Metadata & Narrative */}
                  <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-xs text-neutral-500">
                        <span className="text-[#D97706] font-bold">{project.market}</span>
                        <span aria-hidden="true">·</span>
                        <span className="flex items-center gap-1">
                          <MapPin className="w-3 h-3 text-neutral-400" />
                          {project.city}, {project.state || project.country}
                        </span>
                      </div>

                      <h3 className="font-display text-lg font-bold uppercase tracking-tight text-[#12161A] group-hover:text-[#D97706] transition-colors leading-snug">
                        {project.name}
                      </h3>

                      <p className="text-xs text-neutral-600 line-clamp-2 leading-relaxed">
                        {project.description}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-neutral-100 flex items-center justify-between text-xs font-bold uppercase tracking-wider text-neutral-900 group-hover:text-[#D97706] transition-colors">
                      <span>VIEW PROJECT</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
};
