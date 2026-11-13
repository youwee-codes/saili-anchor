"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Palette, Baby, ExternalLink, ArrowRight, Heart, Award, Sparkles } from "lucide-react";

export default function EcosystemVentures() {
  const ventures = [
    {
      id: "art-zone",
      title: "Saili's Art Zone",
      role: "Founder & Creative Director",
      founded: "Est. 2008",
      image: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?q=80&w=800&auto=format&fit=crop",
      icon: Palette,
      badge: "Arts & Performing Academy",
      description:
        "A premier creative sanctuary in Navi Mumbai dedicated to holistic expressive arts. Conducting disciplined and joyful programs across visual painting, classical & modern dance, vocal music, and artisanal handicrafts for children and adults.",
      highlights: [
        "Annual Student Showcases & Stage Curation",
        "Sangeet & Theatrical Choreography Labs",
        "Fine Art Exhibitions & Certification",
      ],
      location: "Vashi, Navi Mumbai",
    },
    {
      id: "little-cubs",
      title: "Little Cubs Preschool & Daycare",
      role: "Director & Early Education Pedagogist",
      founded: "18+ Years Legacy",
      image: "https://images.unsplash.com/photo-1587654780291-39c9404d746b?q=80&w=800&auto=format&fit=crop",
      icon: Baby,
      badge: "Early Childhood Development",
      description:
        "The living laboratory behind her TEDx talk 'When Children's Growth Begins Outside Home'. Little Cubs champions safe, emotionally intelligent social environments where toddlers cultivate independence, resilience, and communicative courage.",
      highlights: [
        "Zero-Parental-Guilt Daycare Framework",
        "Sensory & Social Architecture Curriculum",
        "Safe, Nurturing Community Ecosystem",
      ],
      location: "Navi Mumbai, Maharashtra",
    },
  ];

  return (
    <section id="ecosystem" className="w-full bg-[#FFFFFF] py-16 sm:py-24 border-b border-walton-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header adhering to Walton Editorial Typography */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-6 border-b border-walton-border">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2 h-2 rounded-full bg-walton-primary" />
              <span className="text-[12px] font-semibold tracking-[0.04em] uppercase text-walton-primary">
                Chapter 06 / Entrepreneurial Ventures & Pedagogy
              </span>
            </div>
            <h2 className="headline-lg text-[#1A1A1A]">
              The Saili Rawool Panchal Ecosystem
            </h2>
          </div>
          <p className="mt-4 md:mt-0 text-walton-secondary text-[14px] max-w-md leading-relaxed">
            Stage authority is forged through eighteen years of nurturing human expression from the earliest years of life.
          </p>
        </div>

        {/* 2-Column Venture Spreads */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {ventures.map((venture, index) => {
            const Icon = venture.icon;
            return (
              <motion.div
                key={venture.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="bg-walton-neutral rounded-md border border-walton-border overflow-hidden hover:border-walton-primary/40 transition-colors flex flex-col justify-between"
              >
                <div>
                  {/* Photo Header */}
                  <div className="relative h-60 w-full overflow-hidden">
                    <Image
                      src={venture.image}
                      alt={venture.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white">
                      <div>
                        <span className="text-[10px] uppercase font-bold tracking-widest px-2 py-0.5 bg-white/20 backdrop-blur-sm rounded-sm">
                          {venture.badge}
                        </span>
                        <h3 className="text-xl font-bold mt-1 text-white">{venture.title}</h3>
                      </div>
                      <span className="text-xs font-semibold text-white/80">{venture.founded}</span>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <Icon className="w-4 h-4 text-walton-primary" />
                      <span className="text-xs font-bold uppercase tracking-wider text-walton-primary">
                        {venture.role}
                      </span>
                    </div>

                    <p className="body-md text-walton-secondary mb-6 leading-relaxed">
                      {venture.description}
                    </p>

                    <div className="space-y-2 pt-4 border-t border-walton-border/70">
                      <span className="text-[11px] font-semibold uppercase tracking-wider text-walton-secondary">
                        Program Hallmarks
                      </span>
                      {venture.highlights.map((h, i) => (
                        <div key={i} className="flex items-center gap-2 text-xs text-walton-secondary">
                          <Sparkles className="w-3.5 h-3.5 text-walton-primary shrink-0" />
                          <span>{h}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Footer link */}
                <div className="p-6 pt-0">
                  <div className="pt-4 border-t border-walton-border flex items-center justify-between">
                    <span className="text-xs text-walton-tertiary">{venture.location}</span>
                    <a
                      href="https://wa.me/919324402404?text=Hi%20Saili,%20I%20would%20like%20to%20learn%20more%20about%20your%20ventures."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-semibold text-walton-primary hover:underline inline-flex items-center gap-1"
                    >
                      Inquire on WhatsApp <ArrowRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
