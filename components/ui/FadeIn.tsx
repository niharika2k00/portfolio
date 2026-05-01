"use client";

import { type ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";

const EASE = [0.21, 0.47, 0.32, 0.98] as const;

type FadeInProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  from?: "bottom" | "left" | "right";
};

export function FadeIn({ children, className, delay = 0, from = "bottom" }: FadeInProps) {
  const reduce = useReducedMotion();

  const initial = {
    opacity: 0,
    y: from === "bottom" && !reduce ? 20 : 0,
    x: from === "left" && !reduce ? -20 : from === "right" && !reduce ? 20 : 0,
  };

  return (
    <motion.div
      className={className}
      initial={initial}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: reduce ? 0 : 0.5, delay: reduce ? 0 : delay, ease: EASE }}
    >
      {children}
    </motion.div>
  );
}

type StaggerProps = {
  children: ReactNode;
  className?: string;
  stagger?: number;
  as?: "div" | "ul" | "ol";
};

export function FadeInStagger({ children, className, stagger = 0.08, as = "div" }: StaggerProps) {
  const reduce = useReducedMotion();
  const Tag = motion[as];

  return (
    <Tag
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      variants={{
        visible: { transition: { staggerChildren: reduce ? 0 : stagger } },
      }}
    >
      {children}
    </Tag>
  );
}

type FadeInItemProps = {
  children: ReactNode;
  className?: string;
  as?: "div" | "li" | "article";
};

export function FadeInItem({ children, className, as = "div" }: FadeInItemProps) {
  const reduce = useReducedMotion();
  const Tag = motion[as];

  return (
    <Tag
      className={className}
      variants={{
        hidden: { opacity: 0, y: reduce ? 0 : 16 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: reduce ? 0 : 0.45, ease: EASE },
        },
      }}
    >
      {children}
    </Tag>
  );
}
