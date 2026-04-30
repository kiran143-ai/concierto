import { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, Menu, X } from 'lucide-react'

const navLinks = [
  { label: 'About Us', hasDropdown: false },
  { label: 'Platform', hasDropdown: false },
  { label: 'Solutions', hasDropdown: true, items: ['Modernize', 'Migrate', 'Manage', 'Maximize', 'Intelligence'] },
  { label: 'Professional Services', hasDropdown: true, items: ['Assessment Services', 'Modernize Services', 'Migrate Services', 'Manage Services'] },
  { label: 'Partners', hasDropdown: false },
  { label: 'Resources', hasDropdown: true, items: ['Insights', 'Case Studies', 'Product Updates', 'Webinars', 'Videos & Events'] },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <motion.header
        initial={{ y: -72, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-0 left-0 right-0 z-[100]"
        style={{ height: '64px' }}
      >
        <div
          style={{
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '0 2.5rem',
            maxWidth: '1280px',
            margin: '0 auto',
            transition: 'all 300ms ease',
          }}
        >
          {/* ── Logo ── */}
          <a
            href="/"
            style={{ display: 'flex', alignItems: 'center', flexShrink: 0, textDecoration: 'none' }}
          >
            <img
              src="/images/Concierto-Logo-inverse.svg"
              alt="Concierto"
              style={{ height: '42px', width: 'auto', display: 'block' }}
            />
          </a>

          {/* ── Center pill nav (desktop) ── */}
          <nav className="hidden lg:flex items-center">
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '2px',
                padding: '6px 8px',
                borderRadius: '9999px',
                background: scrolled ? 'rgba(255,255,255,0.07)' : 'rgba(255,255,255,0.09)',
                border: '1px solid rgba(255,255,255,0.13)',
                backdropFilter: 'blur(20px)',
                WebkitBackdropFilter: 'blur(20px)',
                transition: 'all 300ms ease',
              }}
            >
              {navLinks.map((link) => (
                <div
                  key={link.label}
                  style={{ position: 'relative' }}
                  onMouseEnter={() => link.hasDropdown && setActiveDropdown(link.label)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <button
                    style={{
                      display: 'flex', alignItems: 'center', gap: '5px',
                      padding: '8px 16px', borderRadius: '9999px',
                      border: 'none', cursor: 'pointer',
                      fontFamily: 'var(--font-body)',
                      fontSize: '0.875rem', fontWeight: 500,
                      color: activeDropdown === link.label ? '#FFFFFF' : 'rgba(255,255,255,0.62)',
                      background: activeDropdown === link.label ? 'rgba(255,255,255,0.1)' : 'transparent',
                      transition: 'all 180ms ease',
                      whiteSpace: 'nowrap',
                    }}
                  >
                    {link.label}
                    {link.hasDropdown && (
                      <ChevronDown
                        size={13}
                        style={{
                          transform: activeDropdown === link.label ? 'rotate(180deg)' : 'none',
                          transition: 'transform 200ms',
                          opacity: 0.55,
                        }}
                      />
                    )}
                  </button>

                  <AnimatePresence>
                    {link.hasDropdown && activeDropdown === link.label && (
                      <motion.div
                        initial={{ opacity: 0, y: 8, scale: 0.96 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 8, scale: 0.96 }}
                        transition={{ duration: 0.18, ease: [0.16, 1, 0.3, 1] }}
                        style={{
                          position: 'absolute',
                          top: 'calc(100% + 12px)',
                          left: '50%',
                          transform: 'translateX(-50%)',
                          minWidth: '220px',
                          padding: '8px',
                          borderRadius: '16px',
                          background: 'rgba(8, 8, 14, 0.97)',
                          border: '1px solid rgba(255,255,255,0.1)',
                          backdropFilter: 'blur(28px)',
                          WebkitBackdropFilter: 'blur(28px)',
                          boxShadow: '0 20px 60px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,255,255,0.04)',
                        }}
                      >
                        {link.items?.map((item) => (
                          <a
                            key={item}
                            href="#"
                            style={{
                              display: 'flex',
                              alignItems: 'center',
                              padding: '10px 14px',
                              borderRadius: '10px',
                              fontFamily: 'var(--font-body)',
                              fontSize: '0.875rem',
                              fontWeight: 450,
                              color: 'rgba(255,255,255,0.55)',
                              textDecoration: 'none',
                              transition: 'color 150ms ease, background 150ms ease',
                              letterSpacing: '0.01em',
                              whiteSpace: 'nowrap',
                            }}
                            onMouseEnter={e => {
                              e.currentTarget.style.color = '#fff'
                              e.currentTarget.style.background = 'rgba(255,255,255,0.07)'
                            }}
                            onMouseLeave={e => {
                              e.currentTarget.style.color = 'rgba(255,255,255,0.55)'
                              e.currentTarget.style.background = 'transparent'
                            }}
                          >
                            {item}
                          </a>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </nav>

          {/* ── Right actions ── */}
          <div className="flex items-center gap-2.5">
            {/* Get Started — solid amber pill button */}
            <motion.a
              href="#"
              whileHover={{ scale: 1.04, boxShadow: '0 0 28px rgba(245,158,11,0.6)' }}
              whileTap={{ scale: 0.96 }}
              style={{
                display: 'flex',
                alignItems: 'center', gap: '6px',
                padding: '9px 22px', borderRadius: '9999px',
                fontFamily: 'var(--font-body)',
                fontSize: '0.875rem', fontWeight: 600,
                background: '#F59E0B',
                color: '#000000',
                textDecoration: 'none',
                boxShadow: '0 0 16px rgba(245,158,11,0.35)',
                transition: 'box-shadow 300ms ease',
                letterSpacing: '-0.01em',
                whiteSpace: 'nowrap',
              }}
            >
              Request a Brief
            </motion.a>

            {/* Mobile hamburger */}
            <button
              className="flex lg:hidden w-8 h-8 items-center justify-center rounded-full"
              style={{ color: 'rgba(255,255,255,0.6)', background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.1)' }}
              onClick={() => setMobileOpen(v => !v)}
            >
              {mobileOpen ? <X size={16} /> : <Menu size={16} />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
            className="fixed top-16 left-4 right-4 z-[99] rounded-2xl py-4"
            style={{
              background: 'rgba(5, 5, 12, 0.97)',
              border: '1px solid rgba(255,255,255,0.1)',
              backdropFilter: 'blur(24px)',
              boxShadow: '0 20px 60px rgba(0,0,0,0.6)',
            }}
          >
            <div className="px-4 flex flex-col gap-0.5">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.label}
                  href="#"
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.04 }}
                  className="py-2.5 px-3 rounded-xl text-sm font-medium"
                  style={{ color: 'rgba(255,255,255,0.65)', fontFamily: 'var(--font-body)' }}
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </motion.a>
              ))}
              <motion.a
                href="#"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: navLinks.length * 0.04 }}
                className="mt-3 flex items-center justify-center py-2.5 rounded-full text-sm font-semibold"
                style={{ background: '#fff', color: '#000', fontFamily: 'var(--font-body)' }}
              >
                Get Started
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
