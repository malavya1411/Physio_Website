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
    <header className="sticky top-0 z-40 bg-[#FAFAF8] border-b border-[#1F2937]/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex items-center justify-between h-16" aria-label="Main navigation">
          {/* Brand */}
          <Link
            to="/"
            className="font-poppins font-bold text-[#0F766E] text-xl tracking-tight"
            style={{ fontFamily: 'Poppins, sans-serif' }}
            onClick={() => setMenuOpen(false)}
          >
            {clinic.name}
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-6">
            {navItems.map(({ to, label }) => (
              <NavLink
                key={to}
                to={to}
                end={to === '/'}
                className={({ isActive }) =>
                  `${linkBase} ${isActive ? activeClass : ''}`
                }
              >
                {label}
              </NavLink>
            ))}
            <a
              href={telLink()}
              aria-label="Call the clinic now"
              className="ml-2 bg-[#0F766E] text-white font-inter font-medium text-sm px-5 py-2.5 rounded-lg transition-subtle hover:bg-[#0d6560]"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              Call Now
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            id="navbar-hamburger"
            className="md:hidden text-[#1F2937] p-1 rounded transition-subtle hover:text-[#0F766E]"
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
        <div className="md:hidden bg-[#FAFAF8] border-t border-[#1F2937]/10 px-4 pb-4">
          <div className="flex flex-col gap-1 pt-2">
            {navItems.map(({ to, label }) => (
              <NavLink
                key={to}
                to={to}
                end={to === '/'}
                className={({ isActive }) =>
                  `block py-2.5 px-3 rounded-lg ${linkBase} ${isActive ? 'bg-[#0F766E]/10 text-[#0F766E]' : 'hover:bg-[#0F766E]/5'}`
                }
                onClick={() => setMenuOpen(false)}
              >
                {label}
              </NavLink>
            ))}
            <a
              href={telLink()}
              aria-label="Call the clinic"
              className="mt-2 block text-center bg-[#0F766E] text-white font-inter font-medium text-sm px-5 py-3 rounded-lg transition-subtle hover:bg-[#0d6560]"
              style={{ fontFamily: 'Inter, sans-serif' }}
              onClick={() => setMenuOpen(false)}
            >
              Call Now
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
