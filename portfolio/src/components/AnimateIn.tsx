"use client";

import { motion } from "framer-motion";

import { CSSProperties } from "react";

interface AnimateInProps {
  children: React.ReactNode;
  className?: string;
  style?: CSSProperties;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
  duration?: number;
  once?: boolean;
}

export default function AnimateIn({
  children,
  className,
  style,
  delay = 0,
  direction = "up",
  duration = 0.55,
  once = true,
}: AnimateInProps) {
  const offsets = {
    up: { y: 20, x: 0 },
    down: { y: -20, x: 0 },
    left: { y: 0, x: 20 },
    right: { y: 0, x: -20 },
    none: { y: 0, x: 0 },
  };

  const { x, y } = offsets[direction];

  return (
    <motion.div
      className={className}
      style={style}
      initial={{ opacity: 0, y, x }}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      viewport={{ once, amount: 0.1, margin: "100px 0px 0px 0px" }}
      transition={{ duration, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
