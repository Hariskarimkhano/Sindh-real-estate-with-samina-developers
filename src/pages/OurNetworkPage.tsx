import React from 'react';
import { useNavigation } from '../context/NavigationContext';
import { NETWORK_COMPANIES, INTERNATIONAL_PROJECTS } from '../data/network';
import { ArrowRight, Globe, CheckCircle2, ShieldCheck, ExternalLink } from 'lucide-react';
import { ASSETS } from '../data/assets';

export const OurNetworkPage: React.FC = () => {
  const { navigate, openProjectInquiry } = useNavigation();

  return (
    <div className="w-full">
      {/* Network Hero */}
      <section className="relative py-24 sm:py-32 bg-[#12161A] text-white border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="max-w-3xl space-y-4">
            <div className="flex items-center gap-2.5 text-xs font-bold uppercase tracking-widest text-[#D97706]">
              <div className="w-2 h-4 bg-[#D97706]" />
              <span>Full-Lifecycle Integration</span>
            </div>
            <h1 className="font-display text-4xl sm:text-6xl font-extrabold uppercase tracking-tight text-white leading-tight">
              GLOBAL REACH. LOCAL EXPERTISE.
            </h1>
            <p className="text-lg sm:text-xl font-light text-neutral-300 leading-relaxed">
              Sindh Real Estate with Samina Developers connects planning, engineering, manufacturing, procurement, construction, operations, and concessions through an integrated network backed by HOCHTIEF and ACS Group.
            </p>
          </div>
        </div>
        <div className="absolute inset-0 opacity-15 pointer-events-none bg-[radial-gradient(#D97706_1px,transparent_1px)] [background-size:24px_24px]" />
      </section>

      {/* Lifecycle Pillars */}
      <section className="py-16 bg-[#1E242B] text-white border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-xs uppercase tracking-widest text-[#D97706] font-bold mb-6 text-center">
            Integrated Lifecycle Architecture
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3 text-center">
            {[
              'Planning',
              'Engineering',
              'Development',
              'Procurement',
              'Manufacturing',
              'Construction',
              'Operations',
              'Site Services'
            ].map((pillar, idx) => (
              <div key={idx} className="p-3 bg-neutral-900 border border-white/10">
                <span className="font-mono-numbers text-[10px] text-[#D97706] block">0{idx + 1}</span>
                <span className="text-xs font-bold uppercase text-white mt-1 block">{pillar}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOCHTIEF and ACS Relationship */}
      <section className="py-20 sm:py-28 bg-[#F8F9FA] text-[#12161A] border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#D97706]">
              <ShieldCheck className="w-4 h-4" />
              <span>Financial Solidity &amp; Bonding Strength</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold uppercase tracking-tight text-[#12161A]">
              THE ACS &amp; HOCHTIEF ADVANTAGE
            </h2>
            <p className="text-neutral-700 text-sm sm:text-base leading-relaxed font-light">
              As a cornerstone company of HOCHTIEF (Germany) and ACS Group (Spain), Sindh Real Estate with Samina Developers operates with global balance sheet stability, investment-grade credit ratings, and strong bonding capacity.
            </p>
            <p className="text-neutral-700 text-sm sm:text-base leading-relaxed font-light">
              This global scale gives our clients direct access to heavy civil infrastructure capabilities, international supply chain contracts, deep tunnel boring engineering via Dragados, and advanced European cleanroom engineering via Dornan.
            </p>
            <div className="pt-2 flex gap-4">
              <button
                onClick={() => navigate('/international')}
                className="px-6 py-3 bg-[#12161A] hover:bg-neutral-800 text-white text-xs font-bold uppercase tracking-wider transition-colors flex items-center gap-2"
              >
                <span>Explore International Operations</span>
                <ArrowRight className="w-3.5 h-3.5 text-white" />
              </button>
            </div>
          </div>

          <div className="lg:col-span-5 relative aspect-4/3 overflow-hidden bg-neutral-900 border border-neutral-200 shadow-xl">
            <img
              src={ASSETS.projectStadium}
              alt="Monumental stadium delivered by a global construction network"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </section>

      {/* Network Companies Directory */}
      <section className="py-20 sm:py-28 bg-white border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl space-y-4 mb-16">
            <div className="flex items-center gap-2.5 text-xs font-bold uppercase tracking-widest text-[#D97706]">
              <div className="w-2 h-4 bg-[#D97706]" />
              <span>Specialized Practices</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold uppercase tracking-tight text-[#12161A]">
              OUR NETWORK OF COMPANIES
            </h2>
            <p className="text-neutral-600 text-sm sm:text-base leading-relaxed">
              Autonomous specialized entities operating collaboratively to provide seamless capital program execution.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {NETWORK_COMPANIES.map((company, idx) => (
              <div
                key={idx}
                id={company.name.toLowerCase().replace(/[^a-z0-9]/g, '')}
                className="bg-[#F8F9FA] border border-neutral-200 p-8 space-y-5 hover:border-neutral-400 transition-colors"
              >
                <div className="flex items-center justify-between border-b border-neutral-200 pb-4">
                  <div>
                    <h3 className="font-display text-xl font-bold uppercase text-[#12161A]">
                      {company.name}
                    </h3>
                    <span className="text-xs text-neutral-500 font-semibold">{company.role}</span>
                  </div>
                  <span className="text-xs font-mono-numbers text-[#D97706] font-bold uppercase">
                    {company.relationship}
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-neutral-700 leading-relaxed">
                  {company.description}
                </p>

                <div className="space-y-2 pt-2">
                  <div className="text-[11px] font-bold uppercase tracking-wider text-neutral-900">
                    Specialized Capabilities:
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-neutral-600">
                    {company.capabilities.map((cap, cIdx) => (
                      <div key={cIdx} className="flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#D97706] shrink-0" />
                        <span className="truncate">{cap}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
