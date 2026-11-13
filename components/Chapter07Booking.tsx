"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Calendar as CalendarIcon,
  Clock,
  MapPin,
  ShieldCheck,
  CreditCard,
  Smartphone,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  Check,
  Download,
  MessageCircle,
} from "lucide-react";

interface WorkshopDate {
  date: number;
  day: string;
  month: string;
  year: number;
  fullDateStr: string;
  type: "online" | "offline-vashi";
  title: string;
  time: string;
  seatsLeft: number;
  price: number;
  location: string;
}

export default function Chapter07Booking() {
  const [selectedType, setSelectedType] = useState<"all" | "online" | "offline-vashi">("all");

  const availableSlots: WorkshopDate[] = [
    {
      date: 18,
      day: "Wed",
      month: "Nov",
      year: 2026,
      fullDateStr: "November 18, 2026",
      type: "online",
      title: "2-Day Virtual Anchoring Bootcamp (Day 1)",
      time: "07:30 PM - 09:30 PM IST",
      seatsLeft: 6,
      price: 999,
      location: "Live via Zoom (Private Access)",
    },
    {
      date: 22,
      day: "Sun",
      month: "Nov",
      year: 2026,
      fullDateStr: "November 22, 2026",
      type: "offline-vashi",
      title: "Live Anchoring Power Sessions (Offline Vashi)",
      time: "10:00 AM - 01:00 PM IST",
      seatsLeft: 3,
      price: 2499,
      location: "Saili's Art Zone Studio, Sector 17, Vashi, Navi Mumbai",
    },
    {
      date: 28,
      day: "Sat",
      month: "Nov",
      year: 2026,
      fullDateStr: "November 28, 2026",
      type: "online",
      title: "Weekend Virtual Masterclass (2-Day Bootcamp)",
      time: "06:00 PM - 08:00 PM IST",
      seatsLeft: 8,
      price: 999,
      location: "Live via Zoom (Private Access)",
    },
    {
      date: 6,
      day: "Sun",
      month: "Dec",
      year: 2026,
      fullDateStr: "December 6, 2026",
      type: "offline-vashi",
      title: "VIP Stage Presence Masterclass (Offline Vashi)",
      time: "10:30 AM - 01:30 PM IST",
      seatsLeft: 4,
      price: 2499,
      location: "Saili's Art Zone Studio, Sector 17, Vashi, Navi Mumbai",
    },
    {
      date: 12,
      day: "Sat",
      month: "Dec",
      year: 2026,
      fullDateStr: "December 12, 2026",
      type: "online",
      title: "2-Day Virtual Anchoring Bootcamp (December Batch)",
      time: "07:00 PM - 09:00 PM IST",
      seatsLeft: 10,
      price: 999,
      location: "Live via Zoom (Private Access)",
    },
  ];

  const [selectedSlot, setSelectedSlot] = useState<WorkshopDate | null>(availableSlots[0]);
  const [checkoutStep, setCheckoutStep] = useState<"details" | "payment" | "processing" | "success">("details");
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    city: "Mumbai / Navi Mumbai",
    paymentMethod: "upi",
  });
  const [paymentRefId, setPaymentRefId] = useState("");

  const filteredSlots = availableSlots.filter(
    (slot) => selectedType === "all" || slot.type === selectedType
  );

  const handleSelectSlot = (slot: WorkshopDate) => {
    setSelectedSlot(slot);
    setCheckoutStep("details");
  };

  const handleProceedToPayment = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.email || !formData.phone) {
      alert("Please enter your name, email, and WhatsApp number.");
      return;
    }
    setCheckoutStep("payment");
  };

  const handleSimulatePayment = () => {
    setCheckoutStep("processing");
    setTimeout(() => {
      const generatedRef = "RZP_" + Math.random().toString(36).substring(2, 9).toUpperCase();
      setPaymentRefId(generatedRef);
      setCheckoutStep("success");
    }, 1600);
  };

  return (
    <section
      id="chapter-07"
      className="relative min-h-screen w-full flex flex-col items-center justify-between py-24 px-6 sm:px-12 bg-[#fffcf8] overflow-hidden select-none border-t border-[#dad8ce]"
    >
      {/* Chapter 07 Header */}
      <div className="relative z-20 flex flex-col items-center text-center max-w-4xl">
        <div className="chapter-badge mb-3">
          <span>(</span>
          <span className="text-walton-amber text-xs">●</span>
          <span>07</span>
          <span className="text-walton-amber text-xs">●</span>
          <span>)</span>
        </div>

        <h2 className="font-editorial text-[40px] sm:text-[62px] md:text-[80px] font-bold leading-[1.0] text-[#12110e] tracking-tight">
          Book Your Seat: <br />
          <span className="italic font-normal text-[#d69b3e]">Upcoming Workshops & Sessions</span>
        </h2>

        <p className="mt-6 text-sm sm:text-base text-walton-muted max-w-2xl leading-relaxed font-sans">
          Choose a date below to reserve your spot. Instant confirmation with safe and easy payment via UPI, GPay, or Cards.
        </p>

        {/* Filter Pills */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
          <button
            onClick={() => setSelectedType("all")}
            className={`px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider transition-colors ${
              selectedType === "all"
                ? "bg-[#12110e] text-white"
                : "bg-white border border-[#dad8ce] text-walton-muted hover:text-[#12110e]"
            }`}
          >
            All Batches ({availableSlots.length})
          </button>
          <button
            onClick={() => setSelectedType("online")}
            className={`px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider transition-colors ${
              selectedType === "online"
                ? "bg-[#0D6199] text-white"
                : "bg-white border border-[#dad8ce] text-walton-muted hover:text-[#12110e]"
            }`}
          >
            Online Bootcamp (₹999)
          </button>
          <button
            onClick={() => setSelectedType("offline-vashi")}
            className={`px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider transition-colors ${
              selectedType === "offline-vashi"
                ? "bg-[#d69b3e] text-white"
                : "bg-white border border-[#dad8ce] text-walton-muted hover:text-[#12110e]"
            }`}
          >
            In-Person Vashi (₹2,499)
          </button>
        </div>
      </div>

      {/* TERMINAL INTERACTIVE SURFACE */}
      <div className="relative z-10 w-full max-w-5xl my-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left (5 Cols): Availability List */}
        <div className="lg:col-span-5 bg-white border border-[#dad8ce] rounded-sm p-6 shadow-sm">
          <div className="flex items-center justify-between pb-4 mb-4 border-b border-[#dad8ce]">
            <span className="text-xs font-bold uppercase tracking-[0.16em] text-[#12110e]">
              Upcoming Batches
            </span>
            <span className="text-[10px] font-mono text-walton-muted">
              {filteredSlots.length} Batches Open
            </span>
          </div>

          <div className="space-y-3">
            {filteredSlots.map((slot) => {
              const isSelected = selectedSlot?.fullDateStr === slot.fullDateStr && selectedSlot?.time === slot.time;
              return (
                <div
                  key={`${slot.fullDateStr}-${slot.time}`}
                  onClick={() => handleSelectSlot(slot)}
                  className={`p-4 rounded-sm border cursor-pointer transition-all duration-300 ${
                    isSelected
                      ? "bg-[#FAF8F4] border-[#12110e] shadow-sm"
                      : "bg-white border-[#dad8ce] hover:border-[#8A8C8E]"
                  }`}
                >
                  <div className="flex items-start justify-between">
                    <div className="flex items-start gap-3">
                      {/* Date Badge */}
                      <div
                        className={`w-11 h-11 rounded-[2px] flex flex-col items-center justify-center shrink-0 border ${
                          isSelected
                            ? "bg-[#12110e] text-white border-[#12110e]"
                            : "bg-[#FAF8F4] text-walton-muted border-[#dad8ce]"
                        }`}
                      >
                        <span className="text-[9px] font-bold uppercase">{slot.month}</span>
                        <span className="font-editorial text-base font-bold leading-none">{slot.date}</span>
                      </div>

                      <div>
                        <div className="flex items-center gap-2">
                          <span
                            className={`text-[9px] font-bold uppercase px-1.5 py-0.5 rounded-[2px] ${
                              slot.type === "online"
                                ? "bg-blue-100 text-[#0D6199]"
                                : "bg-amber-100 text-amber-800"
                            }`}
                          >
                            {slot.type === "online" ? "Virtual" : "Vashi Studio"}
                          </span>
                          <span className="text-[10px] text-red-600 font-semibold">
                            {slot.seatsLeft} spots left
                          </span>
                        </div>

                        <h4 className="font-editorial text-base font-bold text-[#12110e] mt-1 line-clamp-1">
                          {slot.title}
                        </h4>

                        <div className="text-[11px] text-walton-muted font-sans mt-0.5">
                          {slot.time}
                        </div>
                      </div>
                    </div>

                    <div className="text-right shrink-0">
                      <span className="font-editorial text-base font-bold text-[#12110e]">
                        ₹{slot.price}
                      </span>
                      {isSelected && (
                        <div className="mt-1 flex justify-end">
                          <Check className="w-3.5 h-3.5 text-walton-primary" />
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Custom Stage Emcee Inquiries */}
          <div className="mt-6 pt-6 border-t border-[#dad8ce] text-xs">
            <span className="block font-bold text-[#12110e] uppercase tracking-wider mb-1">
              Need Stage Emcee for an Event?
            </span>
            <p className="text-walton-muted mb-3 font-sans leading-relaxed text-[11px]">
              Saili accepts corporate conclaves, national award shows, and luxury wedding inquiries globally.
            </p>
            <a
              href="https://wa.me/919324402404?text=Hi%20Saili,%20I%20am%20inquiring%20about%20booking%20you%20as%20an%20Emcee%20for%20our%20upcoming%20event."
              target="_blank"
              rel="noopener noreferrer"
              className="walton-pill-btn w-full justify-center text-[10px]"
            >
              <MessageCircle className="w-3 h-3 text-walton-primary" />
              <span>Inquire for Stage Dates (+91 93244 02404)</span>
            </a>
          </div>
        </div>

        {/* Right (7 Cols): Embedded Razorpay Checkout Card */}
        <div className="lg:col-span-7 bg-white border border-[#dad8ce] rounded-sm p-6 sm:p-8 shadow-sm">
          <AnimatePresence mode="wait">
            {/* Step 1: Attendee Info */}
            {checkoutStep === "details" && selectedSlot && (
              <motion.div
                key="step-details"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <div className="flex items-center justify-between pb-4 mb-6 border-b border-[#dad8ce]">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-walton-muted">
                      Step 1 of 2 • Your Info
                    </span>
                    <h3 className="font-editorial text-2xl font-bold text-[#12110e] mt-0.5">
                      Enter Your Details
                    </h3>
                  </div>
                  <span className="font-editorial text-2xl font-bold text-[#0D6199]">
                    ₹{selectedSlot.price}
                  </span>
                </div>

                {/* Selected Slot Recap */}
                <div className="p-4 bg-[#FAF8F4] border border-[#dad8ce] rounded-sm mb-6 text-xs text-walton-muted">
                  <div className="font-bold text-[#12110e] text-sm mb-1">{selectedSlot.title}</div>
                  <div className="flex flex-wrap gap-4">
                    <span>📅 {selectedSlot.fullDateStr}</span>
                    <span>⏰ {selectedSlot.time}</span>
                    <span>📍 {selectedSlot.location}</span>
                  </div>
                </div>

                <form onSubmit={handleProceedToPayment} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-walton-muted mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        placeholder="e.g. Radhika Deshmukh"
                        className="w-full px-3 py-2 bg-white border border-[#dad8ce] rounded-sm text-sm text-[#12110e] focus:outline-none focus:border-[#12110e]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-walton-muted mb-1">
                        WhatsApp Mobile (+91) *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+91 98765 43210"
                        className="w-full px-3 py-2 bg-white border border-[#dad8ce] rounded-sm text-sm text-[#12110e] focus:outline-none focus:border-[#12110e]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-walton-muted mb-1">
                        Email Address (for Access Pass) *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="radhika@example.com"
                        className="w-full px-3 py-2 bg-white border border-[#dad8ce] rounded-sm text-sm text-[#12110e] focus:outline-none focus:border-[#12110e]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-walton-muted mb-1">
                        City / Region
                      </label>
                      <input
                        type="text"
                        value={formData.city}
                        onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                        placeholder="Mumbai / Navi Mumbai"
                        className="w-full px-3 py-2 bg-white border border-[#dad8ce] rounded-sm text-sm text-[#12110e] focus:outline-none focus:border-[#12110e]"
                      />
                    </div>
                  </div>

                  <div className="pt-4 border-t border-[#dad8ce] flex items-center justify-between">
                    <span className="text-xs text-walton-muted">
                      Includes certification & live Q&A
                    </span>
                    <button type="submit" className="walton-pill-btn-primary">
                      <span>Proceed to Razorpay →</span>
                    </button>
                  </div>
                </form>
              </motion.div>
            )}

            {/* Step 2: Razorpay Interface */}
            {checkoutStep === "payment" && selectedSlot && (
              <motion.div
                key="step-payment"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <div className="flex items-center justify-between pb-4 mb-6 border-b border-[#dad8ce]">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 bg-[#0C2340] text-white flex items-center justify-center font-bold text-xs rounded-sm">
                      R
                    </div>
                    <span className="text-xs font-bold uppercase tracking-wider text-[#12110e]">
                      Razorpay Gateway
                    </span>
                  </div>
                  <button
                    onClick={() => setCheckoutStep("details")}
                    className="text-xs text-walton-primary hover:underline font-semibold"
                  >
                    ← Edit Details
                  </button>
                </div>

                <div className="bg-[#FAF8F4] p-4 rounded-sm border border-[#dad8ce] mb-6 text-xs space-y-1">
                  <div className="flex justify-between text-walton-muted">
                    <span>{selectedSlot.title}</span>
                    <span>₹{selectedSlot.price}</span>
                  </div>
                  <div className="flex justify-between text-walton-muted">
                    <span>Materials, Toolkit & GST</span>
                    <span className="text-green-700 font-semibold">Included</span>
                  </div>
                  <div className="border-t border-[#dad8ce] pt-2 flex justify-between font-bold text-sm text-[#12110e]">
                    <span>Total Amount</span>
                    <span>₹{selectedSlot.price}</span>
                  </div>
                </div>

                {/* Payment Mode Pills */}
                <div className="space-y-3 mb-6">
                  <div
                    onClick={() => setFormData({ ...formData, paymentMethod: "upi" })}
                    className={`p-3 rounded-sm border cursor-pointer flex items-center justify-between ${
                      formData.paymentMethod === "upi"
                        ? "bg-[#FAF8F4] border-[#12110e]"
                        : "bg-white border-[#dad8ce]"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <Smartphone className="w-5 h-5 text-walton-primary" />
                      <div>
                        <div className="text-xs font-bold text-[#12110e]">UPI / QR (GPay, PhonePe, Paytm)</div>
                        <div className="text-[10px] text-walton-muted">Instant zero-fee payment</div>
                      </div>
                    </div>
                    <span className="px-2 py-0.5 bg-[#e7e72b] text-[9px] font-bold text-[#12110e] rounded-sm">
                      FASTEST
                    </span>
                  </div>

                  <div
                    onClick={() => setFormData({ ...formData, paymentMethod: "card" })}
                    className={`p-3 rounded-sm border cursor-pointer flex items-center justify-between ${
                      formData.paymentMethod === "card"
                        ? "bg-[#FAF8F4] border-[#12110e]"
                        : "bg-white border-[#dad8ce]"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <CreditCard className="w-5 h-5 text-walton-primary" />
                      <div>
                        <div className="text-xs font-bold text-[#12110e]">Credit / Debit Cards</div>
                        <div className="text-[10px] text-walton-muted">Visa, MasterCard, RuPay</div>
                      </div>
                    </div>
                  </div>
                </div>

                <button
                  onClick={handleSimulatePayment}
                  className="w-full walton-pill-btn-primary justify-center h-11 text-xs"
                >
                  Pay ₹{selectedSlot.price} Securely via Razorpay
                </button>
              </motion.div>
            )}

            {/* Step 3: Processing */}
            {checkoutStep === "processing" && (
              <div className="py-16 text-center">
                <div className="w-12 h-12 border-3 border-[#12110e] border-t-transparent rounded-full animate-spin mx-auto mb-4" />
                <h4 className="font-editorial text-xl font-bold text-[#12110e]">
                  Communicating with Razorpay Gateway...
                </h4>
                <p className="text-xs text-walton-muted mt-1 font-sans">
                  Please hold on while your registration is verified.
                </p>
              </div>
            )}

            {/* Step 4: Success Confirmed */}
            {checkoutStep === "success" && selectedSlot && (
              <motion.div
                key="step-success"
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
              >
                <div className="text-center pb-6 mb-6 border-b border-[#dad8ce]">
                  <div className="w-12 h-12 bg-green-100 text-green-700 rounded-full flex items-center justify-center mx-auto mb-3">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-green-800 bg-green-50 px-2 py-0.5 rounded-sm border border-green-200">
                    Payment Verified & Seat Confirmed
                  </span>
                  <h3 className="font-editorial text-2xl font-bold text-[#12110e] mt-2">
                    Welcome to the Circle, {formData.fullName}!
                  </h3>
                </div>

                <div className="p-4 bg-[#FAF8F4] border border-[#dad8ce] rounded-sm text-xs space-y-1.5 mb-6 text-walton-muted font-sans">
                  <div className="flex justify-between">
                    <span>Reference:</span>
                    <span className="font-mono font-bold text-[#12110e]">{paymentRefId}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Session:</span>
                    <span className="font-bold text-[#12110e]">{selectedSlot.title}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Date:</span>
                    <span className="font-bold text-[#12110e]">{selectedSlot.fullDateStr}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Venue:</span>
                    <span className="font-bold text-[#12110e]">{selectedSlot.location}</span>
                  </div>
                </div>

                <div className="space-y-3">
                  <a
                    href={`https://wa.me/919324402404?text=Hi%20Saili,%20I%20have%20completed%20booking%20for%20${encodeURIComponent(
                      selectedSlot.title
                    )}%20on%20${encodeURIComponent(selectedSlot.fullDateStr)}.%20Ref:%20${paymentRefId}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full walton-pill-btn-primary justify-center text-xs"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>Send WhatsApp Ticket to Saili (+91 93244 02404)</span>
                  </a>

                  <button
                    onClick={() => {
                      alert(`Calendar invite (.ics) generated and emailed to ${formData.email}!`);
                    }}
                    className="w-full walton-pill-btn justify-center text-xs"
                  >
                    <Download className="w-3.5 h-3.5 text-walton-primary" />
                    <span>Download Calendar (.ics) Invite</span>
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
