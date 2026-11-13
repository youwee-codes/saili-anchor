"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Mic2, GraduationCap, Star, Users, MapPin, Calendar, Sparkles, ArrowRight } from "lucide-react";

export default function Chapter04DualTrack() {
  const [activeTab, setActiveTab] = useState<"host" | "coach">("host");

  return (
    <section
      id="chapter-04"
      className="relative min-h-screen w-full flex flex-col items-center justify-between py-24 px-6 sm:px-12 bg-[#FAF8F4] overflow-hidden select-none border-t border-[#dad8ce]"
    >
      {/* Chapter 04 Header */}
      <div className="relative z-20 flex flex-col items-center text-center max-w-4xl">
        <div className="chapter-badge mb-3">
          <span>(</span>
          <span className="text-walton-amber text-xs">●</span>
          <span>04</span>
          <span className="text-walton-amber text-xs">●</span>
          <span>)</span>
        </div>

        <h2 className="font-editorial text-[40px] sm:text-[62px] md:text-[80px] font-bold leading-[1.0] text-[#12110e] tracking-tight">
          Two Ways to Work Together: <br />
          <span className="italic font-normal text-[#d69b3e]">Stage Host & Speaking Coach</span>
        </h2>

        {/* Tab Switcher Pills */}
        <div className="mt-8 inline-flex p-1 bg-white border border-[#dad8ce] rounded-full shadow-sm">
          <button
            onClick={() => setActiveTab("host")}
            className={`px-6 py-2 rounded-full text-xs font-semibold tracking-wider uppercase transition-all duration-300 flex items-center gap-2 ${
              activeTab === "host"
                ? "bg-[#12110e] text-white shadow-sm"
                : "text-walton-muted hover:text-[#12110e]"
            }`}
          >
            <Mic2 className="w-3.5 h-3.5" />
            <span>The Stage Host</span>
          </button>
          <button
            onClick={() => setActiveTab("coach")}
            className={`px-6 py-2 rounded-full text-xs font-semibold tracking-wider uppercase transition-all duration-300 flex items-center gap-2 ${
              activeTab === "coach"
                ? "bg-[#12110e] text-white shadow-sm"
                : "text-walton-muted hover:text-[#12110e]"
            }`}
          >
            <GraduationCap className="w-3.5 h-3.5" />
            <span>The Speaking Coach</span>
          </button>
        </div>
      </div>

      {/* CONTENT AREA */}
      <div className="relative z-10 w-full max-w-5xl my-12">
        {activeTab === "host" ? (
          /* ================= TRACK A: THE STAGE HOST ================= */
          <motion.div
            key="host-content"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.35 }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
          >
            {/* Left: Fluid Photos using Real Saili Uploads */}
            <div className="lg:col-span-6 grid grid-cols-2 gap-4">
              <div className="relative h-80 rounded-sm overflow-hidden border border-[#dad8ce] shadow-sm bg-white">
                <Image
                  src="/saili/saili-award-stage.webp"
                  alt="Anchor Saili Live Stage Command"
                  fill
                  sizes="350px"
                  className="object-cover object-top hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-4">
                  <span className="text-white text-xs font-semibold uppercase tracking-wider">
                    Conclaves & Awards
                  </span>
                </div>
              </div>

              <div className="space-y-4">
                <div className="relative h-36 rounded-sm overflow-hidden border border-[#dad8ce] shadow-sm bg-white">
                  <Image
                    src="/saili/saili-white-suit.jpg"
                    alt="Anchor Saili in White Suit"
                    fill
                    sizes="200px"
                    className="object-cover object-top hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-3">
                    <span className="text-white text-[11px] font-semibold uppercase tracking-wider">
                      Celebrity Elegance
                    </span>
                  </div>
                </div>

                <div className="relative h-36 rounded-sm overflow-hidden border border-[#dad8ce] shadow-sm bg-white">
                  <Image
                    src="/saili/saili-corporate-red.webp"
                    alt="Anchor Saili in Red Power Blazer"
                    fill
                    sizes="200px"
                    className="object-cover object-top hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-3">
                    <span className="text-white text-[11px] font-semibold uppercase tracking-wider">
                      Keynote Direction
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Editorial Narrative & Repertoire */}
            <div className="lg:col-span-6 space-y-6">
              <span className="px-2.5 py-1 bg-white border border-[#dad8ce] text-walton-muted text-[10px] font-bold uppercase tracking-widest rounded-[2px]">
                850+ Live Shows Across India
              </span>

              <h3 className="font-editorial text-3xl sm:text-4xl font-bold text-[#12110e]">
                High-Energy Corporate Summits & Grand Weddings
              </h3>

              <p className="text-sm text-walton-muted font-sans leading-relaxed">
                From top business conferences in Mumbai to royal destination weddings across India, Saili keeps every event running smoothly on time with genuine warmth, quick wit, and zero awkward pauses.
              </p>

              <div className="grid grid-cols-2 gap-3 text-xs">
                <div className="p-3 bg-white border border-[#dad8ce] rounded-sm">
                  <strong className="block text-[#12110e] font-semibold">Corporate Summits</strong>
                  <span className="text-walton-muted text-[11px]">Award nights, annual meets, tech launches</span>
                </div>
                <div className="p-3 bg-white border border-[#dad8ce] rounded-sm">
                  <strong className="block text-[#12110e] font-semibold">Grand Weddings</strong>
                  <span className="text-walton-muted text-[11px]">Sangeet celebrations & family stories</span>
                </div>
                <div className="p-3 bg-white border border-[#dad8ce] rounded-sm">
                  <strong className="block text-[#12110e] font-semibold">Stage Choreography</strong>
                  <span className="text-walton-muted text-[11px]">Family performance & entry direction</span>
                </div>
                <div className="p-3 bg-white border border-[#dad8ce] rounded-sm">
                  <strong className="block text-[#12110e] font-semibold">3 Languages Fluent</strong>
                  <span className="text-walton-muted text-[11px]">English, Hindi, and Marathi</span>
                </div>
              </div>

              <div className="pt-2">
                <a
                  href="#chapter-07"
                  className="walton-pill-btn-primary"
                >
                  <span>Check Available Dates ↗</span>
                </a>
              </div>
            </div>
          </motion.div>
        ) : (
          /* ================= TRACK B: THE SPEAKING COACH ================= */
          <motion.div
            key="coach-content"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.35 }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
          >
            {/* Left: Masterclass Offering Cards */}
            <div className="lg:col-span-6 space-y-4">
              {/* Option 1: Offline Vashi Power Session */}
              <div className="p-6 bg-white border border-[#dad8ce] rounded-sm shadow-sm hover:border-[#12110e] transition-colors">
                <div className="flex items-start justify-between mb-2">
                  <span className="px-2 py-0.5 bg-[#FAF8F4] border border-[#dad8ce] text-[10px] font-bold uppercase tracking-wider text-[#12110e] rounded-[2px]">
                    In-Person Masterclass
                  </span>
                  <span className="font-editorial text-2xl font-bold text-[#12110e]">₹2,499</span>
                </div>

                <h4 className="font-editorial text-xl font-bold text-[#12110e] mt-1">
                  In-Person Power Session (Vashi, Navi Mumbai)
                </h4>

                <p className="text-xs text-walton-muted font-sans mt-2 leading-relaxed">
                  3 hours inside Saili's Vashi studio. Hands-on mic drills, voice modulation, and overcoming stage fear in small groups of 12.
                </p>

                <div className="mt-4 pt-3 border-t border-[#dad8ce] flex items-center justify-between text-xs">
                  <span className="text-walton-muted font-mono">Vashi Studio, Sector 17</span>
                  <a href="#chapter-07" className="font-bold text-walton-primary hover:underline">
                    Reserve Slot →
                  </a>
                </div>
              </div>

              {/* Option 2: 2-Day Virtual Bootcamp */}
              <div className="p-6 bg-[#fffcf8] border-2 border-[#d69b3e] rounded-sm shadow-sm relative">
                <div className="absolute -top-3 right-4 px-2.5 py-0.5 bg-[#d69b3e] text-white text-[9px] font-bold uppercase tracking-widest rounded-sm">
                  Join from Anywhere
                </div>

                <div className="flex items-start justify-between mb-2">
                  <span className="px-2 py-0.5 bg-white border border-[#dad8ce] text-[10px] font-bold uppercase tracking-wider text-[#12110e] rounded-[2px]">
                    Live Online on Zoom
                  </span>
                  <span className="font-editorial text-2xl font-bold text-[#0D6199]">₹999</span>
                </div>

                <h4 className="font-editorial text-xl font-bold text-[#12110e] mt-1">
                  2-Day Virtual Speaking Bootcamp
                </h4>

                <p className="text-xs text-walton-muted font-sans mt-2 leading-relaxed">
                  2 days (2 hours/day) live interactive masterclass. Learn how to speak without notes, handle surprise questions, and speak with confidence.
                </p>

                <div className="mt-4 pt-3 border-t border-[#dad8ce] flex items-center justify-between text-xs">
                  <span className="text-walton-muted font-mono">Interactive Zoom Session</span>
                  <a href="#chapter-07" className="font-bold text-[#0D6199] hover:underline">
                    Book Instant ₹999 Seat →
                  </a>
                </div>
              </div>
            </div>

            {/* Right: Real Images of Saili Teaching + Philosophy */}
            <div className="lg:col-span-6 space-y-6">
              <div className="grid grid-cols-2 gap-3">
                <div className="relative h-40 rounded-sm overflow-hidden border border-[#dad8ce] shadow-sm bg-white">
                  <Image
                    src="/saili/saili-virtual-desk.webp"
                    alt="Anchor Saili Conducting Masterclass"
                    fill
                    sizes="220px"
                    className="object-cover object-top"
                  />
                  <div className="absolute bottom-2 left-2 px-1.5 py-0.5 bg-white/95 text-[9px] font-bold uppercase tracking-wider text-[#12110e] rounded-[2px]">
                    1-on-1 Guidance
                  </div>
                </div>

                <div className="relative h-40 rounded-sm overflow-hidden border border-[#dad8ce] shadow-sm bg-white">
                  <Image
                    src="/saili/saili-zoom-tablet.webp"
                    alt="Zoom Attendees Interactive Screen"
                    fill
                    sizes="220px"
                    className="object-cover"
                  />
                  <div className="absolute bottom-2 left-2 px-1.5 py-0.5 bg-black/80 text-white text-[9px] font-bold uppercase tracking-wider rounded-[2px]">
                    Live Zoom Batch
                  </div>
                </div>
              </div>

              <h3 className="font-editorial text-3xl font-bold text-[#12110e]">
                Stage Fear is Just Energy Waiting to be Channeled
              </h3>

              <p className="text-sm text-walton-muted font-sans leading-relaxed">
                Drawing on 18 years of mentoring both young children and corporate leaders, Saili shares simple, practical exercises that turn nervousness into calm, clear vocal power.
              </p>

              <div className="pt-2">
                <a href="#chapter-07" className="walton-pill-btn-primary">
                  <span>See Upcoming Dates ↗</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
}
