import clinic from '../data/clinic.js'
import { telLink, waLink, WA_GENERAL } from '../data/links.js'
import SectionHeading from '../components/SectionHeading.jsx'
import CTAButtons from '../components/CTAButtons.jsx'

export default function Contact() {
  return (
    <div className="page-wrapper py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          title="Get in touch"
          subtitle="We're always happy to hear from you. Call, WhatsApp, or visit the page below."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mt-4">
          {/* Left — contact info */}
          <div className="flex flex-col gap-8">
            {/* Phone */}
            <div>
              <p
                className="font-inter font-medium text-[#1F2937] text-sm uppercase tracking-wide mb-1"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                Phone
              </p>
              <a
                href={telLink()}
                aria-label="Call the clinic"
                className="font-poppins font-bold text-[#0F766E] text-3xl transition-subtle hover:underline block"
                style={{ fontFamily: 'Poppins, sans-serif' }}
              >
                {clinic.phone}
              </a>
            </div>

            {/* WhatsApp */}
            <div>
              <p
                className="font-inter font-medium text-[#1F2937] text-sm uppercase tracking-wide mb-1"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                WhatsApp
              </p>
              <a
                href={waLink(WA_GENERAL)}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Open WhatsApp"
                className="font-inter font-medium text-[#0F766E] text-base transition-subtle hover:underline"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                Message us on WhatsApp →
              </a>
            </div>

            {/* Hours */}
            <div>
              <p
                className="font-inter font-medium text-[#1F2937] text-sm uppercase tracking-wide mb-1"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                Consultation Hours
              </p>
              <p
                className="font-inter text-[#1F2937] text-base"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                {clinic.hours}
              </p>
            </div>

            {/* Service area */}
            <div>
              <p
                className="font-inter font-medium text-[#1F2937] text-sm uppercase tracking-wide mb-1"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                Service Area
              </p>
              <p
                className="font-inter text-[#1F2937] text-base"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                {clinic.serviceAreas}
              </p>
            </div>

            {/* Languages */}
            <div>
              <p
                className="font-inter font-medium text-[#1F2937] text-sm uppercase tracking-wide mb-1"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                Languages Spoken
              </p>
              <p
                className="font-inter text-[#1F2937] text-base"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                {clinic.languages}
              </p>
            </div>
          </div>

          {/* Right — map placeholder card */}
          <div className="bg-white rounded-2xl card-shadow overflow-hidden flex flex-col">
            {/* Grayscale map embed — fallback to info card if no URL */}
            <div
              className="flex-1 bg-[#F0FDFA] flex flex-col items-center justify-center gap-4 p-8 min-h-64"
              aria-label="Map placeholder — serving Mumbai and Suburbs"
            >
              <svg
                viewBox="0 0 80 80"
                className="w-16 h-16 text-[#0F766E]"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <circle cx="40" cy="34" r="14" stroke="currentColor" strokeWidth="4"/>
                <path d="M40 20V34M40 34l10-7" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
                <path d="M40 48c0 0-18 16-18 28h36C58 64 40 48 40 48z" fill="#CCFBF1" stroke="currentColor" strokeWidth="3" strokeLinejoin="round"/>
              </svg>
              <p
                className="font-poppins font-semibold text-[#1F2937] text-lg text-center"
                style={{ fontFamily: 'Poppins, sans-serif' }}
              >
                {clinic.serviceAreas}
              </p>
              <p
                className="font-inter text-[#1F2937] text-sm text-center"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                We travel to your home — no fixed location required.
              </p>
              <a
                href={`https://maps.google.com/?q=Mumbai`}
                target="_blank"
                rel="noopener noreferrer"
                className="font-inter font-medium text-[#0F766E] text-sm transition-subtle hover:underline"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                View on Google Maps →
              </a>
            </div>
          </div>
        </div>

        {/* Full-width CTAs */}
        <div className="mt-16 bg-white rounded-2xl card-shadow p-8 flex flex-col sm:flex-row items-center gap-4 justify-between">
          <p
            className="font-poppins font-bold text-[#1F2937] text-xl sm:text-2xl"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            Ready to book a home visit?
          </p>
          <CTAButtons />
        </div>
      </div>
    </div>
  )
}
