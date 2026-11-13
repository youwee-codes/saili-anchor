"use client";

import React from "react";
import Link from "next/link";
import { MessageCircle, Instagram, Linkedin, Mail, Phone, MapPin, ArrowUp, Globe } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="w-full bg-white border-t border-walton-border pt-16 pb-12 text-walton-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-walton-border">
          {/* Brand & Editorial Mission (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div>
              <span className="font-bold text-xl text-[#1A1A1A] tracking-tight block">
                SAILI RAWOOL PANCHAL
              </span>
              <span className="text-[11px] font-semibold text-walton-secondary tracking-[0.04em] uppercase block mt-0.5">
                Stage Host, TEDx Keynote Speaker & Speaking Coach
              </span>
            </div>

            <p className="body-md text-walton-secondary leading-relaxed">
              Serving Mumbai, Navi Mumbai, and destination stages globally. Committed to elevating public discourse, human celebration, and expressive confidence with institutional integrity.
            </p>

            <div className="pt-2">
              <a
                href="https://wa.me/919324402404?text=Hi%20Saili,%20I%20would%20like%20to%20connect%20with%20you."
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary-blue inline-flex text-xs py-2 h-[38px] min-w-0 px-4"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Direct WhatsApp: +91 93244 02404</span>
              </a>
            </div>
          </div>

          {/* Quick Chapters & Services (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-[0.06em] text-[#1A1A1A]">
              Chapters & Repertoire
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#overview" className="hover:text-walton-primary transition-colors">
                  01 / Keynote Overview
                </Link>
              </li>
              <li>
                <Link href="#metrics" className="hover:text-walton-primary transition-colors">
                  02 / 850+ Event Metrics
                </Link>
              </li>
              <li>
                <Link href="#tedx" className="hover:text-walton-primary transition-colors">
                  03 / TEDx Talk ("Growth Outside Home")
                </Link>
              </li>
              <li>
                <Link href="#services" className="hover:text-walton-primary transition-colors">
                  04 / Dual-Track Services (Stage & Coach)
                </Link>
              </li>
              <li>
                <Link href="#booking" className="hover:text-walton-primary transition-colors">
                  05 / Live Booking Terminal (₹999 / ₹2,499)
                </Link>
              </li>
              <li>
                <Link href="#ecosystem" className="hover:text-walton-primary transition-colors">
                  06 / Educational Ecosystem
                </Link>
              </li>
            </ul>
          </div>

          {/* Connected Ventures (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-[0.06em] text-[#1A1A1A]">
              Ecosystem
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="#ecosystem"
                  className="hover:text-walton-primary transition-colors block font-semibold text-[#1A1A1A]"
                >
                  Saili's Art Zone
                </a>
                <span className="text-xs text-walton-tertiary">Academy for Arts & Dance</span>
              </li>
              <li>
                <a
                  href="#ecosystem"
                  className="hover:text-walton-primary transition-colors block font-semibold text-[#1A1A1A]"
                >
                  Little Cubs Preschool
                </a>
                <span className="text-xs text-walton-tertiary">Early Childhood Development</span>
              </li>
              <li>
                <span className="block font-semibold text-[#1A1A1A] mt-2">Power Sessions</span>
                <span className="text-xs text-walton-tertiary">Vashi Studio & Online Zoom</span>
              </li>
            </ul>
          </div>

          {/* Contact & Social Credentials (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-[0.06em] text-[#1A1A1A]">
              Direct Contact & Socials
            </h4>
            <div className="space-y-2.5 text-xs">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-walton-primary shrink-0" />
                <a href="tel:+919324402404" className="hover:text-walton-primary transition-colors">
                  +91 93244 02404
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Instagram className="w-4 h-4 text-[#E1306C] shrink-0" />
                <a
                  href="https://instagram.com/anchor_saili"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-walton-primary transition-colors font-medium"
                >
                  @anchor_saili (Instagram)
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Linkedin className="w-4 h-4 text-walton-primary shrink-0" />
                <a
                  href="https://linkedin.com/in/saili-rawool-panchal"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-walton-primary transition-colors font-medium"
                >
                  Saili Rawool Panchal (LinkedIn)
                </a>
              </div>
              <div className="flex items-start gap-2 pt-1">
                <MapPin className="w-4 h-4 text-walton-primary shrink-0 mt-0.5" />
                <span>Sector 17, Vashi, Navi Mumbai, Maharashtra 400703, India</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Sub-Footer: Walton Institutional Compliance & Back To Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-walton-secondary gap-4">
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
            <span>© {new Date().getFullYear()} Anchor Saili Rawool Panchal. All Rights Reserved.</span>
            <span className="text-walton-border">|</span>
            <span>Design Language: Walton Institutional Editorial System</span>
            <span className="text-walton-border">|</span>
            <span>Built with Antigravity Engine (Next.js, Tailwind, Framer Motion)</span>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-xs font-semibold text-walton-primary hover:text-walton-primary-70 transition-colors uppercase tracking-wider"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
}
