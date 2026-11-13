# Anchor Saili Rawool Panchal | Portfolio & Masterclass Booking Terminal

> **Design System:** Walton Family Foundation Editorial Standards  
> **Engine:** Antigravity (Next.js 14 App Router, Tailwind CSS, Framer Motion, Three.js / Canvas, Razorpay Integration)

---

## 🏛️ Architectural Overview

This platform merges the institutional, trust-forward design language of the **Walton Family Foundation** with the **Antigravity engine** (subtle scroll parallax, kinetic 3D depth mesh, magnetic Open Sans typography, and an interactive booking terminal).

### 1. Walton Design System Compliance
- **Typography:** Exclusively **Open Sans** (Display 40px/1.15, Large 32px/38px, Medium 24px/29px, Body 14px/20px, Uppercase Labels 12px/16px tracking 0.04em).
- **Color Tokens:**
  - `Primary Blue`: `#0D6199` (Key brand emphasis, links, and action buttons)
  - `Secondary Charcoal`: `#54565A` (Warm editorial typography and navigation)
  - `Neutral Fog-Gray`: `#F2F2F2` (Soft separation, card backgrounds)
  - `Surface White`: `#FFFFFF` (Primary navigation and content ground)
  - `Border Line`: `#E5E7EB` (Subtle 1px boundaries, no heavy drop shadows)
  - `Hero Overlay`: `rgba(0, 0, 0, 0.50)` (`#00000080` for pristine photo legibility)
- **Component Geometry:** Buttons styled with `rounded.sm` (4px), cards with `rounded.md` (8px).

---

## 🌟 Core Modules

### 1. Hero Section (`components/Hero.tsx`)
- Edge-to-edge photo-first composition.
- Scroll-linked parallax physics via Framer Motion `useScroll`.
- Headline: *"850+ Events Hosted with Energy & Elegance."* with cursor-responsive magnetic interaction (`components/MagneticText.tsx`).
- Dual primary CTAs: *"Book for an Event"* and *"Join a Workshop"*.

### 2. 3D Metric Counters (`components/MetricsCounters.tsx`)
- Animated count-up triggers for verified achievements:
  - **850+** Live Events Hosted
  - **566,000+** TEDx Talk Views
  - **18+** Years in Early Childhood & Expression Pedagogy
  - **100,000+** Audience Members Engaged

### 3. TEDx Spotlight (`components/TedxSpotlight.tsx`)
- Highlighting Saili's keynote at **TEDxDTSS College of Law**: *"When Children's Growth Begins Outside Home"*.
- Classic TEDx red (`#EB0028`) and matte black asset with hover expansion and full-screen video theater modal.
- Analytical breakdown of the 3 core theses: Parental Guilt Disarmament, Social Architecture, and Childhood-to-Corporate Confidence.

### 4. Dual-Track Services (`components/DualTrackServices.tsx`)
- Magazine spread separating her twin disciplines:
  - **Track A (The Stage Host):** Corporate Summits, Luxury Weddings, Sangeet Choreography, and Multilingual Protocol (English, Hindi, Marathi).
  - **Track B (The Speaking Coach):** Live Anchoring Power Sessions (Offline 3-hour intensive in Vashi, Navi Mumbai) and Online 2-Day Virtual Bootcamp (₹999 introductory pricing).

### 5. Interactive Booking Terminal & Razorpay (`components/BookingTerminal.tsx`)
- Calendar availability mapping live upcoming dates.
- Seamless transition: Clicking any available workshop date slides open the embedded Razorpay checkout terminal inside the card.
- Supports UPI (GPay/PhonePe), Credit/Debit Cards, NetBanking, simulated processing, instant booking reference generation, calendar (.ics) generation, and direct WhatsApp ticket dispatch.

### 6. Ecosystem & Footer (`components/EcosystemVentures.tsx` & `components/Footer.tsx`)
- Highlighting **Saili's Art Zone** and **Little Cubs Preschool & Daycare**.
- Contact channels:
  - WhatsApp: `+91 93244 02404`
  - Instagram: `@anchor_saili`
  - LinkedIn: `Saili Rawool Panchal`
  - Studio: Vashi, Navi Mumbai, Maharashtra

---

## 🚀 Getting Started

```bash
# 1. Install dependencies
npm install

# 2. Start the local Next.js development server
npm run dev

# 3. Open in browser
# http://localhost:3000
```
