import React from 'react';
import { useNavigation } from '../context/NavigationContext';
import { MARKETS_DATA } from '../data/markets';
import { ArrowRight, Building2, CheckCircle2 } from 'lucide-react';

export const MarketsPage: React.FC = () => {
  const { navigate, openProjectInquiry } = useNavigation();

  return (
    <div className="w-full">
      {/* Markets Hero */}
      <section className="relative py-24 sm:py-32 bg-[#12161A] text-white border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="max-w-3xl space-y-4">
            <div className="flex items-center gap-2.5 text-xs font-bold uppercase tracking-widest text-[#D97706]">
              <div className="w-2 h-4 bg-[#D97706]" />
              <span>Industry Specialization</span>
            </div>
            <h1 className="font-display text-4xl sm:text-6xl font-extrabold uppercase tracking-tight text-white leading-tight">
              OUR MARKETS
            </h1>
            <p className="text-lg sm:text-xl font-light text-neutral-300 leading-relaxed">
              Every industry demands distinct technical tolerances, regulatory clearances, and operational workflows. We assemble dedicated sector practices to ensure project certainty.
            </p>
          </div>
        </div>
        <div className="absolute inset-0 opacity-15 pointer-events-none bg-[radial-gradient(#D97706_1px,transparent_1px)] [background-size:24px_24px]" />
      </section>

      {/* Markets Catalog */}
      <section className="py-20 sm:py-28 bg-[#F8F9FA] text-[#12161A]">
        <div className="max-w-7xl mx-auto px-6 space-y-12">
          {MARKETS_DATA.map((market) => (
            <div
              key={market.id}
              className="bg-white border border-neutral-200 p-8 sm:p-12 hover:border-neutral-400 transition-all shadow-xs grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
            >
              <div className="lg:col-span-5 relative aspect-16/10 overflow-hidden bg-neutral-900 border border-neutral-200">
                <img
                  src={market.heroImage}
                  alt={market.title}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute bottom-4 left-4 bg-black/70 px-3 py-1 font-mono-numbers text-xs font-bold text-white">
                  {market.projectCount}+ Completed Projects
                </div>
              </div>

              <div className="lg:col-span-7 space-y-5">
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#D97706]">
                    <Building2 className="w-3.5 h-3.5" />
                    <span>Sector Practice</span>
                  </div>
                  <h2 className="font-display text-2xl sm:text-3xl font-extrabold uppercase tracking-tight text-[#12161A]">
                    {market.title}
                  </h2>
                  <p className="text-sm sm:text-base text-neutral-600 font-light leading-relaxed">
                    {market.overview}
                  </p>
                </div>

                {/* Key Drivers */}
                <div className="space-y-2 pt-2 border-t border-neutral-100">
                  <div className="text-xs font-bold uppercase tracking-wider text-neutral-900">
                    Industry Drivers &amp; Challenges
                  </div>
                  <div className="space-y-1.5 text-xs text-neutral-700">
                    {market.keyDrivers.map((driver, dIdx) => (
                      <div key={dIdx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#D97706] shrink-0 mt-0.5" />
                        <span>{driver}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 flex items-center gap-4">
                  <button
                    onClick={() => navigate(`/markets/${market.slug}`)}
                    className="px-6 py-3 bg-[#12161A] hover:bg-neutral-800 text-white text-xs font-bold uppercase tracking-widest transition-colors flex items-center gap-2 group"
                  >
                    <span>SECTOR CAPABILITIES</span>
                    <ArrowRight className="w-3.5 h-3.5 text-white group-hover:translate-x-1 transition-transform" />
                  </button>
                  <button
                    onClick={() => navigate(`/projects?market=${encodeURIComponent(market.title.split('&')[0].trim())}`)}
                    className="px-5 py-3 border border-neutral-300 hover:border-black text-xs font-bold uppercase tracking-wider transition-colors"
                  >
                    View Projects
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
