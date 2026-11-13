"use client";

import React, { useRef, useState } from "react";
import { motion } from "framer-motion";

interface MagneticTextProps {
  children: React.ReactNode;
  className?: string;
  strength?: number; // Distance multiplier, subtle by default
  as?: "h1" | "h2" | "h3" | "span" | "div";
}

export default function MagneticText({
  children,
  className = "",
  strength = 12,
  as: Component = "div",
}: MagneticTextProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const { clientX, clientY } = e;
    const { left, top, width, height } = ref.current.getBoundingClientRect();

    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);

    // Subtle magnetic response strictly adhering to the Walton institutional calm
    const factorX = (middleX / width) * strength;
    const factorY = (middleY / height) * strength;

    setPosition({ x: factorX, y: factorY });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x: position.x, y: position.y }}
      transition={{
        type: "spring",
        stiffness: 150,
        damping: 18,
        mass: 0.2,
      }}
      className={`inline-block cursor-default ${className}`}
    >
      {children}
    </motion.div>
  );
}
