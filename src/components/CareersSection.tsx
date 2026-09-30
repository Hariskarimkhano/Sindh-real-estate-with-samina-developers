import React from 'react';
import { useNavigation } from '../context/NavigationContext';
import { LIFE_AT_SINDH_REAL_ESTATE } from '../data/careers';
import { Button } from './ui/Button';
import { ScrollReveal, ParallaxImage } from './ui/ScrollReveal';
import { CheckCircle2 } from 'lucide-react';
import { ASSETS } from '../data/assets';

export const CareersSection: React.FC = () => {
  const { navigate } = useNavigation();

  return (
    <section className="py-24 sm:py-36 bg-[#0D1013] text-white border-b border-white/10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Careers Narrative */}
          <div className="lg:col-span-6 space-y-6">
            <ScrollReveal animation="fade-up">
              <div className="inline-flex items-center gap-2.5 text-xs font-bold uppercase tracking-widest text-[#DFB257]">
                <div className="w-2 h-4 bg-[#DFB257]" />
                <span>Join Our World-Class Team</span>
              </div>
            </ScrollReveal>

            <ScrollReveal animation="fade-up" delay={0.1}>
              <h2 className="font-display text-3xl sm:text-5xl font-extrabold uppercase tracking-tight text-white leading-tight">
                {LIFE_AT_SINDH_REAL_ESTATE.headline}
              </h2>
            </ScrollReveal>

            <ScrollReveal animation="fade-up" delay={0.2}>
              <p className="text-base sm:text-lg text-neutral-300 font-light leading-relaxed">
                {LIFE_AT_SINDH_REAL_ESTATE.subheading}
              </p>
            </ScrollReveal>

            <ScrollReveal animation="fade-up" delay={0.3}>
              <div className="space-y-4 pt-4 border-t border-white/10">
                {LIFE_AT_SINDH_REAL_ESTATE.pillars.slice(0, 3).map((pillar, idx) => (
                  <div key={idx} className="space-y-1">
                    <div className="font-bold text-sm text-white flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#DFB257] shrink-0" />
                      <span>{pillar.title}</span>
                    </div>
                    <p className="text-xs text-neutral-400 pl-6 leading-relaxed font-light">
                      {pillar.description}
                    </p>
                  </div>
                ))}
              </div>
            </ScrollReveal>

            <ScrollReveal animation="fade-up" delay={0.4}>
              <div className="pt-4 flex flex-wrap items-center gap-4">
                <Button
                  variant="primary"
                  size="md"
                  showArrow
                  onClick={() => navigate('/careers')}
                >
                  EXPLORE CAREERS
                </Button>

                <Button
                  variant="outline"
                  size="md"
                  onClick={() => navigate('/subcontractors')}
                >
                  SUBCONTRACTOR PORTAL
                </Button>
              </div>
            </ScrollReveal>
          </div>

          {/* Right Column: Visual Composition with Parallax and Floating Callout */}
          <div className="lg:col-span-6 relative">
            <ScrollReveal animation="fade-up" delay={0.2}>
              <div className="relative aspect-4/3 overflow-hidden bg-neutral-900 border border-white/10 shadow-2xl rounded-xs">
                <ParallaxImage
                  src={ASSETS.heroEngineeringVdc}
                  alt="Engineers reviewing digital models on construction jobsite"
                  speed={15}
                  zoomOnHover
                  className="w-full h-full"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent pointer-events-none" />

                <div className="absolute bottom-6 left-6 right-6 p-5 bg-[#0D1013]/90 border border-white/15 backdrop-blur-md rounded-xs shadow-xl">
                  <div className="text-xs font-bold text-[#DFB257] uppercase tracking-wider mb-1">
                    Leadership Development &amp; Mentorship
                  </div>
                  <p className="text-xs text-neutral-300 font-light leading-relaxed">
                    Over 100,000 hours of professional leadership, technical VDC, and safety training delivered to our workforce every year.
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
};
