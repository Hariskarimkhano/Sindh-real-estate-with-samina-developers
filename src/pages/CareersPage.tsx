import React, { useState, useMemo } from 'react';
import { useNavigation } from '../context/NavigationContext';
import { CAREERS_DATA, LIFE_AT_SINDH_REAL_ESTATE } from '../data/careers';
import { Job } from '../types';
import { Search, MapPin, Briefcase, Calendar, ArrowRight, CheckCircle2, X } from 'lucide-react';
import { ASSETS } from '../data/assets';

export const CareersPage: React.FC = () => {
  const { navigate } = useNavigation();

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDept, setSelectedDept] = useState('All');
  const [selectedLocation, setSelectedLocation] = useState('All');
  const [selectedExp, setSelectedExp] = useState('All');

  const departments = ['All', 'Construction', 'Engineering', 'Project Management', 'Safety', 'Technology'];
  const locations = ['All', 'Boston', 'San Francisco', 'New York', 'Seattle', 'Chicago', 'Dallas'];
  const experiences = ['All', 'Entry Level', 'Mid Level', 'Senior'];

  const filteredJobs = useMemo(() => {
    return CAREERS_DATA.filter((job: Job) => {
      if (searchQuery) {
        const q = searchQuery.toLowerCase();
        const matches =
          job.title.toLowerCase().includes(q) ||
          job.description.toLowerCase().includes(q) ||
          job.responsibilities.some(r => r.toLowerCase().includes(q));
        if (!matches) return false;
      }
      if (selectedDept !== 'All' && job.department !== selectedDept) return false;
      if (selectedLocation !== 'All' && !job.location.includes(selectedLocation)) return false;
      if (selectedExp !== 'All' && job.experience !== selectedExp) return false;
      return true;
    });
  }, [searchQuery, selectedDept, selectedLocation, selectedExp]);

  return (
    <div className="w-full">
      {/* Hero */}
      <section className="relative py-24 sm:py-32 bg-[#12161A] text-white border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="max-w-3xl space-y-4">
            <div className="flex items-center gap-2.5 text-xs font-bold uppercase tracking-widest text-[#D97706]">
              <div className="w-2 h-4 bg-[#D97706]" />
              <span>Talent, Craft &amp; Opportunity</span>
            </div>
            <h1 className="font-display text-4xl sm:text-6xl font-extrabold uppercase tracking-tight text-white leading-tight">
              AMBITIOUS PEOPLE. IMPACTFUL WORK.
            </h1>
            <p className="text-lg sm:text-xl font-light text-neutral-300 leading-relaxed">
              Work with people who share your passion for solving challenging engineering problems and building what matters.
            </p>
          </div>
        </div>
        <div className="absolute inset-0 opacity-15 pointer-events-none bg-[radial-gradient(#D97706_1px,transparent_1px)] [background-size:24px_24px]" />
      </section>

      {/* Life at Sindh Real Estate Culture Section */}
      <section id="life" className="py-20 sm:py-28 bg-[#F8F9FA] text-[#12161A] border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <h2 className="font-display text-3xl sm:text-4xl font-extrabold uppercase tracking-tight text-[#12161A]">
                LIFE AT SINDH REAL ESTATE
              </h2>
              <p className="text-neutral-700 text-sm sm:text-base leading-relaxed font-light">
                We believe that construction is fundamentally a human endeavor. When our people are physically and psychologically safe, valued for their unique perspectives, and equipped with continuous learning, there is no technical challenge we cannot solve.
              </p>
              <div className="space-y-4 pt-2">
                {LIFE_AT_SINDH_REAL_ESTATE.pillars.map((pillar, idx) => (
                  <div key={idx} className="space-y-1">
                    <div className="font-bold text-sm text-[#12161A] flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#D97706] shrink-0" />
                      <span>{pillar.title}</span>
                    </div>
                    <p className="text-xs text-neutral-600 pl-6 leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="relative aspect-4/3 overflow-hidden bg-neutral-900 border border-neutral-200 shadow-xl">
                <img
                  src={ASSETS.heroEngineeringVdc}
                  alt="Sindh Real Estate with Samina Developers builders reviewing digital blueprints"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Job Search & Filter Bar */}
      <section id="openings" className="bg-white border-b border-neutral-200 py-8 sticky top-20 z-30 shadow-xs">
        <div className="max-w-7xl mx-auto px-6 space-y-4">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="relative w-full sm:max-w-md">
              <Search className="w-4 h-4 text-neutral-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search job title, keywords, skills..."
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

            <div className="text-xs text-neutral-500 font-mono-numbers">
              Showing <strong className="text-black font-bold">{filteredJobs.length}</strong> Opportunities
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div>
              <label className="block text-[10px] font-bold uppercase tracking-wider text-neutral-500 mb-1">
                Department
              </label>
              <select
                value={selectedDept}
                onChange={e => setSelectedDept(e.target.value)}
                className="w-full px-3 py-1.5 bg-neutral-50 border border-neutral-300 text-xs text-[#12161A] focus:outline-none"
              >
                {departments.map(d => (
                  <option key={d} value={d}>{d}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-[10px] font-bold uppercase tracking-wider text-neutral-500 mb-1">
                Office Location
              </label>
              <select
                value={selectedLocation}
                onChange={e => setSelectedLocation(e.target.value)}
                className="w-full px-3 py-1.5 bg-neutral-50 border border-neutral-300 text-xs text-[#12161A] focus:outline-none"
              >
                {locations.map(l => (
                  <option key={l} value={l}>{l}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-[10px] font-bold uppercase tracking-wider text-neutral-500 mb-1">
                Experience Level
              </label>
              <select
                value={selectedExp}
                onChange={e => setSelectedExp(e.target.value)}
                className="w-full px-3 py-1.5 bg-neutral-50 border border-neutral-300 text-xs text-[#12161A] focus:outline-none"
              >
                {experiences.map(e => (
                  <option key={e} value={e}>{e}</option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Job Openings Results List */}
      <section className="py-16 sm:py-24 bg-[#F8F9FA]">
        <div className="max-w-7xl mx-auto px-6">
          {filteredJobs.length === 0 ? (
            <div className="py-24 text-center bg-white border border-neutral-200 p-8 space-y-4">
              <h3 className="font-display text-xl font-bold uppercase text-[#12161A]">
                No Active Openings Match Your Filter
              </h3>
              <p className="text-xs text-neutral-500">
                Try selecting a different department or resetting search keywords.
              </p>
            </div>
          ) : (
            <div className="space-y-4">
              {filteredJobs.map((job: Job) => (
                <div
                  key={job.id}
                  onClick={() => navigate(`/careers/${job.id}`)}
                  className="bg-white border border-neutral-200 hover:border-neutral-400 p-6 sm:p-8 flex flex-col md:flex-row md:items-center justify-between gap-6 cursor-pointer transition-all hover:shadow-md group"
                >
                  <div className="space-y-2">
                    <div className="flex flex-wrap items-center gap-3 text-xs text-neutral-500">
                      <span className="text-[#D97706] font-bold uppercase">{job.department}</span>
                      <span aria-hidden="true">·</span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5" />
                        {job.location}
                      </span>
                      <span aria-hidden="true">·</span>
                      <span>{job.experience}</span>
                      <span aria-hidden="true">·</span>
                      <span>{job.type}</span>
                    </div>

                    <h3 className="font-display text-lg sm:text-xl font-bold uppercase tracking-tight text-[#12161A] group-hover:text-[#D97706] transition-colors">
                      {job.title}
                    </h3>

                    <p className="text-xs text-neutral-600 line-clamp-2 max-w-3xl leading-relaxed">
                      {job.description}
                    </p>
                  </div>

                  <div className="flex items-center gap-4 shrink-0">
                    <div className="text-xs font-mono-numbers text-neutral-400 hidden lg:block">
                      Posted {job.postedDate}
                    </div>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        navigate(`/careers/${job.id}`);
                      }}
                      className="px-6 py-2.5 bg-[#12161A] group-hover:bg-[#D97706] text-white text-xs font-bold uppercase tracking-wider transition-colors flex items-center gap-2 whitespace-nowrap"
                    >
                      <span>VIEW JOB</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
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
