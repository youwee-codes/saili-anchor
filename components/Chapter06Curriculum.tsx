"use client";

import React from "react";
import { Mic, Shield, Sparkles, Zap, ArrowRight } from "lucide-react";

export default function Chapter06Curriculum() {
  const modules = [
    {
      num: "01",
      title: "Clear Voice & Easy Breathing",
      desc: "Learn how to speak loudly and clearly without hurting your throat, running out of breath, or sounding dull on the mic.",
      tag: "Vocal Confidence",
    },
    {
      num: "02",
      title: "Thinking on Your Feet",
      desc: "What to do when slides freeze, a VIP arrives late, or the schedule changes. How to keep the room smiling with zero awkward silence.",
      tag: "Quick Thinking",
    },
    {
      num: "03",
      title: "Overcoming Stage Fear",
      desc: "Simple physical tricks to calm your nerves and turn rapid heartbeats into positive, enthusiastic stage energy.",
      tag: "Calm & Grounded",
    },
    {
      num: "04",
      title: "Connecting with the Crowd",
      desc: "How to make natural eye contact, share light jokes, and get audience members laughing, clapping, and participating.",
      tag: "Crowd Connection",
    },
  ];

  return (
    <section
      id="chapter-06"
      className="relative min-h-screen w-full flex flex-col items-center justify-between py-24 px-6 sm:px-12 bg-[#FAF8F4] overflow-hidden select-none border-t border-[#dad8ce]"
    >
      {/* Chapter 06 Header */}
      <div className="relative z-20 flex flex-col items-center text-center max-w-4xl">
        <div className="chapter-badge mb-3">
          <span>(</span>
          <span className="text-walton-amber text-xs">●</span>
          <span>06</span>
          <span className="text-walton-amber text-xs">●</span>
          <span>)</span>
        </div>

        <h2 className="font-editorial text-[40px] sm:text-[62px] md:text-[80px] font-bold leading-[1.0] text-[#12110e] tracking-tight">
          What You Will Learn: <br />
          <span className="italic font-normal text-[#d69b3e]">4 Steps to Speaking with Confidence</span>
        </h2>

        <p className="mt-6 text-sm sm:text-base text-walton-muted max-w-2xl leading-relaxed font-sans">
          Simple, practical skills gathered from 850+ live events. Designed for working professionals, aspiring emcees, students, and anyone who wants to speak without fear.
        </p>
      </div>

      {/* 4-MODULE EDITORIAL GRID */}
      <div className="relative z-10 w-full max-w-5xl my-12 grid grid-cols-1 md:grid-cols-2 gap-6">
        {modules.map((m) => (
          <div
            key={m.num}
            className="p-6 bg-white border border-[#dad8ce] rounded-sm shadow-sm hover:border-[#12110e] transition-all group flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono text-xs font-bold text-walton-muted">
                  MODULE {m.num}
                </span>
                <span className="px-2 py-0.5 bg-[#FAF8F4] border border-[#dad8ce] text-[9px] font-bold uppercase tracking-wider text-[#12110e] rounded-[2px]">
                  {m.tag}
                </span>
              </div>

              <h4 className="font-editorial text-2xl font-bold text-[#12110e] group-hover:text-walton-primary transition-colors mb-3">
                {m.title}
              </h4>

              <p className="text-xs text-walton-muted font-sans leading-relaxed">
                {m.desc}
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-[#dad8ce] flex items-center justify-between text-xs text-walton-muted">
              <span>Interactive Drills Included</span>
              <span className="text-walton-primary font-bold">100% Practical</span>
            </div>
          </div>
        ))}
      </div>

      {/* Next Batch Alert Pill */}
      <div className="relative z-20 flex flex-col items-center">
        <a
          href="#chapter-07"
          className="walton-pill-btn-primary"
        >
          <span>Reserve In Next Batch (₹999 / ₹2,499) ↗</span>
        </a>
      </div>
    </section>
  );
}
