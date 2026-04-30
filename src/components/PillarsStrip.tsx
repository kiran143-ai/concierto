import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

const pillars = [
  {
    id: 'modernize',
    emoji: '🔄',
    label: 'MODERNIZE',
    title: 'From Legacy to Future-Ready in Weeks',
    cta: 'Discover Concierto Modernize',
    color: '#F59E0B',
  },
  {
    id: 'migrate',
    emoji: '🚀',
    label: 'MIGRATE',
    title: 'Migration Without Disruption',
    cta: 'Explore Concierto Migrate',
    color: '#4ADE80',
  },
  {
    id: 'manage',
    emoji: '⚙️',
    label: 'MANAGE',
    title: 'Unified Command Center for Hybrid Cloud',
    cta: 'Explore Concierto Manage',
    color: '#38BDF8',
  },
  {
    id: 'maximize',
    emoji: '📈',
    label: 'MAXIMIZE',
    title: 'AI-Powered Cloud Optimization',
    cta: 'Get Even with Concierto Maximize',
    color: '#C084FC',
  },
  {
    id: 'intelligence',
    emoji: '🧠',
    label: 'INTELLIGENCE',
    title: 'Data to Intelligence Without Migration',
    cta: 'Discover Concierto Intelligence',
    color: '#818CF8',
  },
]

export default function PillarsStrip() {
  return (
    <section style={{
      background: 'var(--color-bg-secondary)',
      padding: 'clamp(5rem,8vw,8rem) clamp(1.5rem,5vw,4rem)',
      borderTop: '1px solid rgba(255,255,255,0.06)',
    }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          style={{ textAlign: 'center', marginBottom: '3rem' }}
        >
          <h2 style={{
            fontFamily: 'var(--font-heading)',
            fontSize: 'clamp(1.75rem,3.5vw,2.75rem)',
            fontWeight: 800, lineHeight: 1.1, letterSpacing: '-0.02em',
            color: '#FFFFFF', marginBottom: '0.75rem',
          }}>
            One Platform. Every Transformation Stage.
          </h2>
          <p style={{
            fontFamily: 'var(--font-body)', fontSize: '1rem', lineHeight: 1.65,
            color: 'rgba(255,255,255,0.45)', maxWidth: '600px', margin: '0 auto',
          }}>
            Concierto is the unified platform that dramatically accelerates your complete enterprise transformation
            while saving time, effort, and cost compared to legacy tools and approaches.
          </p>
        </motion.div>

        {/* 5-column strip */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(5, 1fr)',
            border: '1px solid rgba(255,255,255,0.08)',
            borderRadius: '20px',
            overflow: 'hidden',
          }}
        >
          {pillars.map((p, i) => (
            <motion.div
              key={p.id}
              whileHover={{ background: 'rgba(255,255,255,0.05)' }}
              style={{
                padding: '32px 24px',
                background: 'rgba(255,255,255,0.02)',
                borderRight: i < pillars.length - 1 ? '1px solid rgba(255,255,255,0.06)' : 'none',
                display: 'flex', flexDirection: 'column', gap: '14px',
                cursor: 'pointer',
                transition: 'background 250ms ease',
              }}
            >
              {/* Emoji icon */}
              <span style={{ fontSize: '1.75rem', lineHeight: 1 }}>{p.emoji}</span>

              {/* Label */}
              <span style={{
                fontFamily: 'var(--font-body)', fontSize: '0.6875rem', fontWeight: 700,
                letterSpacing: '0.14em', textTransform: 'uppercase', color: p.color,
              }}>
                {p.label}
              </span>

              {/* Title */}
              <p style={{
                fontFamily: 'var(--font-heading)', fontSize: '1rem', fontWeight: 700,
                lineHeight: 1.3, color: '#FFFFFF',
              }}>
                {p.title}
              </p>

              {/* Link */}
              <a
                href="#"
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: '6px',
                  fontFamily: 'var(--font-body)', fontSize: '0.8125rem', fontWeight: 600,
                  color: p.color, textDecoration: 'none', marginTop: 'auto',
                  transition: 'gap 200ms ease',
                }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.gap = '10px' }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.gap = '6px' }}
              >
                {p.cta} <ArrowRight size={13} />
              </a>

              {/* Bottom accent line */}
              <div style={{
                height: '2px', borderRadius: '1px',
                background: `linear-gradient(90deg, ${p.color}, transparent)`,
                opacity: 0.5,
              }} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
