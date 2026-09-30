import React from 'react';
import { useNavigation } from '../context/NavigationContext';
import { SERVICES_DATA } from '../data/services';
import { PROJECTS_DATA } from '../data/projects';
import { NEWS_DATA } from '../data/news';
import { ArrowLeft, ArrowRight, CheckCircle2, ChevronRight, FileText } from 'lucide-react';

interface ServiceDetailPageProps {
  slug: string;
}

export const ServiceDetailPage: React.FC<ServiceDetailPageProps> = ({ slug }) => {
  const { navigate, openProjectInquiry } = useNavigation();
  const service = SERVICES_DATA.find(s => s.slug === slug) || SERVICES_DATA[0];

  const relatedProjects = PROJECTS_DATA.filter(p => service.relatedProjectSlugs.includes(p.slug));
  const relatedInsights = NEWS_DATA.filter(n => service.relatedInsightSlugs.includes(n.slug));

  return (
    <div className="w-full">
      {/* Breadcrumb Bar */}
      <div className="bg-[#12161A] text-neutral-400 text-xs py-3 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 flex items-center gap-2">
          <button onClick={() => navigate('/')} className="hover:text-white transition-colors">Home</button>
          <ChevronRight className="w-3.5 h-3.5" />
          <button onClick={() => navigate('/services')} className="hover:text-white transition-colors">Services</button>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-[#D97706] font-semibold">{service.title}</span>
        </div>
      </div>

      {/* Service Hero */}
      <section className="relative py-20 sm:py-28 bg-[#12161A] text-white border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center gap-3 text-xs font-mono-numbers font-bold text-[#D97706] uppercase tracking-wider">
              <span>SERVICE {service.number}</span>
              <span className="text-white/30">·</span>
              <span>TECHNICAL SPECIFICATION</span>
            </div>

            <h1 className="font-display text-4xl sm:text-6xl font-extrabold uppercase tracking-tight text-white leading-tight">
              {service.title}
            </h1>

            <p className="text-lg sm:text-xl font-light text-neutral-300 leading-relaxed max-w-2xl">
              {service.shortDescription}
            </p>

            <div className="pt-2 flex flex-wrap gap-4">
              <button
                onClick={openProjectInquiry}
                className="px-7 py-3.5 bg-[#D97706] hover:bg-amber-600 text-white text-xs font-bold uppercase tracking-widest transition-colors flex items-center gap-2"
              >
                <span>DISCUSS YOUR PROJECT</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                onClick={() => navigate('/services')}
                className="px-6 py-3.5 border border-white/20 text-neutral-300 hover:text-white text-xs font-bold uppercase tracking-widest transition-colors flex items-center gap-2"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>All Services</span>
              </button>
            </div>
          </div>

          <div className="lg:col-span-5 relative aspect-4/3 overflow-hidden bg-neutral-900 border border-white/10 shadow-2xl">
            <img
              src={service.heroImage}
              alt={service.title}
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </section>

      {/* Overview & Capabilities */}
      <section className="py-20 sm:py-28 bg-[#F8F9FA] text-[#12161A] border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Overview Narrative */}
            <div className="lg:col-span-6 space-y-6">
              <h2 className="font-display text-2xl sm:text-3xl font-extrabold uppercase tracking-tight text-[#12161A]">
                TECHNICAL OVERVIEW
              </h2>
              <p className="text-sm sm:text-base text-neutral-700 leading-relaxed font-light">
                {service.overview}
              </p>

              {/* Benefits */}
              <div className="pt-6 border-t border-neutral-200 space-y-3">
                <h3 className="text-xs font-bold uppercase tracking-wider text-neutral-900">
                  Documented Client Outcomes &amp; Value
                </h3>
                <div className="space-y-2">
                  {service.benefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-neutral-700">
                      <CheckCircle2 className="w-4 h-4 text-[#D97706] shrink-0 mt-0.5" />
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Capabilities Box */}
            <div className="lg:col-span-6 bg-white border border-neutral-200 p-8 sm:p-10 shadow-xs space-y-6">
              <div className="flex items-center gap-2.5 text-xs font-bold uppercase tracking-widest text-[#D97706]">
                <div className="w-2 h-4 bg-[#D97706]" />
                <span>Scope of Capabilities</span>
              </div>
              <h3 className="font-display text-xl font-bold uppercase tracking-tight text-[#12161A]">
                WHAT WE DELIVER
              </h3>
              <div className="space-y-3">
                {service.capabilities.map((cap, idx) => (
                  <div key={idx} className="p-3 bg-neutral-50 border border-neutral-200 text-xs font-medium text-[#12161A] flex items-center justify-between">
                    <span>{cap}</span>
                    <span className="font-mono-numbers text-[10px] text-neutral-400">0{idx + 1}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Engineering Process Steps */}
      <section className="py-20 sm:py-28 bg-white text-[#12161A] border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl space-y-4 mb-14">
            <div className="flex items-center gap-2.5 text-xs font-bold uppercase tracking-widest text-[#D97706]">
              <div className="w-2 h-4 bg-[#D97706]" />
              <span>Methodology &amp; Sequence</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold uppercase tracking-tight text-[#12161A]">
              DELIVERY PROCESS
            </h2>
            <p className="text-neutral-600 text-sm sm:text-base leading-relaxed">
              A structured, repeatable protocol executed with mathematical precision across all project phases.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {service.process.map((step, idx) => (
              <div key={idx} className="bg-[#F8F9FA] border border-neutral-200 p-6 space-y-3 hover:border-neutral-400 transition-colors">
                <span className="font-mono-numbers text-sm font-extrabold text-[#D97706]">
                  {step.step}
                </span>
                <h4 className="font-display text-base font-bold uppercase text-[#12161A]">
                  {step.title}
                </h4>
                <p className="text-xs text-neutral-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Projects */}
      {relatedProjects.length > 0 && (
        <section className="py-20 sm:py-28 bg-[#12161A] text-white border-b border-white/10">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex items-center justify-between mb-10">
              <h3 className="font-display text-2xl font-bold uppercase tracking-tight text-white">
                PROJECTS UTILIZING {service.title.toUpperCase()}
              </h3>
              <button
                onClick={() => navigate('/projects')}
                className="text-xs font-bold uppercase text-[#D97706] hover:text-amber-400 flex items-center gap-1.5"
              >
                <span>All Projects</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedProjects.map(proj => (
                <div
                  key={proj.id}
                  onClick={() => navigate(`/projects/${proj.slug}`)}
                  className="bg-neutral-900 border border-white/10 hover:border-white/30 overflow-hidden cursor-pointer group transition-all"
                >
                  <div className="relative aspect-16/9 bg-neutral-950 overflow-hidden">
                    <img
                      src={proj.heroImage}
                      alt={proj.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                    <div className="absolute bottom-3 left-3 text-xs text-white font-mono-numbers">
                      {proj.city} · {proj.market}
                    </div>
                  </div>
                  <div className="p-5 space-y-2">
                    <h4 className="font-bold text-sm text-white group-hover:text-[#D97706] transition-colors truncate">
                      {proj.name}
                    </h4>
                    <p className="text-xs text-neutral-400 line-clamp-2">
                      {proj.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Related Insights */}
      {relatedInsights.length > 0 && (
        <section className="py-16 bg-[#F8F9FA] text-[#12161A] border-b border-neutral-200">
          <div className="max-w-7xl mx-auto px-6">
            <h3 className="font-display text-xl font-bold uppercase tracking-tight text-[#12161A] mb-6 flex items-center gap-2">
              <FileText className="w-4 h-4 text-[#D97706]" />
              <span>Related Intelligence &amp; Publications</span>
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {relatedInsights.map(art => (
                <div
                  key={art.id}
                  onClick={() => navigate(`/news/${art.slug}`)}
                  className="bg-white border border-neutral-200 p-6 hover:border-neutral-400 cursor-pointer transition-colors"
                >
                  <div className="text-xs text-[#D97706] font-bold uppercase mb-1">{art.category} · {art.date}</div>
                  <h4 className="font-display font-bold text-base text-[#12161A] hover:text-[#D97706] transition-colors">
                    {art.title}
                  </h4>
                  <p className="text-xs text-neutral-600 mt-2 line-clamp-2">
                    {art.excerpt}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Bottom CTA Banner */}
      <section className="py-20 bg-[#12161A] text-white text-center">
        <div className="max-w-3xl mx-auto px-6 space-y-6">
          <h2 className="font-display text-3xl font-extrabold uppercase tracking-tight text-white">
            READY TO ENGAGE SINDH REAL ESTATE {service.title.toUpperCase()}?
          </h2>
          <p className="text-sm text-neutral-400">
            Connect with our discipline leaders to establish early cost modeling, constructability analysis, and schedule assurance.
          </p>
          <button
            onClick={openProjectInquiry}
            className="px-8 py-3.5 bg-[#D97706] hover:bg-amber-600 text-white text-xs font-bold uppercase tracking-widest transition-colors inline-flex items-center gap-2"
          >
            <span>START A CONVERSATION</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>
    </div>
  );
};
