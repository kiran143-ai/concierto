import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, Menu, X, Sun, Moon } from 'lucide-react'
import { useTheme } from '../context/ThemeContext'

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
  const { theme, toggleTheme } = useTheme()
  const isLight = theme === 'light'

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const textColor = isLight ? '#4A5068' : 'rgba(255,255,255,0.62)'
  const textColorActive = isLight ? '#0D0D1A' : '#FFFFFF'
  const iconColor = isLight ? '#8890A8' : 'rgba(255,255,255,0.6)'
  const mobileBtnBg = isLight ? 'rgba(0,0,0,0.05)' : 'rgba(255,255,255,0.07)'
  const mobileBtnBorder = isLight ? 'rgba(0,0,0,0.10)' : 'rgba(255,255,255,0.1)'

  /* Light nav: solid white from the start; dark nav: transparent until scrolled */
  const headerBg = isLight
    ? 'rgba(255,255,255,0.97)'
    : scrolled ? 'rgba(5,5,10,0.88)' : 'transparent'
  const headerBorder = isLight
    ? '1px solid rgba(0,0,0,0.08)'
    : scrolled ? '1px solid rgba(255,255,255,0.07)' : '1px solid transparent'
  const headerShadow = isLight
    ? '0 1px 0 rgba(0,0,0,0.05), 0 4px 20px rgba(0,0,0,0.04)'
    : scrolled ? '0 4px 32px rgba(0,0,0,0.4)' : 'none'

  return (
    <>
      <motion.header
        data-nav-header=""
        initial={{ y: -72, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-0 left-0 right-0 z-[100]"
        style={{
          height: '64px',
          background: headerBg,
          borderBottom: headerBorder,
          boxShadow: headerShadow,
          backdropFilter: isLight ? 'blur(20px)' : scrolled ? 'blur(20px)' : 'none',
          WebkitBackdropFilter: isLight ? 'blur(20px)' : scrolled ? 'blur(20px)' : 'none',
          transition: 'background 300ms ease, border-color 300ms ease, box-shadow 300ms ease',
        }}
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
              style={{
                height: '42px', width: 'auto', display: 'block',
                filter: isLight ? 'invert(1) brightness(0)' : 'none',
                transition: 'filter 400ms ease',
              }}
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
                background: 'var(--color-nav-pill-bg)',
                border: '1px solid var(--color-nav-pill-border)',
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
                      padding: '8px 14px', borderRadius: '9999px',
                      border: 'none', cursor: 'pointer',
                      fontFamily: 'var(--font-body)',
                      fontSize: '0.875rem', fontWeight: 500,
                      color: activeDropdown === link.label ? textColorActive : textColor,
                      background: activeDropdown === link.label ? 'var(--color-nav-btn-hover)' : 'transparent',
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
                          opacity: 0.5,
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
                          background: 'var(--color-nav-dropdown-bg)',
                          border: '1px solid var(--color-border-default)',
                          backdropFilter: 'blur(28px)',
                          WebkitBackdropFilter: 'blur(28px)',
                          boxShadow: isLight
                            ? '0 8px 40px rgba(0,0,0,0.10), 0 1px 3px rgba(0,0,0,0.06)'
                            : '0 20px 60px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,255,255,0.04)',
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
                              color: 'var(--color-text-secondary)',
                              textDecoration: 'none',
                              transition: 'color 150ms ease, background 150ms ease',
                              letterSpacing: '0.01em',
                              whiteSpace: 'nowrap',
                            }}
                            onMouseEnter={e => {
                              e.currentTarget.style.color = textColorActive
                              e.currentTarget.style.background = 'var(--color-nav-btn-hover)'
                            }}
                            onMouseLeave={e => {
                              e.currentTarget.style.color = 'var(--color-text-secondary)'
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
          <div className="flex items-center gap-2">
            {/* Request a Brief — hidden on mobile */}
            <motion.a
              href="#"
              whileHover={{ scale: 1.04, boxShadow: '0 0 28px rgba(245,158,11,0.6)' }}
              whileTap={{ scale: 0.96 }}
              className="hidden lg:flex"
              style={{
                alignItems: 'center', gap: '6px',
                padding: '9px 22px', borderRadius: '9999px',
                fontFamily: 'var(--font-body)',
                fontSize: '0.875rem', fontWeight: 600,
                background: '#F59E0B',
                color: '#000000',
                textDecoration: 'none',
                boxShadow: '0 0 16px rgba(245,158,11,0.3)',
                transition: 'box-shadow 300ms ease',
                letterSpacing: '-0.01em',
                whiteSpace: 'nowrap',
              }}
            >
              Request a Brief
            </motion.a>

            {/* Theme toggle */}
            <button
              onClick={toggleTheme}
              aria-label={isLight ? 'Switch to dark mode' : 'Switch to light mode'}
              className="flex w-8 h-8 items-center justify-center rounded-full"
              style={{
                color: iconColor,
                background: mobileBtnBg,
                border: `1px solid ${mobileBtnBorder}`,
                cursor: 'pointer',
                transition: 'all 200ms ease',
                flexShrink: 0,
              }}
            >
              {isLight ? <Moon size={15} /> : <Sun size={15} />}
            </button>

            {/* Mobile hamburger */}
            <button
              className="flex lg:hidden w-8 h-8 items-center justify-center rounded-full"
              style={{ color: iconColor, background: mobileBtnBg, border: `1px solid ${mobileBtnBorder}` }}
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
            className="fixed top-16 left-3 right-3 z-[99] rounded-2xl"
            style={{
              background: 'var(--color-nav-mobile-bg)',
              border: '1px solid var(--color-border-subtle)',
              backdropFilter: 'blur(24px)',
              boxShadow: isLight
                ? '0 8px 40px rgba(0,0,0,0.10), 0 1px 3px rgba(0,0,0,0.06)'
                : '0 20px 60px rgba(0,0,0,0.6)',
              padding: '8px 12px 16px',
            }}
          >
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.label}
                  href="#"
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.04 }}
                  style={{
                    display: 'block',
                    padding: '13px 14px',
                    borderRadius: '10px',
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.9375rem',
                    fontWeight: 500,
                    lineHeight: 1.4,
                    color: 'var(--color-text-secondary)',
                    textDecoration: 'none',
                    borderBottom: i < navLinks.length - 1 ? '1px solid var(--color-border-faint)' : 'none',
                    transition: 'color 150ms ease, background 150ms ease',
                  }}
                  onMouseEnter={e => {
                    (e.currentTarget as HTMLElement).style.color = textColorActive
                    ;(e.currentTarget as HTMLElement).style.background = 'var(--color-nav-btn-hover)'
                  }}
                  onMouseLeave={e => {
                    (e.currentTarget as HTMLElement).style.color = 'var(--color-text-secondary)'
                    ;(e.currentTarget as HTMLElement).style.background = 'transparent'
                  }}
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </motion.a>
              ))}
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginTop: '12px', paddingTop: '12px', borderTop: '1px solid var(--color-border-faint)' }}>
              <motion.a
                href="#"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: navLinks.length * 0.04 }}
                style={{
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  padding: '13px 20px', borderRadius: '9999px',
                  fontFamily: 'var(--font-body)', fontSize: '0.9375rem', fontWeight: 600,
                  background: '#F59E0B', color: '#000',
                  textDecoration: 'none', lineHeight: 1.4,
                  boxShadow: '0 0 16px rgba(245,158,11,0.3)',
                }}
              >
                Request a Brief
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
