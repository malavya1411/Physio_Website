import { useState, useEffect } from 'react'
import { NavLink, Link } from 'react-router-dom'
import clinic from '../data/clinic.js'
import { telLink } from '../data/links.js'

const navItems = [
  { to: '/',             label: 'Home'         },
  { to: '/services',     label: 'Services'     },
  { to: '/testimonials', label: 'Testimonials' },
  { to: '/message',      label: 'Message'      },
  { to: '/contact',      label: 'Contact'      },
]

const HamburgerIcon = ({ open }) => (
  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
    aria-hidden="true">
    {open
      ? <><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></>
      : <><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></>
    }
  </svg>
)

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  // Close menu on resize
  useEffect(() => {
    const handler = () => { if (window.innerWidth >= 768) setMenuOpen(false) }
    window.addEventListener('resize', handler)
    return () => window.removeEventListener('resize', handler)
  }, [])

  const linkBase = 'font-inter font-medium text-[#1F2937] text-sm transition-subtle hover:text-[#0F766E]'
  const activeClass = 'text-[#0F766E]'

  return (
    <header className="sticky top-0 z-40 bg-[#FAFAF8]/95 backdrop-blur-sm border-b border-[#1F2937]/[0.07]">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex items-center justify-between h-16" aria-label="Main navigation">
          {/* Brand */}
          <Link
            to="/"
            className="font-poppins text-xl sm:text-[22px] tracking-tight flex items-center gap-1"
            style={{ fontFamily: 'Poppins, sans-serif' }}
            onClick={() => setMenuOpen(false)}
          >
            <span className="font-bold text-[#0F766E]">PhysioHome</span>
            <span className="font-normal text-[#1F2937]">Clinic</span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            <div className="flex items-center gap-7">
              {navItems.map(({ to, label }) => (
                <NavLink
                  key={to}
                  to={to}
                  end={to === '/'}
                  className={({ isActive }) =>
                    `font-inter text-[15px] transition-all duration-150 ${
                      isActive
                        ? 'font-semibold text-[#0F766E]'
                        : 'font-normal text-[#374151] hover:text-[#0F766E]'
                    }`
                  }
                >
                  {label}
                </NavLink>
              ))}
            </div>

            <a
              href={telLink()}
              aria-label="Call the clinic now"
              className="bg-[#0F766E] text-white font-inter font-medium text-[14px] px-5 py-2.5 rounded-xl transition-all duration-200 hover:bg-[#0d6560] shadow-sm hover:shadow flex items-center gap-2"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.27h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.91a16 16 0 0 0 6.08 6.08l1.01-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
              </svg>
              Call Now
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            id="navbar-hamburger"
            className="md:hidden text-[#1F2937] p-2 rounded-lg transition-colors hover:bg-black/5 hover:text-[#0F766E]"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
          >
            <HamburgerIcon open={menuOpen} />
          </button>
        </nav>
      </div>

      {/* Mobile slide-down panel */}
      {menuOpen && (
        <div className="md:hidden bg-[#FAFAF8] border-t border-[#1F2937]/[0.07] px-4 pb-5 shadow-lg">
          <div className="flex flex-col gap-1 pt-3">
            {navItems.map(({ to, label }) => (
              <NavLink
                key={to}
                to={to}
                end={to === '/'}
                className={({ isActive }) =>
                  `block py-3 px-3.5 rounded-xl font-inter text-base ${
                    isActive
                      ? 'bg-[#0F766E]/10 font-medium text-[#0F766E]'
                      : 'text-[#374151] hover:bg-[#0F766E]/5 hover:text-[#0F766E]'
                  }`
                }
                onClick={() => setMenuOpen(false)}
              >
                {label}
              </NavLink>
            ))}
            <a
              href={telLink()}
              aria-label="Call the clinic"
              className="mt-3 flex items-center justify-center gap-2 bg-[#0F766E] text-white font-inter font-medium text-base px-5 py-3.5 rounded-xl transition-all hover:bg-[#0d6560] shadow-sm"
              style={{ fontFamily: 'Inter, sans-serif' }}
              onClick={() => setMenuOpen(false)}
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.27h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.91a16 16 0 0 0 6.08 6.08l1.01-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
              </svg>
              Call Now
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
