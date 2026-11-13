"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowUpRight, MessageCircle, List, ChevronRight, Mic } from "lucide-react";

interface FloatingControlsProps {
  activeChapter: number;
  onNavigateChapter: (chapterNumber: number) => void;
}

export default function FloatingControls({
  activeChapter,
  onNavigateChapter,
}: FloatingControlsProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [chapterDrawerOpen, setChapterDrawerOpen] = useState(false);

  const chapters = [
    { num: 1, id: "chapter-01", title: "Where Anchor Saili Takes the Stage", desc: "850+ Live Shows Across India" },
    { num: 2, id: "chapter-02", title: "Why Great Anchoring Matters", desc: "Reading the Crowd & Keeping Energy High" },
    { num: 3, id: "chapter-03", title: "566K+ Views on TEDx", desc: "TEDx Keynote on Confidence & Parenting" },
    { num: 4, id: "chapter-04", title: "Stage Host & Speaking Coach", desc: "Event Hosting & Personal Training" },
    { num: 5, id: "chapter-05", title: "18 Years of Experience", desc: "Little Cubs Preschool & Saili's Art Zone" },
    { num: 6, id: "chapter-06", title: "What You Will Learn", desc: "4 Simple Steps to Speaking with Confidence" },
    { num: 7, id: "chapter-07", title: "Book Your Workshop Seat", desc: "Online (₹999) & In-Person Vashi (₹2,499)" },
    { num: 8, id: "chapter-08", title: "Connect with Saili", desc: "Direct WhatsApp & Studio Inquiries" },
  ];

  return (
    <>
      {/* 1. TOP BRAND EMBLEM: PROMINENTLY CELEBRATING & HIGHLIGHTING "ANCHOR SAILI" */}
      <header className="fixed top-5 left-1/2 -translate-x-1/2 z-40 pointer-events-auto">
        <Link
          href="#chapter-01"
          className="flex flex-col items-center group cursor-pointer select-none bg-white/80 backdrop-blur-md px-5 py-2 rounded-full border border-walton-border/70 shadow-sm transition-all hover:bg-white hover:shadow-md"
        >
          {/* Highlighted Brand Title */}
          <div className="flex items-center gap-2">
            <span className="font-editorial text-lg sm:text-xl font-bold tracking-tight text-walton-ink group-hover:text-walton-primary transition-colors uppercase">
              ANCHOR SAILI
            </span>
            <span className="text-walton-border text-xs">|</span>
            <span className="text-[10px] font-bold tracking-[0.18em] uppercase text-[#d69b3e]">
              STAGE HOST & COACH
            </span>
          </div>

          {/* 3 Iconic Color Squares (Amber, Sage Green, Walton Blue) */}
          <div className="flex items-center gap-1.5 mt-1">
            <div className="w-2 h-1 rounded-[1px] bg-walton-amber" />
            <div className="w-2 h-1 rounded-[1px] bg-walton-teal" />
            <div className="w-2 h-1 rounded-[1px] bg-walton-primary" />
          </div>
        </Link>
      </header>

      {/* 2. TOP RIGHT FLOATING MENU PILL BUTTON */}
      <div className="fixed top-5 right-6 sm:right-8 z-50">
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="walton-pill-btn group bg-white/90 backdrop-blur-md shadow-sm hover:shadow-md"
          aria-label="Toggle Menu"
        >
          <span className="tracking-[0.18em] font-bold text-xs">
            {menuOpen ? "C L O S E" : "M E N U"}
          </span>
          <div className="w-4 h-3 flex flex-col justify-between items-end">
            <span
              className={`h-[1.5px] bg-current transition-all duration-300 ${
                menuOpen ? "w-4 translate-y-[5px] rotate-45" : "w-4"
              }`}
            />
            <span
              className={`h-[1.5px] bg-current transition-all duration-300 ${
                menuOpen ? "opacity-0" : "w-2.5 group-hover:w-4"
              }`}
            />
            <span
              className={`h-[1.5px] bg-current transition-all duration-300 ${
                menuOpen ? "w-4 -translate-y-[5.5px] -rotate-45" : "w-3.5 group-hover:w-4"
              }`}
            />
          </div>
        </button>
      </div>

      {/* 3. RIGHT-SIDE FLOATING CHAPTER PROGRESS PILL */}
      <div className="fixed right-6 sm:right-8 top-1/2 -translate-y-1/2 z-40 hidden md:flex flex-col items-center">
        <div className="bg-white/90 backdrop-blur-md border border-walton-border/70 rounded-full py-3 px-2 shadow-pill flex flex-col items-center gap-3">
          {/* Chapter Drawer Toggle Icon */}
          <button
            onClick={() => setChapterDrawerOpen(!chapterDrawerOpen)}
            className="p-1 rounded-full text-walton-muted hover:text-walton-ink transition-colors"
            title="Open Chapter Index"
          >
            {chapterDrawerOpen ? (
              <X className="w-3.5 h-3.5 text-walton-ink" />
            ) : (
              <List className="w-3.5 h-3.5" />
            )}
          </button>

          <div className="w-3 h-[1px] bg-walton-border" />

          {/* 8 Dot Indicators */}
          <div className="flex flex-col gap-2">
            {chapters.map((ch) => (
              <button
                key={ch.num}
                onClick={() => onNavigateChapter(ch.num)}
                className="group relative flex items-center justify-center p-1"
                aria-label={`Jump to Chapter ${ch.num}`}
              >
                <span
                  className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                    activeChapter === ch.num
                      ? "bg-walton-ink scale-150"
                      : "bg-walton-border group-hover:bg-walton-muted"
                  }`}
                />
                <span className="absolute right-7 px-2 py-0.5 bg-walton-ink text-white text-[10px] font-semibold whitespace-nowrap rounded-sm opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none uppercase tracking-wider">
                  0{ch.num} • {ch.title}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* 4. BOTTOM FLOATING BAR: 01 / 08 + CTA BUTTON */}
      <div className="fixed bottom-6 left-6 right-6 sm:left-8 sm:right-8 z-40 flex items-center justify-between pointer-events-none">
        {/* Dynamic Chapter Counter */}
        <div className="pointer-events-auto bg-white/95 backdrop-blur-md border border-walton-border/70 rounded-full px-4 py-2 shadow-pill flex items-center gap-3 text-xs font-semibold text-walton-muted">
          <span className="font-editorial text-base font-bold text-walton-ink">
            0{activeChapter}
          </span>
          <span className="text-walton-border">/</span>
          <span className="text-walton-subtle">08</span>
        </div>

        {/* Letter-Spaced CTA Pill Button (Gladeye Signature) */}
        <div className="pointer-events-auto flex items-center gap-3">
          <a
            href="https://wa.me/919324402404?text=Hi%20Saili,%20I%20would%20like%20to%20inquire%20about%20booking%20you."
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex walton-pill-btn bg-white/95 backdrop-blur-md"
          >
            <MessageCircle className="w-3.5 h-3.5 text-walton-primary" />
            <span>W h a t s A p p</span>
          </a>

          <a
            href="#chapter-07"
            onClick={(e) => {
              e.preventDefault();
              onNavigateChapter(7);
            }}
            className="walton-pill-btn-primary"
          >
            <span>B · o · o · k · W · o · r · k · s · h · o · p</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>

      {/* 5. FULL SITE NAVIGATION DRAWER */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm flex justify-end"
            onClick={() => setMenuOpen(false)}
          >
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 28, stiffness: 220 }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-md bg-[#FAF8F4] h-full shadow-drawer p-8 sm:p-12 flex flex-col justify-between overflow-y-auto border-l border-walton-border"
            >
              <div>
                <div className="flex items-center justify-between pb-6 mb-8 border-b border-walton-border">
                  <div>
                    <span className="font-editorial text-2xl font-bold uppercase tracking-tight text-walton-ink block">
                      ANCHOR SAILI
                    </span>
                    <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#d69b3e]">
                      Repertoire & Masterclasses
                    </span>
                  </div>
                  <button
                    onClick={() => setMenuOpen(false)}
                    className="p-2 rounded-full hover:bg-walton-border/40 text-walton-ink transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <nav className="space-y-4">
                  {chapters.map((ch) => (
                    <button
                      key={ch.num}
                      onClick={() => {
                        onNavigateChapter(ch.num);
                        setMenuOpen(false);
                      }}
                      className={`w-full text-left p-3 rounded-sm transition-all group flex items-start gap-4 ${
                        activeChapter === ch.num
                          ? "bg-white border-l-4 border-walton-ink shadow-sm"
                          : "hover:bg-white/60"
                      }`}
                    >
                      <span className="font-editorial text-lg text-walton-muted font-bold group-hover:text-walton-ink">
                        0{ch.num}
                      </span>
                      <div>
                        <h4 className="font-editorial text-xl font-bold text-walton-ink group-hover:text-walton-primary transition-colors">
                          {ch.title}
                        </h4>
                        <p className="text-xs text-walton-muted mt-0.5">{ch.desc}</p>
                      </div>
                    </button>
                  ))}
                </nav>
              </div>

              <div className="pt-8 border-t border-walton-border text-xs text-walton-muted space-y-2">
                <div className="flex justify-between">
                  <span>Direct WhatsApp:</span>
                  <a
                    href="https://wa.me/919324402404"
                    className="font-bold text-walton-ink hover:text-walton-primary"
                  >
                    +91 93244 02404
                  </a>
                </div>
                <div className="flex justify-between">
                  <span>Instagram:</span>
                  <a
                    href="https://instagram.com/anchor_saili"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-bold text-walton-ink hover:text-walton-primary"
                  >
                    @anchor_saili
                  </a>
                </div>
                <div className="flex justify-between">
                  <span>Studio Location:</span>
                  <span className="text-walton-ink">Sector 17, Vashi, Navi Mumbai</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 6. IN-PAGE CHAPTER DRAWER */}
      <AnimatePresence>
        {chapterDrawerOpen && (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            transition={{ duration: 0.25 }}
            className="fixed right-20 top-1/2 -translate-y-1/2 z-40 bg-white/95 backdrop-blur-md border border-walton-border rounded-lg shadow-drawer p-5 w-80"
          >
            <div className="flex items-center justify-between pb-3 mb-3 border-b border-walton-border">
              <span className="text-[11px] font-bold uppercase tracking-[0.14em] text-walton-muted">
                Table of Chapters
              </span>
              <button
                onClick={() => setChapterDrawerOpen(false)}
                className="text-walton-muted hover:text-walton-ink"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            </div>

            <div className="space-y-1.5 max-h-[60vh] overflow-y-auto pr-1">
              {chapters.map((ch) => (
                <button
                  key={ch.num}
                  onClick={() => {
                    onNavigateChapter(ch.num);
                    setChapterDrawerOpen(false);
                  }}
                  className={`w-full text-left p-2 rounded-sm text-xs transition-colors flex items-center justify-between group ${
                    activeChapter === ch.num
                      ? "bg-walton-canvas text-walton-ink font-bold border-l-2 border-walton-ink"
                      : "text-walton-muted hover:bg-walton-canvas hover:text-walton-ink"
                  }`}
                >
                  <span className="truncate pr-2">
                    <span className="text-[10px] text-walton-subtle mr-2 font-mono">
                      0{ch.num}
                    </span>
                    {ch.title}
                  </span>
                  <ChevronRight className="w-3 h-3 text-walton-subtle opacity-0 group-hover:opacity-100 transition-opacity" />
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
