"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Play, X, ExternalLink, Quote, Sparkles, CheckCircle, Volume2, Shield } from "lucide-react";

export default function TedxSpotlight() {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  return (
    <section id="tedx" className="w-full bg-walton-neutral py-16 sm:py-24 border-b border-walton-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Editorial Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-6 border-b border-walton-border">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2 h-2 rounded-full bg-[#EB0028]" />
              <span className="text-[12px] font-semibold tracking-[0.04em] uppercase text-[#EB0028]">
                Chapter 03 / TEDx Keynote Spotlight
              </span>
            </div>
            <h2 className="headline-lg text-[#1A1A1A]">
              When Children's Growth Begins Outside Home
            </h2>
          </div>
          <div className="mt-4 md:mt-0 flex items-center gap-3">
            <span className="px-3 py-1 bg-white border border-walton-border rounded-sm text-[12px] font-semibold text-walton-secondary">
              TEDxDTSS College of Law
            </span>
            <span className="px-3 py-1 bg-[#EB0028] text-white rounded-sm text-[12px] font-semibold tracking-wider">
              566K+ VIEWS
            </span>
          </div>
        </div>

        {/* Master Spotlight Layout: Walton Editorial Frame + TEDx Aesthetic Tile */}
        <div className="bg-white rounded-md border border-walton-border overflow-hidden shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
            {/* Left: Floating Interactive Video Asset (Classic TEDx Red & Black Aesthetic) */}
            <div className="lg:col-span-7 bg-[#111111] p-6 sm:p-10 relative flex flex-col justify-between overflow-hidden group">
              {/* Subtle Red Ambient Gradient */}
              <div className="absolute -top-24 -left-24 w-80 h-80 rounded-full bg-[#EB0028]/15 blur-3xl pointer-events-none" />

              {/* TEDx Top Institutional Label */}
              <div className="relative z-10 flex items-center justify-between mb-8">
                <div className="flex items-center gap-2">
                  <span className="text-[#EB0028] font-black text-2xl tracking-tighter">
                    TED<sup className="text-xs font-bold text-[#EB0028]">x</sup>
                  </span>
                  <span className="text-white/60 text-xs tracking-wider uppercase border-l border-white/20 pl-2">
                    DTSS College of Law
                  </span>
                </div>
                <div className="flex items-center gap-2 text-white/70 text-xs">
                  <span className="w-2 h-2 rounded-full bg-[#EB0028] animate-ping" />
                  <span className="font-semibold text-white/90">Official Keynote</span>
                </div>
              </div>

              {/* Interactive Video Player Asset Container that Expands on Hover */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                onClick={() => setIsVideoModalOpen(true)}
                className="relative z-10 w-full aspect-video rounded-sm overflow-hidden cursor-pointer border border-white/10 group/player shadow-2xl bg-[#000000]"
              >
                <Image
                  src="https://images.unsplash.com/photo-1475721027785-f74eccf877e2?q=80&w=1200&auto=format&fit=crop"
                  alt="Saili Rawool Panchal TEDx Talk Stage"
                  fill
                  className="object-cover transition-transform duration-700 group-hover/player:scale-105 filter brightness-90 group-hover/player:brightness-100"
                />

                {/* Video Play Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex flex-col items-center justify-center p-6 text-center">
                  <motion.div
                    whileHover={{ scale: 1.15 }}
                    className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#EB0028] text-white flex items-center justify-center shadow-lg transition-transform mb-4"
                  >
                    <Play className="w-8 h-8 fill-current ml-1" />
                  </motion.div>
                  <span className="text-white font-semibold text-sm sm:text-base tracking-wide">
                    Click to Watch Keynote Presentation
                  </span>
                  <span className="text-white/60 text-xs mt-1">
                    Duration: 14:28 | 566,000+ Verified Organic Views
                  </span>
                </div>

                {/* Bottom Video Progress Bar (Simulation) */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/20">
                  <div className="h-full bg-[#EB0028] w-2/3" />
                </div>
              </motion.div>

              {/* Video Footer Footnote */}
              <div className="relative z-10 mt-6 pt-4 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between text-xs text-white/70 gap-2">
                <span className="flex items-center gap-1.5">
                  <Volume2 className="w-3.5 h-3.5 text-[#EB0028]" />
                  Original Audio in English & Hindi | High-Definition Recording
                </span>
                <button
                  onClick={() => setIsVideoModalOpen(true)}
                  className="text-white hover:text-[#EB0028] underline underline-offset-4 font-semibold inline-flex items-center gap-1 transition-colors"
                >
                  Watch in Expanded Theater <ExternalLink className="w-3 h-3" />
                </button>
              </div>
            </div>

            {/* Right: Editorial Theses & Analytical Takeaways (Walton Clean Rules) */}
            <div className="lg:col-span-5 p-6 sm:p-10 flex flex-col justify-between bg-white">
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <Quote className="w-5 h-5 text-walton-primary" />
                  <span className="text-[12px] font-semibold uppercase tracking-[0.04em] text-walton-primary">
                    Thematic Premise
                  </span>
                </div>

                <blockquote className="text-[17px] font-semibold text-[#1A1A1A] leading-snug mb-6 border-l-2 border-walton-primary pl-4">
                  “Daycare and communal learning are not compromises born of maternal guilt; they are the fertile soil where emotional resilience, empathy, and social courage first take root.”
                </blockquote>

                <p className="body-md text-walton-secondary mb-6">
                  Drawing from 18 years founding Little Cubs Preschool and Saili’s Art Zone, Saili dismantled the entrenched societal stigma confronting modern working parents.
                  Her speech has become a canonical reference for educators, corporate working mothers, and early childhood psychologists.
                </p>

                {/* Key Core Takeaways */}
                <div className="space-y-4 pt-4 border-t border-walton-border">
                  <h4 className="text-[12px] font-semibold uppercase tracking-[0.06em] text-walton-secondary">
                    Core Pillars of the Talk
                  </h4>

                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-4 h-4 text-walton-primary mt-0.5 shrink-0" />
                    <div>
                      <strong className="text-sm font-semibold text-[#1A1A1A]">Deconstructing Parental Guilt:</strong>
                      <p className="text-xs text-walton-secondary mt-0.5">
                        Freeing parents from the myth that 24/7 domestic proximity alone creates well-adjusted children.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-4 h-4 text-walton-primary mt-0.5 shrink-0" />
                    <div>
                      <strong className="text-sm font-semibold text-[#1A1A1A]">Social & Emotional Architecture:</strong>
                      <p className="text-xs text-walton-secondary mt-0.5">
                        How diverse peer communities spark organic negotiation, empathy, and boundary-setting.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-4 h-4 text-walton-primary mt-0.5 shrink-0" />
                    <div>
                      <strong className="text-sm font-semibold text-[#1A1A1A]">Communication Confidence:</strong>
                      <p className="text-xs text-walton-secondary mt-0.5">
                        The exact pedagogical methods she applies both to toddler self-expression and adult stage speaking.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-8 pt-6 border-t border-walton-border flex flex-col sm:flex-row gap-3">
                <button
                  onClick={() => setIsVideoModalOpen(true)}
                  className="btn-primary-blue w-full sm:w-auto"
                >
                  <Play className="w-4 h-4" />
                  <span>Launch Video Modal</span>
                </button>
                <a
                  href="#booking"
                  className="btn-secondary w-full sm:w-auto text-center"
                >
                  Book Speaking Session
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Fullscreen Video Modal */}
      <AnimatePresence>
        {isVideoModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md"
            onClick={() => setIsVideoModalOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-4xl bg-[#111111] rounded-md overflow-hidden border border-white/20 shadow-2xl"
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between p-4 bg-[#1A1A1A] border-b border-white/10 text-white">
                <div className="flex items-center gap-2">
                  <span className="text-[#EB0028] font-bold text-sm">TEDxDTSS College of Law</span>
                  <span className="text-white/40">|</span>
                  <span className="text-xs text-white/80 font-medium truncate max-w-xs sm:max-w-md">
                    Saili Rawool Panchal: When Children's Growth Begins Outside Home
                  </span>
                </div>
                <button
                  onClick={() => setIsVideoModalOpen(false)}
                  className="p-1 rounded-sm text-white/60 hover:text-white hover:bg-white/10"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Video Embed Frame */}
              <div className="relative aspect-video w-full bg-black">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/5UaE5gC2W0c?autoplay=1&rel=0"
                  title="Saili Rawool Panchal TEDx Talk"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>

              {/* Modal Footer info */}
              <div className="p-4 bg-[#141414] text-xs text-white/70 flex flex-col sm:flex-row justify-between items-center gap-2">
                <span>Keynote Talk recorded live at DTSS College of Law, Mumbai</span>
                <span className="text-[#EB0028] font-semibold">566,000+ Views • TEDx Global Conferences</span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
