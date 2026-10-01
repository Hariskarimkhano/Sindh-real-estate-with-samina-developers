import React, { useRef } from 'react';
import { useNavigation } from '../context/NavigationContext';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ASSETS } from '../data/assets';
import { Button } from './ui/Button';
import { Building2, Globe2, ShieldCheck, ArrowDown } from 'lucide-react';

export const Hero: React.FC = () => {
  const { navigate, openProjectInquiry } = useNavigation();
  const heroRef = useRef<HTMLDivElement>(null);

  // Smooth cinematic parallax on scroll
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start']
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '22%']);
  const backgroundScale = useTransform(scrollYProgress, [0, 1], [1.05, 1.15]);
  const contentY = useTransform(scrollYProgress, [0, 1], ['0%', '16%']);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.75], [1, 0]);

  return (
    <section
      ref={heroRef}
      className="relative w-full min-h-[92vh] lg:min-h-[96vh] flex items-center bg-[#0D1013] text-white overflow-hidden"
    >
      {/* Cinematic Parallax Background */}
      <motion.div
        style={{ y: backgroundY, scale: backgroundScale }}
        className="absolute inset-0 w-full h-full pointer-events-none will-change-transform"
      >
        <img
          src={ASSETS.heroConstruction}
          alt="High-rise architectural steel, glass and tower construction at dusk"
          className="w-full h-full object-cover object-center"
          referrerPolicy="no-referrer"
        />

        {/* Sophisticated Multi-Layer Scrim for Contrast & Architectural Depth */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0D1013]/95 via-[#0D1013]/80 to-[#0D1013]/35" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0D1013] via-transparent to-black/40" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_40%,rgba(223,178,87,0.08),transparent_60%)]" />
      </motion.div>

      {/* Hero Core Content */}
      <motion.div
        style={{ y: contentY, opacity: contentOpacity }}
        className="relative max-w-7xl mx-auto px-6 py-28 sm:py-36 w-full z-10"
      >
        <div className="max-w-3xl space-y-8">
          {/* Floating Luxury Kicker Pill */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-white/[0.06] backdrop-blur-md border border-white/[0.12] text-xs font-semibold tracking-widest uppercase text-[#DFB257] shadow-lg shadow-black/20"
          >
            <span className="w-2 h-2 rounded-full bg-[#DFB257] animate-pulse shadow-[0_0_8px_#DFB257]" />
            <span>GLOBAL ARCHITECTURAL &amp; ENGINEERING EXCELLENCE</span>
            <span className="text-white/30">·</span>
            <span className="text-neutral-300 font-mono-numbers">EST. 1902</span>
          </motion.div>

          {/* Grand Monumental Title with Staggered Entrance */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.15, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="space-y-3"
          >
            <h1 className="font-display text-2xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white uppercase leading-[1.03] text-balance">
              MAKING A <br />
              <span className="bg-gradient-to-r from-white via-neutral-100 to-[#DFB257] bg-clip-text text-transparent">
                DIFFERENCE
              </span>
            </h1>

            <p className="text-xl sm:text-3xl font-light text-neutral-200 tracking-wide font-display">
              What do you want to build?
            </p>
          </motion.div>

          {/* Narrative Lead */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.3, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="text-sm sm:text-base text-neutral-300 font-light leading-relaxed max-w-2xl"
          >
            From supertall towers and academic research centers to monumental sports stadiums and hyperscale computing infrastructure, we unite technical engineering rigor with local craft mastery to transform skyline horizons worldwide.
          </motion.p>

          {/* Redesigned Modern, Premium Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.45, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="pt-2 flex flex-wrap items-center gap-4"
          >
            <Button
              variant="primary"
              size="lg"
              showArrow
              onClick={() => navigate('/projects')}
            >
              EXPLORE OUR WORK
            </Button>

            <Button
              variant="glass"
              size="lg"
              onClick={openProjectInquiry}
            >
              START A PROJECT
            </Button>
          </motion.div>

          {/* Micro Value Proof Points */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="pt-6 border-t border-white/10 flex flex-wrap items-center gap-6 sm:gap-10 text-xs text-neutral-400 font-medium"
          >
            <div className="flex items-center gap-2">
              <Building2 className="w-4 h-4 text-[#DFB257]" />
              <span>1,500+ Active Programs</span>
            </div>
            <div className="flex items-center gap-2">
              <Globe2 className="w-4 h-4 text-[#DFB257]" />
              <span>50+ Global Regional Hubs</span>
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#DFB257]" />
              <span>0.45 Industry-Leading EMR</span>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Elegant Minimal Scroll Down Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-8 left-6 sm:left-1/2 sm:-translate-x-1/2 flex flex-col items-center gap-2 text-[10px] text-neutral-400 font-semibold tracking-widest uppercase z-10 pointer-events-none"
      >
        <span>SCROLL TO DISCOVER</span>
        <div className="w-[1px] h-8 bg-gradient-to-b from-[#DFB257] to-transparent animate-pulse" />
      </motion.div>
    </section>
  );
};
