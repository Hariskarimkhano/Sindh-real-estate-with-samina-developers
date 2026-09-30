import React, { useState } from 'react';
import { useNavigation } from '../context/NavigationContext';
import { PROJECTS_DATA } from '../data/projects';
import { Button } from './ui/Button';
import { ScrollReveal } from './ui/ScrollReveal';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ChevronRight, ChevronLeft, MapPin } from 'lucide-react';

export const FeaturedProjects: React.FC = () => {
  const { navigate } = useNavigation();
  const featuredList = PROJECTS_DATA.filter(p => p.featured);
  const [activeIndex, setActiveIndex] = useState(0);

  const activeProject = featuredList[activeIndex] || featuredList[0];

  const handleNext = () => {
    setActiveIndex(prev => (prev + 1) % featuredList.length);
  };

  const handlePrev = () => {
    setActiveIndex(prev => (prev - 1 + featuredList.length) % featuredList.length);
  };

  return (
    <section className="py-24 sm:py-36 bg-[#0D1013] text-white border-b border-white/10 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div className="space-y-4 max-w-2xl">
            <ScrollReveal animation="fade-up">
              <div className="inline-flex items-center gap-2.5 text-xs font-bold uppercase tracking-widest text-[#DFB257]">
                <div className="w-2 h-4 bg-[#DFB257]" />
                <span>Marquee Portfolios</span>
              </div>
            </ScrollReveal>

            <ScrollReveal animation="fade-up" delay={0.1}>
              <h2 className="font-display text-3xl sm:text-5xl font-extrabold uppercase tracking-tight text-white">
                FEATURED PROJECTS
              </h2>
            </ScrollReveal>

            <ScrollReveal animation="fade-up" delay={0.2}>
              <p className="text-base sm:text-lg text-neutral-400 font-light">
                Transformative landmark developments delivered across the world&rsquo;s most demanding sectors.
              </p>
            </ScrollReveal>
          </div>

          <ScrollReveal animation="fade-up" delay={0.3}>
            <div className="flex items-center gap-4">
              {/* Carousel Controls */}
              <div className="flex items-center gap-2">
                <button
                  onClick={handlePrev}
                  aria-label="Previous project"
                  className="p-3 bg-white/[0.04] border border-white/10 hover:border-[#DFB257] hover:bg-white/[0.08] text-white transition-all duration-200 rounded-xs group cursor-pointer"
                >
                  <ChevronLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" />
                </button>
                <button
                  onClick={handleNext}
                  aria-label="Next project"
                  className="p-3 bg-white/[0.04] border border-white/10 hover:border-[#DFB257] hover:bg-white/[0.08] text-white transition-all duration-200 rounded-xs group cursor-pointer"
                >
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </button>
              </div>

              <Button
                variant="outline"
                size="md"
                showArrow
                onClick={() => navigate('/projects')}
              >
                EXPLORE PORTFOLIO
              </Button>
            </div>
          </ScrollReveal>
        </div>

        {/* Cinematic Main Featured Showcase with AnimatePresence */}
        <ScrollReveal animation="fade-up" delay={0.2}>
          <div className="relative bg-[#12161A] border border-white/10 rounded-xs overflow-hidden grid grid-cols-1 lg:grid-cols-12 min-h-[520px] shadow-2xl">
            {/* Left Column: Image Canvas with Smooth Crossfade */}
            <div className="lg:col-span-7 relative min-h-[380px] lg:min-h-full overflow-hidden bg-black">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeProject.id}
                  initial={{ opacity: 0, scale: 1.08 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] }}
                  className="absolute inset-0 w-full h-full"
                >
                  <img
                    src={activeProject.heroImage}
                    alt={activeProject.name}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#12161A] via-transparent to-black/30" />
                </motion.div>
              </AnimatePresence>

              {/* Status & Year Badges */}
              <div className="absolute top-6 left-6 flex items-center gap-2 text-xs z-10">
                <span className="bg-[#0D1013]/80 backdrop-blur-md px-3.5 py-1.5 font-mono-numbers text-white border border-white/10 rounded-xs">
                  {activeProject.year}
                </span>
                <span className="bg-[#DFB257] px-3.5 py-1.5 font-bold text-[#12161A] uppercase text-[11px] tracking-wider rounded-xs shadow-md">
                  {activeProject.status}
                </span>
              </div>
            </div>

            {/* Right Column: Project Dossier */}
            <div className="lg:col-span-5 p-8 sm:p-12 flex flex-col justify-between space-y-6 z-10 bg-[#12161A]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeProject.id + '-details'}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.5, ease: [0.21, 0.47, 0.32, 0.98] }}
                  className="space-y-4"
                >
                  {/* Unboxed Metadata */}
                  <div className="flex items-center gap-2 text-xs text-neutral-400">
                    <span className="text-[#DFB257] font-semibold">{activeProject.market}</span>
                    <span aria-hidden="true">·</span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-neutral-400" />
                      {activeProject.city}, {activeProject.state || activeProject.country}
                    </span>
                  </div>

                  <h3 className="font-display text-2xl sm:text-3xl font-extrabold uppercase tracking-tight text-white leading-tight">
                    {activeProject.name}
                  </h3>

                  <p className="text-xs sm:text-sm text-neutral-300 font-light leading-relaxed line-clamp-4">
                    {activeProject.description}
                  </p>

                  {/* Key Quantitative Metrics */}
                  {activeProject.statistics && activeProject.statistics.length > 0 && (
                    <div className="grid grid-cols-2 gap-4 pt-4 border-t border-white/10">
                      {activeProject.statistics.slice(0, 4).map((stat, idx) => (
                        <div key={idx} className="space-y-0.5">
                          <div className="text-[10px] font-bold uppercase tracking-wider text-neutral-400">
                            {stat.label}
                          </div>
                          <div className="font-mono-numbers text-base font-bold text-white">
                            {stat.value}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </motion.div>
              </AnimatePresence>

              <div className="pt-6 border-t border-white/10 flex items-center justify-between">
                <Button
                  variant="primary"
                  size="md"
                  showArrow
                  onClick={() => navigate(`/projects/${activeProject.slug}`)}
                >
                  VIEW PROJECT
                </Button>

                <span className="text-xs font-mono-numbers text-neutral-400">
                  0{activeIndex + 1} / 0{featuredList.length}
                </span>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Thumbnail Selector Strip with Smooth Highlight */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-6">
          {featuredList.map((project, idx) => {
            const isCurrent = idx === activeIndex;
            return (
              <button
                key={project.id}
                onClick={() => setActiveIndex(idx)}
                className={`p-3 text-left border transition-all duration-300 flex items-center gap-3 rounded-xs cursor-pointer ${
                  isCurrent
                    ? 'bg-[#1A2026] border-[#DFB257] shadow-lg shadow-black/40 -translate-y-0.5'
                    : 'bg-[#12161A]/60 border-white/5 hover:border-white/20 hover:bg-[#12161A]'
                }`}
              >
                <div className="w-12 h-12 bg-neutral-900 shrink-0 overflow-hidden rounded-xs">
                  <img
                    src={project.heroImage}
                    alt={project.name}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="min-w-0">
                  <div className={`text-xs font-bold truncate ${isCurrent ? 'text-[#DFB257]' : 'text-white'}`}>
                    {project.name}
                  </div>
                  <div className="text-[11px] text-neutral-400 truncate">
                    {project.city} · {project.market}
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
};
