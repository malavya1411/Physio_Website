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
      <section className="relative bg-[#FAFAF8] min-h-[calc(100vh-4rem)] flex items-center py-12 lg:py-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Subtle background botanical line art */}
        <svg
          className="absolute -bottom-10 -left-10 w-72 h-72 text-[#0F766E]/[0.08] pointer-events-none select-none"
          viewBox="0 0 200 200"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          aria-hidden="true"
        >
          <path d="M20,180 C40,110 100,50 180,20" />
          <path d="M70,135 C60,110 80,90 105,95 C115,100 120,115 110,125 C95,140 75,140 70,135 Z" />
          <path d="M120,85 C115,60 135,45 155,55 C165,65 165,80 150,90 C135,100 120,95 120,85 Z" />
          <path d="M40,165 C30,145 45,130 65,135 C75,140 80,150 70,160 C60,170 45,170 40,165 Z" />
        </svg>

        <div className="max-w-[1240px] mx-auto w-full flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16 relative z-10">
          {/* Left Text */}
          <div className="flex-1 text-left max-w-xl">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2.5 mb-4">
              <span className="w-6 h-[2px] bg-[#0F766E]/60 rounded-full" />
              <span
                className="font-inter font-semibold text-xs sm:text-[13px] tracking-widest text-[#0F766E] uppercase"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                Care Comes Home
              </span>
            </div>

            {/* Headline */}
            <h1
              className="font-poppins font-bold text-[#111827] leading-[1.08] mb-5 tracking-tight"
              style={{
                fontFamily: 'Poppins, sans-serif',
                fontSize: 'clamp(2.5rem, 5.5vw, 3.85rem)',
              }}
            >
              Physiotherapy,<br />at your doorstep.
            </h1>

            {/* Supporting sentence */}
            <p
              className="font-lora italic text-[#374151] text-lg sm:text-xl lg:text-[22px] leading-relaxed mb-8 max-w-lg font-normal opacity-90"
              style={{ fontFamily: 'Lora, serif' }}
            >
              Expert physiotherapy at home,<br className="hidden sm:inline" /> without the commute.
            </p>

            {/* CTAs */}
            <CTAButtons size="lg" />
          </div>

          {/* Right Visual */}
          <div className="flex-1 flex justify-center lg:justify-end w-full relative">
            {/* Soft muted background glow */}
            <div className="absolute -top-6 -right-6 w-64 h-64 bg-[#CCFBF1]/40 rounded-full blur-3xl pointer-events-none -z-10" />
            <div className="absolute -bottom-6 -left-6 w-56 h-56 bg-[#0F766E]/[0.08] rounded-full blur-2xl pointer-events-none -z-10" />

            {/* Organic rounded image container */}
            <div className="relative w-full max-w-md lg:max-w-lg rounded-[2.25rem] sm:rounded-[2.5rem] overflow-hidden shadow-[0_10px_35px_rgb(0,0,0,0.06)] border border-[#1F2937]/[0.06] bg-white group">
              <img
                src="/hero-physio.jpg"
                alt="Physiotherapist assisting senior patient at home"
                className="w-full h-auto object-cover max-h-[440px] sm:max-h-[490px] transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                width="600"
                height="450"
                loading="eager"
              />

              {/* Understated Location Pill */}
              <div className="absolute bottom-4 left-4 right-4 sm:left-auto sm:right-6 sm:bottom-6 bg-[#FAFAF8]/95 backdrop-blur-md border border-white/80 px-4 py-2.5 rounded-full shadow-sm flex items-center justify-center gap-2">
                <svg className="w-4 h-4 text-[#0F766E] flex-shrink-0" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path fillRule="evenodd" d="M11.54 22.351A24.25 24.25 0 0 0 18 13.917C18 9.544 14.418 6 10 6S2 9.544 2 13.917a24.25 24.25 0 0 0 6.46 8.434.75.75 0 0 0 1.08 0l2-2zM10 11.25a2.25 2.25 0 1 0 0-4.5 2.25 2.25 0 0 0 0 4.5z" clipRule="evenodd" />
                </svg>
                <span
                  className="font-inter text-xs sm:text-[13px] font-medium text-[#1F2937] tracking-tight"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  Home visits across Mumbai &amp; suburbs
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Trust Strip ──────────────────────────────── */}
      <section className="bg-white border-y border-[#1F2937]/10 py-6 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-6">
          {trustItems.map(({ label, value }) => (
            <div key={label} className="text-center">
              <p
                className="font-poppins font-bold text-[#0F766E] text-2xl"
                style={{ fontFamily: 'Poppins, sans-serif' }}
              >
                {value}
              </p>
              <p
                className="font-inter font-medium text-[#1F2937] text-sm mt-0.5"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                {label}
              </p>
            </div>
          ))}
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
                  className="font-poppins font-bold text-[#0F766E] text-4xl"
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
              className="font-inter font-medium text-[#0F766E] text-sm border border-[#0F766E] px-4 py-2 rounded-lg transition-subtle hover:bg-[#0F766E] hover:text-white flex-shrink-0 self-start"
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
              className="font-inter font-medium text-[#0F766E] text-sm border border-[#0F766E] px-4 py-2 rounded-lg transition-subtle hover:bg-[#0F766E] hover:text-white flex-shrink-0 self-start"
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
