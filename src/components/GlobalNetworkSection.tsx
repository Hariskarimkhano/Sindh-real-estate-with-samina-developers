import React from 'react';
import { useNavigation } from '../context/NavigationContext';
import { NETWORK_COMPANIES, INTERNATIONAL_PROJECTS } from '../data/network';
import { Button } from './ui/Button';
import { ScrollReveal } from './ui/ScrollReveal';
import { ArrowRight, Globe, ExternalLink } from 'lucide-react';

export const GlobalNetworkSection: React.FC = () => {
  const { navigate } = useNavigation();

  return (
    <section className="py-24 sm:py-36 bg-[#12161A] text-white border-b border-white/10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="space-y-4 max-w-2xl">
            <ScrollReveal animation="fade-up">
              <div className="inline-flex items-center gap-2.5 text-xs font-bold uppercase tracking-widest text-[#DFB257]">
                <div className="w-2 h-4 bg-[#DFB257]" />
                <span>Scale, Procurement &amp; Partnerships</span>
              </div>
            </ScrollReveal>

            <ScrollReveal animation="fade-up" delay={0.1}>
              <h2 className="font-display text-3xl sm:text-5xl font-extrabold uppercase tracking-tight text-white">
                GLOBAL REACH. LOCAL EXPERTISE.
              </h2>
            </ScrollReveal>

            <ScrollReveal animation="fade-up" delay={0.2}>
              <p className="text-base sm:text-lg text-neutral-300 font-light leading-relaxed">
                An integrated lifecycle network connecting planning, engineering, manufacturing, procurement, construction, and concessions.
              </p>
            </ScrollReveal>
          </div>

          <ScrollReveal animation="fade-up" delay={0.3}>
            <Button
              variant="outline"
              size="md"
              showArrow
              onClick={() => navigate('/our-network')}
              className="self-start md:self-auto"
            >
              EXPLORE COMPLETE NETWORK
            </Button>
          </ScrollReveal>
        </div>

        {/* Network Specialized Companies Grid with Stagger */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {NETWORK_COMPANIES.slice(0, 4).map((company, idx) => (
            <ScrollReveal
              key={idx}
              animation="fade-up"
              delay={0.08 * idx}
              className="h-full"
            >
              <div className="h-full bg-white/[0.02] hover:bg-white/[0.05] border border-white/10 hover:border-[#DFB257] p-7 flex flex-col justify-between transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 rounded-xs group">
                <div className="space-y-3">
                  <span className="text-[11px] font-mono-numbers text-[#DFB257] uppercase tracking-wider font-semibold">
                    {company.relationship}
                  </span>
                  <h3 className="font-display text-lg font-bold uppercase text-white group-hover:text-[#DFB257] transition-colors">
                    {company.name}
                  </h3>
                  <div className="text-xs font-semibold text-neutral-400">
                    {company.role}
                  </div>
                  <p className="text-xs text-neutral-400 leading-relaxed pt-2 font-light">
                    {company.description}
                  </p>
                </div>

                <div className="pt-6 border-t border-white/10 mt-6 space-y-2">
                  <div className="text-[11px] uppercase tracking-wider text-neutral-400 font-semibold">
                    Key Capabilities:
                  </div>
                  <ul className="text-xs text-neutral-300 space-y-1 font-light">
                    {company.capabilities.slice(0, 2).map((cap, cIdx) => (
                      <li key={cIdx} className="flex items-center gap-1.5 truncate">
                        <span className="text-[#DFB257]">·</span>
                        <span className="truncate">{cap}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* International Projects Horizontal Strip with Modern Hover Effects */}
        <ScrollReveal animation="fade-up" delay={0.2}>
          <div className="bg-[#0D1013] border border-white/10 p-8 rounded-xs shadow-2xl">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
              <div className="flex items-center gap-3">
                <Globe className="w-5 h-5 text-[#DFB257]" />
                <h3 className="font-display text-lg font-bold uppercase text-white">
                  INTERNATIONAL MARQUEE ICONOGRAPHY
                </h3>
              </div>
              <button
                onClick={() => navigate('/international')}
                className="text-xs font-semibold text-[#DFB257] hover:text-amber-300 flex items-center gap-1.5 uppercase transition-colors cursor-pointer"
              >
                <span>View Global Operations</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </button>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
              {INTERNATIONAL_PROJECTS.map((proj, idx) => (
                <div
                  key={idx}
                  onClick={() => navigate(`/projects/${proj.slug}`)}
                  className="bg-white/[0.02] border border-white/5 hover:border-[#DFB257] hover:bg-white/[0.06] p-4 cursor-pointer transition-all duration-300 group rounded-xs hover:-translate-y-1"
                >
                  <div className="text-xs font-bold text-white group-hover:text-[#DFB257] transition-colors truncate">
                    {proj.name}
                  </div>
                  <div className="text-[11px] text-neutral-400 mt-1 truncate">
                    {proj.location}
                  </div>
                  <div className="text-[11px] font-mono-numbers text-neutral-400 mt-0.5">
                    {proj.height}
                  </div>
                  <div className="text-[10px] text-[#DFB257] uppercase tracking-wider font-semibold mt-2">
                    {proj.role}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};
