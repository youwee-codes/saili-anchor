"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ArrowUpRight, MessageCircle } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Overview", href: "#overview" },
    { label: "Core Metrics", href: "#metrics" },
    { label: "TEDx Spotlight", href: "#tedx" },
    { label: "Dual Services", href: "#services" },
    { label: "Booking Terminal", href: "#booking" },
    { label: "Ecosystem", href: "#ecosystem" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white/95 backdrop-blur-md border-b ${
        isScrolled ? "border-walton-border shadow-editorial" : "border-walton-border/70"
      }`}
    >
      {/* Editorial Chapter Signpost Top Bar */}
      <div className="hidden lg:block bg-walton-neutral text-walton-secondary text-[11px] font-semibold tracking-[0.06em] uppercase py-1 px-8 border-b border-walton-border">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            <span className="text-walton-primary font-bold">PORTFOLIO & BOOKING REPORT</span>
            <span className="text-walton-tertiary">|</span>
            <span>MUMBAI & NAVI MUMBAI, IN</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-walton-secondary">TEDx TALK VIEWS: 566K+</span>
            <span className="text-walton-tertiary">|</span>
            <span className="text-walton-secondary">EVENTS HOSTED: 850+</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-[64px] sm:h-[72px]">
          {/* Brand Identity / Monogram */}
          <Link href="#overview" className="group flex flex-col justify-center">
            <span className="font-bold text-[18px] sm:text-[20px] tracking-tight text-[#1A1A1A] group-hover:text-walton-primary transition-colors">
              SAILI RAWOOL PANCHAL
            </span>
            <span className="text-[11px] font-semibold tracking-[0.04em] text-walton-secondary uppercase">
              Stage Host & Speaking Coach
            </span>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-6 lg:space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-[14px] font-semibold text-walton-secondary hover:text-walton-primary transition-colors duration-300 py-2 relative group"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-walton-primary transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </nav>

          {/* Quick CTA Actions */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href="https://wa.me/919324402404?text=Hi%20Saili,%20I%20would%20like%20to%20inquire%20about%20booking%20you%20for%20an%20event%20/%20workshop."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              <MessageCircle className="w-4 h-4 text-walton-primary" />
              <span>Inquire on WhatsApp</span>
            </a>
          </div>

          {/* Mobile Hamburger Toggle */}
          <div className="flex md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-sm text-walton-secondary hover:text-walton-primary hover:bg-walton-neutral"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-walton-border px-6 py-6 shadow-editorial">
          <nav className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-[15px] font-semibold text-walton-secondary hover:text-walton-primary transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-4 border-t border-walton-border flex flex-col gap-3">
              <a
                href="#booking"
                onClick={() => setMobileMenuOpen(false)}
                className="btn-primary-blue w-full"
              >
                Book Masterclass Terminal
              </a>
              <a
                href="https://wa.me/919324402404"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary w-full"
              >
                WhatsApp (+91 93244 02404)
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
