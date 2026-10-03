import React, { useState, useMemo } from 'react';
import { useNavigation } from '../context/NavigationContext';
import { LOCATIONS_DATA } from '../data/locations';
import { OfficeLocation } from '../types';
import { Search, MapPin, Phone, Mail, Users, Building, ArrowRight, X } from 'lucide-react';

export const LocationsPage: React.FC = () => {
  const { navigate, searchParams, openProjectInquiry } = useNavigation();

  const queryOffice = searchParams.get('office');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedRegion, setSelectedRegion] = useState('All');

  const regions = ['All', 'Northeast', 'Northern California', 'Southwest', 'Midwest', 'South', 'Northwest', 'International'];

  const filteredOffices = useMemo(() => {
    return LOCATIONS_DATA.filter((loc: OfficeLocation) => {
      if (searchQuery) {
        const q = searchQuery.toLowerCase();
        const matches =
          loc.name.toLowerCase().includes(q) ||
          loc.city.toLowerCase().includes(q) ||
          loc.state.toLowerCase().includes(q) ||
          loc.country.toLowerCase().includes(q);
        if (!matches) return false;
      }
      if (selectedRegion !== 'All' && loc.region !== selectedRegion) {
        return false;
      }
      return true;
    });
  }, [searchQuery, selectedRegion]);

  return (
    <div className="w-full">
      {/* Hero */}
      <section className="relative py-24 sm:py-32 bg-[#12161A] text-white border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="max-w-3xl space-y-4">
            <div className="flex items-center gap-2.5 text-xs font-bold uppercase tracking-widest text-[#D97706]">
              <MapPin className="w-4 h-4" />
              <span>Office Directory</span>
            </div>
            <h1 className="font-display text-4xl sm:text-6xl font-extrabold uppercase tracking-tight text-white leading-tight">
              FIND A SINDHI REAL ESTATE OFFICE
            </h1>
            <p className="text-lg sm:text-xl font-light text-neutral-300 leading-relaxed">
              With regional offices across North America and key global hubs worldwide, Sindhi Real Estate with Samina Developer pairs global capacity with direct local accessibility.
            </p>
          </div>
        </div>
        <div className="absolute inset-0 opacity-15 pointer-events-none bg-[radial-gradient(#D97706_1px,transparent_1px)] [background-size:24px_24px]" />
      </section>

      {/* Directory Search & Filter */}
      <section className="bg-white border-b border-neutral-200 py-6 sticky top-20 z-30 shadow-xs">
        <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="relative w-full sm:max-w-md">
            <Search className="w-4 h-4 text-neutral-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search by city, state, or country..."
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

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <span className="text-xs text-neutral-500 hidden sm:inline">Region:</span>
            <select
              value={selectedRegion}
              onChange={e => setSelectedRegion(e.target.value)}
              className="px-3 py-2 bg-neutral-50 border border-neutral-300 text-xs text-[#12161A] focus:outline-none w-full sm:w-auto"
            >
              {regions.map(r => (
                <option key={r} value={r}>{r === 'All' ? 'All Regions' : r}</option>
              ))}
            </select>
          </div>
        </div>
      </section>

      {/* Offices Grid */}
      <section className="py-16 sm:py-24 bg-[#F8F9FA]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredOffices.map((office: OfficeLocation) => (
              <div
                key={office.id}
                id={office.id}
                className={`bg-white border p-8 flex flex-col justify-between space-y-6 transition-all shadow-xs ${
                  queryOffice === office.id ? 'border-[#D97706] ring-2 ring-[#D97706]/20' : 'border-neutral-200 hover:border-neutral-400'
                }`}
              >
                <div className="space-y-4">
                  <div>
                    <span className="text-[11px] font-mono-numbers text-[#D97706] font-bold uppercase tracking-wider block mb-1">
                      {office.region}
                    </span>
                    <h3 className="font-display text-xl font-bold uppercase text-[#12161A]">
                      {office.name}
                    </h3>
                  </div>

                  {/* Contact Info */}
                  <div className="space-y-2 text-xs text-neutral-600 pt-2 border-t border-neutral-100">
                    <div className="flex items-start gap-2.5">
                      <MapPin className="w-4 h-4 text-[#D97706] shrink-0 mt-0.5" />
                      <span>{office.address}</span>
                    </div>
                    <div className="flex items-center gap-2.5">
                      <Phone className="w-4 h-4 text-[#D97706] shrink-0" />
                      <a href={`tel:${office.phone}`} className="hover:text-black">
                        {office.phone}
                      </a>
                    </div>
                    <div className="flex items-center gap-2.5">
                      <Mail className="w-4 h-4 text-[#D97706] shrink-0" />
                      <a href={`mailto:${office.email}`} className="hover:text-black">
                        {office.email}
                      </a>
                    </div>
                  </div>

                  {/* Leadership */}
                  <div className="pt-2 border-t border-neutral-100 space-y-2">
                    <div className="text-[11px] font-bold uppercase tracking-wider text-neutral-900 flex items-center gap-1.5">
                      <Users className="w-3.5 h-3.5 text-[#D97706]" />
                      <span>Leadership</span>
                    </div>
                    <div className="space-y-1.5">
                      {office.leadership.map((leader, lIdx) => (
                        <div key={lIdx} className="text-xs">
                          <span className="font-bold text-[#12161A]">{leader.name}</span>
                          <span className="text-neutral-500 block text-[11px]">{leader.title}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card Actions */}
                <div className="pt-4 border-t border-neutral-100 flex items-center justify-between">
                  <button
                    onClick={() => navigate(`/projects?location=${office.city}`)}
                    className="text-xs font-bold uppercase text-[#12161A] hover:text-[#D97706] flex items-center gap-1"
                  >
                    <span>Local Work</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>

                  <button
                    onClick={openProjectInquiry}
                    className="px-4 py-2 bg-[#12161A] hover:bg-neutral-800 text-white text-xs font-semibold uppercase tracking-wider transition-colors"
                  >
                    Contact Office
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
