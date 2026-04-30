import { motion } from 'framer-motion'

const footerLinks = {
  Solutions: ['Modernize', 'Migrate', 'Manage', 'Maximize', 'Intelligence'],
  'Professional Services': ['Assessment Services', 'Modernize Services', 'Migrate Services', 'Manage Services'],
  'Quick Links': ['Platform', 'About Us', 'Partners', 'Careers', 'Contact Us'],
  Resources: ['Insights', 'Case Studies', 'Product Updates', 'Webinars', 'Videos'],
}

export default function Footer() {
  return (
    <footer style={{
      background: 'var(--color-bg-primary)',
      borderTop: '1px solid var(--color-border-faint)',
      padding: 'clamp(3rem,5vw,5rem) clamp(1.5rem,5vw,4rem) 0',
    }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>

        {/* Top: logo + links */}
        <div style={{ display: 'grid', gridTemplateColumns: '260px repeat(4, 1fr)', gap: '40px', marginBottom: '4rem' }}>

          {/* Brand column */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {/* Logo */}
            <a href="/" style={{ display: 'inline-flex', textDecoration: 'none' }}>
              <img
                src="/images/Concierto-Logo-inverse.svg"
                alt="Concierto"
                style={{ height: '36px', width: 'auto', display: 'block' }}
              />
            </a>

            <p style={{
              fontFamily: 'var(--font-body)', fontSize: '0.8125rem', lineHeight: 1.65,
              color: 'var(--color-text-faint)', maxWidth: '220px',
            }}>
              Multi-Cloud · Multi-Lingual · AI-Powered
            </p>

            {/* Social links */}
            <div style={{ display: 'flex', gap: '10px', marginTop: '4px' }}>
              {['Li', 'Tw', 'Yt'].map(s => (
                <motion.a
                  key={s}
                  href="#"
                  whileHover={{ scale: 1.1, borderColor: 'rgba(255,255,255,0.2)' }}
                  style={{
                    width: '32px', height: '32px', borderRadius: '8px',
                    border: '1px solid var(--color-border-subtle)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontFamily: 'var(--font-body)', fontSize: '0.6875rem', fontWeight: 700,
                    color: 'var(--color-text-muted)', textDecoration: 'none',
                    background: 'var(--color-bg-card)',
                    transition: 'all 200ms ease',
                  }}
                >
                  {s}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([col, links]) => (
            <div key={col} style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <span style={{
                fontFamily: 'var(--font-body)', fontSize: '0.75rem', fontWeight: 700,
                letterSpacing: '0.1em', textTransform: 'uppercase',
                color: 'var(--color-text-secondary)', marginBottom: '4px',
              }}>
                {col}
              </span>
              {links.map(link => (
                <motion.a
                  key={link}
                  href="#"
                  whileHover={{ x: 2, color: '#FFFFFF' }}
                  style={{
                    fontFamily: 'var(--font-body)', fontSize: '0.875rem',
                    color: 'var(--color-text-muted)', textDecoration: 'none',
                    transition: 'color 150ms ease',
                  }}
                >
                  {link}
                </motion.a>
              ))}
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div style={{
          borderTop: '1px solid var(--color-border-faint)',
          padding: '20px 0 24px',
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          flexWrap: 'wrap', gap: '12px',
        }}>
          <span style={{
            fontFamily: 'var(--font-body)', fontSize: '0.8125rem',
            color: 'var(--color-text-faint)',
          }}>
            © 2026 Concierto Cloud, Inc. All rights reserved.
          </span>

          <div style={{ display: 'flex', gap: '24px' }}>
            {['Disclaimer', 'Terms of Use', 'Privacy Policy', 'Cookie Policy'].map(item => (
              <a
                key={item}
                href="#"
                style={{
                  fontFamily: 'var(--font-body)', fontSize: '0.8125rem',
                  color: 'var(--color-text-faint)', textDecoration: 'none',
                  transition: 'color 150ms ease',
                }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = 'rgba(255,255,255,0.6)' }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = 'rgba(255,255,255,0.25)' }}
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
