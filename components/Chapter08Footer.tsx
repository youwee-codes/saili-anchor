"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { MessageCircle, Instagram, Linkedin, ArrowUp, ArrowRight, MapPin, Phone } from "lucide-react";

export default function Chapter08Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const relatedTracks = [
    {
      title: "Corporate Summits & Launches",
      desc: "Annual conferences, tech launches, and award nights managed with energy and timing.",
      category: "Stage Host",
      image: "/saili/saili-corporate-red.webp",
      link: "https://wa.me/919324402404?text=Hi%20Saili,%20I%20am%20inquiring%20about%20corporate%20anchoring.",
    },
    {
      title: "Weddings & Sangeet Nights",
      desc: "Warm hosting, interactive family moments, and dance choreography for your celebrations.",
      category: "Weddings",
      image: "/saili/saili-award-stage.webp",
      link: "https://wa.me/919324402404?text=Hi%20Saili,%20I%20am%20inquiring%20about%20wedding%20anchoring.",
    },
    {
      title: "Saili's Art Zone",
      desc: "Creative academy in Vashi for painting, classical and modern dance, and vocal training.",
      category: "Vashi Studio",
      image: "/saili/saili-white-suit.jpg",
      link: "https://wa.me/919324402404?text=Hi%20Saili,%20I%20would%20like%20to%20learn%20about%20Art%20Zone.",
    },
    {
      title: "Speaking Power Sessions",
      desc: "Practical 2-day virtual workshops and weekend offline sessions in Vashi to speak without fear.",
      category: "Workshops",
      image: "/saili/saili-zoom-tablet.webp",
      link: "https://wa.me/919324402404?text=Hi%20Saili,%20I%20would%20like%20to%20learn%20about%20the%20bootcamp.",
    },
  ];

  return (
    <footer
      id="chapter-08"
      className="relative w-full pt-24 pb-16 px-6 sm:px-12 bg-[#FAF8F4] overflow-hidden select-none border-t border-[#dad8ce]"
    >
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Chapter 08 Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="chapter-badge mb-3">
            <span>(</span>
            <span className="text-walton-amber text-xs">●</span>
            <span>08</span>
            <span className="text-walton-amber text-xs">●</span>
            <span>)</span>
          </div>

          <h2 className="font-editorial text-[40px] sm:text-[62px] md:text-[80px] font-bold leading-[1.0] text-[#12110e] tracking-tight">
            Let's Connect: <br />
            <span className="italic font-normal text-[#d69b3e]">Get in Touch with Saili</span>
          </h2>

          <p className="mt-4 text-sm sm:text-base text-walton-muted max-w-xl font-sans">
            Planning an upcoming event or looking to improve your public speaking? Reach out directly below.
          </p>
        </div>

        {/* EXPLORE RELATED CONTENT CARDS (Matching Walton Footer Grid) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {relatedTracks.map((item, idx) => (
            <a
              key={idx}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group p-4 bg-white border border-[#dad8ce] rounded-sm hover:border-[#12110e] transition-all flex flex-col justify-between shadow-sm"
            >
              <div>
                <div className="relative aspect-[16/10] w-full rounded-[2px] overflow-hidden mb-3 bg-[#FAF8F4]">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-2 left-2 px-1.5 py-0.5 bg-white/90 text-[#12110e] text-[9px] font-bold uppercase tracking-wider rounded-[2px]">
                    {item.category}
                  </div>
                </div>

                <h4 className="font-editorial text-lg font-bold text-[#12110e] group-hover:text-walton-primary transition-colors">
                  {item.title}
                </h4>

                <p className="text-xs text-walton-muted font-sans mt-1 line-clamp-2">
                  {item.desc}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-[#dad8ce] flex items-center justify-between text-xs text-walton-primary font-semibold">
                <span>Inquire on WhatsApp</span>
                <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
              </div>
            </a>
          ))}
        </div>

        {/* INSTITUTIONAL CONTACT STRIP */}
        <div className="p-8 bg-white border border-[#dad8ce] rounded-sm shadow-sm mb-16 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <span className="font-editorial text-2xl font-bold text-[#12110e] block">
              Book Anchor Saili for Your Next Event
            </span>
            <p className="text-xs text-walton-muted font-sans mt-1">
              Sector 17, Vashi, Navi Mumbai, Maharashtra 400703, India
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <a
              href="https://wa.me/919324402404?text=Hi%20Saili,%20I%20would%20like%20to%20connect%20regarding%20an%20event."
              target="_blank"
              rel="noopener noreferrer"
              className="walton-pill-btn-primary text-xs"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>WhatsApp: +91 93244 02404</span>
            </a>

            <a
              href="https://instagram.com/anchor_saili"
              target="_blank"
              rel="noopener noreferrer"
              className="walton-pill-btn text-xs"
            >
              <Instagram className="w-3.5 h-3.5 text-[#E1306C]" />
              <span>@anchor_saili</span>
            </a>

            <a
              href="https://linkedin.com/in/saili-rawool-panchal"
              target="_blank"
              rel="noopener noreferrer"
              className="walton-pill-btn text-xs"
            >
              <Linkedin className="w-3.5 h-3.5 text-walton-primary" />
              <span>LinkedIn</span>
            </a>
          </div>
        </div>

        {/* BOTTOM METADATA & COMPLIANCE (Matching Walton Footer Bottom) */}
        <div className="pt-8 border-t border-[#dad8ce] flex flex-col sm:flex-row items-center justify-between text-xs text-walton-muted gap-4 font-sans">
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1">
            <span>© {new Date().getFullYear()} Anchor Saili Rawool Panchal</span>
            <span>•</span>
            <span>Walton Family Foundation Editorial Architecture</span>
            <span>•</span>
            <span>Antigravity Engine</span>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-xs font-semibold text-[#12110e] hover:text-walton-primary transition-colors uppercase tracking-wider"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
