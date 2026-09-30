import React, { useState } from 'react';
import { useNavigation } from '../context/NavigationContext';
import { LOCATIONS_DATA } from '../data/locations';
import { PROJECTS_DATA } from '../data/projects';
import { Button } from './ui/Button';
import { ScrollReveal, ParallaxImage } from './ui/ScrollReveal';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Phone, Mail, Building, ArrowRight, Users, CheckCircle2 } from 'lucide-react';

export const LocalCommunitySection: React.FC = () => {
  const { navigate } = useNavigation();
  const [selectedLocationId, setSelectedLocationId] = useState<string>('san-francisco');

  const currentLocation = LOCATIONS_DATA.find(l => l.id === selectedLocationId) || LOCATIONS_DATA[0];

  // Local projects associated with this office location
  const localProjects = PROJECTS_DATA.filter(p =>
    currentLocation.localProjectsSlugs.includes(p.slug) ||
    p.city.toLowerCase() === currentLocation.city.toLowerCase()
  );

  return (
    <section className="py-24 sm:py-36 bg-[#0D1013] text-white border-b border-white/10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl space-y-4 mb-12">
          <ScrollReveal animation="fade-up">
            <div className="inline-flex items-center gap-2.5 text-xs font-bold uppercase tracking-widest text-[#DFB257]">
              <div className="w-2 h-4 bg-[#DFB257]" />
              <span>Community Partnership &amp; Local Presence</span>
            </div>
          </ScrollReveal>

          <ScrollReveal animation="fade-up" delay={0.1}>
            <h2 className="font-display text-3xl sm:text-5xl font-extrabold uppercase tracking-tight text-white">
              OUR WORK IN YOUR LOCAL COMMUNITY
            </h2>
          </ScrollReveal>

          <ScrollReveal animation="fade-up" delay={0.2}>
            <p className="text-base sm:text-lg text-neutral-300 font-light leading-relaxed">
              How construction projects grow communities, strengthen local economies, and improve everyday lives.
            </p>
          </ScrollReveal>
        </div>

        {/* Location Selector Tabs */}
        <ScrollReveal animation="fade-up" delay={0.25}>
          <div className="mb-12">
            <div className="text-xs uppercase tracking-wider text-neutral-400 font-semibold mb-3">
              Select Your Regional Market:
            </div>
            <div className="flex flex-wrap gap-2">
              {LOCATIONS_DATA.map((loc) => {
                const isSelected = loc.id === selectedLocationId;
                return (
                  <button
                    key={loc.id}
                    onClick={() => setSelectedLocationId(loc.id)}
                    className={`px-4 py-2 text-xs font-bold uppercase tracking-wider transition-all duration-300 rounded-xs border cursor-pointer ${
                      isSelected
                        ? 'bg-gradient-to-r from-[#DFB257] to-[#C99E44] text-[#12161A] border-[#DFB257] shadow-[0_4px_20px_rgba(223,178,87,0.35)] -translate-y-0.5'
                        : 'bg-white/[0.03] text-neutral-300 border-white/10 hover:border-white/30 hover:bg-white/[0.08] hover:text-white'
                    }`}
                  >
                    {loc.name}
                  </button>
                );
              })}
            </div>
          </div>
        </ScrollReveal>

        {/* Dynamic Local Community Content Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentLocation.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.45, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start"
          >
            {/* Left Column: Local Office & Leadership Card */}
            <div className="lg:col-span-4 bg-[#12161A] border border-white/10 p-6 sm:p-8 space-y-6 rounded-xs shadow-xl">
              <div>
                <span className="text-[11px] font-mono-numbers text-[#DFB257] uppercase tracking-wider font-semibold block mb-1">
                  Regional Hub
                </span>
                <h3 className="font-display text-2xl font-bold uppercase text-white">
                  {currentLocation.name}
                </h3>
                <p className="text-xs text-neutral-400 mt-1">
                  Active Projects in Region: <span className="text-white font-mono-numbers font-bold">{currentLocation.activeProjectsCount}</span>
                </p>
              </div>

              {/* Office Details */}
              <div className="space-y-3 pt-4 border-t border-white/10 text-xs text-neutral-300">
                <div className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-[#DFB257] shrink-0 mt-0.5" />
                  <span>{currentLocation.address}</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Phone className="w-4 h-4 text-[#DFB257] shrink-0" />
                  <a href={`tel:${currentLocation.phone}`} className="hover:text-white transition-colors">
                    {currentLocation.phone}
                  </a>
                </div>
                <div className="flex items-center gap-2.5">
                  <Mail className="w-4 h-4 text-[#DFB257] shrink-0" />
                  <a href={`mailto:${currentLocation.email}`} className="hover:text-white transition-colors">
                    {currentLocation.email}
                  </a>
                </div>
              </div>

              {/* Leadership */}
              <div className="pt-4 border-t border-white/10 space-y-3">
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-neutral-400">
                  <Users className="w-3.5 h-3.5 text-[#DFB257]" />
                  <span>Local Office Leadership</span>
                </div>
                <div className="space-y-2">
                  {currentLocation.leadership.map((leader, idx) => (
                    <div key={idx} className="text-xs">
                      <div className="font-bold text-white">{leader.name}</div>
                      <div className="text-neutral-400">{leader.title}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-2">
                <Button
                  variant="outline"
                  size="md"
                  onClick={() => navigate(`/locations?office=${currentLocation.id}`)}
                  className="w-full"
                >
                  CONTACT THIS OFFICE
                </Button>
              </div>
            </div>

            {/* Right Column: Local Community Work & Projects */}
            <div className="lg:col-span-8 space-y-6">
              {/* Impact Highlights */}
              <div className="bg-[#12161A]/60 border border-white/10 p-6 sm:p-8 space-y-4 rounded-xs">
                <h4 className="font-display text-lg font-bold uppercase tracking-tight text-white">
                  Local Economic &amp; Civic Investment
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {currentLocation.localHighlights.map((hl, idx) => (
                    <div key={idx} className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-[#DFB257] shrink-0 mt-0.5" />
                      <span className="text-xs text-neutral-300 leading-relaxed">{hl}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Local Projects Showcase */}
              <div>
                <div className="flex items-center justify-between mb-4">
                  <h4 className="font-display text-lg font-bold uppercase tracking-tight text-white flex items-center gap-2">
                    <Building className="w-4 h-4 text-[#DFB257]" />
                    <span>Landmark Projects in {currentLocation.city}</span>
                  </h4>
                  <button
                    onClick={() => navigate(`/projects?location=${currentLocation.city}`)}
                    className="text-xs font-semibold text-[#DFB257] hover:text-amber-300 flex items-center gap-1 uppercase transition-colors cursor-pointer"
                  >
                    <span>All Local Projects</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>

                {localProjects.length > 0 ? (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {localProjects.slice(0, 2).map((project) => (
                      <div
                        key={project.id}
                        onClick={() => navigate(`/projects/${project.slug}`)}
                        className="group bg-[#12161A] border border-white/10 hover:border-[#DFB257] overflow-hidden cursor-pointer flex flex-col justify-between transition-all duration-300 rounded-xs hover:shadow-xl hover:-translate-y-1"
                      >
                        <div className="relative aspect-16/9 overflow-hidden bg-neutral-900">
                          <ParallaxImage
                            src={project.heroImage}
                            alt={project.name}
                            speed={10}
                            zoomOnHover
                            className="w-full h-full"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent pointer-events-none" />
                          <div className="absolute bottom-3 left-3 text-xs text-white font-mono-numbers">
                            {project.year} · {project.market}
                          </div>
                        </div>
                        <div className="p-4 space-y-2">
                          <h5 className="font-bold text-sm text-white group-hover:text-[#DFB257] transition-colors truncate">
                            {project.name}
                          </h5>
                          <p className="text-xs text-neutral-400 line-clamp-2 font-light">
                            {project.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="p-6 bg-[#12161A] border border-white/10 text-xs text-neutral-400 rounded-xs">
                    Multiple active capital programs currently under non-disclosure in this regional jurisdiction. Contact local office for detailed qualifications.
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};
