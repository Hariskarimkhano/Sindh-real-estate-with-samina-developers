import React, { useState, useEffect, useRef } from 'react';
import { COMPANY_STATISTICS, CompanyStatistic } from '../data/statistics';
import { motion, useInView } from 'framer-motion';

export const CompanyStatistics: React.FC = () => {
  const [counts, setCounts] = useState<{ [key: string]: number }>({});
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-40px' });

  useEffect(() => {
    if (!isInView) return;

    // Smooth counter animation with eased progression
    const duration = 1400;
    const steps = 35;
    const stepTime = duration / steps;
    let step = 0;

    const timer = setInterval(() => {
      step++;
      const progress = Math.min(step / steps, 1);
      // Ease out cubic
      const easeOut = 1 - Math.pow(1 - progress, 3);

      const nextCounts: { [key: string]: number } = {};
      COMPANY_STATISTICS.forEach((stat: CompanyStatistic) => {
        nextCounts[stat.id] = Math.round(stat.value * easeOut);
      });
      setCounts(nextCounts);

      if (step >= steps) {
        clearInterval(timer);
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [isInView]);

  return (
    <section
      ref={sectionRef}
      className="bg-[#0F1317] text-white py-20 sm:py-24 border-b border-white/10 relative overflow-hidden"
    >
      {/* Subtle radial backdrop ambient light */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-[#DFB257]/[0.03] blur-3xl pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {COMPANY_STATISTICS.map((stat, idx) => {
            const currentVal = counts[stat.id] ?? (isInView ? stat.value : 0);
            return (
              <motion.div
                key={stat.id}
                initial={{ opacity: 0, y: 25 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: idx * 0.12, ease: [0.21, 0.47, 0.32, 0.98] }}
                className="group relative p-6 sm:p-8 bg-white/[0.02] hover:bg-white/[0.04] border border-white/[0.08] hover:border-[#DFB257]/50 rounded-xs transition-all duration-300 hover:shadow-2xl hover:-translate-y-1"
              >
                {/* Micro accent corner */}
                <div className="absolute top-0 left-0 w-8 h-[2px] bg-[#DFB257] opacity-60 group-hover:w-16 transition-all duration-300" />

                <div className="space-y-2">
                  <div className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white font-mono-numbers flex items-baseline">
                    {stat.prefix && <span className="text-[#DFB257] mr-1">{stat.prefix}</span>}
                    <span>{currentVal.toLocaleString()}</span>
                    <span className="text-[#DFB257] ml-0.5">{stat.suffix}</span>
                  </div>

                  <div className="text-xs sm:text-sm font-bold uppercase tracking-wider text-neutral-200 group-hover:text-white transition-colors">
                    {stat.label}
                  </div>

                  <div className="text-xs text-neutral-400 font-light leading-relaxed">
                    {stat.sublabel}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
