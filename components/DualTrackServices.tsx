"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Mic2, GraduationCap, CheckCircle2, ArrowRight, Calendar, Users, MapPin, Sparkles, Star } from "lucide-react";

export default function DualTrackServices() {
  const [activeTab, setActiveTab] = useState<"stage" | "coach">("stage");

  return (
    <section id="services" className="w-full bg-[#FFFFFF] py-16 sm:py-24 border-b border-walton-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header adhering to Walton Editorial Typography */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-6 border-b border-walton-border">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2 h-2 rounded-full bg-walton-primary" />
              <span className="text-[12px] font-semibold tracking-[0.04em] uppercase text-walton-primary">
                Chapter 04 / Dual-Track Architecture
              </span>
            </div>
            <h2 className="headline-lg text-[#1A1A1A]">
              Two Disciplines. One Singular Standard of Excellence.
            </h2>
          </div>

          {/* Editorial Tab Switcher (Walton Button Rules) */}
          <div className="mt-6 md:mt-0 inline-flex p-1 bg-walton-neutral rounded-sm border border-walton-border">
            <button
              onClick={() => setActiveTab("stage")}
              className={`px-5 py-2 rounded-sm text-xs font-semibold uppercase tracking-wider transition-all duration-300 flex items-center gap-2 ${
                activeTab === "stage"
                  ? "bg-white text-walton-primary shadow-sm border border-walton-border"
                  : "text-walton-secondary hover:text-walton-primary"
              }`}
            >
              <Mic2 className="w-4 h-4" />
              <span>Track A: The Stage Host</span>
            </button>
            <button
              onClick={() => setActiveTab("coach")}
              className={`px-5 py-2 rounded-sm text-xs font-semibold uppercase tracking-wider transition-all duration-300 flex items-center gap-2 ${
                activeTab === "coach"
                  ? "bg-white text-walton-primary shadow-sm border border-walton-border"
                  : "text-walton-secondary hover:text-walton-primary"
              }`}
            >
              <GraduationCap className="w-4 h-4" />
              <span>Track B: The Speaking Coach</span>
            </button>
          </div>
        </div>

        {/* Magazine-Style Presentation */}
        {activeTab === "stage" ? (
          /* ================= TRACK A: THE STAGE HOST ================= */
          <motion.div
            key="stage-track"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center"
          >
            {/* Left Column: Fluid Masking Event Photo Grid with clipping reveal */}
            <div className="lg:col-span-6 grid grid-cols-2 gap-4">
              <motion.div
                initial={{ clipPath: "inset(12% 0% 12% 0%)" }}
                whileInView={{ clipPath: "inset(0% 0% 0% 0%)" }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className="relative h-[340px] rounded-md overflow-hidden border border-walton-border shadow-sm group"
              >
                <Image
                  src="https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=800&auto=format&fit=crop"
                  alt="Corporate Gala Stage Anchoring"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-4">
                  <span className="text-white text-xs font-semibold uppercase tracking-wider">
                    Corporate Summits & Awards
                  </span>
                </div>
              </motion.div>

              <div className="space-y-4">
                <motion.div
                  initial={{ clipPath: "inset(15% 0% 15% 0%)" }}
                  whileInView={{ clipPath: "inset(0% 0% 0% 0%)" }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                  className="relative h-[162px] rounded-md overflow-hidden border border-walton-border shadow-sm group"
                >
                  <Image
                    src="https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=800&auto=format&fit=crop"
                    alt="Luxury Weddings & Sangeet"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-3">
                    <span className="text-white text-[11px] font-semibold uppercase tracking-wider">
                      Celebrity Weddings & Sangeet
                    </span>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ clipPath: "inset(15% 0% 15% 0%)" }}
                  whileInView={{ clipPath: "inset(0% 0% 0% 0%)" }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                  className="relative h-[162px] rounded-md overflow-hidden border border-walton-border shadow-sm group"
                >
                  <Image
                    src="https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?q=80&w=800&auto=format&fit=crop"
                    alt="Choreography & Stage Direction"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-3">
                    <span className="text-white text-[11px] font-semibold uppercase tracking-wider">
                      Concept & Choreography Direction
                    </span>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Right Column: Editorial Descriptions */}
            <div className="lg:col-span-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-walton-neutral rounded-sm border border-walton-border mb-4">
                <Mic2 className="w-3.5 h-3.5 text-walton-primary" />
                <span className="text-[11px] font-semibold uppercase tracking-[0.06em] text-walton-secondary">
                  Live Stage Mastery
                </span>
              </div>

              <h3 className="headline-md text-[#1A1A1A] mb-4">
                Corporate Elegance, High-Energy Festivities & Spontaneous Command
              </h3>

              <p className="body-lg text-walton-secondary mb-6 leading-relaxed">
                Hosting an event is not reading scripts—it is conducting the room’s emotional pulse. With 850+ live shows spanning CXO conferences in BKC to grand palace weddings in Udaipur, Saili orchestrates zero dead-air environments, effortless VIP management, and contagious celebration.
              </p>

              {/* Service Specs Breakdown */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                <div className="p-4 rounded-md bg-walton-neutral border border-walton-border">
                  <h4 className="text-sm font-bold text-[#1A1A1A] mb-1 flex items-center gap-1.5">
                    <Star className="w-4 h-4 text-walton-primary" />
                    Corporate Conclaves
                  </h4>
                  <p className="text-xs text-walton-secondary">
                    Award ceremonies, product rollouts, global summits with tight timecodes & protocol.
                  </p>
                </div>

                <div className="p-4 rounded-md bg-walton-neutral border border-walton-border">
                  <h4 className="text-sm font-bold text-[#1A1A1A] mb-1 flex items-center gap-1.5">
                    <Sparkles className="w-4 h-4 text-walton-primary" />
                    Luxury Weddings
                  </h4>
                  <p className="text-xs text-walton-secondary">
                    Heartfelt storytelling, interactive guest banter, and unforgettable sangeet euphoria.
                  </p>
                </div>

                <div className="p-4 rounded-md bg-walton-neutral border border-walton-border">
                  <h4 className="text-sm font-bold text-[#1A1A1A] mb-1 flex items-center gap-1.5">
                    <Users className="w-4 h-4 text-walton-primary" />
                    Sangeet Choreography
                  </h4>
                  <p className="text-xs text-walton-secondary">
                    Complete dance direction, family performance curation, and theatrical sequencing.
                  </p>
                </div>

                <div className="p-4 rounded-md bg-walton-neutral border border-walton-border">
                  <h4 className="text-sm font-bold text-[#1A1A1A] mb-1 flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-walton-primary" />
                    Bilingual Fluency
                  </h4>
                  <p className="text-xs text-walton-secondary">
                    Seamless delivery across English, Hindi, and Marathi suited to cosmopolitan audiences.
                  </p>
                </div>
              </div>

              {/* Action Buttons adhering to Walton rules */}
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="#booking"
                  className="btn-primary-blue"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Check Stage Calendar</span>
                </a>
                <a
                  href="https://wa.me/919324402404?text=Hi%20Saili,%20I%20would%20like%20to%20discuss%20booking%20you%20for%20an%20upcoming%20event."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary"
                >
                  Direct WhatsApp Inquiry
                </a>
              </div>
            </div>
          </motion.div>
        ) : (
          /* ================= TRACK B: THE SPEAKING COACH ================= */
          <motion.div
            key="coach-track"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center"
          >
            {/* Left Column: Workshop Offering Cards */}
            <div className="lg:col-span-6 space-y-6">
              {/* Option 1: Offline Power Sessions in Vashi */}
              <div className="p-6 rounded-md bg-walton-neutral border border-walton-border hover:border-walton-primary transition-all group">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <span className="text-[11px] font-semibold uppercase tracking-[0.06em] text-walton-primary bg-white px-2.5 py-1 rounded-sm border border-walton-border">
                      In-Person Intensive
                    </span>
                    <h4 className="text-lg font-bold text-[#1A1A1A] mt-2">
                      Live Anchoring Power Sessions (Offline)
                    </h4>
                  </div>
                  <div className="text-right">
                    <span className="text-xs text-walton-secondary line-through">₹4,999</span>
                    <div className="text-xl font-bold text-[#1A1A1A]">₹2,499</div>
                  </div>
                </div>

                <div className="flex items-center gap-4 text-xs text-walton-secondary mb-4">
                  <span className="flex items-center gap-1 font-medium">
                    <MapPin className="w-3.5 h-3.5 text-walton-primary" /> Vashi, Navi Mumbai Studio
                  </span>
                  <span className="flex items-center gap-1 font-medium">
                    <Calendar className="w-3.5 h-3.5 text-walton-primary" /> 3-Hour Immersive
                  </span>
                  <span className="flex items-center gap-1 font-medium">
                    <Users className="w-3.5 h-3.5 text-walton-primary" /> Limited to 12 Seats
                  </span>
                </div>

                <p className="text-xs text-walton-secondary mb-4 leading-relaxed">
                  Direct mic-handling, real-time stage fright neutralization, vocal modulation drills, and spontaneous teleprompter-free hosting simulations under Saili's personal guidance.
                </p>

                <a
                  href="#booking"
                  className="btn-primary w-full text-center"
                >
                  Reserve Seat in Terminal
                </a>
              </div>

              {/* Option 2: Online 2-Day Virtual Bootcamp (₹999) */}
              <div className="p-6 rounded-md bg-white border-2 border-walton-primary/30 shadow-sm relative group">
                <div className="absolute -top-3 right-4 bg-walton-primary text-white text-[10px] font-bold uppercase tracking-widest px-3 py-0.5 rounded-sm">
                  Most Popular
                </div>

                <div className="flex items-start justify-between mb-3">
                  <div>
                    <span className="text-[11px] font-semibold uppercase tracking-[0.06em] text-walton-primary bg-walton-neutral px-2.5 py-1 rounded-sm border border-walton-border">
                      Virtual Masterclass
                    </span>
                    <h4 className="text-lg font-bold text-[#1A1A1A] mt-2">
                      2-Day Virtual Anchoring Bootcamp (Online)
                    </h4>
                  </div>
                  <div className="text-right">
                    <span className="text-xs text-walton-secondary line-through">₹2,499</span>
                    <div className="text-2xl font-bold text-walton-primary">₹999</div>
                  </div>
                </div>

                <div className="flex items-center gap-4 text-xs text-walton-secondary mb-4">
                  <span className="flex items-center gap-1 font-medium">
                    <Users className="w-3.5 h-3.5 text-walton-primary" /> Zoom Live Interactive
                  </span>
                  <span className="flex items-center gap-1 font-medium">
                    <Calendar className="w-3.5 h-3.5 text-walton-primary" /> 2 Days (2 Hrs/Day)
                  </span>
                  <span className="flex items-center gap-1 font-medium">
                    <Sparkles className="w-3.5 h-3.5 text-walton-primary" /> Certificate & Toolkit
                  </span>
                </div>

                <p className="text-xs text-walton-secondary mb-4 leading-relaxed">
                  Accessible to aspiring emcees, corporate professionals, college speakers, and content creators across India. Includes lifetime community access & script templates.
                </p>

                <a
                  href="#booking"
                  className="btn-primary-blue w-full text-center"
                >
                  Book Instant ₹999 Ticket
                </a>
              </div>
            </div>

            {/* Right Column: Pedagogical Pillars */}
            <div className="lg:col-span-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-walton-neutral rounded-sm border border-walton-border mb-4">
                <GraduationCap className="w-3.5 h-3.5 text-walton-primary" />
                <span className="text-[11px] font-semibold uppercase tracking-[0.06em] text-walton-secondary">
                  Empowering The Next Wave of Communicators
                </span>
              </div>

              <h3 className="headline-md text-[#1A1A1A] mb-4">
                Transforming Stage Panic Into Expressive Authority
              </h3>

              <p className="body-lg text-walton-secondary mb-6 leading-relaxed">
                Public speaking is not an innate genetic gift; it is an engineered discipline of nervous-system regulation, voice placement, and audience psychology. Saili translates her 850+ live shows and 18 years in education into actionable frameworks.
              </p>

              <div className="space-y-3 mb-8">
                <div className="flex items-start gap-3 p-3 rounded-sm bg-walton-neutral/60 border border-walton-border">
                  <CheckCircle2 className="w-4 h-4 text-walton-primary mt-1 shrink-0" />
                  <div>
                    <h5 className="text-sm font-bold text-[#1A1A1A]">Voice Modulation & Breath Anchor</h5>
                    <p className="text-xs text-walton-secondary">Command vocal gravity without vocal strain or breathless rushing.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 rounded-sm bg-walton-neutral/60 border border-walton-border">
                  <CheckCircle2 className="w-4 h-4 text-walton-primary mt-1 shrink-0" />
                  <div>
                    <h5 className="text-sm font-bold text-[#1A1A1A]">The 3-Second Script Recovery Law</h5>
                    <p className="text-xs text-walton-secondary">How to pivot gracefully when AV fails, VIPs run late, or words vanish.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 rounded-sm bg-walton-neutral/60 border border-walton-border">
                  <CheckCircle2 className="w-4 h-4 text-walton-primary mt-1 shrink-0" />
                  <div>
                    <h5 className="text-sm font-bold text-[#1A1A1A]">Crowd Chemistry & Micro-Interactions</h5>
                    <p className="text-xs text-walton-secondary">Turning passive spectators into responsive, smiling participants.</p>
                  </div>
                </div>
              </div>

              <div className="p-4 rounded-md bg-walton-primary/5 border border-walton-primary/20 flex items-center justify-between">
                <div>
                  <span className="text-xs font-semibold text-walton-primary uppercase tracking-wider">Next Batch Closing Soon</span>
                  <p className="text-xs text-walton-secondary mt-0.5">Seats strictly capped to maintain individual microphone time.</p>
                </div>
                <a
                  href="#booking"
                  className="text-xs font-bold text-walton-primary hover:underline flex items-center gap-1"
                >
                  View Dates <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
}
