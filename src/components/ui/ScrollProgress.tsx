import React from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

export const ScrollProgress: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-[2.5px] bg-gradient-to-r from-[#C99E44] via-[#DFB257] to-[#F3D78A] z-50 origin-left pointer-events-none shadow-[0_0_12px_rgba(223,178,87,0.8)]"
      style={{ scaleX }}
    />
  );
};
