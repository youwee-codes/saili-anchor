"use client";

import React from "react";
import Image from "next/image";
import { Palette, Baby, Award, Share2 } from "lucide-react";

export default function Chapter05Pedagogy() {
  return (
    <section
      id="chapter-05"
      className="relative min-h-screen w-full flex flex-col items-center justify-between py-24 px-6 sm:px-12 bg-[#fffcf8] overflow-hidden select-none border-t border-[#dad8ce]"
    >
      {/* Chapter 05 Header */}
      <div className="relative z-20 flex flex-col items-center text-center max-w-4xl">
        <div className="chapter-badge mb-3">
          <span>(</span>
          <span className="text-walton-amber text-xs">●</span>
          <span>05</span>
          <span className="text-walton-amber text-xs">●</span>
          <span>)</span>
        </div>

        <h2 className="font-editorial text-[40px] sm:text-[62px] md:text-[80px] font-bold leading-[1.0] text-[#12110e] tracking-tight">
          18 Years of Experience: <br />
          <span className="italic font-normal text-[#d69b3e]">Building Confidence from the Ground Up</span>
        </h2>

        <p className="mt-6 text-sm sm:text-base text-walton-muted max-w-2xl leading-relaxed font-sans">
          Long before hosting major stages, Saili started teaching kids and adults how to speak up, express themselves, and feel comfortable in front of people.
        </p>
      </div>

      {/* STAT CALLOUT CARDS (Direct Match to Walton Education Stats: 57%, 80%, 61%) */}
      <div className="relative z-10 w-full max-w-5xl my-12 grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Stat Card 1 */}
        <div className="p-6 bg-white border border-[#dad8ce] rounded-sm shadow-sm flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-4">
              <span className="px-2 py-0.5 bg-[#e7e72b] text-[10px] font-bold uppercase rounded-[2px] text-[#12110e]">
                Stage Mastery
              </span>
              <span className="text-xs font-mono text-walton-muted">01</span>
            </div>
            <div className="font-editorial text-5xl font-bold text-[#12110e] mb-2 tracking-tight">
              850+
            </div>
            <h4 className="font-editorial text-lg font-bold text-[#12110e] mb-2">
              Live Events Hosted
            </h4>
            <p className="text-xs text-walton-muted leading-relaxed font-sans">
              Corporate summits, luxury weddings, and award shows across India, all managed smoothly without awkward pauses.
            </p>
          </div>
          <div className="mt-6 pt-4 border-t border-[#dad8ce] flex items-center justify-between text-xs text-walton-muted">
            <span>Stage Record</span>
            <span className="text-walton-primary font-bold">100% Live</span>
          </div>
        </div>

        {/* Stat Card 2 */}
        <div className="p-6 bg-[#fffcf8] border-2 border-[#12110e] rounded-sm shadow-sm flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-4">
              <span className="px-2 py-0.5 bg-[#EB0028] text-[10px] font-bold uppercase rounded-[2px] text-white">
                TEDx Speaker
              </span>
              <span className="text-xs font-mono text-walton-muted">02</span>
            </div>
            <div className="font-editorial text-5xl font-bold text-[#12110e] mb-2 tracking-tight">
              566K+
            </div>
            <h4 className="font-editorial text-lg font-bold text-[#12110e] mb-2">
              TEDx Talk Views
            </h4>
            <p className="text-xs text-walton-muted leading-relaxed font-sans">
              Her keynote at DTSS College of Law, “When Children's Growth Begins Outside Home”, sparked worldwide conversations.
            </p>
          </div>
          <div className="mt-6 pt-4 border-t border-[#dad8ce] flex items-center justify-between text-xs text-walton-muted">
            <span>Global Reach</span>
            <span className="text-[#EB0028] font-bold">Official Talk</span>
          </div>
        </div>

        {/* Stat Card 3 */}
        <div className="p-6 bg-white border border-[#dad8ce] rounded-sm shadow-sm flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-4">
              <span className="px-2 py-0.5 bg-[#5f8763] text-[10px] font-bold uppercase rounded-[2px] text-white">
                Coaching
              </span>
              <span className="text-xs font-mono text-walton-muted">03</span>
            </div>
            <div className="font-editorial text-5xl font-bold text-[#12110e] mb-2 tracking-tight">
              18+
            </div>
            <h4 className="font-editorial text-lg font-bold text-[#12110e] mb-2">
              Years Teaching
            </h4>
            <p className="text-xs text-walton-muted leading-relaxed font-sans">
              Founder of Little Cubs Preschool and Saili’s Art Zone in Vashi, mentoring both young children and adult professionals.
            </p>
          </div>
          <div className="mt-6 pt-4 border-t border-[#dad8ce] flex items-center justify-between text-xs text-walton-muted">
            <span>Vashi, Navi Mumbai</span>
            <span className="text-[#5f8763] font-bold">Est. 2008</span>
          </div>
        </div>
      </div>

      {/* 2-Column Ecosystem Feature with Saili's Mentorship Photos */}
      <div className="relative z-10 w-full max-w-5xl my-6 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="p-6 bg-[#FAF8F4] border border-[#dad8ce] rounded-sm flex flex-col sm:flex-row items-start gap-4">
          <div className="relative w-24 h-24 rounded-sm overflow-hidden shrink-0 border border-[#dad8ce]">
            <Image
              src="/saili/saili-white-suit.jpg"
              alt="Saili Rawool Panchal"
              fill
              className="object-cover"
            />
          </div>
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="p-1 bg-white border border-[#dad8ce] rounded-sm text-walton-primary shrink-0">
                <Palette className="w-3.5 h-3.5" />
              </span>
              <span className="text-[10px] font-bold uppercase tracking-wider text-walton-muted">Creative Studio</span>
            </div>
            <h4 className="font-editorial text-xl font-bold text-[#12110e]">Saili's Art Zone</h4>
            <p className="text-xs text-walton-muted font-sans mt-1 leading-relaxed">
              Navi Mumbai’s trusted studio in Sector 17, Vashi for painting, classical and modern dance, vocal training, and crafts.
            </p>
          </div>
        </div>

        <div className="p-6 bg-[#FAF8F4] border border-[#dad8ce] rounded-sm flex flex-col sm:flex-row items-start gap-4">
          <div className="relative w-24 h-24 rounded-sm overflow-hidden shrink-0 border border-[#dad8ce]">
            <Image
              src="/saili/saili-zoom-tablet.webp"
              alt="Little Cubs Mentorship"
              fill
              className="object-cover"
            />
          </div>
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="p-1 bg-white border border-[#dad8ce] rounded-sm text-[#d69b3e] shrink-0">
                <Baby className="w-3.5 h-3.5" />
              </span>
              <span className="text-[10px] font-bold uppercase tracking-wider text-walton-muted">Early Learning</span>
            </div>
            <h4 className="font-editorial text-xl font-bold text-[#12110e]">Little Cubs Preschool & Daycare</h4>
            <p className="text-xs text-walton-muted font-sans mt-1 leading-relaxed">
              The warm preschool center behind her TEDx talk, helping children make friends, build confidence, and speak freely.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
