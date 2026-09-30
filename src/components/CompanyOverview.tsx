import React from 'react';
import { useNavigation } from '../context/NavigationContext';
import { Button } from './ui/Button';
import { ScrollReveal } from './ui/ScrollReveal';
import { CheckCircle2, Compass, Layers, Cpu, ShieldCheck } from 'lucide-react';

export const CompanyOverview: React.FC = () => {
  const { navigate } = useNavigation();

  return (
    <section className="py-24 sm:py-36 bg-[#F8F9FA] text-[#12161A] border-b border-neutral-200 overflow-hidden relative">
      {/* Subtle ambient luxury grid texture */}
      <div className="absolute inset-0 bg-[radial-gradient(#CBD5E1_1px,transparent_1px)] [background-size:32px_32px] opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Monumental Editorial Typography */}
          <div className="lg:col-span-5 space-y-6">
            <ScrollReveal animation="fade-up">
              <div className="inline-flex items-center gap-2.5 text-xs font-bold uppercase tracking-widest text-[#B88728] mb-3">
                <div className="w-2 h-4 bg-[#DFB257]" />
                <span>Who We Are &amp; What Drives Us</span>
              </div>

              <h2 className="font-display text-3xl sm:text-5xl font-extrabold uppercase tracking-tight text-[#12161A] leading-[1.08] text-balance">
                BUILDING WHAT MATTERS
              </h2>
            </ScrollReveal>

            <ScrollReveal animation="fade-up" delay={0.15}>
              <p className="text-base sm:text-lg font-light text-neutral-600 leading-relaxed">
                We are a premier international construction services and real estate development company dedicated to delivering complex landmark programs that strengthen economies, elevate human potential, and stand the test of time.
              </p>
            </ScrollReveal>

            <ScrollReveal animation="fade-up" delay={0.3}>
              <div className="pt-2">
                <Button
                  variant="dark"
                  size="md"
                  showArrow
                  onClick={() => navigate('/who-we-are')}
                >
                  GET TO KNOW US
                </Button>
              </div>
            </ScrollReveal>
          </div>

          {/* Right Column: Narrative & Technical Depth with Interactive Hover Cards */}
          <div className="lg:col-span-7 space-y-6 text-neutral-700 text-sm sm:text-base leading-relaxed">
            <ScrollReveal animation="fade-up" delay={0.2}>
              <p>
                Recognized for taking on the largest and most challenging capital programs in the world, our integrated approach spans every phase of the project lifecycle—from front-end preconstruction, target value engineering, and strategic equipment procurement to advanced offsite modular fabrication and precision jobsite assembly.
              </p>
              <p className="mt-4">
                With specialized sector divisions in healthcare, higher education, commercial supertalls, sports entertainment, aviation, life sciences, and hyperscale AI data centers, we pair global buying power with authentic local community relationships.
              </p>
            </ScrollReveal>

            {/* Core Capability Interactive Cards */}
            <ScrollReveal animation="fade-up" delay={0.35}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6 border-t border-neutral-200">
                {[
                  {
                    icon: Compass,
                    title: 'Integrated Project Delivery',
                    desc: 'Single point of leadership across design, procurement, and site execution.'
                  },
                  {
                    icon: ShieldCheck,
                    title: 'Advanced Technical Services',
                    desc: 'Structural engineering peer reviews, Level 1-5 commissioning, and QA/QC.'
                  },
                  {
                    icon: Cpu,
                    title: 'VDC & Autonomous Capture',
                    desc: 'Multi-trade 4D BIM models verified daily by autonomous jobsite robotics.'
                  },
                  {
                    icon: Layers,
                    title: 'Supply Chain Resiliency',
                    desc: 'Direct factory procurement and equipment shielding via SourceBlue.'
                  }
                ].map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={idx}
                      className="group p-5 bg-white border border-neutral-200 hover:border-[#DFB257] hover:shadow-xl hover:-translate-y-1 transition-all duration-300 rounded-xs space-y-2 relative overflow-hidden"
                    >
                      <div className="flex items-center gap-2.5 font-bold text-sm text-[#12161A]">
                        <div className="w-8 h-8 rounded-xs bg-[#DFB257]/10 flex items-center justify-center text-[#B88728] group-hover:bg-[#DFB257] group-hover:text-white transition-colors duration-300">
                          <Icon className="w-4 h-4" />
                        </div>
                        <span className="group-hover:text-[#B88728] transition-colors">{item.title}</span>
                      </div>
                      <p className="text-xs text-neutral-600 leading-normal pl-10">
                        {item.desc}
                      </p>
                      {/* Subtle hover accent bar */}
                      <div className="absolute bottom-0 left-0 h-0.5 w-0 group-hover:w-full bg-[#DFB257] transition-all duration-300" />
                    </div>
                  );
                })}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
};
