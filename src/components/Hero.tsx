import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, Play } from 'lucide-react'
import { useState, useEffect } from 'react'

const DASHBOARD_SCREENS = ['/images/1.png', '/images/2.png', '/images/3.png']
import FloatingLines from './FloatingLines'

const stats = [
  { value: '3×',   label: 'Faster Migration',   color: '#F59E0B' },
  { value: '80%',  label: 'Less Manual Effort',  color: '#38BDF8' },
  { value: '4 Wks',label: 'To AI Foundation',    color: '#F59E0B' },
  { value: '50%+', label: 'Cost Reduction',       color: '#38BDF8' },
]

const pillars = [
  { id: 'modernize',    emoji: '🔄', label: 'MODERNIZE',    title: 'From Legacy to Future-Ready in Weeks',    cta: 'Discover Concierto Modernize',     color: '#F59E0B' },
  { id: 'migrate',      emoji: '🚀', label: 'MIGRATE',      title: 'Migration Without Disruption',            cta: 'Explore Concierto Migrate',        color: '#4ADE80' },
  { id: 'manage',       emoji: '⚙️', label: 'MANAGE',       title: 'Unified Command Center for Hybrid Cloud', cta: 'Explore Concierto Manage',         color: '#38BDF8' },
  { id: 'maximize',     emoji: '📈', label: 'MAXIMIZE',     title: 'AI-Powered Cloud Optimization',           cta: 'Get Even with Concierto Maximize', color: '#C084FC' },
  { id: 'intelligence', emoji: '🧠', label: 'INTELLIGENCE', title: 'Data to Intelligence Without Migration',  cta: 'Discover Concierto Intelligence',  color: '#818CF8' },
] as const

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] as const },
})

export default function Hero() {
  const [activeScreen, setActiveScreen] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => setActiveScreen(i => (i + 1) % DASHBOARD_SCREENS.length), 3500)
    return () => clearInterval(timer)
  }, [])

  return (
    <section style={{ position: 'relative', width: '100%', overflow: 'hidden', background: '#000000' }}>

      {/* FloatingLines — performance-optimised: 1× pixel ratio, 30fps, pauses when off-screen */}
      <div aria-hidden="true" style={{
        position: 'absolute', top: 0, left: 0, width: '100%', height: '100vh',
        zIndex: 0, opacity: 0.55, pointerEvents: 'none',
      }}>
        <FloatingLines
          linesGradient={['#F59E0B', '#38BDF8', '#7C3AED']}
          enabledWaves={['middle', 'bottom']}
          lineCount={[6, 8]}
          lineDistance={[5, 6]}
          bendRadius={4.0}
          bendStrength={-0.5}
          animationSpeed={0.45}
          interactive={false}
          parallax={false}
          mixBlendMode="screen"
        />
      </div>

      {/* Very subtle top-to-bottom darken — keeps text readable */}
      <div aria-hidden="true" style={{
        position: 'absolute', top: 0, left: 0, width: '100%', height: '100vh',
        zIndex: 1, pointerEvents: 'none',
        background: 'linear-gradient(to bottom, rgba(0,0,0,0.35) 0%, rgba(0,0,0,0.1) 40%, rgba(0,0,0,0.1) 60%, rgba(0,0,0,0.75) 100%)',
      }} />

      {/* Bottom hard fade to black */}
      <div aria-hidden="true" style={{
        position: 'absolute', top: 'calc(100vh - 180px)', left: 0, width: '100%', height: '180px',
        zIndex: 2, pointerEvents: 'none',
        background: 'linear-gradient(to bottom, transparent 0%, #000 100%)',
      }} />

      {/* Subtle grid */}
      <div aria-hidden="true" style={{
        position: 'absolute', top: 0, left: 0, width: '100%', height: '100vh',
        zIndex: 3, pointerEvents: 'none',
        backgroundImage: `
          linear-gradient(rgba(255,255,255,0.018) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255,255,255,0.018) 1px, transparent 1px)
        `,
        backgroundSize: '64px 64px',
      }} />

      {/* ── 1. Hero text + CTAs ── */}
      <div style={{
        position: 'relative',
        zIndex: 20,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
        paddingTop: 'calc(64px + 2.5rem)',
        paddingLeft: 'clamp(1.5rem, 5vw, 4rem)',
        paddingRight: 'clamp(1.5rem, 5vw, 4rem)',
        paddingBottom: '2rem',
      }}>
        {/* Eyebrow badge */}
        <motion.div {...fadeUp(0)} style={{ marginBottom: '2rem' }}>
          <span style={{
            display: 'inline-flex', alignItems: 'center', gap: '8px',
            padding: '6px 18px', borderRadius: '9999px',
            fontFamily: 'var(--font-body)', fontSize: '0.75rem', fontWeight: 600,
            letterSpacing: '0.1em', textTransform: 'uppercase',
            background: 'rgba(255,255,255,0.05)',
            border: '1px solid rgba(255,255,255,0.12)',
            color: 'rgba(255,255,255,0.6)',
            backdropFilter: 'blur(8px)',
          }}>
            <span style={{
              width: '6px', height: '6px', borderRadius: '50%', flexShrink: 0,
              background: '#F59E0B', boxShadow: '0 0 8px rgba(245,158,11,0.9)',
              display: 'inline-block', animation: 'pulse-dot 2s ease-in-out infinite',
            }} />
            One Platform · Complete Transformation
          </span>
        </motion.div>

        {/* H1 */}
        <motion.h1 {...fadeUp(0.08)} style={{
          fontFamily: 'var(--font-heading)',
          fontSize: 'clamp(2rem, 3.5vw, 3.25rem)',
          fontWeight: 800, lineHeight: 1.1, letterSpacing: '-0.025em',
          color: '#FFFFFF', marginBottom: 0, maxWidth: '780px',
        }}>
          Unified Platform for Accelerated Business Transformation
        </motion.h1>

        {/* Subheadline */}
        <motion.p {...fadeUp(0.14)} style={{
          fontFamily: 'var(--font-body)',
          fontSize: 'clamp(0.9rem, 1.4vw, 1.05rem)',
          fontWeight: 500, lineHeight: 1.7,
          color: 'rgba(255,255,255,0.55)',
          marginBottom: '1.5rem', letterSpacing: '0.01em',
        }}>
          Multi-Cloud &nbsp;·&nbsp; Multi-Lingual &nbsp;·&nbsp; AI-Powered
        </motion.p>

        {/* Request a Brief — mobile only, shown below heading */}
        <motion.div {...fadeUp(0.18)} className="flex lg:hidden" style={{ marginBottom: '2rem' }}>
          <a
            href="#"
            style={{
              display: 'inline-flex', alignItems: 'center', gap: '6px',
              padding: '12px 28px', borderRadius: '9999px',
              fontFamily: 'var(--font-body)', fontSize: '0.9375rem', fontWeight: 600,
              background: '#F59E0B', color: '#000000',
              textDecoration: 'none',
              boxShadow: '0 0 20px rgba(245,158,11,0.4)',
              letterSpacing: '-0.01em',
            }}
          >
            Request a Brief
          </a>
        </motion.div>

      </div>

      {/* ── 2. 5M Pillar strip — directly under CTAs ── */}
      <motion.div
        initial={{ opacity: 0, y: 32 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.32, ease: [0.16, 1, 0.3, 1] }}
        style={{
          position: 'relative', zIndex: 20,
          padding: '1.5rem clamp(1.5rem, 5vw, 4rem) 2rem',
          maxWidth: '1280px', margin: '0 auto', width: '100%',
        }}
      >
        {/* Heading */}
        <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <h2 style={{
            fontFamily: 'var(--font-heading)',
            fontSize: 'clamp(1.35rem, 2.5vw, 2rem)',
            fontWeight: 800, lineHeight: 1.1, letterSpacing: '-0.02em',
            color: '#FFFFFF', marginBottom: '0.6rem',
          }}>
            One Platform. Every Transformation Stage.
          </h2>
          <p style={{
            fontFamily: 'var(--font-body)', fontSize: '0.9375rem', lineHeight: 1.65,
            color: 'rgba(255,255,255,0.45)', maxWidth: '560px', margin: '0 auto',
          }}>
            Concierto is the unified platform that dramatically accelerates your complete enterprise
            transformation while saving time, effort, and cost compared to legacy tools and approaches.
          </p>
        </div>

        {/* 5-column card grid */}
        <div className="hero-pillar-grid">
          {pillars.map((p, i) => (
            <motion.div
              key={p.id}
              whileHover={{ background: 'rgba(255,255,255,0.06)' }}
              className="hero-pillar-card"
              style={{
                background: 'rgba(255,255,255,0.02)',
                borderRight: i < pillars.length - 1 ? '1px solid rgba(255,255,255,0.06)' : 'none',
                display: 'flex', flexDirection: 'column', gap: '12px',
                cursor: 'pointer', transition: 'background 250ms ease',
              }}
            >
              <span style={{ fontSize: '1.5rem', lineHeight: 1 }}>{p.emoji}</span>
              <span className="hero-pillar-label" style={{
                fontFamily: 'var(--font-body)', fontWeight: 700,
                letterSpacing: '0.14em', textTransform: 'uppercase', color: p.color,
              }}>
                {p.label}
              </span>
              <p className="hero-pillar-title" style={{
                fontFamily: 'var(--font-heading)',
              }}>
                {p.title}
              </p>
              <a
                href="#"
                className="hero-pillar-cta"
                style={{
                  alignItems: 'center', gap: '6px',
                  fontFamily: 'var(--font-body)', fontSize: '0.75rem', fontWeight: 600,
                  color: p.color, textDecoration: 'none', transition: 'gap 200ms ease',
                }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.gap = '10px' }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.gap = '6px' }}
              >
                {p.cta} →
              </a>
              <div style={{
                height: '2px', borderRadius: '1px',
                background: `linear-gradient(90deg, ${p.color}, transparent)`,
                opacity: 0.45,
              }} />
            </motion.div>
          ))}
        </div>

        {/* CTAs — below pillar cards */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
          style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center', gap: '12px', marginTop: '2rem' }}
        >
          <motion.a
            href="#"
            whileHover={{ scale: 1.03, y: -1 }}
            whileTap={{ scale: 0.97 }}
            style={{
              display: 'inline-flex', alignItems: 'center', gap: '8px',
              padding: '14px 32px', borderRadius: '9999px',
              fontFamily: 'var(--font-body)', fontSize: '0.9375rem', fontWeight: 600,
              background: '#FFFFFF', color: '#000000',
              boxShadow: '0 0 32px rgba(255,255,255,0.14)',
              letterSpacing: '-0.01em', textDecoration: 'none',
            }}
          >
            Get Started <ArrowRight size={15} />
          </motion.a>
          <motion.a
            href="#"
            whileTap={{ scale: 0.97 }}
            style={{
              display: 'inline-flex', alignItems: 'center', gap: '10px',
              padding: '14px 28px', borderRadius: '9999px',
              fontFamily: 'var(--font-body)', fontSize: '0.9375rem', fontWeight: 500,
              color: 'rgba(255,255,255,0.75)',
              border: '1px solid rgba(255,255,255,0.18)',
              background: 'rgba(255,255,255,0.05)',
              backdropFilter: 'blur(8px)', textDecoration: 'none',
            }}
          >
            <span style={{
              width: '28px', height: '28px', borderRadius: '50%', flexShrink: 0,
              background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.15)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}>
              <Play size={10} fill="currentColor" style={{ marginLeft: '2px' }} />
            </span>
            Watch Overview
          </motion.a>
        </motion.div>
      </motion.div>

      {/* ── 3. Dashboard image ── */}
      <motion.div
        initial={{ opacity: 0, y: 48 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.95, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
        style={{
          position: 'relative', zIndex: 20,
          display: 'flex', justifyContent: 'center',
          paddingLeft: 'clamp(1.5rem, 6vw, 6rem)',
          paddingRight: 'clamp(1.5rem, 6vw, 6rem)',
        }}
      >
        <motion.div
          animate={{ y: [0, -6, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
          style={{ width: '100%', maxWidth: '940px', position: 'relative' }}
        >
          <div style={{
            position: 'absolute', inset: '-16px', pointerEvents: 'none',
            background: 'radial-gradient(ellipse at 50% 100%, rgba(245,158,11,0.12) 0%, rgba(56,189,248,0.08) 40%, transparent 70%)',
            filter: 'blur(20px)',
          }} />

          {/* Floating cloud-provider icons */}
          {[
            { src: '/images/aws.png',    top: '-28px',  left: '10%',   delay: 0 },
            { src: '/images/g.png',      top: '-28px',  right: '8%',   delay: 0.4 },
            { src: '/images/cloud.png',  top: '30%',    left: '-52px', delay: 0.8 },
            { src: '/images/A.png',      top: '30%',    right: '-52px',delay: 0.6 },
            { src: '/images/tick.png',   bottom: '10%', left: '-48px', delay: 1.0 },
            { src: '/images/server.png', bottom: '10%', right: '-48px',delay: 0.2 },
          ].map((icon, i) => (
            <motion.div
              key={i}
              className="hero-float-icon"
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 3 + i * 0.4, repeat: Infinity, ease: 'easeInOut', delay: icon.delay }}
              style={{
                position: 'absolute',
                top: icon.top, bottom: (icon as any).bottom,
                left: icon.left, right: (icon as any).right,
                width: '64px', height: '64px',
                alignItems: 'center', justifyContent: 'center',
                zIndex: 10,
              }}
            >
              <img src={icon.src} alt="" style={{ width: '64px', height: '64px', objectFit: 'contain', filter: 'drop-shadow(0 4px 12px rgba(0,0,0,0.5))' }} />
            </motion.div>
          ))}
          <div style={{ position: 'relative', width: '100%', overflow: 'hidden', borderRadius: '14px 14px 0 0', boxShadow: '0 0 0 1px rgba(255,255,255,0.07), 0 -4px 60px rgba(245,158,11,0.07), 0 40px 80px rgba(0,0,0,0.6)' }}>
            <AnimatePresence mode="wait">
              <motion.img
                key={activeScreen}
                src={DASHBOARD_SCREENS[activeScreen]}
                alt={`Concierto Dashboard Screen ${activeScreen + 1}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.9, ease: 'easeInOut' }}
                style={{ display: 'block', width: '100%' }}
              />
            </AnimatePresence>
            {/* dot indicators */}
            <div style={{ position: 'absolute', bottom: 14, left: '50%', transform: 'translateX(-50%)', display: 'flex', gap: 8 }}>
              {DASHBOARD_SCREENS.map((_, i) => (
                <div key={i} style={{ width: i === activeScreen ? 20 : 8, height: 8, borderRadius: 4, background: i === activeScreen ? '#F59E0B' : 'rgba(255,255,255,0.35)', transition: 'all 0.4s ease' }} />
              ))}
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* ── 4. Metrics bar — under dashboard ── */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.65, ease: [0.16, 1, 0.3, 1] }}
        style={{
          position: 'relative', zIndex: 20,
          display: 'flex', justifyContent: 'center',
          padding: '3rem clamp(1.5rem, 5vw, 4rem) 5rem',
        }}
      >
        <div className="hero-metrics-grid" style={{
          width: '100%', maxWidth: '780px',
          borderRadius: '16px',
          border: '1px solid rgba(255,255,255,0.11)',
          overflow: 'hidden',
          background: 'rgba(10,10,18,0.7)',
          backdropFilter: 'blur(24px)', WebkitBackdropFilter: 'blur(24px)',
          boxShadow: '0 4px 40px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.06)',
        }}>
          {stats.map((stat, i) => (
            <div key={stat.label} style={{
              display: 'flex', flexDirection: 'column', alignItems: 'center',
              justifyContent: 'center', padding: '28px 20px', gap: '6px',
              borderRight: i < stats.length - 1 ? '1px solid rgba(255,255,255,0.08)' : 'none',
              position: 'relative',
            }}>
              <div style={{
                position: 'absolute', inset: 0, pointerEvents: 'none',
                background: `radial-gradient(ellipse at 50% 60%, ${stat.color}14 0%, transparent 70%)`,
              }} />
              <span style={{
                fontFamily: 'var(--font-heading)',
                fontSize: 'clamp(1.75rem, 3vw, 2.25rem)',
                fontWeight: 800, lineHeight: 1, letterSpacing: '-0.03em',
                color: stat.color, textShadow: `0 0 24px ${stat.color}60`,
                position: 'relative',
              }}>
                {stat.value}
              </span>
              <span style={{
                fontFamily: 'var(--font-body)', fontSize: '0.75rem', fontWeight: 500,
                lineHeight: 1.3, color: 'rgba(255,255,255,0.45)',
                textAlign: 'center', letterSpacing: '0.01em', position: 'relative',
              }}>
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
