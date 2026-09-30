import React, { useState } from 'react';
import { useNavigation } from '../context/NavigationContext';
import { COMMITMENTS_DATA } from '../data/commitments';
import { Button } from './ui/Button';
import { ScrollReveal } from './ui/ScrollReveal';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export const CommitmentsSection: React.FC = () => {
  const { navigate } = useNavigation();
  const [activeTabId, setActiveTabId] = useState<string>('esg');

  const currentTab = COMMITMENTS_DATA.find(c => c.id === activeTabId) || COMMITMENTS_DATA[0];

  return (
    <section className="py-24 sm:py-36 bg-[#F8F9FA] text-[#12161A] border-b border-neutral-200 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div className="space-y-4 max-w-2xl">
            <ScrollReveal animation="fade-up">
              <div className="inline-flex items-center gap-2.5 text-xs font-bold uppercase tracking-widest text-[#B88728]">
                <div className="w-2 h-4 bg-[#DFB257]" />
                <span>ESG, Innovation &amp; Culture</span>
              </div>
            </ScrollReveal>

            <ScrollReveal animation="fade-up" delay={0.1}>
              <h2 className="font-display text-3xl sm:text-5xl font-extrabold uppercase tracking-tight text-[#12161A]">
                BUILDING TODAY TO TRANSFORM TOMORROW
              </h2>
            </ScrollReveal>

            <ScrollReveal animation="fade-up" delay={0.2}>
              <p className="text-base sm:text-lg text-neutral-600 font-light leading-relaxed">
                Our commitments define how we lead, build, innovate, and protect people, communities, and planet.
              </p>
            </ScrollReveal>
          </div>

          <ScrollReveal animation="fade-up" delay={0.3}>
            <Button
              variant="outline"
              size="md"
              showArrow
              onClick={() => navigate('/commitments')}
              className="self-start md:self-auto"
            >
              READ COMPLETE ESG REPORT
            </Button>
          </ScrollReveal>
        </div>

        {/* 6 Visual Interactive Tabs */}
        <ScrollReveal animation="fade-up" delay={0.25}>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 mb-8">
            {COMMITMENTS_DATA.map((tab) => {
              const isActive = tab.id === activeTabId;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTabId(tab.id)}
                  className={`p-4 text-left border transition-all duration-300 flex flex-col justify-between rounded-xs cursor-pointer ${
                    isActive
                      ? 'bg-[#12161A] text-white border-[#12161A] shadow-lg -translate-y-0.5'
                      : 'bg-white text-neutral-700 border-neutral-200 hover:border-[#DFB257] hover:text-black'
                  }`}
                >
                  <span className="font-mono-numbers text-xs font-bold text-[#B88728] block mb-2">
                    {tab.number}
                  </span>
                  <span className="font-display text-xs sm:text-sm font-bold uppercase tracking-tight leading-snug">
                    {tab.title}
                  </span>
                </button>
              );
            })}
          </div>
        </ScrollReveal>

        {/* Active Tab Detailed Content Panel with Smooth Animation */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentTab.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.45, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="bg-white border border-neutral-200 p-8 sm:p-12 shadow-sm rounded-xs"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
              {/* Narrative & Strategy */}
              <div className="lg:col-span-7 space-y-6">
                <div className="space-y-2">
                  <span className="text-xs uppercase tracking-wider font-semibold text-[#B88728]">
                    {currentTab.subtitle}
                  </span>
                  <h3 className="font-display text-2xl sm:text-3xl font-extrabold uppercase tracking-tight text-[#12161A]">
                    {currentTab.headline}
                  </h3>
                </div>

                <p className="text-neutral-700 text-sm sm:text-base leading-relaxed font-light">
                  {currentTab.description}
                </p>

                {/* Strategic Pillars */}
                <div className="space-y-4 pt-4 border-t border-neutral-100">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-900">
                    Strategic Focus Areas
                  </h4>
                  <div className="space-y-3">
                    {currentTab.keyPillars.map((pillar, idx) => (
                      <div key={idx} className="space-y-1">
                        <div className="font-bold text-sm text-[#12161A] flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 text-[#DFB257] shrink-0" />
                          <span>{pillar.title}</span>
                        </div>
                        <p className="text-xs text-neutral-600 pl-6 leading-relaxed font-light">
                          {pillar.desc}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4">
                  <Button
                    variant="dark"
                    size="md"
                    showArrow
                    onClick={() => navigate(`/commitments/${currentTab.slug}`)}
                  >
                    EXPLORE {currentTab.title}
                  </Button>
                </div>
              </div>

              {/* Quantitative Targets & Disclosures Card */}
              <div className="lg:col-span-5 bg-[#F8F9FA] border border-neutral-200 p-6 sm:p-8 flex flex-col justify-between space-y-6 rounded-xs">
                <div>
                  <h4 className="font-display text-base font-bold uppercase tracking-tight text-[#12161A] mb-4">
                    Accountability Targets
                  </h4>
                  <div className="grid grid-cols-2 gap-4">
                    {currentTab.targets.map((tgt, idx) => (
                      <div key={idx} className="bg-white border border-neutral-200 p-4 space-y-1 rounded-xs">
                        <div className="font-display font-extrabold text-2xl text-[#12161A] font-mono-numbers">
                          {tgt.metric}
                        </div>
                        <div className="text-xs font-bold text-neutral-800">
                          {tgt.label}
                        </div>
                        <div className="text-[11px] text-[#B88728] uppercase tracking-wider font-semibold">
                          {tgt.timeframe}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Key Accomplishments */}
                <div className="pt-4 border-t border-neutral-200 space-y-2">
                  <div className="text-xs font-bold uppercase tracking-wider text-neutral-500">
                    Recent Disclosures &amp; Accreditations
                  </div>
                  <ul className="space-y-2 text-xs text-neutral-700">
                    {currentTab.highlights.map((hl, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-[#DFB257] font-bold">·</span>
                        <span>{hl}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};
