"use client";

import React from "react";
import { motion } from "framer-motion";
import { Share2 } from "lucide-react";

export default function Chapter02Vision() {
  return (
    <section
      id="chapter-02"
      className="relative min-h-screen w-full flex flex-col items-center justify-between py-24 px-6 sm:px-12 bg-[#FAF8F4] overflow-hidden select-none border-t border-[#dad8ce]"
    >
      {/* Chapter 02 Header */}
      <div className="relative z-20 flex flex-col items-center text-center max-w-4xl">
        <div className="chapter-badge mb-3">
          <span>(</span>
          <span className="text-walton-amber text-xs">●</span>
          <span>02</span>
          <span className="text-walton-amber text-xs">●</span>
          <span>)</span>
        </div>

        <h2 className="font-editorial text-[40px] sm:text-[62px] md:text-[80px] font-bold leading-[1.0] text-[#12110e] tracking-tight">
          Why great anchoring <br />
          <span className="italic font-normal text-[#d69b3e]">makes all the difference</span>
        </h2>

        <p className="mt-6 text-sm sm:text-base text-walton-muted max-w-2xl leading-relaxed font-sans">
          Anyone can read off a cue card. But when 2,000 corporate delegates or 500 wedding guests are in the room, you need an anchor who reads the crowd, lifts the energy, and handles every sudden change with a warm smile.
        </p>

        {/* Share Button Pill */}
        <div className="mt-4">
          <button
            onClick={() => {
              if (navigator.share) {
                navigator.share({
                  title: "Anchor Saili Rawool Panchal",
                  url: window.location.href,
                });
              } else {
                navigator.clipboard.writeText(window.location.href);
                alert("Link copied to clipboard!");
              }
            }}
            className="walton-pill-btn group"
          >
            <Share2 className="w-3.5 h-3.5 text-walton-primary" />
            <span>S · h · a · r · e</span>
          </button>
        </div>
      </div>

      {/* SIGNATURE 10-NODE STARBURST / DANDELION DATA VISUALIZATION (Matching Walton Chapter 02) */}
      <div className="relative z-10 w-full max-w-3xl my-16 flex flex-col items-center justify-center">
        <div className="relative w-72 sm:w-96 aspect-square flex items-center justify-center">
          {/* Circular Orbit Rings */}
          <div className="absolute inset-4 rounded-full border border-dashed border-[#dad8ce]" />
          <div className="absolute inset-16 rounded-full border border-[#dad8ce]/60" />

          {/* 10 Radiating Spokes & Nodes (7 Solid, 3 Hollow) */}
          {[...Array(10)].map((_, i) => {
            const angle = (i * 36 - 90) * (Math.PI / 180);
            const radius = 130;
            const x = Math.cos(angle) * radius;
            const y = Math.sin(angle) * radius;
            const isSolid = i < 7; // 7 in 10

            return (
              <React.Fragment key={i}>
                {/* Spoke Line */}
                <div
                  className="absolute w-[1px] bg-[#dad8ce] origin-bottom pointer-events-none"
                  style={{
                    height: `${radius}px`,
                    transform: `translate(-50%, -100%) rotate(${i * 36}deg)`,
                    top: "50%",
                    left: "50%",
                  }}
                />

                {/* Satellite Node */}
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08, duration: 0.4 }}
                  className={`absolute w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center text-[10px] font-bold border transition-transform hover:scale-125 cursor-default ${
                    isSolid
                      ? "bg-[#12110e] text-white border-[#12110e] shadow-sm"
                      : "bg-[#fffcf8] text-walton-muted border-dashed border-[#dad8ce]"
                  }`}
                  style={{
                    transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
                    top: "50%",
                    left: "50%",
                  }}
                >
                  {isSolid ? "✓" : "○"}
                </motion.div>
              </React.Fragment>
            );
          })}

          {/* Center Lime / Mustard Pill Badge */}
          <div className="relative z-20 px-4 py-2 bg-[#e7e72b] border border-[#12110e] rounded-full shadow-md text-center">
            <span className="font-editorial text-lg sm:text-xl font-bold text-[#12110e] tracking-tight block">
              7 in 10
            </span>
            <span className="text-[9px] uppercase font-bold tracking-wider text-[#12110e] block">
              Audience Retention
            </span>
          </div>
        </div>

        {/* Large Serif Caption Beneath the Starburst */}
        <div className="text-center max-w-xl px-4 mt-6">
          <p className="font-editorial text-xl sm:text-2xl text-[#12110e] font-semibold leading-snug">
            “7 in 10 events lose guest interest within 20 minutes when the host is too rigid. Natural warmth and quick thinking keep people excited from start to finish.”
          </p>
          <span className="text-xs uppercase tracking-widest text-walton-muted font-sans font-semibold mt-2 block">
            Proven across 850+ corporate events, summits, and grand weddings
          </span>
        </div>
      </div>
    </section>
  );
}
