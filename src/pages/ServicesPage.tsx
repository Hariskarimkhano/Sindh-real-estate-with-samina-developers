import React from 'react';
import { useNavigation } from '../context/NavigationContext';
import { SERVICES_DATA } from '../data/services';
import { ArrowRight, ArrowUpRight, CheckCircle2 } from 'lucide-react';

export const ServicesPage: React.FC = () => {
  const { navigate, openProjectInquiry } = useNavigation();

  return (
    <div className="w-full">
      {/* Services Hero */}
      <section className="relative py-24 sm:py-32 bg-[#12161A] text-white border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="max-w-3xl space-y-4">
            <div className="flex items-center gap-2.5 text-xs font-bold uppercase tracking-widest text-[#D97706]">
              <div className="w-2 h-4 bg-[#D97706]" />
              <span>Comprehensive Delivery Capabilities</span>
            </div>
            <h1 className="font-display text-4xl sm:text-6xl font-extrabold uppercase tracking-tight text-white leading-tight">
              OUR SERVICES
            </h1>
            <p className="text-lg sm:text-xl font-light text-neutral-300 leading-relaxed">
              Integrated services connecting planning, engineering, procurement, offsite manufacturing, and high-precision field execution.
            </p>
          </div>
        </div>
        <div className="absolute inset-0 opacity-15 pointer-events-none bg-[radial-gradient(#D97706_1px,transparent_1px)] [background-size:24px_24px]" />
      </section>

      {/* Services Detailed List */}
      <section className="py-20 sm:py-28 bg-[#F8F9FA] text-[#12161A]">
        <div className="max-w-7xl mx-auto px-6 space-y-12">
          {SERVICES_DATA.map((service, idx) => (
            <div
              key={service.id}
              id={service.slug}
              className="bg-white border border-neutral-200 p-8 sm:p-12 hover:border-neutral-400 transition-all shadow-xs grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
            >
              {/* Image Preview */}
              <div className="lg:col-span-5 relative aspect-4/3 overflow-hidden bg-neutral-900 border border-neutral-200">
                <img
                  src={service.heroImage}
                  alt={service.title}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 left-4 font-mono-numbers text-xs font-bold px-3 py-1 bg-black/70 text-white">
                  {service.number}
                </div>
              </div>

              {/* Service Info */}
              <div className="lg:col-span-7 space-y-5">
                <div className="space-y-2">
                  <span className="text-xs uppercase font-mono-numbers tracking-wider font-bold text-[#D97706]">
                    Service {service.number}
                  </span>
                  <h2 className="font-display text-2xl sm:text-3xl font-extrabold uppercase tracking-tight text-[#12161A]">
                    {service.title}
                  </h2>
                  <p className="text-sm sm:text-base text-neutral-600 font-light leading-relaxed">
                    {service.overview}
                  </p>
                </div>

                {/* Key Capabilities */}
                <div className="space-y-2 pt-2 border-t border-neutral-100">
                  <div className="text-xs font-bold uppercase tracking-wider text-neutral-900">
                    Core Capabilities
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-neutral-700">
                    {service.capabilities.slice(0, 4).map((cap, cIdx) => (
                      <div key={cIdx} className="flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#D97706] shrink-0" />
                        <span className="truncate">{cap}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 flex items-center gap-4">
                  <button
                    onClick={() => navigate(`/services/${service.slug}`)}
                    className="px-6 py-3 bg-[#12161A] hover:bg-neutral-800 text-white text-xs font-bold uppercase tracking-widest transition-colors flex items-center gap-2 group"
                  >
                    <span>VIEW FULL SERVICE PROFILE</span>
                    <ArrowRight className="w-3.5 h-3.5 text-white group-hover:translate-x-1 transition-transform" />
                  </button>
                  <button
                    onClick={openProjectInquiry}
                    className="px-5 py-3 border border-neutral-300 hover:border-black text-xs font-bold uppercase tracking-wider transition-colors"
                  >
                    Discuss Scope
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
