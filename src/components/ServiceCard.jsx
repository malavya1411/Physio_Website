// Service card — white surface, teal icon, Poppins heading, price, WhatsApp CTA.

import { waLink } from '../data/links.js'

export default function ServiceCard({ service }) {
  const { title, description, price, icon, waMessage } = service

  return (
    <div className="bg-white rounded-2xl card-shadow p-6 flex flex-col gap-4 transition-subtle hover:shadow-md hover:-translate-y-0.5">
      {/* Icon */}
      <div
        className="w-12 h-12 text-[#0A192F]"
        dangerouslySetInnerHTML={{ __html: icon }}
        aria-hidden="true"
      />

      {/* Heading */}
      <h3
        className="font-poppins font-semibold text-[#1F2937] text-xl leading-snug"
        style={{ fontFamily: 'Poppins, sans-serif' }}
      >
        {title}
      </h3>

      {/* Description */}
      <p
        className="font-inter text-[#1F2937] text-sm leading-relaxed flex-grow"
        style={{ fontFamily: 'Inter, sans-serif' }}
      >
        {description}
      </p>

      {/* Price */}
      <p
        className="font-inter font-medium text-[#1F2937] text-base"
        style={{ fontFamily: 'Inter, sans-serif' }}
      >
        {price}
      </p>

      {/* WhatsApp CTA */}
      <a
        href={waLink(waMessage)}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Book ${title} on WhatsApp`}
        className="w-full text-center bg-[#0A192F] text-white font-inter font-medium text-sm py-3 rounded-xl transition-all hover:bg-[#112240] shadow-sm"
        style={{ fontFamily: 'Inter, sans-serif' }}
      >
        Book on WhatsApp
      </a>
    </div>
  )
}
