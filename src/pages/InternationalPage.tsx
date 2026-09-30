import React from 'react';
import { useNavigation } from '../context/NavigationContext';
import { INTERNATIONAL_PROJECTS } from '../data/network';
import { PROJECTS_DATA } from '../data/projects';
import { ArrowRight, Globe, Building2, ExternalLink } from 'lucide-react';
import { ASSETS } from '../data/assets';

export const InternationalPage: React.FC = () => {
  const { navigate, openProjectInquiry } = useNavigation();

  return (
    <div className="w-full">
      {/* Hero */}
      <section className="relative py-24 sm:py-32 bg-[#12161A] text-white border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="max-w-3xl space-y-4">
            <div className="flex items-center gap-2.5 text-xs font-bold uppercase tracking-widest text-[#D97706]">
              <Globe className="w-4 h-4" />
              <span>Sindh Real Estate International</span>
            </div>
            <h1 className="font-display text-4xl sm:text-6xl font-extrabold uppercase tracking-tight text-white leading-tight">
              GLOBAL EXPERTISE. LOCAL EXPERIENCE.
            </h1>
            <p className="text-lg sm:text-xl font-light text-neutral-300 leading-relaxed">
              Managing iconic mega-projects across Europe, the Middle East, Southeast Asia, and India. From the world&rsquo;s tallest skyscraper to sovereign cultural institutions.
            </p>
          </div>
        </div>
        <div className="absolute inset-0 opacity-20 pointer-events-none bg-[radial-gradient(#D97706_1px,transparent_1px)] [background-size:24px_24px]" />
      </section>

      {/* Regional Operations Overview */}
      <section className="py-20 sm:py-28 bg-[#F8F9FA] text-[#12161A] border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold uppercase tracking-tight text-[#12161A]">
              SHAPING THE WORLD&rsquo;S MOST MONUMENTAL HORIZONS
            </h2>
            <p className="text-neutral-700 text-sm sm:text-base leading-relaxed font-light">
              Sindh Real Estate with Samina Developers brings international construction and project management expertise to sovereign funds, global developers, and multinational corporations.
            </p>
            <p className="text-neutral-700 text-sm sm:text-base leading-relaxed font-light">
              We specialize in tall building engineering, high-wind and seismic aerodynamics, complex curtain-wall procurement, and mission-critical logistical planning across challenging climates.
            </p>
            <div className="pt-2">
              <button
                onClick={openProjectInquiry}
                className="px-6 py-3 bg-[#12161A] hover:bg-neutral-800 text-white text-xs font-bold uppercase tracking-wider transition-colors flex items-center gap-2"
              >
                <span>Inquire About International Services</span>
                <ArrowRight className="w-3.5 h-3.5 text-white" />
              </button>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="relative aspect-4/3 overflow-hidden bg-neutral-900 border border-neutral-200 shadow-xl">
              <img
                src={ASSETS.heroConstruction}
                alt="Supertall tower construction skyline"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured International Megaprojects Showcase */}
      <section className="py-20 sm:py-28 bg-[#12161A] text-white border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl space-y-4 mb-14">
            <div className="flex items-center gap-2.5 text-xs font-bold uppercase tracking-widest text-[#D97706]">
              <div className="w-2 h-4 bg-[#D97706]" />
              <span>International Portfolio</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold uppercase tracking-tight text-white">
              MONUMENTAL GLOBAL PROJECTS
            </h2>
            <p className="text-neutral-400 text-sm sm:text-base leading-relaxed">
              Engineering breakthroughs delivered across the Middle East, Asia Pacific, and Europe.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {INTERNATIONAL_PROJECTS.map((proj, idx) => (
              <div
                key={idx}
                onClick={() => navigate(`/projects/${proj.slug}`)}
                className="bg-neutral-900 border border-white/10 hover:border-[#D97706] p-6 cursor-pointer transition-all group flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-xs text-neutral-400">
                    <span>{proj.location}</span>
                    <span className="font-mono-numbers text-white">{proj.height}</span>
                  </div>

                  <h3 className="font-display text-xl font-bold uppercase text-white group-hover:text-[#D97706] transition-colors">
                    {proj.name}
                  </h3>

                  <div className="text-xs text-[#D97706] uppercase tracking-wider font-semibold">
                    {proj.role}
                  </div>
                </div>

                <div className="pt-6 border-t border-white/10 mt-6 flex items-center justify-between text-xs font-bold uppercase text-neutral-300 group-hover:text-[#D97706] transition-colors">
                  <span>VIEW DETAILS</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
