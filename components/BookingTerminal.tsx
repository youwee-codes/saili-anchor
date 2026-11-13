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
  ChevronLeft,
  ChevronRight,
  Info,
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
  type: "online" | "offline-vashi" | "corporate";
  title: string;
  time: string;
  seatsLeft: number;
  price: number;
  location: string;
}

export default function BookingTerminal() {
  const [selectedType, setSelectedType] = useState<"all" | "online" | "offline-vashi">("all");
  const [currentMonthIndex, setCurrentMonthIndex] = useState(0); // 0 = Nov 2026, 1 = Dec 2026

  // Scheduled dates mapping availability
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

  // Razorpay Checkout Simulation State
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
      alert("Please fill in your name, email, and WhatsApp number.");
      return;
    }
    setCheckoutStep("payment");
  };

  const handleSimulateRazorpayPayment = () => {
    setCheckoutStep("processing");
    setTimeout(() => {
      const generatedRef = "RZP_" + Math.random().toString(36).substring(2, 9).toUpperCase();
      setPaymentRefId(generatedRef);
      setCheckoutStep("success");
    }, 1800);
  };

  return (
    <section id="booking" className="w-full bg-walton-neutral py-16 sm:py-24 border-b border-walton-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-6 border-b border-walton-border">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2 h-2 rounded-full bg-walton-primary" />
              <span className="text-[12px] font-semibold tracking-[0.04em] uppercase text-walton-primary">
                Chapter 05 / Booking Terminal & Schedule
              </span>
            </div>
            <h2 className="headline-lg text-[#1A1A1A]">
              Live Availability Calendar & Instant Reservation
            </h2>
          </div>

          <div className="mt-4 md:mt-0 flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-white border border-walton-border rounded-sm text-xs font-semibold text-walton-secondary">
              <ShieldCheck className="w-4 h-4 text-walton-primary" />
              Direct Razorpay 256-bit Secure Gateway
            </span>
          </div>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center gap-3 mb-8">
          <span className="text-xs font-bold text-walton-secondary uppercase tracking-wider mr-2">
            Filter Offering:
          </span>
          <button
            onClick={() => setSelectedType("all")}
            className={`px-4 py-1.5 rounded-sm text-xs font-semibold transition-colors duration-300 ${
              selectedType === "all"
                ? "bg-walton-primary text-white border border-walton-primary"
                : "bg-white text-walton-secondary border border-walton-border hover:bg-walton-neutral"
            }`}
          >
            All Availability ({availableSlots.length})
          </button>
          <button
            onClick={() => setSelectedType("online")}
            className={`px-4 py-1.5 rounded-sm text-xs font-semibold transition-colors duration-300 ${
              selectedType === "online"
                ? "bg-walton-primary text-white border border-walton-primary"
                : "bg-white text-walton-secondary border border-walton-border hover:bg-walton-neutral"
            }`}
          >
            Virtual Bootcamp (₹999)
          </button>
          <button
            onClick={() => setSelectedType("offline-vashi")}
            className={`px-4 py-1.5 rounded-sm text-xs font-semibold transition-colors duration-300 ${
              selectedType === "offline-vashi"
                ? "bg-walton-primary text-white border border-walton-primary"
                : "bg-white text-walton-secondary border border-walton-border hover:bg-walton-neutral"
            }`}
          >
            Offline Vashi Power Session (₹2,499)
          </button>
        </div>

        {/* Master Booking Terminal Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column (5 Cols): Editorial Calendar Slot Selector */}
          <div className="lg:col-span-5 bg-white rounded-md border border-walton-border p-6 shadow-sm">
            <div className="flex items-center justify-between pb-4 mb-6 border-b border-walton-border">
              <div className="flex items-center gap-2">
                <CalendarIcon className="w-5 h-5 text-walton-primary" />
                <h3 className="headline-sm text-[#1A1A1A] text-base">Select Available Session</h3>
              </div>
              <span className="text-[11px] font-semibold text-walton-secondary bg-walton-neutral px-2 py-1 rounded-sm border border-walton-border">
                {filteredSlots.length} Slots Open
              </span>
            </div>

            {/* List of Available Date Tiles */}
            <div className="space-y-3">
              {filteredSlots.map((slot) => {
                const isSelected = selectedSlot?.fullDateStr === slot.fullDateStr && selectedSlot?.time === slot.time;
                return (
                  <motion.div
                    key={`${slot.fullDateStr}-${slot.time}`}
                    whileHover={{ x: 2 }}
                    onClick={() => handleSelectSlot(slot)}
                    className={`p-4 rounded-sm border cursor-pointer transition-all duration-300 relative ${
                      isSelected
                        ? "bg-walton-primary/5 border-walton-primary shadow-sm"
                        : "bg-white border-walton-border hover:border-walton-primary/40 hover:bg-walton-neutral/50"
                    }`}
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex items-start gap-3">
                        {/* Calendar Badge */}
                        <div
                          className={`w-12 h-12 rounded-sm border flex flex-col items-center justify-center shrink-0 ${
                            isSelected
                              ? "bg-walton-primary text-white border-walton-primary"
                              : "bg-walton-neutral text-walton-secondary border-walton-border"
                          }`}
                        >
                          <span className="text-[10px] uppercase font-bold tracking-tight">{slot.month}</span>
                          <span className="text-base font-extrabold leading-none">{slot.date}</span>
                        </div>

                        <div>
                          <div className="flex items-center gap-2">
                            <span
                              className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-sm ${
                                slot.type === "online"
                                  ? "bg-blue-100 text-walton-primary"
                                  : "bg-amber-100 text-amber-800"
                              }`}
                            >
                              {slot.type === "online" ? "Virtual Online" : "Vashi Studio"}
                            </span>
                            <span className="text-[11px] font-semibold text-red-600">
                              {slot.seatsLeft} seats left
                            </span>
                          </div>

                          <h4 className="text-sm font-bold text-[#1A1A1A] mt-1 line-clamp-1">
                            {slot.title}
                          </h4>

                          <div className="flex items-center gap-3 text-xs text-walton-secondary mt-1">
                            <span className="flex items-center gap-1">
                              <Clock className="w-3 h-3 text-walton-tertiary" /> {slot.time}
                            </span>
                          </div>
                        </div>
                      </div>

                      <div className="text-right shrink-0">
                        <span className="text-sm font-bold text-walton-primary">
                          ₹{slot.price.toLocaleString("en-IN")}
                        </span>
                        {isSelected && (
                          <div className="mt-1 flex justify-end">
                            <div className="w-5 h-5 rounded-full bg-walton-primary text-white flex items-center justify-center">
                              <Check className="w-3 h-3" />
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Need Custom Event Anchoring? Direct WhatsApp trigger */}
            <div className="mt-6 pt-6 border-t border-walton-border bg-walton-neutral/50 p-4 rounded-sm">
              <h5 className="text-xs font-bold text-[#1A1A1A] uppercase tracking-wide mb-1">
                Looking for Corporate or Wedding Emcee Booking?
              </h5>
              <p className="text-xs text-walton-secondary mb-3">
                Anchor Saili accepts private stage inquiries for corporate summits, awards, destination weddings, and choreography direction across India.
              </p>
              <a
                href="https://wa.me/919324402404?text=Hi%20Saili,%20I%20am%20inquiring%20about%20booking%20you%20as%20an%20Emcee%20for%20our%20upcoming%20event."
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary w-full text-center text-xs flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-4 h-4 text-walton-primary" />
                <span>Inquire for Stage Dates (+91 93244 02404)</span>
              </a>
            </div>
          </div>

          {/* Right Column (7 Cols): Integrated Seamless Razorpay Checkout Form Card */}
          <div className="lg:col-span-7 bg-white rounded-md border border-walton-border p-6 sm:p-8 shadow-sm relative">
            <AnimatePresence mode="wait">
              {/* STEP 1: Attendee Details Form */}
              {checkoutStep === "details" && selectedSlot && (
                <motion.div
                  key="details"
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="flex items-center justify-between pb-4 mb-6 border-b border-walton-border">
                    <div>
                      <span className="text-[11px] font-semibold uppercase tracking-[0.06em] text-walton-primary">
                        Reservation Terminal Step 1 of 2
                      </span>
                      <h3 className="headline-md text-[#1A1A1A] text-lg sm:text-xl">
                        Attendee Information & Summary
                      </h3>
                    </div>
                    <span className="px-3 py-1 bg-walton-neutral text-walton-secondary border border-walton-border text-xs font-bold rounded-sm">
                      ₹{selectedSlot.price.toLocaleString("en-IN")} Total
                    </span>
                  </div>

                  {/* Selected Item Summary Card */}
                  <div className="p-4 rounded-sm bg-walton-neutral border border-walton-border mb-6">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                      <div>
                        <h4 className="text-sm font-bold text-[#1A1A1A]">{selectedSlot.title}</h4>
                        <div className="flex flex-wrap items-center gap-4 text-xs text-walton-secondary mt-1">
                          <span className="flex items-center gap-1">
                            <CalendarIcon className="w-3.5 h-3.5 text-walton-primary" />
                            {selectedSlot.fullDateStr}
                          </span>
                          <span className="flex items-center gap-1">
                            <Clock className="w-3.5 h-3.5 text-walton-primary" />
                            {selectedSlot.time}
                          </span>
                        </div>
                      </div>
                      <div className="text-xs sm:text-right font-medium text-walton-secondary">
                        <MapPin className="w-3.5 h-3.5 inline text-walton-primary mr-1" />
                        {selectedSlot.location}
                      </div>
                    </div>
                  </div>

                  {/* Details Form */}
                  <form onSubmit={handleProceedToPayment} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-walton-secondary uppercase tracking-wider mb-1">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.fullName}
                          onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                          placeholder="e.g. Ananya Sharma"
                          className="w-full px-3 py-2 bg-white border border-walton-border rounded-sm text-sm text-[#1A1A1A] focus:outline-none focus:border-walton-primary transition-colors"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-walton-secondary uppercase tracking-wider mb-1">
                          WhatsApp Mobile Number *
                        </label>
                        <input
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="+91 98765 43210"
                          className="w-full px-3 py-2 bg-white border border-walton-border rounded-sm text-sm text-[#1A1A1A] focus:outline-none focus:border-walton-primary transition-colors"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-walton-secondary uppercase tracking-wider mb-1">
                          Email Address (for Zoom / Ticket receipt) *
                        </label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="ananya@example.com"
                          className="w-full px-3 py-2 bg-white border border-walton-border rounded-sm text-sm text-[#1A1A1A] focus:outline-none focus:border-walton-primary transition-colors"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-walton-secondary uppercase tracking-wider mb-1">
                          City / Region
                        </label>
                        <input
                          type="text"
                          value={formData.city}
                          onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                          placeholder="e.g. Navi Mumbai / Mumbai"
                          className="w-full px-3 py-2 bg-white border border-walton-border rounded-sm text-sm text-[#1A1A1A] focus:outline-none focus:border-walton-primary transition-colors"
                        />
                      </div>
                    </div>

                    <div className="pt-4 border-t border-walton-border flex items-center justify-between">
                      <div className="text-xs text-walton-secondary">
                        <span className="font-semibold text-walton-primary">100% Guaranteed Spot</span> • Immediate confirmation on WhatsApp & Email
                      </div>

                      <button type="submit" className="btn-primary-blue">
                        <span>Proceed to Razorpay</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </form>
                </motion.div>
              )}

              {/* STEP 2: Razorpay Interface */}
              {checkoutStep === "payment" && selectedSlot && (
                <motion.div
                  key="payment"
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Razorpay Branded Header */}
                  <div className="flex items-center justify-between pb-4 mb-6 border-b border-walton-border">
                    <div className="flex items-center gap-2">
                      <div className="w-7 h-7 bg-[#0C2340] text-white flex items-center justify-center font-bold text-xs rounded-sm">
                        R
                      </div>
                      <div>
                        <span className="text-[10px] font-bold text-walton-tertiary tracking-wider uppercase">
                          Razorpay Standard Checkout
                        </span>
                        <h4 className="text-sm font-bold text-[#1A1A1A]">
                          Anchor Saili Power Workshops
                        </h4>
                      </div>
                    </div>
                    <button
                      onClick={() => setCheckoutStep("details")}
                      className="text-xs text-walton-primary hover:underline font-semibold"
                    >
                      ← Edit Details
                    </button>
                  </div>

                  {/* Payment Breakdown */}
                  <div className="bg-walton-neutral p-4 rounded-sm border border-walton-border mb-6">
                    <div className="flex justify-between text-xs text-walton-secondary mb-1">
                      <span>{selectedSlot.title}</span>
                      <span>₹{selectedSlot.price.toLocaleString("en-IN")}</span>
                    </div>
                    <div className="flex justify-between text-xs text-walton-secondary mb-2">
                      <span>Includes Workshop Materials, Certification & GST</span>
                      <span className="text-green-700 font-semibold">Included</span>
                    </div>
                    <div className="border-t border-walton-border pt-2 flex justify-between text-sm font-bold text-[#1A1A1A]">
                      <span>Amount Payable</span>
                      <span className="text-walton-primary">₹{selectedSlot.price.toLocaleString("en-IN")}</span>
                    </div>
                  </div>

                  {/* Payment Methods Selector */}
                  <div className="space-y-3 mb-6">
                    <label className="block text-xs font-bold text-walton-secondary uppercase tracking-wider mb-2">
                      Select Payment Mode
                    </label>

                    {/* UPI Option */}
                    <div
                      onClick={() => setFormData({ ...formData, paymentMethod: "upi" })}
                      className={`p-3 rounded-sm border cursor-pointer flex items-center justify-between transition-colors ${
                        formData.paymentMethod === "upi"
                          ? "bg-walton-primary/5 border-walton-primary"
                          : "bg-white border-walton-border hover:bg-walton-neutral"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <Smartphone className="w-5 h-5 text-walton-primary" />
                        <div>
                          <div className="text-sm font-bold text-[#1A1A1A]">UPI / QR (Instant & Recommended)</div>
                          <div className="text-xs text-walton-secondary">Google Pay, PhonePe, Paytm, BHIM</div>
                        </div>
                      </div>
                      <span className="text-xs font-semibold px-2 py-0.5 bg-green-100 text-green-800 rounded-sm">
                        Fastest
                      </span>
                    </div>

                    {/* Cards Option */}
                    <div
                      onClick={() => setFormData({ ...formData, paymentMethod: "card" })}
                      className={`p-3 rounded-sm border cursor-pointer flex items-center justify-between transition-colors ${
                        formData.paymentMethod === "card"
                          ? "bg-walton-primary/5 border-walton-primary"
                          : "bg-white border-walton-border hover:bg-walton-neutral"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <CreditCard className="w-5 h-5 text-walton-primary" />
                        <div>
                          <div className="text-sm font-bold text-[#1A1A1A]">Credit & Debit Cards</div>
                          <div className="text-xs text-walton-secondary">Visa, MasterCard, RuPay, Maestro</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Pay Button */}
                  <button
                    onClick={handleSimulateRazorpayPayment}
                    className="btn-primary-blue w-full h-[46px] text-sm justify-center shadow-sm"
                  >
                    <span>Pay ₹{selectedSlot.price.toLocaleString("en-IN")} via Razorpay</span>
                    <ShieldCheck className="w-4 h-4" />
                  </button>

                  <div className="mt-4 flex items-center justify-center gap-2 text-xs text-walton-tertiary">
                    <ShieldCheck className="w-4 h-4 text-green-600" />
                    <span>256-Bit SSL Encrypted • RBI Approved Gateway</span>
                  </div>
                </motion.div>
              )}

              {/* STEP 3: Processing Animation */}
              {checkoutStep === "processing" && (
                <motion.div
                  key="processing"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="py-16 text-center"
                >
                  <div className="w-14 h-14 border-4 border-walton-primary border-t-transparent rounded-full animate-spin mx-auto mb-4" />
                  <h4 className="text-base font-bold text-[#1A1A1A] mb-1">
                    Contacting Razorpay Secure Gateway...
                  </h4>
                  <p className="text-xs text-walton-secondary">
                    Please do not refresh or close this terminal window.
                  </p>
                </motion.div>
              )}

              {/* STEP 4: Success Receipt & Direct Confirmation */}
              {checkoutStep === "success" && selectedSlot && (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Verified Header */}
                  <div className="text-center pb-6 mb-6 border-b border-walton-border">
                    <div className="w-14 h-14 bg-green-100 text-green-700 rounded-full flex items-center justify-center mx-auto mb-3">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <span className="text-[11px] font-bold text-green-700 uppercase tracking-widest bg-green-50 px-3 py-1 rounded-sm border border-green-200">
                      Payment Verified & Seat Confirmed
                    </span>
                    <h3 className="headline-md text-[#1A1A1A] mt-2 text-xl">
                      Welcome to the Power Circle, {formData.fullName}!
                    </h3>
                    <p className="text-xs text-walton-secondary mt-1">
                      Your registration has been securely processed and locked into Anchor Saili’s masterclass roster.
                    </p>
                  </div>

                  {/* Digital Receipt */}
                  <div className="bg-walton-neutral p-5 rounded-sm border border-walton-border text-xs space-y-2 mb-6">
                    <div className="flex justify-between">
                      <span className="text-walton-secondary">Razorpay Reference:</span>
                      <span className="font-mono font-bold text-[#1A1A1A]">{paymentRefId}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-walton-secondary">Session:</span>
                      <span className="font-bold text-[#1A1A1A]">{selectedSlot.title}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-walton-secondary">Date & Time:</span>
                      <span className="font-bold text-[#1A1A1A]">{selectedSlot.fullDateStr} ({selectedSlot.time})</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-walton-secondary">Venue / Platform:</span>
                      <span className="font-bold text-[#1A1A1A]">{selectedSlot.location}</span>
                    </div>
                    <div className="border-t border-walton-border pt-2 flex justify-between font-bold text-sm text-[#1A1A1A]">
                      <span>Amount Paid:</span>
                      <span className="text-walton-primary">₹{selectedSlot.price.toLocaleString("en-IN")}</span>
                    </div>
                  </div>

                  {/* Action Triggers */}
                  <div className="space-y-3">
                    <a
                      href={`https://wa.me/919324402404?text=Hi%20Saili,%20I%20have%20completed%20booking%20for%20${encodeURIComponent(
                        selectedSlot.title
                      )}%20on%20${encodeURIComponent(selectedSlot.fullDateStr)}.%20Ref:%20${paymentRefId}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary-blue w-full text-center flex items-center justify-center gap-2"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>Dispatch WhatsApp Confirmation (+91 93244 02404)</span>
                    </a>

                    <button
                      onClick={() => {
                        alert(
                          `Calendar invite (.ics) generated for ${selectedSlot.title} on ${selectedSlot.fullDateStr}. Sent to ${formData.email}!`
                        );
                      }}
                      className="btn-secondary w-full text-center flex items-center justify-center gap-2"
                    >
                      <Download className="w-4 h-4 text-walton-primary" />
                      <span>Download Calendar (.ics) Invite</span>
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
