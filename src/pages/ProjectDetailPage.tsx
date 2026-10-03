import React, { useState } from 'react';
import { useNavigation } from '../context/NavigationContext';
import { PROJECTS_DATA } from '../data/projects';
import { ArrowLeft, ArrowRight, ChevronRight, MapPin, Maximize2, X, ChevronLeft, Calendar, DollarSign, Layers, Users, Building, ShieldCheck } from 'lucide-react';

interface ProjectDetailPageProps {
  slug: string;
}

export const ProjectDetailPage: React.FC<ProjectDetailPageProps> = ({ slug }) => {
  const { navigate, openProjectInquiry } = useNavigation();
  const project = PROJECTS_DATA.find(p => p.slug === slug) || PROJECTS_DATA[0];

  // Lightbox modal state
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const relatedProjects = PROJECTS_DATA.filter(
    p => p.id !== project.id && (p.market === project.market || p.city === project.city)
  ).slice(0, 3);

  const galleryImages = project.gallery || [
    { url: project.heroImage, caption: `${project.name} architectural exterior`, tag: 'Exterior' }
  ];

  const handleNextImage = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex + 1) % galleryImages.length);
    }
  };

  const handlePrevImage = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex - 1 + galleryImages.length) % galleryImages.length);
    }
  };

  return (
    <div className="w-full">
      {/* Breadcrumb Navigation */}
      <div className="bg-[#12161A] text-neutral-400 text-xs py-3 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 flex items-center gap-2">
          <button onClick={() => navigate('/')} className="hover:text-white transition-colors">Home</button>
          <ChevronRight className="w-3.5 h-3.5" />
          <button onClick={() => navigate('/projects')} className="hover:text-white transition-colors">Projects</button>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-[#D97706] font-semibold truncate max-w-xs">{project.name}</span>
        </div>
      </div>

      {/* Project Hero */}
      <section className="relative min-h-[60vh] lg:min-h-[70vh] flex items-end bg-[#12161A] text-white overflow-hidden pb-16">
        <div className="absolute inset-0">
          <img
            src={project.heroImage}
            alt={project.name}
            className="w-full h-full object-cover object-center"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#12161A] via-[#12161A]/60 to-black/30" />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 w-full z-10 space-y-6">
          <div className="space-y-3">
            <div className="flex flex-wrap items-center gap-3 text-xs">
              <span className="bg-[#D97706] text-white px-3 py-1 font-bold uppercase tracking-wider text-[11px]">
                {project.status}
              </span>
              <span className="bg-black/60 backdrop-blur-xs px-3 py-1 text-white border border-white/10 font-mono-numbers">
                Completed {project.year}
              </span>
              <span className="text-neutral-300 font-medium">
                {project.market}
              </span>
            </div>

            <h1 className="font-display text-3xl sm:text-5xl lg:text-6xl font-extrabold uppercase tracking-tight text-white leading-tight text-balance">
              {project.name}
            </h1>

            <div className="flex items-center gap-2 text-sm text-neutral-300">
              <MapPin className="w-4 h-4 text-[#D97706]" />
              <span>{project.location}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Project Quick Dossier Bar */}
      <section className="bg-[#1E242B] text-white border-b border-white/10 py-6">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
          <div className="space-y-1">
            <div className="text-[11px] font-bold uppercase tracking-wider text-neutral-400">Client / Owner</div>
            <div className="text-sm font-semibold text-white truncate">{project.client}</div>
          </div>
          <div className="space-y-1">
            <div className="text-[11px] font-bold uppercase tracking-wider text-neutral-400">Contract Value</div>
            <div className="text-sm font-bold text-[#D97706] font-mono-numbers">{project.value}</div>
          </div>
          <div className="space-y-1">
            <div className="text-[11px] font-bold uppercase tracking-wider text-neutral-400">Total Area</div>
            <div className="text-sm font-semibold text-white font-mono-numbers">{project.area}</div>
          </div>
          <div className="space-y-1">
            <div className="text-[11px] font-bold uppercase tracking-wider text-neutral-400">Sector / Type</div>
            <div className="text-sm font-semibold text-white truncate">{project.type}</div>
          </div>
          <div className="space-y-1">
            <div className="text-[11px] font-bold uppercase tracking-wider text-neutral-400">Delivery Model</div>
            <div className="text-sm font-semibold text-white">CM at Risk (CMAR)</div>
          </div>
        </div>
      </section>

      {/* Project Overview & Key Data */}
      <section className="py-20 sm:py-28 bg-[#F8F9FA] text-[#12161A] border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Overview Narrative */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center gap-2.5 text-xs font-bold uppercase tracking-widest text-[#D97706]">
                <div className="w-2 h-4 bg-[#D97706]" />
                <span>Project Overview &amp; Execution</span>
              </div>
              <h2 className="font-display text-2xl sm:text-4xl font-extrabold uppercase tracking-tight text-[#12161A]">
                ENGINEERING EXCELLENCE AT SCALE
              </h2>
              <p className="text-neutral-700 text-sm sm:text-base leading-relaxed font-light">
                {project.description}
              </p>

              {/* Sustainability & Environmental Highlights */}
              {project.sustainabilityFeatures && project.sustainabilityFeatures.length > 0 && (
                <div className="pt-6 border-t border-neutral-200 space-y-3">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-neutral-900 flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-[#D97706]" />
                    <span>Sustainability &amp; Environmental Performance</span>
                  </h3>
                  <div className="space-y-2">
                    {project.sustainabilityFeatures.map((feat, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-neutral-700">
                        <span className="text-[#D97706] font-bold">·</span>
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Services Deployed */}
              <div className="pt-6 border-t border-neutral-200">
                <div className="text-xs font-bold uppercase tracking-wider text-neutral-900 mb-3">
                  Sindhi Real Estate Specialized Services Provided
                </div>
                <div className="flex flex-wrap gap-2">
                  {project.services.map((srv, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1.5 bg-neutral-200 text-[#12161A] text-xs font-semibold"
                    >
                      {srv}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Statistics & Team Box */}
            <div className="lg:col-span-5 space-y-6">
              {/* Project Statistics */}
              {project.statistics && project.statistics.length > 0 && (
                <div className="bg-white border border-neutral-200 p-8 shadow-xs space-y-4">
                  <h3 className="font-display text-lg font-bold uppercase tracking-tight text-[#12161A] pb-3 border-b border-neutral-100">
                    PROJECT METRICS
                  </h3>
                  <div className="divide-y divide-neutral-100">
                    {project.statistics.map((stat, idx) => (
                      <div key={idx} className="py-2.5 flex items-center justify-between text-xs">
                        <span className="text-neutral-500 font-medium">{stat.label}</span>
                        <span className="font-mono-numbers font-bold text-[#12161A] text-sm">{stat.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Project Leadership Team */}
              {project.team && project.team.length > 0 && (
                <div className="bg-white border border-neutral-200 p-8 shadow-xs space-y-4">
                  <h3 className="font-display text-lg font-bold uppercase tracking-tight text-[#12161A] pb-3 border-b border-neutral-100">
                    PROJECT LEADERSHIP
                  </h3>
                  <div className="space-y-3">
                    {project.team.map((member, idx) => (
                      <div key={idx} className="text-xs">
                        <div className="font-bold text-[#12161A]">{member.name}</div>
                        <div className="text-neutral-500">{member.role}</div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Project Image Gallery */}
      <section className="py-20 sm:py-28 bg-[#12161A] text-white border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
            <div>
              <div className="text-xs font-bold uppercase tracking-widest text-[#D97706] mb-2">
                Visual Documentation
              </div>
              <h2 className="font-display text-3xl sm:text-4xl font-extrabold uppercase tracking-tight text-white">
                PROJECT GALLERY
              </h2>
            </div>
            <p className="text-xs text-neutral-400">
              Click any photograph to view high-resolution lightbox
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {galleryImages.map((img, idx) => (
              <div
                key={idx}
                onClick={() => setLightboxIndex(idx)}
                className="group relative aspect-4/3 bg-neutral-900 border border-white/10 overflow-hidden cursor-pointer"
              >
                <img
                  src={img.url}
                  alt={img.caption}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/10 transition-colors" />

                <div className="absolute top-3 left-3 bg-black/70 px-2 py-0.5 text-[10px] text-white uppercase font-bold tracking-wider">
                  {img.tag}
                </div>

                <div className="absolute bottom-3 right-3 p-1.5 bg-black/70 rounded-full text-white opacity-0 group-hover:opacity-100 transition-opacity">
                  <Maximize2 className="w-3.5 h-3.5" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Journey Timeline */}
      {project.journey && project.journey.length > 0 && (
        <section className="py-20 sm:py-28 bg-white text-[#12161A] border-b border-neutral-200">
          <div className="max-w-7xl mx-auto px-6">
            <div className="max-w-3xl space-y-4 mb-16">
              <div className="flex items-center gap-2.5 text-xs font-bold uppercase tracking-widest text-[#D97706]">
                <div className="w-2 h-4 bg-[#D97706]" />
                <span>Execution Phases</span>
              </div>
              <h2 className="font-display text-3xl sm:text-4xl font-extrabold uppercase tracking-tight text-[#12161A]">
                PROJECT JOURNEY
              </h2>
              <p className="text-neutral-600 text-sm sm:text-base leading-relaxed">
                Step-by-step milestone delivery from initial feasibility through commissioning.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {project.journey.map((step) => (
                <div key={step.step} className="bg-[#F8F9FA] border border-neutral-200 p-6 space-y-3">
                  <div className="font-mono-numbers text-xs font-bold text-[#D97706]">
                    PHASE 0{step.step}
                  </div>
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
      )}

      {/* Project Map Location */}
      <section className="py-16 bg-[#F8F9FA] text-[#12161A] border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-white border border-neutral-200 p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xs">
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#D97706]">
                <MapPin className="w-4 h-4" />
                <span>Geographic Coordinates</span>
              </div>
              <h3 className="font-display text-xl font-bold uppercase text-[#12161A]">
                {project.location}
              </h3>
              <p className="text-xs font-mono-numbers text-neutral-500">
                Latitude: {project.coordinates.lat.toFixed(4)}° N, Longitude: {project.coordinates.lng.toFixed(4)}° W
              </p>
            </div>

            <a
              href={`https://www.google.com/maps/search/?api=1&query=${project.coordinates.lat},${project.coordinates.lng}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-[#12161A] hover:bg-neutral-800 text-white text-xs font-bold uppercase tracking-widest transition-colors flex items-center gap-2"
            >
              <span>VIEW LOCATION ON MAP</span>
              <ArrowRight className="w-3.5 h-3.5 text-white" />
            </a>
          </div>
        </div>
      </section>

      {/* Related Projects Carousel */}
      {relatedProjects.length > 0 && (
        <section className="py-20 sm:py-28 bg-[#12161A] text-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex items-center justify-between mb-10">
              <h3 className="font-display text-2xl font-bold uppercase tracking-tight text-white">
                SIMILAR PROJECTS IN {project.market.toUpperCase()}
              </h3>
              <button
                onClick={() => navigate('/projects')}
                className="text-xs font-bold uppercase text-[#D97706] hover:text-amber-400 flex items-center gap-1.5"
              >
                <span>View All Portfolio</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedProjects.map(rel => (
                <div
                  key={rel.id}
                  onClick={() => navigate(`/projects/${rel.slug}`)}
                  className="bg-neutral-900 border border-white/10 hover:border-white/30 overflow-hidden cursor-pointer group transition-all"
                >
                  <div className="relative aspect-16/9 bg-neutral-950 overflow-hidden">
                    <img
                      src={rel.heroImage}
                      alt={rel.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                    <div className="absolute bottom-3 left-3 text-xs text-white font-mono-numbers">
                      {rel.city} · {rel.year}
                    </div>
                  </div>
                  <div className="p-5 space-y-2">
                    <h4 className="font-bold text-sm text-white group-hover:text-[#D97706] transition-colors truncate">
                      {rel.name}
                    </h4>
                    <p className="text-xs text-neutral-400 line-clamp-2">
                      {rel.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Lightbox Modal */}
      {lightboxIndex !== null && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex h-dvh w-screen max-w-none flex-col justify-between overflow-hidden bg-black/95 p-4 sm:p-8"
        >
          <div className="flex items-center justify-between text-white text-xs z-10">
            <span className="font-mono-numbers">
              {lightboxIndex + 1} / {galleryImages.length} · {galleryImages[lightboxIndex].tag}
            </span>
            <button
              onClick={() => setLightboxIndex(null)}
              className="p-2 text-neutral-400 hover:text-white"
              aria-label="Close image viewer"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <div className="relative flex min-h-0 w-full min-w-0 flex-1 items-center justify-center">
            <button
              onClick={handlePrevImage}
              aria-label="Previous image"
              className="absolute left-2 sm:left-6 p-3 bg-black/60 hover:bg-black/90 text-white rounded-full transition-colors"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <img
              src={galleryImages[lightboxIndex].url}
              alt={galleryImages[lightboxIndex].caption}
              className="h-full w-full max-h-none max-w-none object-contain"
              referrerPolicy="no-referrer"
            />

            <button
              onClick={handleNextImage}
              aria-label="Next image"
              className="absolute right-2 sm:right-6 p-3 bg-black/60 hover:bg-black/90 text-white rounded-full transition-colors"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          <div className="text-center text-xs text-neutral-300 py-2">
            {galleryImages[lightboxIndex].caption}
          </div>
        </div>
      )}
    </div>
  );
};
