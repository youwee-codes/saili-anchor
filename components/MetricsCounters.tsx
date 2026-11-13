"use client";

import React, { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Award, Eye, Users, Clock, Sparkles } from "lucide-react";

interface CounterProps {
  end: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
}

function AnimatedCounter({ end, duration = 2000, suffix = "", prefix = "" }: CounterProps) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (!isInView) return;
    let startTime: number | null = null;
    let animationFrameId: number;

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      // Ease out cubic
      const easeOut = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(easeOut * end));

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(step);
      } else {
        setCount(end);
      }
    };

    animationFrameId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animationFrameId);
  }, [isInView, end, duration]);

  return (
    <span ref={ref} className="tabular-nums">
      {prefix}
      {count.toLocaleString("en-IN")}
      {suffix}
    </span>
  );
}

export default function MetricsCounters() {
  const metrics = [
    {
      id: "events",
      number: 850,
      suffix: "+",
      label: "Live Events Hosted",
      category: "Stage Mastery",
      description:
        "High-stakes corporate summits, luxury destination weddings, government conventions, and high-energy sangeet direction across India.",
      icon: Award,
    },
    {
      id: "tedx",
      number: 566000,
      suffix: "+",
      label: "TEDx Talk Views",
      category: "Thought Leadership",
      description:
        "Viral keynote at TEDxDTSS College of Law: 'When Children's Growth Begins Outside Home' sparking nationwide parenting dialogues.",
      icon: Eye,
      highlight: true,
    },
    {
      id: "experience",
      number: 18,
      suffix: "+",
      label: "Years Educating & Mentoring",
      category: "Institutional Pedagogy",
      description:
        "Director at Saili’s Art Zone and Little Cubs Preschool, shaping early cognitive courage and public communicative confidence.",
      icon: Clock,
    },
    {
      id: "attendees",
      number: 100000,
      suffix: "+",
      label: "Live Audience Impact",
      category: "Reach & Connection",
      description:
        "Delegates, wedding families, students, and corporate leaders guided through authentic, captivating, and flawless transitions.",
      icon: Users,
    },
  ];

  return (
    <section id="metrics" className="w-full bg-[#FFFFFF] py-16 sm:py-24 border-b border-walton-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header adhering to Walton Editorial Typography */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-6 border-b border-walton-border">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2 h-2 rounded-full bg-walton-primary" />
              <span className="text-[12px] font-semibold tracking-[0.04em] uppercase text-walton-primary">
                Chapter 02 / Empirical Track Record
              </span>
            </div>
            <h2 className="headline-lg text-[#1A1A1A]">
              Impact Measured in Human Connection & Scale
            </h2>
          </div>
          <p className="mt-4 md:mt-0 text-walton-secondary text-[14px] max-w-md leading-relaxed">
            Every engagement is engineered with precision, psychological crowd resonance, and spontaneous stage grace.
          </p>
        </div>

        {/* 3D Kinetic Metric Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {metrics.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{
                  y: -6,
                  transition: { duration: 0.3, ease: "easeOut" },
                }}
                className={`group relative rounded-md p-6 border transition-all duration-300 ${
                  item.highlight
                    ? "bg-[#F9FAFB] border-walton-primary/40 shadow-sm"
                    : "bg-walton-neutral border-walton-border hover:border-walton-primary/30 hover:bg-white"
                }`}
              >
                {/* Top Category Badge */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[11px] font-semibold uppercase tracking-[0.06em] text-walton-primary bg-white px-2.5 py-1 rounded-sm border border-walton-border">
                    {item.category}
                  </span>
                  <div className="p-2 rounded-sm bg-white border border-walton-border text-walton-secondary group-hover:text-walton-primary transition-colors">
                    <Icon className="w-4 h-4" />
                  </div>
                </div>

                {/* Animated Stat Value */}
                <div className="headline-display text-[#1A1A1A] group-hover:text-walton-primary transition-colors mb-2">
                  <AnimatedCounter end={item.number} suffix={item.suffix} />
                </div>

                {/* Label */}
                <h3 className="headline-sm text-[#1A1A1A] mb-3 text-[18px]">
                  {item.label}
                </h3>

                {/* Description */}
                <p className="body-md text-walton-secondary">
                  {item.description}
                </p>

                {/* Subtle bottom indicator line on hover */}
                <div className="mt-6 pt-4 border-t border-walton-border/60 flex items-center justify-between text-[12px] font-semibold text-walton-secondary">
                  <span className="text-[11px] uppercase tracking-wider text-walton-tertiary">Verified Metric</span>
                  <Sparkles className="w-3.5 h-3.5 text-walton-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
