"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ArrowDown } from "lucide-react";

export default function HeroGladeye() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Parallax target and smoothed values for 120fps hardware-accelerated lerp
  const mouseRef = useRef({
    targetX: 0,
    targetY: 0,
    currentX: 0,
    currentY: 0,
  });

  const [scrollY, setScrollY] = useState(0);

  // Smooth lerp loop using requestAnimationFrame - ZERO CPU lag, 100% steady 60-120fps
  useEffect(() => {
    let animId: number;

    const handleMouseMove = (e: MouseEvent) => {
      // Normalize mouse to -1 .. 1
      const x = (e.clientX / window.innerWidth - 0.5) * 2;
      const y = (e.clientY / window.innerHeight - 0.5) * 2;
      mouseRef.current.targetX = x;
      mouseRef.current.targetY = y;
    };

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    const updateParallax = () => {
      const m = mouseRef.current;
      // Ultra-fluid lerp interpolation factor (0.05 = soft physical fluid drag)
      m.currentX += (m.targetX - m.currentX) * 0.05;
      m.currentY += (m.targetY - m.currentY) * 0.05;

      if (containerRef.current) {
        containerRef.current.style.setProperty("--mx", m.currentX.toFixed(4));
        containerRef.current.style.setProperty("--my", m.currentY.toFixed(4));
      }

      animId = requestAnimationFrame(updateParallax);
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("scroll", handleScroll, { passive: true });
    animId = requestAnimationFrame(updateParallax);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
      cancelAnimationFrame(animId);
    };
  }, []);

  // Compute scroll dispersal progress (0 to 1 over first 500px scroll)
  const scrollProgress = Math.min(scrollY / 600, 1);

  return (
    <section
      id="chapter-01"
      ref={containerRef}
      style={
        {
          "--mx": "0",
          "--my": "0",
        } as React.CSSProperties
      }
      className="relative min-h-[105vh] w-full flex flex-col items-center justify-between pt-20 pb-12 px-4 sm:px-8 bg-[#fffcf8] overflow-hidden select-none"
    >
      {/* Chapter 01 Indicator (Walton exact parenthetical format) */}
      <div className="relative z-20 pt-4 flex flex-col items-center transition-opacity duration-300">
        <div className="chapter-badge">
          <span>(</span>
          <span className="text-walton-amber text-xs">●</span>
          <span>01</span>
          <span className="text-walton-amber text-xs">●</span>
          <span>)</span>
        </div>
        <div className="flex items-center gap-2 mt-1">
          <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-walton-primary">
            Anchor Saili Rawool Panchal
          </span>
          <span className="text-walton-border text-xs">•</span>
          <span className="text-[11px] font-semibold tracking-[0.16em] uppercase text-walton-muted">
            850+ Live Shows Hosted
          </span>
        </div>
      </div>

      {/* =========================================================================
          MASSIVE 4-LINE STACKED EDITORIAL TYPOGRAPHY
          WHERE / ANCHOR SAILI / TAKES / STAGE
          Matches "WHERE / OPPORTUNITY / TAKES / ROOT" letter count and visual weight
          ========================================================================= */}
      <div
        className="relative z-10 max-w-6xl w-full text-center my-auto py-8 flex flex-col items-center justify-center transition-transform duration-300"
        style={{
          transform: `translate3d(0, ${scrollProgress * 40}px, 0)`,
          opacity: 1 - scrollProgress * 0.85,
        }}
      >
        {/* Line 1: WHERE */}
        <h1 className="font-editorial text-[56px] sm:text-[96px] md:text-[130px] lg:text-[156px] font-bold leading-[0.84] tracking-tight text-[#12110e]">
          WHERE
        </h1>

        {/* Line 2: ANCHOR SAILI (11 chars, matching OPPORTUNITY) */}
        <div className="font-editorial text-[50px] sm:text-[88px] md:text-[120px] lg:text-[144px] font-bold leading-[0.84] tracking-tight text-[#12110e]">
          <span className="italic font-normal text-[#d69b3e] tracking-normal">
            ANCHOR SAILI
          </span>
        </div>

        {/* Line 3: TAKES */}
        <div className="font-editorial text-[56px] sm:text-[96px] md:text-[130px] lg:text-[156px] font-bold leading-[0.84] tracking-tight text-[#12110e]">
          TAKES
        </div>

        {/* Line 4: STAGE */}
        <div className="font-editorial text-[64px] sm:text-[104px] md:text-[142px] lg:text-[168px] font-bold leading-[0.84] tracking-tight text-[#12110e]">
          STAGE
        </div>
      </div>

      {/* =========================================================================
          PHOTO COMPOSITION: EXACT WALTON REPLICA (MATCHING VIDEO FRAME_002)
          No tacky caption boxes. Clean high-end photography cards.
          Outer wrapper handles smooth GPU lerp mouse parallax & scroll scatter.
          Inner wrapper handles GPU compositor keyframe floating (zero lag).
          ========================================================================= */}
      <div className="absolute inset-0 pointer-events-none z-20 overflow-hidden flex items-center justify-center">

        {/* -------------------------------------------------------------
            1. CENTER MAIN PHOTO (ANCHOR SAILI CORPORATE RED BLAZER ON MIC)
            Sits directly in the center overlapping between ANCHOR SAILI & TAKES
            Landscape ratio, clean photographic card, NO caption box
            ------------------------------------------------------------- */}
        <div
          className="absolute z-20 pointer-events-auto"
          style={{
            transform: `translate3d(calc(var(--mx) * 12px), calc(var(--my) * 10px + ${scrollProgress * 20}px), 0) scale(${1 + scrollProgress * 0.15})`,
            opacity: 1 - scrollProgress * 0.65,
            transition: "transform 0.1s ease-out",
          }}
        >
          <div className="anim-float-center">
            <div className="relative w-[34vw] sm:w-[28vw] md:w-[24vw] max-w-[380px] min-w-[240px] aspect-[4/3] rounded-[2px] overflow-hidden border border-white/80 shadow-2xl bg-white cursor-pointer group transition-transform duration-500 hover:scale-[1.04]">
              <Image
                src="/saili/saili-corporate-red.webp"
                alt="Anchor Saili Rawool Panchal on Corporate Stage"
                fill
                priority
                sizes="(max-width: 768px) 260px, 380px"
                className="object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-out"
              />
            </div>
          </div>
        </div>

        {/* -------------------------------------------------------------
            2. TOP-RIGHT PHOTO (WHITE POWER SUIT)
            Overlapping right side of ANCHOR SAILI
            ------------------------------------------------------------- */}
        <div
          className="absolute top-[16%] right-[8%] sm:right-[12%] md:right-[16%] z-20 pointer-events-auto"
          style={{
            transform: `translate3d(calc(var(--mx) * 26px + ${scrollProgress * 45}px), calc(var(--my) * 20px - ${scrollProgress * 30}px), 0)`,
            opacity: 1 - scrollProgress * 0.85,
            transition: "transform 0.1s ease-out",
          }}
        >
          <div className="anim-float-1" style={{ "--rot": "2deg" } as React.CSSProperties}>
            <div className="relative w-[18vw] sm:w-[15vw] md:w-[13vw] max-w-[210px] min-w-[130px] aspect-[4/3] rounded-[2px] overflow-hidden border border-white/60 shadow-xl bg-white cursor-pointer group transition-transform duration-500 hover:scale-[1.05] hover:z-30">
              <Image
                src="/saili/saili-white-suit.jpg"
                alt="Anchor Saili in White Power Suit"
                fill
                sizes="210px"
                className="object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-out"
              />
            </div>
          </div>
        </div>

        {/* -------------------------------------------------------------
            3. TOP FAR-RIGHT THUMBNAIL (STAGE AWARD)
            High up near top-right corner
            ------------------------------------------------------------- */}
        <div
          className="absolute top-[8%] right-[5%] sm:right-[7%] z-10 pointer-events-auto hidden sm:block"
          style={{
            transform: `translate3d(calc(var(--mx) * 16px + ${scrollProgress * 60}px), calc(var(--my) * 14px - ${scrollProgress * 40}px), 0)`,
            opacity: 1 - scrollProgress * 0.9,
            transition: "transform 0.1s ease-out",
          }}
        >
          <div className="anim-float-3" style={{ "--rot": "-3deg" } as React.CSSProperties}>
            <div className="relative w-[7vw] max-w-[85px] min-w-[55px] aspect-square rounded-[2px] overflow-hidden border border-white/60 shadow-md bg-white cursor-pointer group transition-transform duration-500 hover:scale-110">
              <Image
                src="/saili/saili-award-stage.webp"
                alt="Stage Award Celebration"
                fill
                sizes="85px"
                className="object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-out"
              />
            </div>
          </div>
        </div>

        {/* -------------------------------------------------------------
            4. MIDDLE-LEFT PHOTO (CONFERENCE MIC SPEAKING)
            Overlapping the left side of ANCHOR SAILI
            ------------------------------------------------------------- */}
        <div
          className="absolute top-[28%] left-[6%] sm:left-[10%] md:left-[14%] z-20 pointer-events-auto"
          style={{
            transform: `translate3d(calc(var(--mx) * -24px - ${scrollProgress * 45}px), calc(var(--my) * -18px - ${scrollProgress * 20}px), 0)`,
            opacity: 1 - scrollProgress * 0.85,
            transition: "transform 0.1s ease-out",
          }}
        >
          <div className="anim-float-2" style={{ "--rot": "-1.5deg" } as React.CSSProperties}>
            <div className="relative w-[19vw] sm:w-[16vw] md:w-[14vw] max-w-[220px] min-w-[135px] aspect-[16/10] rounded-[2px] overflow-hidden border border-white/60 shadow-xl bg-white cursor-pointer group transition-transform duration-500 hover:scale-[1.05] hover:z-30">
              <Image
                src="/saili/saili-conference-mic.webp"
                alt="Anchor Saili Conference Hall Speaking"
                fill
                sizes="220px"
                className="object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-out"
              />
            </div>
          </div>
        </div>

        {/* -------------------------------------------------------------
            5. LOWER-LEFT PHOTO (ZOOM PARTICIPANTS & TABLET)
            Overlapping the left side of TAKES
            ------------------------------------------------------------- */}
        <div
          className="absolute bottom-[24%] left-[10%] sm:left-[14%] md:left-[18%] z-20 pointer-events-auto"
          style={{
            transform: `translate3d(calc(var(--mx) * -20px - ${scrollProgress * 50}px), calc(var(--my) * 22px + ${scrollProgress * 35}px), 0)`,
            opacity: 1 - scrollProgress * 0.85,
            transition: "transform 0.1s ease-out",
          }}
        >
          <div className="anim-float-3" style={{ "--rot": "2.5deg" } as React.CSSProperties}>
            <div className="relative w-[20vw] sm:w-[17vw] md:w-[15vw] max-w-[240px] min-w-[140px] aspect-[16/10] rounded-[2px] overflow-hidden border border-white/60 shadow-xl bg-white cursor-pointer group transition-transform duration-500 hover:scale-[1.05] hover:z-30">
              <Image
                src="/saili/saili-zoom-tablet.webp"
                alt="Interactive Power Masterclass Attendees"
                fill
                sizes="240px"
                className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
            </div>
          </div>
        </div>

        {/* -------------------------------------------------------------
            6. LOWER-RIGHT PHOTO (VIRTUAL MASTERCLASS DESK)
            Overlapping right side of TAKES and STAGE
            ------------------------------------------------------------- */}
        <div
          className="absolute bottom-[22%] right-[8%] sm:right-[12%] md:right-[16%] z-20 pointer-events-auto"
          style={{
            transform: `translate3d(calc(var(--mx) * 28px + ${scrollProgress * 50}px), calc(var(--my) * 24px + ${scrollProgress * 35}px), 0)`,
            opacity: 1 - scrollProgress * 0.85,
            transition: "transform 0.1s ease-out",
          }}
        >
          <div className="anim-float-4" style={{ "--rot": "-2deg" } as React.CSSProperties}>
            <div className="relative w-[20vw] sm:w-[17vw] md:w-[15vw] max-w-[240px] min-w-[140px] aspect-[4/3] rounded-[2px] overflow-hidden border border-white/60 shadow-xl bg-white cursor-pointer group transition-transform duration-500 hover:scale-[1.05] hover:z-30">
              <Image
                src="/saili/saili-virtual-desk.webp"
                alt="Anchor Saili Speaking Coach Virtual Desk"
                fill
                sizes="240px"
                className="object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-out"
              />
            </div>
          </div>
        </div>

        {/* -------------------------------------------------------------
            7. BOTTOM FAR-LEFT THUMBNAIL (AWARD GALA)
            Down low near bottom left
            ------------------------------------------------------------- */}
        <div
          className="absolute bottom-[10%] left-[4%] sm:left-[6%] z-10 pointer-events-auto hidden sm:block"
          style={{
            transform: `translate3d(calc(var(--mx) * -16px - ${scrollProgress * 60}px), calc(var(--my) * 16px + ${scrollProgress * 40}px), 0)`,
            opacity: 1 - scrollProgress * 0.9,
            transition: "transform 0.1s ease-out",
          }}
        >
          <div className="anim-float-1" style={{ "--rot": "3deg" } as React.CSSProperties}>
            <div className="relative w-[7vw] max-w-[90px] min-w-[55px] aspect-square rounded-[2px] overflow-hidden border border-white/60 shadow-md bg-white cursor-pointer group transition-transform duration-500 hover:scale-110">
              <Image
                src="/saili/saili-award-stage.webp"
                alt="Anchor Saili Award Event"
                fill
                sizes="90px"
                className="object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-out"
              />
            </div>
          </div>
        </div>

        {/* -------------------------------------------------------------
            WALTON COLOR ACCENT ARCHITECTURAL TILES (EXACT AS VIDEO)
            ------------------------------------------------------------- */}
        {/* Amber / Mustard block behind middle left photo */}
        <div
          className="absolute top-[24%] left-[4%] sm:left-[8%] z-0 pointer-events-none"
          style={{
            transform: `translate3d(calc(var(--mx) * -12px), calc(var(--my) * -10px), 0)`,
          }}
        >
          <div className="anim-float-tile" style={{ "--rot": "-6deg" } as React.CSSProperties}>
            <div className="w-12 sm:w-16 h-16 sm:h-24 bg-[#d69b3e] opacity-80 rounded-[1px] shadow-sm" />
          </div>
        </div>

        {/* Sage Green block near lower left photo */}
        <div
          className="absolute bottom-[30%] left-[8%] sm:left-[12%] z-0 pointer-events-none hidden sm:block"
          style={{
            transform: `translate3d(calc(var(--mx) * -10px), calc(var(--my) * 12px), 0)`,
          }}
        >
          <div className="anim-float-tile" style={{ "--rot": "8deg" } as React.CSSProperties}>
            <div className="w-14 sm:w-20 h-10 sm:h-14 bg-[#5F8763] opacity-75 rounded-[1px] shadow-sm" />
          </div>
        </div>

        {/* Deep Slate / Teal block near lower right photo */}
        <div
          className="absolute bottom-[28%] right-[6%] sm:right-[10%] z-0 pointer-events-none hidden sm:block"
          style={{
            transform: `translate3d(calc(var(--mx) * 14px), calc(var(--my) * 14px), 0)`,
          }}
        >
          <div className="anim-float-tile" style={{ "--rot": "-10deg" } as React.CSSProperties}>
            <div className="w-14 sm:w-18 h-12 sm:h-16 bg-[#1C8B82] opacity-80 rounded-[1px] shadow-sm" />
          </div>
        </div>
      </div>

      {/* Bottom Minimal Navigation Indicator (Clean Walton style) */}
      <div className="relative z-20 flex flex-col items-center">
        <a
          href="#chapter-02"
          className="walton-pill-btn group hover:bg-[#12110e] hover:text-white transition-all shadow-sm"
        >
          <span className="tracking-[0.16em] font-semibold text-xs">
            S C R O L L &nbsp; T O &nbsp; E X P L O R E
          </span>
          <ArrowDown className="w-3.5 h-3.5 group-hover:translate-y-0.5 transition-transform" />
        </a>
      </div>
    </section>
  );
}