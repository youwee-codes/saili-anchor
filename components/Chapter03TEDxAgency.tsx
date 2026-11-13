"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Play, X, ExternalLink, Quote, Sparkles, CheckCircle2 } from "lucide-react";

export default function Chapter03TEDxAgency() {
  const [videoModalOpen, setVideoModalOpen] = useState(false);

  return (
    <section
      id="chapter-03"
      className="relative min-h-screen w-full flex flex-col items-center justify-between py-24 px-6 sm:px-12 bg-[#fffcf8] overflow-hidden select-none border-t border-[#dad8ce]"
    >
      {/* Chapter 03 Header */}
      <div className="relative z-20 flex flex-col items-center text-center max-w-4xl">
        <div className="chapter-badge mb-3">
          <span>(</span>
          <span className="text-walton-amber text-xs">●</span>
          <span>03</span>
          <span className="text-walton-amber text-xs">●</span>
          <span>)</span>
        </div>

        <h2 className="font-editorial text-[40px] sm:text-[62px] md:text-[80px] font-bold leading-[1.0] text-[#12110e] tracking-tight">
          Confidence on Stage: <br />
          <span className="italic font-normal text-[#d69b3e]">Saili's 566K+ TEDx Keynote</span>
        </h2>

        <p className="mt-6 text-sm sm:text-base text-walton-muted max-w-2xl leading-relaxed font-sans">
          Great speaking is about speaking from the heart and connecting with real people. Saili shared this simple truth at TEDxDTSS College of Law, inspiring over half a million listeners worldwide.
        </p>
      </div>

      {/* 1. COMPARATIVE AGENCY MATRIX */}
      <div className="relative z-10 w-full max-w-5xl my-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Column A: Dashed Box (Conventional Stage Anchoring) */}
          <div className="p-6 sm:p-8 rounded-sm border-2 border-dashed border-[#dad8ce] bg-[#faf8f4]/60 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-[11px] font-bold uppercase tracking-[0.16em] text-walton-muted">
                  Ordinary Host
                </span>
                <span className="px-2 py-0.5 bg-[#dad8ce] text-[#12110e] text-[10px] font-bold uppercase rounded-[2px]">
                  Script-Bound
                </span>
              </div>

              <h4 className="font-editorial text-2xl font-bold text-[#12110e] mb-3">
                “Reading Words Off a Page”
              </h4>

              <p className="text-xs text-walton-muted leading-relaxed font-sans mb-6">
                When tech glitches happen or VIPs are delayed, script-readers freeze up. The room goes quiet and awkward.
              </p>

              <div className="space-y-3">
                <div className="p-3 bg-white/70 border border-[#dad8ce] rounded-sm flex items-center justify-between">
                  <span className="text-xs font-medium text-walton-muted">Guests lose interest during pauses</span>
                  <span className="px-2 py-0.5 bg-[#e7e72b] text-[11px] font-bold text-[#12110e] rounded-sm font-mono">
                    78%
                  </span>
                </div>
                <div className="p-3 bg-white/70 border border-[#dad8ce] rounded-sm flex items-center justify-between">
                  <span className="text-xs font-medium text-walton-muted">Feels robotic and impersonal</span>
                  <span className="px-2 py-0.5 bg-[#e7e72b] text-[11px] font-bold text-[#12110e] rounded-sm font-mono">
                    64%
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-[#dad8ce] text-[11px] font-semibold text-walton-muted">
              Result: A stiff, formal event that guests quickly forget.
            </div>
          </div>

          {/* Column B: Solid Box (Anchor Saili's Expressive Agency) */}
          <div className="p-6 sm:p-8 rounded-sm border-2 border-[#12110e] bg-white shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-[11px] font-bold uppercase tracking-[0.16em] text-walton-primary">
                  Anchor Saili
                </span>
                <span className="px-2 py-0.5 bg-[#0D6199] text-white text-[10px] font-bold uppercase rounded-[2px]">
                  Natural Connection
                </span>
              </div>

              <h4 className="font-editorial text-2xl font-bold text-[#12110e] mb-3">
                “Warm, Quick & Spontaneous”
              </h4>

              <p className="text-xs text-walton-muted leading-relaxed font-sans mb-6">
                With 18 years of experience, Saili turns sudden pauses into fun moments with light humor, easy conversation, and genuine warmth.
              </p>

              <div className="space-y-3">
                <div className="p-3 bg-walton-canvas border border-[#dad8ce] rounded-sm flex items-center justify-between">
                  <span className="text-xs font-bold text-[#12110e]">Audience stays smiling & engaged all day</span>
                  <span className="px-2 py-0.5 bg-[#e7e72b] text-[11px] font-bold text-[#12110e] rounded-sm font-mono">
                    99%
                  </span>
                </div>
                <div className="p-3 bg-walton-canvas border border-[#dad8ce] rounded-sm flex items-center justify-between">
                  <span className="text-xs font-bold text-[#12110e]">Clients who happily book again</span>
                  <span className="px-2 py-0.5 bg-[#0D6199] text-[11px] font-bold text-white rounded-sm font-mono">
                    100%
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-[#dad8ce] text-[11px] font-bold text-[#12110e] flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-walton-amber" />
              <span>Result: High energy, happy guests, and smooth event flow.</span>
            </div>
          </div>
        </div>
      </div>

      {/* 2. THE TEDxDTSS COLLEGE OF LAW SPOTLIGHT TILE */}
      <div className="relative z-10 w-full max-w-5xl my-6 bg-[#12110e] text-white rounded-md overflow-hidden border border-[#12110e] shadow-xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
          {/* Left: Video Player Interactive Surface */}
          <div className="lg:col-span-7 p-6 sm:p-10 relative flex flex-col justify-between">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-2">
                <span className="text-[#EB0028] font-black text-2xl tracking-tighter">
                  TED<sup className="text-xs font-bold text-[#EB0028]">x</sup>
                </span>
                <span className="text-white/60 text-xs tracking-wider uppercase border-l border-white/20 pl-2">
                  DTSS College of Law
                </span>
              </div>
              <span className="px-2.5 py-1 bg-[#EB0028] text-white text-[10px] font-bold tracking-widest uppercase rounded-[2px]">
                566K+ Views
              </span>
            </div>

            {/* Video Thumbnail Hover Card Using Saili's Real Stage Image */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              onClick={() => setVideoModalOpen(true)}
              className="relative aspect-video w-full rounded-sm overflow-hidden border border-white/15 cursor-pointer group shadow-2xl bg-black"
            >
              <Image
                src="/saili/saili-conference-mic.webp"
                alt="Anchor Saili TEDx Talk Keynote"
                fill
                className="object-cover object-top brightness-90 group-hover:brightness-100 transition-all duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent flex flex-col items-center justify-center p-4">
                <div className="w-16 h-16 rounded-full bg-[#EB0028] text-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform mb-3">
                  <Play className="w-7 h-7 fill-current ml-1" />
                </div>
                <span className="text-white text-sm font-bold tracking-wide">
                  Watch Keynote: “When Children's Growth Begins Outside Home”
                </span>
                <span className="text-white/60 text-xs mt-1">14:28 min • Official TEDx Channel</span>
              </div>
            </motion.div>

            <div className="mt-4 flex items-center justify-between text-xs text-white/60">
              <span>Speaker: Anchor Saili Rawool Panchal</span>
              <button
                onClick={() => setVideoModalOpen(true)}
                className="text-white hover:text-[#EB0028] font-semibold flex items-center gap-1 underline underline-offset-4"
              >
                Expand Video <ExternalLink className="w-3 h-3" />
              </button>
            </div>
          </div>

          {/* Right: Editorial Quotes & Takeaways */}
          <div className="lg:col-span-5 p-6 sm:p-10 bg-[#1a1917] border-t lg:border-t-0 lg:border-l border-white/10 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <Quote className="w-4 h-4 text-walton-amber" />
                <span className="text-[11px] font-bold uppercase tracking-[0.16em] text-walton-amber">
                  The Key Message
                </span>
              </div>

              <blockquote className="font-editorial text-xl sm:text-2xl font-bold text-white leading-snug mb-4">
                “Daycare is not something parents should feel guilty about; it is where children first learn to share, make friends, and find their voice.”
              </blockquote>

              <p className="text-xs text-white/70 leading-relaxed font-sans mb-6">
                Saili explains how learning to communicate and socialize outside the home gives children the confidence they need to become fearless adults and strong speakers.
              </p>

              <div className="space-y-2 pt-4 border-t border-white/10 text-xs text-white/80">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#e7e72b] shrink-0" />
                  <span>Freeing parents from everyday guilt</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#e7e72b] shrink-0" />
                  <span>How kids build confidence around friends</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#e7e72b] shrink-0" />
                  <span>The simple foundation behind her adult workshops</span>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-white/10">
              <button
                onClick={() => setVideoModalOpen(true)}
                className="w-full walton-pill-btn-primary justify-center text-xs"
              >
                Watch TEDx Talk (14 Mins)
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Video Modal */}
      <AnimatePresence>
        {videoModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md"
            onClick={() => setVideoModalOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-4xl bg-[#12110e] rounded-md overflow-hidden border border-white/20 shadow-2xl"
            >
              <div className="flex items-center justify-between p-4 bg-[#1a1917] border-b border-white/10 text-white">
                <div className="flex items-center gap-2 text-xs">
                  <span className="text-[#EB0028] font-bold">TEDxDTSS College of Law</span>
                  <span className="text-white/40">|</span>
                  <span>Anchor Saili Rawool Panchal</span>
                </div>
                <button
                  onClick={() => setVideoModalOpen(false)}
                  className="p-1 hover:bg-white/10 rounded-sm text-white/70 hover:text-white"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="relative aspect-video w-full bg-black">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/5UaE5gC2W0c?autoplay=1&rel=0"
                  title="Saili Rawool Panchal TEDx Talk"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
