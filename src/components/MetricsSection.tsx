import { useRef, useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const metrics = [
  {
    value: '3×',
    label: 'Faster Migrations',
    sub: 'Zero downtime at enterprise scale',
    color: '#F59E0B',
    glow: 'rgba(245,158,11,0.15)',
  },
  {
    value: '50%+',
    label: 'Cloud Cost Reduction',
    sub: 'FinOps-powered optimization',
    color: '#4ADE80',
    glow: 'rgba(74,222,128,0.12)',
  },
  {
    value: '4 Weeks',
    label: 'To AI Foundation',
    sub: 'vs 12–24 month traditional approach',
    color: '#38BDF8',
    glow: 'rgba(56,189,248,0.12)',
  },
  {
    value: '1000+',
    label: 'Workloads Transformed',
    sub: 'Across Fortune 500 and global enterprises',
    color: '#818CF8',
    glow: 'rgba(129,140,248,0.12)',
  },
]

function CountUp({ target, suffix = '', duration = 1800 }: { target: string; suffix?: string; duration?: number }) {
  const [display, setDisplay] = useState('0')
  const started = useRef(false)
  const ref = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !started.current) {
        started.current = true

        // extract number from target string
        const num = parseFloat(target.replace(/[^0-9.]/g, ''))
        if (isNaN(num)) { setDisplay(target); return }

        const start = Date.now()
        const tick = () => {
          const elapsed = Date.now() - start
          const progress = Math.min(elapsed / duration, 1)
          const ease = 1 - Math.pow(1 - progress, 3)
          const current = Math.round(ease * num * 10) / 10
          setDisplay(target.replace(/[0-9.]+/, String(current)))
          if (progress < 1) requestAnimationFrame(tick)
          else setDisplay(target)
        }
        requestAnimationFrame(tick)
      }
    }, { threshold: 0.5 })

    observer.observe(el)
    return () => observer.disconnect()
  }, [target, duration])

  return <span ref={ref}>{display}</span>
}

export default function MetricsSection() {
  return (
    <section style={{
      background: 'var(--color-bg-secondary)',
      padding: 'clamp(5rem,8vw,8rem) clamp(1.5rem,5vw,4rem)',
      borderTop: '1px solid var(--color-border-faint)',
    }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          style={{ textAlign: 'center', marginBottom: '3.5rem' }}
        >
          <h2 style={{
            fontFamily: 'var(--font-heading)', fontSize: 'clamp(1.75rem,3.5vw,2.75rem)',
            fontWeight: 800, lineHeight: 1.1, letterSpacing: '-0.02em', color: 'var(--color-text-primary)',
            marginBottom: '0.75rem',
          }}>
            Transform Faster. Risk Less. Achieve More.
          </h2>
          <p style={{
            fontFamily: 'var(--font-body)', fontSize: '1rem', lineHeight: 1.65,
            color: 'var(--color-text-muted)', maxWidth: '560px', margin: '0 auto',
          }}>
            Join the global enterprises that have chosen Concierto to revolutionize their transformation journey.
            Experience the power of unified platforms, AI-driven automation, and enterprise-proven results.
          </p>
        </motion.div>

        {/* Metric cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '16px' }}>
          {metrics.map((m, i) => (
            <motion.div
              key={m.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.6, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ scale: 1.02, y: -3 }}
              style={{
                position: 'relative', overflow: 'hidden',
                padding: '32px 28px', borderRadius: '20px',
                background: 'var(--color-bg-card)',
                border: `1px solid ${m.color}25`,
                transition: 'transform 300ms ease, box-shadow 300ms ease',
              }}
            >
              {/* Glow */}
              <div style={{
                position: 'absolute', inset: 0, pointerEvents: 'none',
                background: `radial-gradient(ellipse at 30% 20%, ${m.glow} 0%, transparent 65%)`,
              }} />

              {/* Value */}
              <div style={{
                fontFamily: 'var(--font-heading)', fontSize: 'clamp(2.5rem,4vw,3.5rem)',
                fontWeight: 800, lineHeight: 1, letterSpacing: '-0.03em',
                color: m.color, marginBottom: '10px', position: 'relative',
              }}>
                <CountUp target={m.value} />
              </div>

              {/* Label */}
              <div style={{
                fontFamily: 'var(--font-body)', fontSize: '1rem', fontWeight: 600,
                color: 'var(--color-text-primary)', marginBottom: '6px', lineHeight: 1.3, position: 'relative',
              }}>
                {m.label}
              </div>

              {/* Sub */}
              <div style={{
                fontFamily: 'var(--font-body)', fontSize: '0.8125rem',
                color: 'var(--color-text-faint)', lineHeight: 1.5, position: 'relative',
              }}>
                {m.sub}
              </div>

              {/* Bottom accent */}
              <div style={{
                position: 'absolute', bottom: 0, left: 0, right: 0, height: '2px',
                background: `linear-gradient(90deg, ${m.color}80, transparent)`,
              }} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
