"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { Calendar, Mic, Sparkles, ChevronDown, CheckCircle2 } from "lucide-react";
import MagneticText from "./MagneticText";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Scroll-linked parallax physics adhering to Antigravity overlay
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "22%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "12%"]);
  const opacityFade = useTransform(scrollYProgress, [0, 0.8], [1, 0.2]);

  return (
    <section
      id="overview"
      ref={containerRef}
      className="relative w-full min-h-[92vh] sm:min-h-screen flex items-center justify-center overflow-hidden bg-[#121417] pt-[84px] sm:pt-[96px]"
    >
      {/* Edge-to-Edge Parallax Imagery */}
      <motion.div
        style={{ y: backgroundY }}
        className="absolute inset-0 w-full h-[120%] -top-[10%] z-0 select-none pointer-events-none"
      >
        {/* High-Impact Editorial Portrait Composition */}
        <div className="relative w-full h-full">
          <Image
            src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=2000&auto=format&fit=crop"
            alt="Anchor Saili Rawool Panchal on Stage"
            fill
            priority
            sizes="100vw"
            className="object-cover object-top filter brightness-[0.92] contrast-[1.05]"
          />
        </div>

        {/* Walton System Semi-Transparent Black Overlay (#00000080) for Text Legibility */}
        <div
          className="absolute inset-0 z-10"
          style={{
            background:
              "linear-gradient(to right, rgba(0, 0, 0, 0.85) 0%, rgba(0, 0, 0, 0.68) 45%, rgba(0, 0, 0, 0.35) 100%)",
          }}
        />

        {/* Subtle Bottom Vignette to connect with Walton Neutral Surface */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#121417] to-transparent z-10" />
      </motion.div>

      {/* Hero Foreground Editorial Content Container */}
      <motion.div
        style={{ y: textY, opacity: opacityFade }}
        className="relative z-20 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24"
      >
        <div className="max-w-3xl">
          {/* Institutional Chapter Label (Walton Style) */}
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 backdrop-blur-sm border border-white/20 rounded-sm mb-6">
            <span className="w-2 h-2 rounded-full bg-[#0D6199] animate-pulse" />
            <span className="text-[11px] font-semibold tracking-[0.06em] uppercase text-white/90">
              Chapter 01 / Keynote Presence & Masterclasses
            </span>
          </div>

          {/* Magnetic Open Sans Headline */}
          <div className="mb-6">
            <MagneticText strength={10}>
              <h1 className="text-white text-[32px] sm:text-[44px] md:text-[52px] font-bold leading-[1.12] tracking-tight">
                850+ Events Hosted with <span className="text-[#7AA8C3]">Energy & Elegance.</span>
              </h1>
            </MagneticText>
          </div>

          {/* Editorial Body Text */}
          <p className="text-[#D8DADC] text-[15px] sm:text-[17px] leading-[1.65] font-normal mb-8 max-w-2xl">
            Saili Rawool Panchal is Mumbai & Navi Mumbai’s distinguished corporate host, celebrity wedding emcee, and TEDx speaker.
            With 18+ years rooted in expressive pedagogy and stage mastery, she blends institutional gravitas, razor-sharp crowd psychology, and spontaneous warmth across live audiences.
          </p>

          {/* Key Value Badges */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-10 text-white/90 text-xs">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#7AA8C3]" />
              <span>Corporate & Luxury Weddings</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#7AA8C3]" />
              <span>566K+ TEDx Speaker</span>
            </div>
            <div className="flex items-center gap-2 col-span-2 sm:col-span-1">
              <CheckCircle2 className="w-4 h-4 text-[#7AA8C3]" />
              <span>Live Power Masterclasses</span>
            </div>
          </div>

          {/* Action CTAs: Two button-primary components with Walton hover specs */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <a
              href="#booking"
              className="btn-primary"
            >
              <Calendar className="w-4 h-4 text-[#0D6199]" />
              <span>Book for an Event</span>
            </a>

            <a
              href="#booking"
              className="btn-primary"
            >
              <Mic className="w-4 h-4 text-[#0D6199]" />
              <span>Join a Workshop</span>
            </a>

            <a
              href="#tedx"
              className="btn-secondary text-white/90 border-white/30 hover:bg-white hover:text-[#0D6199]"
            >
              <Sparkles className="w-4 h-4 text-[#7AA8C3]" />
              <span>Watch TEDx Talk</span>
            </a>
          </div>
        </div>
      </motion.div>

      {/* Down Indicator */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2.2, ease: "easeInOut" }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 hidden md:flex flex-col items-center text-white/60 text-xs cursor-pointer"
        onClick={() => {
          document.getElementById("metrics")?.scrollIntoView({ behavior: "smooth" });
        }}
      >
        <span className="text-[11px] uppercase tracking-widest mb-1 font-semibold text-white/70">
          Explore Metrics
        </span>
        <ChevronDown className="w-4 h-4 text-[#7AA8C3]" />
      </motion.div>
    </section>
  );
}
