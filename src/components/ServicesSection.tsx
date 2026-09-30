import React from 'react';
import { useNavigation } from '../context/NavigationContext';
import { SERVICES_DATA } from '../data/services';
import { Button } from './ui/Button';
import { ScrollReveal, ParallaxImage } from './ui/ScrollReveal';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { Service } from '../types';

export const ServicesSection: React.FC = () => {
  const { navigate } = useNavigation();

  return (
    <section className="py-24 sm:py-36 bg-[#F8F9FA] text-[#12161A] border-b border-neutral-200 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header with Stagger Reveal */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="space-y-4 max-w-2xl">
            <ScrollReveal animation="fade-up">
              <div className="inline-flex items-center gap-2.5 text-xs font-bold uppercase tracking-widest text-[#B88728]">
                <div className="w-2 h-4 bg-[#DFB257]" />
                <span>Full-Lifecycle Delivery</span>
              </div>
            </ScrollReveal>

            <ScrollReveal animation="fade-up" delay={0.1}>
              <h2 className="font-display text-3xl sm:text-5xl font-extrabold uppercase tracking-tight text-[#12161A]">
                OUR SERVICES
              </h2>
            </ScrollReveal>

            <ScrollReveal animation="fade-up" delay={0.2}>
              <p className="text-base sm:text-lg text-neutral-600 font-light leading-relaxed">
                Integrated services that seamlessly connect planning, engineering, procurement, offsite manufacturing, and high-precision field execution.
              </p>
            </ScrollReveal>
          </div>

          <ScrollReveal animation="fade-up" delay={0.3}>
            <Button
              variant="outline"
              size="md"
              showArrow
              onClick={() => navigate('/services')}
              className="self-start md:self-auto"
            >
              VIEW ALL CAPABILITIES
            </Button>
          </ScrollReveal>
        </div>

        {/* Services Grid (01 to 08) with Stagger and Hover Interactivity */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7">
          {SERVICES_DATA.map((service: Service, idx: number) => (
            <ScrollReveal
              key={service.id}
              animation="fade-up"
              delay={0.06 * idx}
              className="h-full"
            >
              <div
                onClick={() => navigate(`/services/${service.slug}`)}
                className="group h-full relative bg-white border border-neutral-200/90 hover:border-[#DFB257] flex flex-col justify-between overflow-hidden cursor-pointer transition-all duration-400 ease-out hover:shadow-2xl hover:-translate-y-1.5 rounded-xs"
              >
                {/* Image Container with Parallax Zoom */}
                <div className="relative aspect-4/3 overflow-hidden bg-neutral-950">
                  <ParallaxImage
                    src={service.heroImage}
                    alt={service.title}
                    speed={15}
                    zoomOnHover
                    className="w-full h-full"
                  />

                  {/* Gradient Scrim */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent pointer-events-none" />

                  {/* Number Badge */}
                  <div className="absolute top-4 left-4 font-mono-numbers text-[11px] font-bold tracking-widest px-2.5 py-1 bg-[#12161A]/80 text-[#DFB257] backdrop-blur-md border border-white/10 rounded-xs">
                    {service.number}
                  </div>

                  {/* Floating Action Circle */}
                  <div className="absolute bottom-3.5 right-3.5 w-8 h-8 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white group-hover:bg-[#DFB257] group-hover:text-[#12161A] transition-all duration-300 group-hover:rotate-45">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>

                {/* Text Body */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <h3 className="font-display text-lg font-bold uppercase tracking-tight text-[#12161A] group-hover:text-[#B88728] transition-colors leading-snug">
                      {service.title}
                    </h3>
                    <p className="text-xs text-neutral-600 line-clamp-3 leading-relaxed font-light">
                      {service.shortDescription}
                    </p>
                  </div>

                  {/* Card Action Link */}
                  <div className="pt-4 border-t border-neutral-100 flex items-center justify-between text-xs font-bold uppercase tracking-wider text-neutral-900 group-hover:text-[#B88728] transition-colors">
                    <span>LEARN MORE</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1.5 transition-transform duration-300" />
                  </div>
                </div>

                {/* Accent Bottom Line with Animated Expansion */}
                <div className="h-[2.5px] w-0 group-hover:w-full bg-gradient-to-r from-[#DFB257] to-[#C99E44] transition-all duration-400 ease-out" />
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};
