import { Link } from 'react-router-dom'
import clinic from '../data/clinic.js'
import services from '../data/services.js'
import testimonials from '../data/testimonials.js'
import { telLink, waLink, WA_GENERAL } from '../data/links.js'
import CTAButtons from '../components/CTAButtons.jsx'
import SectionHeading from '../components/SectionHeading.jsx'
import ServiceCard from '../components/ServiceCard.jsx'
import TestimonialCard from '../components/TestimonialCard.jsx'

const trustItems = [
  { label: 'Experience', value: clinic.experience },
  { label: 'Visits', value: 'Home Only' },
  { label: 'Languages', value: clinic.languages },
  { label: 'Appointments', value: 'Same-Day' },
]

const steps = [
  {
    num: '01',
    title: 'Book on WhatsApp',
    desc: 'Send us a message with your name, location & concern. We respond within minutes.',
  },
  {
    num: '02',
    title: 'Doctor Visits Your Home',
    desc: 'Our physiotherapist arrives at your doorstep at the scheduled time — no travel needed.',
  },
  {
    num: '03',
    title: 'Recover at Home',
    desc: 'Follow your personalised home exercise plan and heal comfortably in your own space.',
  },
]

export default function Home() {
  return (
    <div className="page-wrapper">
      {/* ── Hero ─────────────────────────────────────── */}
      <section className="relative bg-[#FAFAF8] pt-5 pb-8 sm:pt-8 sm:pb-12 lg:py-0 lg:min-h-[calc(100vh-4rem)] lg:flex lg:items-center px-3.5 sm:px-6 lg:px-8 overflow-hidden">
        <div className="max-w-[1240px] mx-auto w-full lg:my-auto">
          <div className="grid grid-cols-12 gap-3 sm:gap-6 lg:gap-10 xl:gap-12 items-center">
            {/* Left Content Column (7 cols on mobile, 7 on desktop) */}
            <div className="col-span-7 flex flex-col text-left pr-1 sm:pr-0">
              {/* Pill Badge */}
              <div className="mb-2 sm:mb-3 lg:mb-4">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-full bg-[#EFF6FF] text-[#1E40AF] text-[10px] sm:text-xs lg:text-[13px] font-semibold tracking-wider uppercase whitespace-nowrap">
                  <span className="w-1.5 h-1.5 lg:w-2 lg:h-2 rounded-full bg-[#2563EB] flex-shrink-0" />
                  Physiotherapy • Home Visits
                </span>
              </div>

              {/* Headline */}
              <h1
                className="font-serif font-bold text-[#0A192F] leading-[1.2] lg:leading-[1.18] mb-2 sm:mb-3.5 lg:mb-5 tracking-tight text-[20px] sm:text-2xl md:text-3xl lg:text-[42px] xl:text-[48px]"
                style={{ fontFamily: 'Georgia, Cambria, serif' }}
              >
                Physiotherapy<br />
                Care, At Your<br />
                Doorstep.
              </h1>

              {/* Subtext */}
              <p
                className="font-inter text-[#4B5563] text-[11px] sm:text-sm lg:text-base xl:text-lg mb-3 sm:mb-4 lg:mb-6 max-w-lg leading-snug sm:leading-relaxed font-normal"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                Personalized physiotherapy sessions in the comfort of your home.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 w-full sm:max-w-sm lg:max-w-md">
                <a
                  href={telLink()}
                  aria-label="Call Now"
                  className="flex-1 flex items-center justify-center gap-1.5 sm:gap-2 bg-[#0A192F] text-white font-inter font-medium text-[12px] sm:text-sm lg:text-base py-2 sm:py-3 px-3 sm:px-5 rounded-lg sm:rounded-xl hover:bg-[#112240] transition-all shadow-sm active:scale-[0.99]"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  <svg className="w-3.5 h-3.5 sm:w-5 sm:h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.27h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.91a16 16 0 0 0 6.08 6.08l1.01-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
                  </svg>
                  Call
                </a>
                <a
                  href={waLink(WA_GENERAL)}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="WhatsApp"
                  className="flex-1 flex items-center justify-center gap-1.5 sm:gap-2 bg-white text-[#0A192F] border border-neutral-300 font-inter font-medium text-[12px] sm:text-sm lg:text-base py-2 sm:py-3 px-3 sm:px-5 rounded-lg sm:rounded-xl hover:bg-neutral-50 hover:border-[#0A192F] transition-all shadow-sm active:scale-[0.99]"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  <svg className="w-3.5 h-3.5 sm:w-5 sm:h-5 text-[#0A192F]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>
                  </svg>
                  WhatsApp
                </a>
              </div>

              {/* Direct Doctor Connect subtext */}
              <div className="mt-2 sm:mt-3 pt-0.5">
                <p className="font-inter text-[10px] sm:text-xs text-[#6B7280] leading-tight" style={{ fontFamily: 'Inter, sans-serif' }}>
                  Directly connect with the physiotherapist
                </p>
                <p className="font-inter text-[11px] sm:text-xs text-[#111827] font-semibold mt-0.5 leading-tight" style={{ fontFamily: 'Inter, sans-serif' }}>
                  Call:{' '}
                  <a href={telLink()} className="hover:text-[#0A192F] transition-colors underline underline-offset-2">
                    {clinic.displayPhone || clinic.phone}
                  </a>
                </p>
              </div>
            </div>

            {/* Right Visual Column (5 cols on mobile, 5 on desktop) */}
            <div className="col-span-5 flex flex-col justify-center relative">
              {/* Background Geometric Graphic Tile */}
              <div className="absolute -top-4 -right-2 sm:-top-6 sm:-right-4 w-28 sm:w-40 h-28 sm:h-40 opacity-40 pointer-events-none">
                <svg viewBox="0 0 100 100" fill="none" className="w-full h-full text-[#CBD5E1]">
                  <path d="M0,0 Q50,0 50,50 Q0,50 0,0 Z" fill="currentColor" opacity="0.6"/>
                  <path d="M50,0 Q100,0 100,50 Q50,50 50,0 Z" fill="currentColor" opacity="0.3"/>
                  <path d="M50,50 Q100,50 100,100 Q50,100 50,50 Z" fill="currentColor" opacity="0.5"/>
                  <path d="M0,50 Q50,50 50,100 Q0,100 0,50 Z" fill="currentColor" opacity="0.2"/>
                </svg>
              </div>

              {/* Arched Portrait Card */}
              <div className="relative w-full rounded-t-[2.25rem] sm:rounded-t-[3.5rem] rounded-b-xl sm:rounded-b-2xl overflow-hidden shadow-[0_4px_20px_rgb(0,0,0,0.06)] border border-neutral-200/80 bg-white max-w-[420px] mx-auto">
                <img
                  src="/doctor-portrait.jpg"
                  alt={`${clinic.doctorName} — Home Visit Physiotherapist`}
                  className="w-full h-auto object-cover aspect-[3/4] max-h-[220px] sm:max-h-[300px] md:max-h-[360px] lg:max-h-[440px] xl:max-h-[480px]"
                  width="480"
                  height="640"
                  loading="eager"
                />

                {/* Overlaid Consultation Pill */}
                <div className="absolute bottom-1.5 left-1.5 right-1.5 sm:bottom-3 sm:left-3 sm:right-3 bg-white/95 backdrop-blur-md rounded-lg sm:rounded-xl p-1.5 sm:p-2.5 shadow-sm border border-neutral-100 flex items-center gap-1.5 sm:gap-2.5">
                  <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-[#2563EB] flex-shrink-0" />
                  <div className="flex flex-col text-left overflow-hidden">
                    <p className="font-poppins font-semibold text-[8.5px] sm:text-xs text-[#0A192F] leading-tight truncate" style={{ fontFamily: 'Poppins, sans-serif' }}>
                      Home Visits Active
                    </p>
                    <p className="font-inter text-[7.5px] sm:text-[10px] text-[#6B7280] font-normal leading-tight truncate" style={{ fontFamily: 'Inter, sans-serif' }}>
                      Available in Mumbai
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CARE AT HOME (3-Pillar Clean Section) ──────────────── */}
      <section className="bg-white border-y border-neutral-200/70 py-8 sm:py-14 px-3.5 sm:px-6 lg:px-8">
        <div className="max-w-[1240px] mx-auto">
          {/* Eyebrow & Headline */}
          <div className="text-left mb-6 sm:mb-10">
            <span
              className="font-inter font-semibold text-[10px] sm:text-xs tracking-widest text-[#6B7280] uppercase block mb-1.5"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              Care At Home
            </span>
            <h2
              className="font-serif font-bold text-[#0A192F] text-xl sm:text-2xl lg:text-3xl leading-snug"
              style={{ fontFamily: 'Georgia, Cambria, serif' }}
            >
              Professional Care,<br />
              Where You Feel Comfortable.
            </h2>
          </div>

          {/* 3 Circular Icon Pillars (3 cols on mobile & desktop) */}
          <div className="grid grid-cols-3 gap-2 sm:gap-6">
            {/* 1. Home Visits */}
            <div className="flex flex-col items-center sm:items-start text-center sm:text-left p-1">
              <div className="w-10 h-10 sm:w-13 sm:h-13 rounded-full bg-[#EFF6FF] text-[#1E40AF] flex items-center justify-center mb-2 sm:mb-3 shadow-xs">
                <svg className="w-4 h-4 sm:w-6 sm:h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
                  <polyline points="9 22 9 12 15 12 15 22"/>
                </svg>
              </div>
              <h3 className="font-poppins font-semibold text-[#0A192F] text-xs sm:text-sm mb-0.5 leading-tight" style={{ fontFamily: 'Poppins, sans-serif' }}>
                Home Visits
              </h3>
              <p className="font-inter text-[#6B7280] text-[10px] sm:text-xs leading-tight" style={{ fontFamily: 'Inter, sans-serif' }}>
                Care in your comfort zone.
              </p>
            </div>

            {/* 2. One-to-One Care */}
            <div className="flex flex-col items-center sm:items-start text-center sm:text-left p-1">
              <div className="w-10 h-10 sm:w-13 sm:h-13 rounded-full bg-[#EFF6FF] text-[#1E40AF] flex items-center justify-center mb-2 sm:mb-3 shadow-xs">
                <svg className="w-4 h-4 sm:w-6 sm:h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                  <circle cx="12" cy="7" r="4"/>
                </svg>
              </div>
              <h3 className="font-poppins font-semibold text-[#0A192F] text-xs sm:text-sm mb-0.5 leading-tight" style={{ fontFamily: 'Poppins, sans-serif' }}>
                One-to-One Care
              </h3>
              <p className="font-inter text-[#6B7280] text-[10px] sm:text-xs leading-tight" style={{ fontFamily: 'Inter, sans-serif' }}>
                Personal attention every session.
              </p>
            </div>

            {/* 3. Personalized Recovery */}
            <div className="flex flex-col items-center sm:items-start text-center sm:text-left p-1">
              <div className="w-10 h-10 sm:w-13 sm:h-13 rounded-full bg-[#EFF6FF] text-[#1E40AF] flex items-center justify-center mb-2 sm:mb-3 shadow-xs">
                <svg className="w-4 h-4 sm:w-6 sm:h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
                </svg>
              </div>
              <h3 className="font-poppins font-semibold text-[#0A192F] text-xs sm:text-sm mb-0.5 leading-tight" style={{ fontFamily: 'Poppins, sans-serif' }}>
                Personalized Recovery
              </h3>
              <p className="font-inter text-[#6B7280] text-[10px] sm:text-xs leading-tight" style={{ fontFamily: 'Inter, sans-serif' }}>
                Treatment tailored to your goals.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── How it Works ─────────────────────────────── */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-[1240px] mx-auto">
          <SectionHeading
            title="How it works"
            subtitle="Getting physiotherapy at home is simple — 3 easy steps."
            centered
          />
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-4">
            {steps.map(({ num, title, desc }) => (
              <div key={num} className="flex flex-col items-center text-center gap-4 p-6 bg-white rounded-2xl card-shadow">
                <span
                  className="font-poppins font-bold text-[#0A192F] text-4xl"
                  style={{ fontFamily: 'Poppins, sans-serif' }}
                >
                  {num}
                </span>
                <h3
                  className="font-poppins font-semibold text-[#1F2937] text-lg"
                  style={{ fontFamily: 'Poppins, sans-serif' }}
                >
                  {title}
                </h3>
                <p
                  className="font-inter text-[#1F2937] text-sm leading-relaxed"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  {desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Services Preview ─────────────────────────── */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-[1240px] mx-auto">
          <div className="flex items-end justify-between mb-10 gap-4 flex-wrap">
            <SectionHeading
              title="Our Services"
              subtitle="Specialised home-visit physiotherapy for every need."
            />
            <Link
              to="/services"
              className="font-inter font-medium text-[#0A192F] text-sm border border-[#0A192F] px-4 py-2 rounded-xl transition-all hover:bg-[#0A192F] hover:text-white flex-shrink-0 self-start"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              View all services →
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.slice(0, 3).map((s) => (
              <ServiceCard key={s.id} service={s} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Testimonials Preview ──────────────────────── */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-[1240px] mx-auto">
          <div className="flex items-end justify-between mb-10 gap-4 flex-wrap">
            <SectionHeading
              title="What patients say"
              subtitle="Real stories from patients across Mumbai."
            />
            <Link
              to="/testimonials"
              className="font-inter font-medium text-[#0A192F] text-sm border border-[#0A192F] px-4 py-2 rounded-xl transition-all hover:bg-[#0A192F] hover:text-white flex-shrink-0 self-start"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              View all →
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {testimonials.slice(0, 2).map((t) => (
              <TestimonialCard key={t.id} testimonial={t} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Final CTA ────────────────────────────────── */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-2xl mx-auto text-center">
          <h2
            className="font-poppins font-bold text-[#1F2937] text-3xl sm:text-4xl mb-4"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            Ready to heal at home?
          </h2>
          <p
            className="font-inter text-[#1F2937] text-base mb-8 max-w-xl mx-auto"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            Book a same-day home visit. No waiting rooms, no travel — just expert care at your doorstep.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <CTAButtons />
          </div>
        </div>
      </section>
    </div>
  )
}
