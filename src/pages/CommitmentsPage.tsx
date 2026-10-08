import React, { useState, useEffect } from 'react';
import { useNavigation } from '../context/NavigationContext';
import { COMMITMENTS_DATA } from '../data/commitments';
import { SUSTAINABILITY_STATISTICS } from '../data/statistics';
import { ArrowRight, CheckCircle2, Shield, Heart, Leaf, Cpu, HardHat, FileCheck } from 'lucide-react';
import { ASSETS } from '../data/assets';

interface CommitmentsPageProps {
  initialTab?: string;
}

export const CommitmentsPage: React.FC<CommitmentsPageProps> = ({ initialTab }) => {
  const { navigate, openProjectInquiry } = useNavigation();
  const [activeTabSlug, setActiveTabSlug] = useState<string>(initialTab || 'esg');

  useEffect(() => {
    if (initialTab) {
      setActiveTabSlug(initialTab);
    }
  }, [initialTab]);

  const currentTab = COMMITMENTS_DATA.find(c => c.slug === activeTabSlug) || COMMITMENTS_DATA[0];

  const getTabIcon = (slug: string) => {
    switch (slug) {
      case 'esg': return <FileCheck className="w-4 h-4" />;
      case 'community': return <Heart className="w-4 h-4" />;
      case 'dei': return <Shield className="w-4 h-4" />;
      case 'environment': return <Leaf className="w-4 h-4" />;
      case 'innovation': return <Cpu className="w-4 h-4" />;
      case 'safety': return <HardHat className="w-4 h-4" />;
      default: return <FileCheck className="w-4 h-4" />;
    }
  };

  return (
    <div className="w-full">
      {/* Hero */}
      <section className="relative py-24 sm:py-32 bg-[#12161A] text-white border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="max-w-3xl space-y-4">
            <div className="flex items-center gap-2.5 text-xs font-bold uppercase tracking-widest text-[#D97706]">
              <div className="w-2 h-4 bg-[#D97706]" />
              <span>Corporate Responsibility &amp; ESG</span>
            </div>
            <h1 className="font-display text-4xl sm:text-6xl font-extrabold uppercase tracking-tight text-white leading-tight">
              BUILDING TODAY TO TRANSFORM TOMORROW
            </h1>
            <p className="text-lg sm:text-xl font-light text-neutral-300 leading-relaxed">
              Our commitments are fundamental to how we operate, innovate, and protect people, communities, and the natural environment.
            </p>
          </div>
        </div>
        <div className="absolute inset-0 opacity-15 pointer-events-none bg-[radial-gradient(#D97706_1px,transparent_1px)] [background-size:24px_24px]" />
      </section>

      {/* Sustainability Metrics Strip */}
      <section className="bg-[#1E242B] text-white border-b border-white/10 py-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 divide-y sm:divide-y-0 sm:divide-x divide-white/10">
            {SUSTAINABILITY_STATISTICS.map((stat, idx) => (
              <div key={idx} className="pt-4 sm:pt-0 sm:px-6 first:pl-0 last:pr-0 space-y-1">
                <div className="font-display text-3xl sm:text-4xl font-extrabold text-[#D97706] font-mono-numbers">
                  {stat.value}
                </div>
                <div className="text-xs font-bold uppercase text-white">
                  {stat.label}
                </div>
                <p className="text-[11px] text-neutral-400 leading-tight">
                  {stat.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Tabs Section */}
      <section className="py-20 sm:py-28 bg-[#F8F9FA] text-[#12161A] border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-6 space-y-8">
          {/* Visual Tab Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2">
            {COMMITMENTS_DATA.map((tab) => {
              const isActive = tab.slug === activeTabSlug;
              return (
                <button
                  key={tab.id}
                  onClick={() => {
                    setActiveTabSlug(tab.slug);
                    navigate(`/commitments/${tab.slug}`, { scroll: false });
                  }}
                  className={`p-4 text-left border transition-all flex flex-col justify-between ${
                    isActive
                      ? 'bg-[#12161A] text-white border-[#12161A] shadow-md'
                      : 'bg-white text-neutral-700 border-neutral-200 hover:border-neutral-400 hover:text-black'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-mono-numbers text-xs font-bold text-[#D97706]">
                      {tab.number}
                    </span>
                    <span className={`${isActive ? 'text-[#D97706]' : 'text-neutral-400'}`}>
                      {getTabIcon(tab.slug)}
                    </span>
                  </div>
                  <span className="font-display text-xs sm:text-sm font-bold uppercase tracking-tight leading-snug">
                    {tab.title}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Active Tab Panel */}
          <div className="bg-white border border-neutral-200 p-8 sm:p-12 shadow-sm">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
              <div className="lg:col-span-7 space-y-6">
                <div>
                  <span className="text-xs uppercase tracking-wider font-semibold text-[#D97706]">
                    {currentTab.subtitle}
                  </span>
                  <h2 className="font-display text-2xl sm:text-3xl font-extrabold uppercase tracking-tight text-[#12161A] mt-1">
                    {currentTab.headline}
                  </h2>
                </div>

                <p className="text-neutral-700 text-sm sm:text-base leading-relaxed font-light">
                  {currentTab.description}
                </p>

                {/* Pillars */}
                <div className="space-y-4 pt-4 border-t border-neutral-100">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-neutral-900">
                    Strategic Execution Pillars
                  </h3>
                  <div className="space-y-3">
                    {currentTab.keyPillars.map((pillar, idx) => (
                      <div key={idx} className="p-4 bg-neutral-50 border border-neutral-200 space-y-1">
                        <div className="font-bold text-sm text-[#12161A] flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 text-[#D97706] shrink-0" />
                          <span>{pillar.title}</span>
                        </div>
                        <p className="text-xs text-neutral-600 pl-6 leading-relaxed">
                          {pillar.desc}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Targets & Disclosures */}
              <div className="lg:col-span-5 bg-[#F8F9FA] border border-neutral-200 p-8 flex flex-col justify-between space-y-6">
                <div>
                  <h3 className="font-display text-base font-bold uppercase tracking-tight text-[#12161A] mb-4">
                    Accountability Benchmarks
                  </h3>
                  <div className="grid grid-cols-2 gap-4">
                    {currentTab.targets.map((tgt, idx) => (
                      <div key={idx} className="bg-white border border-neutral-200 p-4 space-y-1">
                        <div className="font-display font-extrabold text-2xl text-[#12161A] font-mono-numbers">
                          {tgt.metric}
                        </div>
                        <div className="text-xs font-bold text-neutral-800">
                          {tgt.label}
                        </div>
                        <div className="text-[11px] text-[#D97706] uppercase tracking-wider font-semibold">
                          {tgt.timeframe}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-neutral-200 space-y-2">
                  <div className="text-xs font-bold uppercase tracking-wider text-neutral-500">
                    Recent Verification Disclosures
                  </div>
                  <ul className="space-y-2 text-xs text-neutral-700">
                    {currentTab.highlights.map((hl, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-[#D97706] font-bold">·</span>
                        <span>{hl}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <button
                  onClick={openProjectInquiry}
                  className="w-full py-3 bg-[#12161A] hover:bg-neutral-800 text-white text-xs font-bold uppercase tracking-wider transition-colors"
                >
                  Partner With Us on ESG
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
