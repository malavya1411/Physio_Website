// Reusable pair of Call + WhatsApp buttons.
// Props:
//   telHref   – string, tel: link
//   waHref    – string, wa.me link
//   size      – 'sm' | 'md' (default 'md')
//   fullWidth – boolean (default false)

import { telLink, waLink, WA_GENERAL } from '../data/links.js'

const PhoneIcon = () => (
  <svg className="inline-block w-5 h-5 mr-2" viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
    aria-hidden="true">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.27h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.91a16 16 0 0 0 6.08 6.08l1.01-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
  </svg>
)

const WhatsAppIcon = () => (
  <svg className="inline-block w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor"
    aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/>
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

  const base = 'inline-flex items-center justify-center font-inter font-medium rounded-lg transition-subtle focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0F766E]'
  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
  }
  const width = fullWidth ? 'w-full' : ''

  return (
    <div className={`flex flex-wrap gap-3 ${fullWidth ? 'flex-col sm:flex-row' : ''}`}>
      <a
        href={href1}
        aria-label="Call the clinic"
        className={`${base} ${sizes[size]} ${width} bg-[#0F766E] text-white hover:bg-[#0d6560] border-2 border-[#0F766E]`}
      >
        <PhoneIcon />
        Call Now
      </a>
      <a
        href={href2}
        aria-label="Contact on WhatsApp"
        target="_blank"
        rel="noopener noreferrer"
        className={`${base} ${sizes[size]} ${width} bg-white text-[#0F766E] border-2 border-[#0F766E] hover:bg-[#0F766E] hover:text-white`}
      >
        <WhatsAppIcon />
        Book on WhatsApp
      </a>
    </div>
  )
}
