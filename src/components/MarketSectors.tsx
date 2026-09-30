import React from 'react';
import { useNavigation } from '../context/NavigationContext';
import { MARKETS_DATA } from '../data/markets';
import { Button } from './ui/Button';
import { ScrollReveal, ParallaxImage } from './ui/ScrollReveal';
import { ArrowRight, ArrowUpRight } from 'lucide-react';

export const MarketSectors: React.FC = () => {
  const { navigate } = useNavigation();

  return (
    <section className="py-24 sm:py-36 bg-[#F8F9FA] text-[#12161A] border-b border-neutral-200 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="space-y-4 max-w-2xl">
            <ScrollReveal animation="fade-up">
              <div className="inline-flex items-center gap-2.5 text-xs font-bold uppercase tracking-widest text-[#B88728]">
                <div className="w-2 h-4 bg-[#DFB257]" />
                <span>Sectors &amp; Specialization</span>
              </div>
            </ScrollReveal>

            <ScrollReveal animation="fade-up" delay={0.1}>
              <h2 className="font-display text-3xl sm:text-5xl font-extrabold uppercase tracking-tight text-[#12161A]">
                OUR MARKETS
              </h2>
            </ScrollReveal>

            <ScrollReveal animation="fade-up" delay={0.2}>
              <p className="text-base sm:text-lg text-neutral-600 font-light leading-relaxed">
                Decades of specialized engineering knowledge tailored to the unique operational demands and regulatory clearances of each industry.
              </p>
            </ScrollReveal>
          </div>

          <ScrollReveal animation="fade-up" delay={0.3}>
            <Button
              variant="outline"
              size="md"
              showArrow
              onClick={() => navigate('/markets')}
              className="self-start md:self-auto"
            >
              VIEW ALL MARKET SECTORS
            </Button>
          </ScrollReveal>
        </div>

        {/* Markets Asymmetric Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          {MARKETS_DATA.map((market, idx) => (
            <ScrollReveal
              key={market.id}
              animation="fade-up"
              delay={0.06 * idx}
              className="h-full"
            >
              <div
                onClick={() => navigate(`/markets/${market.slug}`)}
                className="group h-full relative bg-white border border-neutral-200/90 hover:border-[#DFB257] p-6 sm:p-7 flex flex-col justify-between overflow-hidden cursor-pointer transition-all duration-400 ease-out hover:shadow-2xl hover:-translate-y-1.5 rounded-xs"
              >
                {/* Image Container with Parallax Zoom */}
                <div className="relative aspect-16/9 overflow-hidden bg-neutral-950 mb-6 rounded-xs">
                  <ParallaxImage
                    src={market.heroImage}
                    alt={market.title}
                    speed={12}
                    zoomOnHover
                    className="w-full h-full"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />

                  <div className="absolute bottom-3 left-3 text-xs font-mono-numbers font-semibold text-white bg-black/60 px-2.5 py-1 backdrop-blur-md rounded-xs">
                    {market.projectCount}+ Projects
                  </div>

                  <div className="absolute bottom-3 right-3 w-7 h-7 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white group-hover:bg-[#DFB257] group-hover:text-[#12161A] transition-all duration-300 group-hover:rotate-45">
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </div>
                </div>

                <div className="space-y-3 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-display text-lg font-bold uppercase tracking-tight text-[#12161A] group-hover:text-[#B88728] transition-colors">
                      {market.title}
                    </h3>
                    <p className="text-xs text-neutral-600 mt-2 line-clamp-3 leading-relaxed font-light">
                      {market.shortDescription}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-neutral-100 flex items-center justify-between text-xs font-bold uppercase tracking-wider text-neutral-900 group-hover:text-[#B88728] transition-colors">
                    <span>EXPLORE MARKET</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1.5 transition-transform duration-300" />
                  </div>
                </div>

                {/* Bottom accent hover line */}
                <div className="h-[2px] w-0 group-hover:w-full bg-[#DFB257] transition-all duration-300 absolute bottom-0 left-0" />
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};
