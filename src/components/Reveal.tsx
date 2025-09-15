"use client";

import { useRef } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";

type RevealProps = {
  children: React.ReactNode;
  delay?: number;
  y?: number;
};

export function Reveal({ children, delay = 0, y = 24 }: RevealProps) {
  const shouldReduceMotion = useReducedMotion();
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { once: true, margin: "0px 0px -10% 0px" });

  const initial = shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y };
  const animate = isInView ? { opacity: 1, y: 0 } : initial;

  return (
    <motion.div
      ref={ref}
      initial={initial}
      animate={animate}
      transition={{ duration: 0.4, delay }}
    >
      {children}
    </motion.div>
  );
}


