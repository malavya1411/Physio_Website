# One-Shot Implementation Plan: Physiotherapy Clinic Website (India)

> **Purpose:** This document is a complete, self-contained prompt + implementation plan. Hand this entire file to a developer (or AI coding agent) and the full website must be built in ONE pass — no follow-up questions, no missing pieces.

---

## 1. Project Overview

- **Client:** A physiotherapist (solo practitioner), Indian audience.
- **Core business:** Home-based physiotherapy appointments (house visits).
- **Primary conversion goal:** Phone calls and WhatsApp messages.
- **Tech stack (FIXED — do not change or add to this):**
  - React 18+
  - JavaScript (no TypeScript)
  - Vite (build tool)
  - React Router DOM v6 (routing)
  - Tailwind CSS (styling — NO other UI libraries: no Material UI, no Bootstrap, no Ant Design)
  - Plain CSS only where Tailwind utilities fall short
- **Deployment target:** Netlify or Vercel (static build, `npm run build`).

---

## 2. Non-Negotiable Design Rules (Violating any of these = failed build)

1. **Light theme ONLY.** Dark sections, dark mode toggles, or dark footers are forbidden. Every section uses a light background.
2. **Maximum 3 colors in the entire UI, NO gradients anywhere.**
   - Primary: `#0F766E` (deep teal) — buttons, links, accents, icons.
   - Background: `#FAFAF8` (soft off-white) — page background.
   - Text: `#1F2937` (charcoal) — ALL text, in every section, every component.
   - White `#FFFFFF` is allowed only as card/surface fill — it is not a "color" accent.
3. **Maximum 3 fonts, loaded via Google Fonts:**
   - `Poppins` (600, 700) — headings only.
   - `Inter` (400, 500) — all body text, buttons, labels.
   - `Lora` italic (500) — short taglines/hero subtext ONLY.
   - All three fonts render in the SAME color: charcoal `#1F2937`. Never split a sentence across fonts or colors. Never use a different color for emphasis — emphasis comes from font-weight only.
4. **Zero visual clutter:** no animations beyond a subtle 200ms hover/focus transition, no carousels, no autoplay, no floating decorations, no emojis in the UI (icons must be inline SVGs), no stock-photo overload — max 1 hero image + small avatars for testimonials.
5. **Minimalist Indian pricing:** if prices are shown, use ₹ format (e.g., "₹700 / visit"), in `Inter 500`, charcoal color.

---

## 3. Information Architecture (5 Pages + Global Components)

### Routes
| Route | Page |
|---|---|
| `/` | Landing / Hero |
| `/services` | Services |
| `/testimonials` | Testimonials |
| `/message` | Message (WhatsApp-first contact form) |
| `/contact` | Contact |

### Global Components (appear on every page)
1. **Navbar** — sticky top, off-white background with subtle bottom border. Left: clinic name (Poppins 700, teal). Right (desktop): nav links + "Call Now" teal button. Mobile: hamburger menu (slide-down panel, same palette).
2. **Footer** — light background, charcoal text, teal links. Contains: phone (tel link), WhatsApp link, service-area line, copyright.
3. **FloatingCTA** — THE most important component:
   - **Mobile (<768px):** fixed bottom bar, full width, split 50/50 — left half "📞 Call" style button labeled **Call** with phone SVG icon (teal background, white icon), right half **WhatsApp** (white background, teal text, WhatsApp SVG icon). Always visible on every page. Must not overlap page content (add `pb-20` padding to page wrapper on mobile).
   - **Desktop (≥768px):** hidden bar; instead a fixed bottom-right circular WhatsApp button (teal circle, white WhatsApp SVG) + all CTAs live inside page content.
   - Every CTA uses `tel:+91XXXXXXXXXX` or `https://wa.me/91XXXXXXXXXX?text=<url-encoded prefilled message>`.

### Page 1 — Landing (`/`)
- Hero: left-aligned (stacked on mobile) headline in Poppins 700 charcoal, e.g. *"Physiotherapy, at your doorstep."* One Lora-italic subline. One real photo max (physiotherapist/house-visit themed, rounded corners) or a clean SVG illustration.
- Two hero buttons side by side: **Book on WhatsApp** (teal solid) and **Call Now** (teal outline).
- Trust strip (single row, 3–4 items in Inter 500): years of experience, home visits, Hindi + English speaking, same-day appointments.
- Short "How it works" 3-step section (1→2→3 columns on desktop, stacked on mobile): Book on WhatsApp → Doctor visits your home → Recover at home.
- 3 preview service cards linking to `/services`.
- 2 preview testimonials linking to `/testimonials`.
- Final CTA section: big headline + Call + WhatsApp buttons.

### Page 2 — Services (`/services`)
- Grid of 6 service cards: Orthopaedic Physiotherapy, Neuro Physiotherapy, Post-Surgical Rehabilitation, Geriatric Care, Sports Injury, Electrotherapy (home visit).
- Card: white surface, rounded, subtle single-color shadow, teal SVG icon, Poppins heading, 2-line Inter description, **₹ price per visit** (charcoal, Inter 500), and a full-width **"Book on WhatsApp"** button that opens `wa.me` with a prefilled message naming that specific service.
- Cards: 1 column mobile → 2 columns tablet → 3 columns desktop.

### Page 3 — Testimonials (`/testimonials`)
- 6 testimonial cards in a responsive grid (1 col mobile, 2 col tablet, 3 col desktop).
- Card: 5 teal star SVGs, quote in Inter 400 charcoal, name + locality (e.g., "Rohini, Delhi") in Inter 500, small initial-avatar circle (teal background, white initial letter — this is a graphic, not text-color deviation).
- Bottom CTA: "Book your home visit today" + Call/WhatsApp buttons.
- All testimonials come from `src/data/testimonials.js`.

### Page 4 — Message (`/message`)
- Purpose: convert visitors to WhatsApp conversations without a backend.
- Form fields (white card, generous spacing): Name, Phone number, Concern/condition (textarea).
- Submit button **"Send on WhatsApp"** — on click, validates fields, then opens `https://wa.me/91XXXXXXXXXX?text=Hi, my name is <name> (<phone>). I need help with: <concern>`.
- Below the form: direct buttons "Call instead" (tel link) and "Open WhatsApp directly" (plain wa.me link).

### Page 5 — Contact (`/contact`)
- Two-column layout (stacked on mobile):
  - Left: big Poppins heading "Get in touch", phone number as large clickable `tel:` link (teal), WhatsApp deep link, consultation hours, areas served (e.g., "Home visits across North Delhi"), languages spoken.
  - Right: optional embedded Google Map (grayscale filter to keep palette minimal) — if a map URL isn't available, render a simple text card instead. Never leave a broken iframe.
- Large full-width Call and WhatsApp buttons at the bottom.

---

## 4. Data Layer (Single Source of Truth)

Create `src/data/` so the doctor can edit content without touching components:
- `clinic.js` — clinic name, phone (`+91XXXXXXXXXX`), WhatsApp number, hours, service areas, languages.
- `services.js` — array of `{ id, title, description, price, icon }`.
- `testimonials.js` — array of `{ name, locality, quote, rating }`.
- `links.js` — helper functions `telLink()`, `waLink(message)` that every CTA imports. **No hardcoded phone numbers anywhere in components.**

---

## 5. Responsiveness Requirements (Must Be Verified)

- Mobile-first CSS; breakpoints: `sm 640`, `md 768`, `lg 1024`.
- Viewport tag in `index.html`; no fixed-width containers.
- Touch targets ≥48px height; hero text scales via `clamp()` (never overflow on 360px screens).
- Sticky mobile CTA bar never covers content or footer (page wrapper gets bottom padding on mobile).
- Navbar collapses to hamburger below 768px; menu closes on link click.
- No horizontal scroll at ANY width (test 320px → 1440px+).
- Grids reflow: services 1/2/3 col, testimonials 1/2/3 col, contact 1/2 col.

---

## 6. Performance, SEO & Accessibility

- Images: compress to WebP, `loading="lazy"` below the fold, `alt` text on every image.
- `index.html`: title "Physiotherapist Home Visits in <City> | <Clinic Name>", meta description with "home visit physiotherapy", Open Graph tags, favicon.
- Semantic HTML: one `<h1>` per page, proper heading order.
- `aria-label` on all icon-only buttons; visible focus states using the teal color.
- Lighthouse target: Performance ≥90, Accessibility ≥95, Best Practices ≥90, SEO ≥95.
- Add `manifest.json` so the site feels app-like on mobile.

---

## 7. File/Folder Structure (Exact)

```
physio-clinic/
├── index.html
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
├── public/
│   ├── favicon.svg
│   └── manifest.json
└── src/
    ├── main.jsx
    ├── App.jsx            (Router + layout: Navbar, Outlet, Footer, FloatingCTA)
    ├── index.css          (Google Fonts import, Tailwind directives, base styles)
    ├── data/
    │   ├── clinic.js
    │   ├── services.js
    │   ├── testimonials.js
    │   └── links.js
    ├── components/
    │   ├── Navbar.jsx
    │   ├── Footer.jsx
    │   ├── FloatingCTA.jsx
    │   ├── CTAButtons.jsx      (reusable Call + WhatsApp pair)
    │   ├── ServiceCard.jsx
    │   ├── TestimonialCard.jsx
    │   └── SectionHeading.jsx  (consistent heading block)
    └── pages/
        ├── Home.jsx
        ├── Services.jsx
        ├── Testimonials.jsx
        ├── Message.jsx
        └── Contact.jsx
```

---

## 8. Build Order (One Pass, No Gaps)

1. Scaffold Vite React-JS project; install `react-router-dom`, `tailwindcss`, `postcss`, `autoprefixer`; configure Tailwind content paths.
2. Set up `index.css`: Google Fonts (Poppins/Inter/Lora), charcoal as base text color, teal as primary utility, custom shadow utility.
3. Write `data/` files with real-looking placeholder content (replace `+91XXXXXXXXXX` with the doctor's number at deploy time — make this a single constant).
4. Build `links.js` helpers.
5. Build layout components: Navbar → Footer → FloatingCTA → CTAButtons → cards.
6. Build pages in order: Home → Services → Testimonials → Message → Contact.
7. Wire every CTA to `tel:`/`wa.me` links; test prefilled WhatsApp messages.
8. Responsive pass: verify all breakpoints, sticky CTA behavior, no overflow.
9. SEO/perf/a11y pass: meta tags, lazy loading, aria labels, Lighthouse check.
10. `npm run build`, deploy to Netlify/Vercel, verify on a real phone (click-to-call + WhatsApp deep links must open the apps).

---

## 9. Acceptance Checklist (All Must Be ✅ Before Delivery)

- [ ] Light theme everywhere; zero gradients; only teal + off-white + charcoal (+ white surfaces).
- [ ] Only Poppins / Inter / Lora loaded; all text charcoal; no mixed-color sentences.
- [ ] Exactly 5 routes, all working with React Router.
- [ ] Call buttons use `tel:+91...`; WhatsApp buttons use `wa.me/91...?text=...` with prefilled text.
- [ ] Sticky Call/WhatsApp bar visible on mobile on every page.
- [ ] Fully responsive: 320px → 1440px+, no horizontal scroll, no clipped text.
- [ ] No console errors; Lighthouse Perf ≥90, A11y ≥95, SEO ≥95.
- [ ] Content (services, testimonials, phone) editable from `src/data/` only.

---

## 10. Prefilled WhatsApp Message Templates

- General: `Hi! I'd like to book a home physiotherapy appointment.`
- Service-specific (services page): `Hi! I'd like to book a home visit for <Service Name>.`
- Message page: `Hi, my name is <Name> (<Phone>). I need help with: <Concern>.`

All messages must be URL-encoded when placed in the `wa.me` link.
