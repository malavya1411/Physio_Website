// Reusable pair of Call + WhatsApp buttons.
// Props:
//   telHref   – string, tel: link
//   waHref    – string, wa.me link
//   size      – 'sm' | 'md' (default 'md')
//   fullWidth – boolean (default false)

import { telLink, waLink, WA_GENERAL } from '../data/links.js'

const PhoneIcon = () => (
  <svg className="w-5 h-5 mr-2.5 flex-shrink-0" viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"
    aria-hidden="true">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.27h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.91a16 16 0 0 0 6.08 6.08l1.01-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
  </svg>
)

const WhatsAppIcon = () => (
  <svg className="w-5 h-5 mr-2.5 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>
  </svg>
)

export default function CTAButtons({
  telHref,
  waHref,
  size = 'md',
  fullWidth = false,
}) {
  const href1 = telHref || telLink()
  const href2 = waHref  || waLink(WA_GENERAL)

  const base = 'inline-flex items-center justify-center font-inter font-medium rounded-xl transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0A192F]'
  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-7 py-3.5 sm:px-8 sm:py-4 text-base sm:text-lg',
  }
  const width = fullWidth ? 'w-full' : ''

  return (
    <div className={`flex flex-wrap gap-4 ${fullWidth ? 'flex-col sm:flex-row' : ''}`}>
      <a
        href={href1}
        aria-label="Call the clinic"
        className={`${base} ${sizes[size]} ${width} bg-[#0A192F] text-white hover:bg-[#112240] border border-[#0A192F] shadow-sm hover:shadow-md active:scale-[0.99]`}
      >
        <PhoneIcon />
        Call Now
      </a>
      <a
        href={href2}
        aria-label="Contact on WhatsApp"
        target="_blank"
        rel="noopener noreferrer"
        className={`${base} ${sizes[size]} ${width} bg-white text-[#0A192F] border border-neutral-300 hover:border-[#0A192F] hover:bg-neutral-50 shadow-sm hover:shadow active:scale-[0.99]`}
      >
        <WhatsAppIcon />
        Book on WhatsApp
      </a>
    </div>
  )
}
