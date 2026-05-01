"use client";

import { useScroll, useSpring, motion } from "framer-motion";

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { damping: 30, stiffness: 200, mass: 0.5 });

  return (
    <motion.div
      aria-hidden
      className="fixed left-0 top-0 z-[100] h-[2px] w-full origin-left bg-gradient-brand"
      style={{ scaleX }}
    />
  );
}
