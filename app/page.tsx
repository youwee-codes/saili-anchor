"use client";

import React, { useState, useEffect } from "react";
import FloatingControls from "@/components/FloatingControls";
import HeroGladeye from "@/components/HeroGladeye";
import Chapter02Vision from "@/components/Chapter02Vision";
import Chapter03TEDxAgency from "@/components/Chapter03TEDxAgency";
import Chapter04DualTrack from "@/components/Chapter04DualTrack";
import Chapter05Pedagogy from "@/components/Chapter05Pedagogy";
import Chapter06Curriculum from "@/components/Chapter06Curriculum";
import Chapter07Booking from "@/components/Chapter07Booking";
import Chapter08Footer from "@/components/Chapter08Footer";

export default function Home() {
  const [activeChapter, setActiveChapter] = useState(1);

  // Monitor Scroll Position to Update the Active Chapter Indicator (01 / 08)
  useEffect(() => {
    const handleScroll = () => {
      const chapterIds = [
        "chapter-01",
        "chapter-02",
        "chapter-03",
        "chapter-04",
        "chapter-05",
        "chapter-06",
        "chapter-07",
        "chapter-08",
      ];

      const scrollPosition = window.scrollY + window.innerHeight * 0.35;

      for (let i = chapterIds.length - 1; i >= 0; i--) {
        const el = document.getElementById(chapterIds[i]);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveChapter(i + 1);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavigateChapter = (chapterNum: number) => {
    const targetId = `chapter-0${chapterNum}`;
    const el = document.getElementById(targetId);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="relative min-h-screen bg-[#FAF8F4] text-[#12110e] font-sans noise-overlay">
      {/* Persistent Floating Controls (Emblem, Top Right Menu, Right Progress Rail, Bottom Counter Pill) */}
      <FloatingControls
        activeChapter={activeChapter}
        onNavigateChapter={handleNavigateChapter}
      />

      <main className="relative z-10 w-full overflow-hidden">
        {/* Chapter 01: Where Stage Presence Takes Root (Hero with Parallax Vignette Scatter) */}
        <HeroGladeye />

        {/* Chapter 02: What Does Stage Mastery Mean Today? (10-Node Starburst Data Visualization) */}
        <Chapter02Vision />

        {/* Chapter 03: The Agency to Command (Comparative Matrix & 566K+ TEDxDTSS Spotlight) */}
        <Chapter03TEDxAgency />

        {/* Chapter 04: Two Disciplines. One Standard of Command (Dual Track Magazine Layout) */}
        <Chapter04DualTrack />

        {/* Chapter 05: Education & Pedagogy: An 18-Year Foundation (Stats & Little Cubs / Art Zone) */}
        <Chapter05Pedagogy />

        {/* Chapter 06: The Power Sessions: Curriculum Architecture */}
        <Chapter06Curriculum />

        {/* Chapter 07: Live Booking Terminal (Schedule & In-Card Razorpay Checkout) */}
        <Chapter07Booking />

        {/* Chapter 08: The Complete Ecosystem & Footer */}
        <Chapter08Footer />
      </main>
    </div>
  );
}
