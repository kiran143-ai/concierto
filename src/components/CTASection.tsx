import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { useTheme } from '../context/ThemeContext'

export default function CTASection() {
  const { theme } = useTheme()
  const isLight = theme === 'light'

  /* In light mode: a rich dark-branded section (same as reference's purple CTA).
     In dark mode: the original black section with orange/blue blobs. */
  if (isLight) {
    return (
      <section style={{
        position: 'relative',
        background: 'linear-gradient(135deg, #0D0D1A 0%, #161032 50%, #0D1A2E 100%)',
        padding: 'clamp(5rem,8vw,8rem) clamp(1.5rem,5vw,4rem)',
        overflow: 'hidden',
      }}>
        {/* Amber glow blob top-left */}
        <div aria-hidden="true" style={{
          position: 'absolute', width: '560px', height: '400px',
          top: '-160px', left: '-120px',
          background: 'radial-gradient(ellipse, rgba(245,158,11,0.22) 0%, transparent 70%)',
          filter: 'blur(80px)', pointerEvents: 'none',
        }} />
        {/* Blue glow blob bottom-right */}
        <div aria-hidden="true" style={{
          position: 'absolute', width: '480px', height: '360px',
          bottom: '-140px', right: '-100px',
          background: 'radial-gradient(ellipse, rgba(56,189,248,0.16) 0%, transparent 70%)',
          filter: 'blur(80px)', pointerEvents: 'none',
        }} />
        {/* Fine dot grid */}
        <div aria-hidden="true" style={{
          position: 'absolute', inset: 0, pointerEvents: 'none',
          backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.06) 1px, transparent 1px)',
          backgroundSize: '32px 32px',
        }} />

        <div style={{ maxWidth: '1280px', margin: '0 auto', position: 'relative', zIndex: 1, textAlign: 'center' }}>
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Eyebrow */}
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', marginBottom: '1.5rem', padding: '5px 16px', borderRadius: '9999px', background: 'rgba(245,158,11,0.15)', border: '1px solid rgba(245,158,11,0.3)' }}>
              <span style={{ width: '5px', height: '5px', borderRadius: '50%', background: '#F59E0B', boxShadow: '0 0 6px rgba(245,158,11,0.9)', display: 'inline-block' }} />
              <span style={{ fontFamily: 'var(--font-body)', fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#FBBF24' }}>
                Get Started Today
              </span>
            </div>

            <h2 style={{
              fontFamily: 'var(--font-heading)', fontSize: 'clamp(2.5rem,6vw,4.5rem)',
              fontWeight: 800, lineHeight: 1.05, letterSpacing: '-0.03em', color: '#FFFFFF',
              marginBottom: '1.25rem',
            }}>
              Ready to transform<br />
              <span style={{ color: '#FBBF24' }}>at hyperspeed?</span>
            </h2>

            <p style={{
              fontFamily: 'var(--font-body)', fontSize: '1.1rem', lineHeight: 1.65,
              color: 'rgba(255,255,255,0.55)', maxWidth: '480px', margin: '0 auto 2.5rem',
            }}>
              Join hundreds of enterprises accelerating their cloud journey with Concierto's unified AI platform.
            </p>

            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px', flexWrap: 'wrap', marginBottom: '2rem' }}>
              <motion.a
                href="#"
                whileHover={{ scale: 1.03, y: -1, boxShadow: '0 0 40px rgba(245,158,11,0.5)' }}
                whileTap={{ scale: 0.97 }}
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: '8px',
                  padding: '14px 32px', borderRadius: '9999px',
                  fontFamily: 'var(--font-body)', fontSize: '0.9375rem', fontWeight: 700,
                  background: '#F59E0B', color: '#000000', textDecoration: 'none',
                  boxShadow: '0 0 24px rgba(245,158,11,0.35)',
                  transition: 'box-shadow 300ms ease',
                }}
              >
                Get Started <ArrowRight size={16} />
              </motion.a>

              <motion.a
                href="#"
                whileHover={{ background: 'rgba(255,255,255,0.08)' }}
                whileTap={{ scale: 0.97 }}
                style={{
                  display: 'inline-flex', alignItems: 'center',
                  padding: '14px 32px', borderRadius: '9999px',
                  fontFamily: 'var(--font-body)', fontSize: '0.9375rem', fontWeight: 600,
                  color: 'rgba(255,255,255,0.8)', textDecoration: 'none',
                  border: '1px solid rgba(255,255,255,0.18)',
                  background: 'transparent', transition: 'background 200ms ease',
                }}
              >
                Request a Demo
              </motion.a>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '20px', flexWrap: 'wrap' }}>
              {['No credit card required', 'Enterprise SLA included', 'Setup in minutes'].map((item, i) => (
                <span key={item} style={{
                  display: 'flex', alignItems: 'center', gap: '6px',
                  fontFamily: 'var(--font-body)', fontSize: '0.8125rem',
                  color: 'rgba(255,255,255,0.35)',
                }}>
                  {i > 0 && <span style={{ color: 'rgba(255,255,255,0.15)', marginRight: '-4px' }}>·</span>}
                  <span style={{ width: '4px', height: '4px', borderRadius: '50%', background: 'rgba(255,255,255,0.25)', display: 'inline-block' }} />
                  {item}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    )
  }

  /* ── Dark mode: original version ── */
  return (
    <section style={{
      position: 'relative',
      background: '#000000',
      padding: 'clamp(5rem,8vw,8rem) clamp(1.5rem,5vw,4rem)',
      overflow: 'hidden',
    }}>
      <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
        <div style={{
          position: 'absolute', width: '700px', height: '500px',
          bottom: '-200px', left: '-150px',
          background: 'radial-gradient(ellipse, rgba(245,120,20,0.5) 0%, rgba(220,80,0,0.3) 35%, transparent 70%)',
          filter: 'blur(80px)',
          animation: 'float-blob 10s ease-in-out infinite',
        }} />
        <div style={{
          position: 'absolute', width: '600px', height: '420px',
          bottom: '-120px', right: '-120px',
          background: 'radial-gradient(ellipse, rgba(30,160,220,0.45) 0%, rgba(0,120,200,0.25) 40%, transparent 70%)',
          filter: 'blur(90px)',
          animation: 'float-blob 13s ease-in-out infinite reverse',
        }} />
        <div style={{
          position: 'absolute', top: 0, left: 0, right: 0, height: '40%',
          background: 'linear-gradient(to bottom, #000 0%, transparent 100%)',
        }} />
      </div>

      <div style={{ maxWidth: '1280px', margin: '0 auto', position: 'relative', zIndex: 1, textAlign: 'center' }}>
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2 style={{
            fontFamily: 'var(--font-heading)', fontSize: 'clamp(2.5rem,6vw,4.5rem)',
            fontWeight: 800, lineHeight: 1.05, letterSpacing: '-0.03em', color: '#FFFFFF',
            marginBottom: '1.25rem',
          }}>
            Ready to transform<br />
            <span style={{ color: 'rgba(255,255,255,0.65)' }}>at hyperspeed?</span>
          </h2>

          <p style={{
            fontFamily: 'var(--font-body)', fontSize: '1.1rem', lineHeight: 1.65,
            color: 'rgba(255,255,255,0.45)', maxWidth: '480px', margin: '0 auto 2.5rem',
          }}>
            Join hundreds of enterprises accelerating their cloud journey with Concierto's unified AI platform.
          </p>

          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px', flexWrap: 'wrap', marginBottom: '2rem' }}>
            <motion.a
              href="#"
              whileHover={{ scale: 1.03, y: -1 }}
              whileTap={{ scale: 0.97 }}
              style={{
                display: 'inline-flex', alignItems: 'center', gap: '8px',
                padding: '14px 32px', borderRadius: '9999px',
                fontFamily: 'var(--font-body)', fontSize: '0.9375rem', fontWeight: 700,
                background: '#FFFFFF', color: '#000000', textDecoration: 'none',
                boxShadow: '0 0 40px rgba(255,255,255,0.15)',
              }}
            >
              Get Started <ArrowRight size={16} />
            </motion.a>

            <motion.a
              href="#"
              whileHover={{ background: 'rgba(255,255,255,0.07)' }}
              whileTap={{ scale: 0.97 }}
              style={{
                display: 'inline-flex', alignItems: 'center',
                padding: '14px 32px', borderRadius: '9999px',
                fontFamily: 'var(--font-body)', fontSize: '0.9375rem', fontWeight: 600,
                color: 'rgba(255,255,255,0.75)', textDecoration: 'none',
                border: '1px solid rgba(255,255,255,0.18)',
                background: 'transparent', transition: 'background 200ms ease',
              }}
            >
              Request a Demo
            </motion.a>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '20px', flexWrap: 'wrap' }}>
            {['No credit card required', 'Enterprise SLA included', 'Setup in minutes'].map((item, i) => (
              <span key={item} style={{
                display: 'flex', alignItems: 'center', gap: '6px',
                fontFamily: 'var(--font-body)', fontSize: '0.8125rem',
                color: 'rgba(255,255,255,0.35)',
              }}>
                {i > 0 && <span style={{ color: 'rgba(255,255,255,0.15)', marginRight: '-4px' }}>·</span>}
                <span style={{ width: '4px', height: '4px', borderRadius: '50%', background: 'rgba(255,255,255,0.25)', display: 'inline-block' }} />
                {item}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
