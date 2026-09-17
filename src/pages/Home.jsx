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
      <section className="bg-[#FAFAF8] pt-16 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-12">
          {/* Text */}
          <div className="flex-1 text-left">
            <h1
              className="font-poppins font-bold text-[#1F2937] leading-tight mb-4"
              style={{
                fontFamily: 'Poppins, sans-serif',
                fontSize: 'clamp(2rem, 5vw, 3.5rem)',
              }}
            >
              {clinic.tagline}
            </h1>
            <p
              className="font-lora italic text-[#1F2937] text-xl mb-8 max-w-lg"
              style={{ fontFamily: 'Lora, serif' }}
            >
              Expert physiotherapy at your door — no commute, no waiting rooms, just healing.
            </p>
            <CTAButtons />
          </div>

          {/* Hero illustration */}
          <div className="flex-1 flex justify-center lg:justify-end">
            <div className="w-full max-w-sm bg-white rounded-3xl card-shadow p-8 flex flex-col items-center gap-4">
              <svg
                viewBox="0 0 200 200"
                className="w-48 h-48 text-[#0F766E]"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-label="Physiotherapist illustration"
              >
                {/* Simple clean house + medical cross illustration */}
                <rect x="30" y="100" width="140" height="90" rx="8" fill="#F0FDFA" stroke="#0F766E" strokeWidth="3"/>
                <polygon points="20,105 100,40 180,105" fill="#CCFBF1" stroke="#0F766E" strokeWidth="3"/>
                <rect x="80" y="140" width="40" height="50" rx="4" fill="#0F766E"/>
                {/* Medical cross */}
                <rect x="88" y="65" width="24" height="8" rx="2" fill="#0F766E"/>
                <rect x="96" y="57" width="8" height="24" rx="2" fill="#0F766E"/>
                {/* Window */}
                <rect x="45" y="120" width="35" height="30" rx="4" fill="white" stroke="#0F766E" strokeWidth="2"/>
                <line x1="62" y1="120" x2="62" y2="150" stroke="#0F766E" strokeWidth="2"/>
                <line x1="45" y1="135" x2="80" y2="135" stroke="#0F766E" strokeWidth="2"/>
              </svg>
              <div className="text-center">
                <p
                  className="font-poppins font-semibold text-[#0F766E] text-lg"
                  style={{ fontFamily: 'Poppins, sans-serif' }}
                >
                  We come to you
                </p>
                <p
                  className="font-inter text-[#1F2937] text-sm mt-1"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  {clinic.serviceAreas}
                </p>
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
        <div className="max-w-6xl mx-auto">
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
        <div className="max-w-6xl mx-auto">
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
        <div className="max-w-6xl mx-auto">
          <div className="flex items-end justify-between mb-10 gap-4 flex-wrap">
            <SectionHeading
              title="What patients say"
              subtitle="Real stories from patients across Delhi."
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
