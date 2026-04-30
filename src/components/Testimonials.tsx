import { motion } from 'framer-motion'

const testimonials = [
  {
    quote: 'Concierto reduced our cloud migration timeline from 18 months to just 6. The AI-powered assessment alone saved weeks of manual work.',
    name: 'Sarah M.',
    title: 'CTO, Global Financial Services Firm',
    initials: 'SM',
    color: '#F59E0B',
    stars: 5,
  },
  {
    quote: 'The federated AI platform is revolutionary. We connected 12 data sources in 2 weeks — zero data migration required. Our teams are moving faster than ever.',
    name: 'Raj K.',
    title: 'VP Engineering, Fortune 500 Retailer',
    initials: 'RK',
    color: '#38BDF8',
    stars: 5,
  },
  {
    quote: '50% reduction in cloud costs within Q1. The FinOps dashboard alone paid for the entire platform in the first month.',
    name: 'Aiko L.',
    title: 'Director of Cloud Operations',
    initials: 'AL',
    color: '#818CF8',
    stars: 5,
  },
]

function Stars({ count }: { count: number }) {
  return (
    <div style={{ display: 'flex', gap: '3px' }}>
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} width="14" height="14" viewBox="0 0 14 14" fill="#F59E0B">
          <path d="M7 1l1.545 3.13L12 4.635l-2.5 2.435.59 3.44L7 8.885l-3.09 1.625.59-3.44L2 4.635l3.455-.505z" />
        </svg>
      ))}
    </div>
  )
}

export default function Testimonials() {
  return (
    <section style={{
      background: 'var(--color-bg-primary)',
      padding: 'clamp(5rem,8vw,8rem) clamp(1.5rem,5vw,4rem)',
      borderTop: '1px solid var(--color-border-faint)',
    }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>

        {/* Header */}
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
            marginBottom: '0.5rem',
          }}>
            Real enterprises. Real results.
          </h2>
          <p style={{
            fontFamily: 'var(--font-body)', fontSize: '1rem', color: 'var(--color-text-muted)',
          }}>
            Trusted by Mastercard, MUFG, New York Life, and hundreds more.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="testimonials-grid">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -3 }}
              style={{
                position: 'relative', overflow: 'hidden',
                padding: '32px 28px', borderRadius: '20px',
                background: 'var(--color-bg-card)',
                border: '1px solid var(--color-border-subtle)',
                backdropFilter: 'blur(12px)',
                display: 'flex', flexDirection: 'column', gap: '20px',
                transition: 'transform 300ms ease',
              }}
            >
              {/* Subtle top accent */}
              <div style={{
                position: 'absolute', top: 0, left: 0, right: 0, height: '1px',
                background: `linear-gradient(90deg, transparent, ${t.color}50, transparent)`,
              }} />

              {/* Stars */}
              <Stars count={t.stars} />

              {/* Quote */}
              <p style={{
                fontFamily: 'var(--font-body)', fontSize: '0.9375rem', lineHeight: 1.7,
                color: 'var(--color-text-secondary)', fontStyle: 'italic', flex: 1,
              }}>
                "{t.quote}"
              </p>

              {/* Author */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div style={{
                  width: '40px', height: '40px', borderRadius: '50%', flexShrink: 0,
                  background: `${t.color}20`, border: `1px solid ${t.color}40`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontFamily: 'var(--font-heading)', fontSize: '0.75rem', fontWeight: 700,
                  color: t.color,
                }}>
                  {t.initials}
                </div>
                <div>
                  <div style={{
                    fontFamily: 'var(--font-body)', fontSize: '0.875rem', fontWeight: 600,
                    color: 'var(--color-text-primary)',
                  }}>
                    {t.name}
                  </div>
                  <div style={{
                    fontFamily: 'var(--font-body)', fontSize: '0.75rem',
                    color: 'var(--color-text-muted)',
                  }}>
                    {t.title}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
