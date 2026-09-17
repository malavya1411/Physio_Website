import { Link } from 'react-router-dom'
import clinic from '../data/clinic.js'
import { telLink, waLink, WA_GENERAL } from '../data/links.js'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-[#FAFAF8] border-t border-[#1F2937]/[0.07] mt-16">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {/* Brand column */}
          <div>
            <p
              className="font-poppins font-bold text-[#0F766E] text-lg mb-2"
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              {clinic.name}
            </p>
            <p
              className="font-inter text-[#1F2937] text-sm"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              {clinic.tagline}
            </p>
          </div>

          {/* Contact column */}
          <div>
            <p
              className="font-poppins font-semibold text-[#1F2937] text-sm mb-3 uppercase tracking-wide"
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              Contact
            </p>
            <ul className="space-y-2">
              <li>
                <a
                  href={telLink()}
                  className="font-inter text-[#0F766E] text-sm transition-subtle hover:underline"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  {clinic.phone}
                </a>
              </li>
              <li>
                <a
                  href={waLink(WA_GENERAL)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-inter text-[#0F766E] text-sm transition-subtle hover:underline"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  WhatsApp Us
                </a>
              </li>
              <li>
                <span
                  className="font-inter text-[#1F2937] text-sm"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  {clinic.hours}
                </span>
              </li>
            </ul>
          </div>

          {/* Service area column */}
          <div>
            <p
              className="font-poppins font-semibold text-[#1F2937] text-sm mb-3 uppercase tracking-wide"
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              Service Area
            </p>
            <p
              className="font-inter text-[#1F2937] text-sm"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              {clinic.serviceAreas}
            </p>
            <p
              className="font-inter text-[#1F2937] text-sm mt-1"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              Languages: {clinic.languages}
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 pt-6 border-t border-[#1F2937]/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p
            className="font-inter text-[#1F2937] text-xs opacity-60"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            © {year} {clinic.name}. All rights reserved.
          </p>
          <div className="flex gap-4">
            {[
              { to: '/services', label: 'Services' },
              { to: '/contact',  label: 'Contact'  },
            ].map(({ to, label }) => (
              <Link
                key={to}
                to={to}
                className="font-inter text-[#0F766E] text-xs transition-subtle hover:underline"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
