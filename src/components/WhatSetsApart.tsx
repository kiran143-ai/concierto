import { useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Zap, Brain, Layers, Globe } from 'lucide-react'

/* ─── Data ─────────────────────────────────────────────────────── */
const cards = [
  {
    id: 'speed',
    icon: <Zap size={18} />,
    label: 'Speed',
    title: '3× Faster Transformations',
    desc: 'Migrate in weeks, not quarters. AI-accelerated pathways eliminate 80% of manual effort across every cloud journey.',
    accent: '#F59E0B',
    glowColor: 'rgba(245,158,11,0.1)',
    borderColor: 'rgba(245,158,11,0.22)',
    size: 'large',
  },
  {
    id: 'ai',
    icon: <Brain size={18} />,
    label: 'Agentic AI',
    title: 'Agents That Work For You',
    desc: 'AI agents scan, assess, recommend, and execute — autonomously. From discovery to deployment, zero human bottlenecks.',
    accent: '#38BDF8',
    glowColor: 'rgba(56,189,248,0.09)',
    borderColor: 'rgba(56,189,248,0.2)',
    size: 'large',
  },
  {
    id: 'control',
    icon: <Layers size={18} />,
    label: 'Control',
    title: 'Single Pane of Glass',
    desc: 'Unified command center. 1,000+ pre-built automations. Full governance across hybrid and multi-cloud.',
    accent: '#818CF8',
    glowColor: 'rgba(129,140,248,0.08)',
    borderColor: 'rgba(129,140,248,0.18)',
    size: 'small',
  },
  {
    id: 'flex',
    icon: <Globe size={18} />,
    label: 'Flexibility',
    title: 'Any Cloud. Any Language.',
    desc: 'Multi-cloud, multi-lingual. Any source to any cloud. Built for global enterprise scale.',
    accent: '#4ADE80',
    glowColor: 'rgba(74,222,128,0.08)',
    borderColor: 'rgba(74,222,128,0.18)',
    size: 'small',
  },
]

/* ─── Speed Visual ─────────────────────────────────────────────── */
function SpeedVisual() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', width: '100%' }}>
      {[
        { label: 'Traditional', time: '18 months', w: '100%', color: 'var(--color-border-default)' },
        { label: 'With Concierto', time: '6 months', w: '33%',  color: '#F59E0B' },
      ].map(bar => (
        <div key={bar.label} style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem', color: 'var(--color-text-muted)', fontFamily: 'var(--font-body)' }}>
            <span>{bar.label}</span>
            <span style={{ color: bar.color === '#F59E0B' ? '#F59E0B' : 'var(--color-text-muted)' }}>{bar.time}</span>
          </div>
          <div style={{ height: '7px', borderRadius: '9999px', overflow: 'hidden', background: 'var(--color-border-faint)' }}>
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: bar.w }}
              transition={{ duration: 1.2, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              style={{ height: '100%', borderRadius: '9999px', background: bar.color }}
            />
          </div>
        </div>
      ))}
      <div style={{
        marginTop: '8px', display: 'flex', alignItems: 'center', gap: '8px',
        padding: '8px 12px', borderRadius: '10px', fontSize: '0.75rem', fontWeight: 600,
        background: 'rgba(245,158,11,0.1)', border: '1px solid rgba(245,158,11,0.2)',
        color: '#FBBF24', fontFamily: 'var(--font-body)',
      }}>
        <Zap size={11} fill="currentColor" />
        Save up to 12 months of project time
      </div>
    </div>
  )
}

/* ─── AI Agent Visual ──────────────────────────────────────────── */
function AIVisual() {
  const agents = [
    { name: 'Scan Agent',    status: 'Active',  color: '#4ADE80' },
    { name: 'Assess Agent',  status: 'Active',  color: '#38BDF8' },
    { name: 'Deploy Agent',  status: 'Queued',  color: '#818CF8' },
    { name: 'Monitor Agent', status: 'Standby', color: 'var(--color-text-faint)' },
  ]
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', width: '100%' }}>
      {agents.map((agent, i) => (
        <motion.div
          key={agent.name}
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 + i * 0.09, duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
          style={{
            display: 'flex', alignItems: 'center', justifyContent: 'space-between',
            padding: '9px 12px', borderRadius: '10px',
            background: 'var(--color-bg-card)', border: '1px solid var(--color-border-faint)',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <div style={{
              width: '7px', height: '7px', borderRadius: '50%', flexShrink: 0,
              background: agent.color,
              boxShadow: agent.status === 'Active' ? `0 0 7px ${agent.color}` : 'none',
              animation: agent.status === 'Active' ? 'pulse-dot 2s ease-in-out infinite' : 'none',
            }} />
            <span style={{ fontSize: '0.75rem', fontWeight: 500, color: 'var(--color-text-secondary)', fontFamily: 'var(--font-body)' }}>
              {agent.name}
            </span>
          </div>
          <span style={{
            fontSize: '0.6875rem', padding: '2px 8px', borderRadius: '9999px',
            background: agent.status === 'Active' ? 'rgba(74,222,128,0.1)' : 'var(--color-bg-card)',
            color: agent.status === 'Active' ? '#4ADE80' : 'var(--color-text-faint)',
            border: `1px solid ${agent.status === 'Active' ? 'rgba(74,222,128,0.2)' : 'var(--color-border-subtle)'}`,
            fontFamily: 'var(--font-body)',
          }}>
            {agent.status}
          </span>
        </motion.div>
      ))}
    </div>
  )
}

/* ─── Orbit Animation — pure CSS, GPU compositor, zero JS timers ── */
function OrbitAnimation() {
  const SIZE   = 220
  const CX     = SIZE / 2
  const CY     = SIZE / 2
  const RADIUS = 82
  const ICON_W = 30
  const HALF   = ICON_W / 2

  const orbitIcons = [
    { abbr: 'AWS',   color: '#FF9900', angle: -90  },
    { abbr: 'AZ',    color: '#0078D4', angle: -30  },
    { abbr: 'GCP',   color: '#4285F4', angle:  30  },
    { abbr: 'SN',    color: '#62D84E', angle:  90  },
    { abbr: 'SAP',   color: '#0070F2', angle: 150  },
    { abbr: 'Slack', color: '#E01E5A', angle: 210  },
  ]

  return (
    <div style={{ position: 'relative', width: SIZE, height: SIZE, margin: '0 auto' }}>

      {/* Static SVG: dashed orbit ring */}
      <svg width={SIZE} height={SIZE} style={{ position: 'absolute', top: 0, left: 0, overflow: 'visible', pointerEvents: 'none' }}>
        <circle cx={CX} cy={CY} r={RADIUS} fill="none" stroke="rgba(245,158,11,0.22)" strokeWidth="1" strokeDasharray="3 6" />
        <circle cx={CX} cy={CY} r={RADIUS + 6} fill="none" stroke="rgba(245,158,11,0.06)" strokeWidth="10" />
      </svg>

      {/* CSS-rotating group — GPU compositor, no JS */}
      <div style={{ position: 'absolute', inset: 0, animation: 'orbit-spin 24s linear infinite', willChange: 'transform' }}>

        {/* SVG lines with CSS dash animation */}
        <svg width={SIZE} height={SIZE} style={{ position: 'absolute', top: 0, left: 0, overflow: 'visible', pointerEvents: 'none' }}>
          {orbitIcons.map((icon, i) => {
            const rad = (icon.angle * Math.PI) / 180
            const x1  = CX + RADIUS * Math.cos(rad)
            const y1  = CY + RADIUS * Math.sin(rad)
            return (
              <line key={i} x1={x1} y1={y1} x2={CX} y2={CY}
                stroke={icon.color} strokeOpacity={0.3} strokeWidth={0.8} strokeDasharray="4 5"
                style={{ animation: 'orbit-dash 1.6s linear infinite', animationDelay: `${i * 0.27}s` }}
              />
            )
          })}
        </svg>

        {/* Icon nodes — CSS counter-rotate so labels stay upright */}
        {orbitIcons.map((icon, i) => {
          const rad = (icon.angle * Math.PI) / 180
          const x   = CX + RADIUS * Math.cos(rad)
          const y   = CY + RADIUS * Math.sin(rad)
          return (
            <div key={i} style={{
              position: 'absolute', left: x - HALF, top: y - HALF,
              width: ICON_W, height: ICON_W, borderRadius: '8px',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              background: `${icon.color}18`, border: `1px solid ${icon.color}55`,
              fontSize: '0.475rem', fontWeight: 800, letterSpacing: '0.03em',
              color: icon.color, fontFamily: 'var(--font-body)',
              boxShadow: `0 0 10px ${icon.color}35`,
              animation: 'orbit-spin-reverse 24s linear infinite',
              willChange: 'transform',
            }}>
              {icon.abbr}
            </div>
          )
        })}
      </div>

      {/* Center logo — CSS glow pulse */}
      <div style={{
        position: 'absolute', top: CY - 28, left: CX - 28,
        width: 56, height: 56, borderRadius: '14px',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        background: 'rgba(10,10,18,0.85)', border: '1px solid rgba(255,255,255,0.12)',
        animation: 'orbit-pulse 2.6s ease-in-out infinite',
        zIndex: 3,
      }}>
        <img src="/images/GetSgtarted_Center.svg" alt="Concierto" style={{ width: '40px', height: '40px', objectFit: 'contain' }} />
      </div>

      {/* Pulsing ring — CSS scale */}
      <div style={{
        position: 'absolute', top: CY - 28, left: CX - 28,
        width: 56, height: 56, borderRadius: '14px',
        border: '2px solid rgba(245,158,11,0.65)',
        animation: 'orbit-ring-pulse 2.6s ease-in-out infinite',
        transformOrigin: 'center center',
        zIndex: 2, pointerEvents: 'none',
      }} />
    </div>
  )
}

/* ─── Bento Card ───────────────────────────────────────────────── */
function BentoCard({ card, delay = 0 }: { card: typeof cards[0]; delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ scale: 1.012, y: -2 }}
      style={{
        position: 'relative', overflow: 'hidden',
        display: 'flex', flexDirection: 'column',
        padding: '24px', gap: '16px',
        background: 'var(--color-bg-card)',
        border: `1px solid ${card.borderColor}`,
        borderRadius: '20px',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        minHeight: card.size === 'large' ? '300px' : '220px',
        cursor: 'default',
        transition: 'border-color 300ms ease, transform 300ms ease, background 300ms',
      }}
      onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = 'var(--color-bg-card-hover)' }}
      onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = 'var(--color-bg-card)' }}
    >
      <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', background: `radial-gradient(ellipse at 25% 20%, ${card.glowColor} 0%, transparent 60%)` }} />
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px', position: 'relative', zIndex: 1 }}>
        <div style={{ width: '32px', height: '32px', borderRadius: '9px', flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', background: card.glowColor, border: `1px solid ${card.borderColor}`, color: card.accent }}>
          {card.icon}
        </div>
        <span style={{ fontFamily: 'var(--font-body)', fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: card.accent }}>
          {card.label}
        </span>
      </div>
      <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.125rem', fontWeight: 700, lineHeight: 1.25, color: 'var(--color-text-primary)', position: 'relative', zIndex: 1 }}>
        {card.title}
      </h3>
      <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.875rem', lineHeight: 1.65, color: 'var(--color-text-muted)', position: 'relative', zIndex: 1 }}>
        {card.desc}
      </p>
      {card.id === 'speed' && <div style={{ marginTop: 'auto', position: 'relative', zIndex: 1 }}><SpeedVisual /></div>}
      {card.id === 'ai'    && <div style={{ marginTop: 'auto', position: 'relative', zIndex: 1 }}><AIVisual /></div>}
    </motion.div>
  )
}

/* ─── CTA Card ─────────────────────────────────────────────────── */
function CTACard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
      style={{
        position: 'relative', overflow: 'hidden',
        display: 'flex', flexDirection: 'column',
        padding: '28px',
        background: 'var(--color-bg-elevated)',
        border: '1px solid rgba(245,158,11,0.22)',
        borderRadius: '20px', backdropFilter: 'blur(12px)',
        minHeight: '100%', gap: '0',
      }}
    >
      <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', background: 'radial-gradient(ellipse at 80% 10%, rgba(245,158,11,0.12) 0%, transparent 55%)' }} />
      <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', background: 'radial-gradient(ellipse at 20% 90%, rgba(56,189,248,0.07) 0%, transparent 50%)' }} />
      <p style={{ position: 'relative', zIndex: 1, fontFamily: 'var(--font-body)', fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#F59E0B', margin: '0 0 20px' }}>
        Get Started
      </p>
      <div style={{ position: 'relative', zIndex: 1, flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '8px 0 16px' }}>
        <OrbitAnimation />
      </div>
      <div style={{ position: 'relative', zIndex: 1, marginTop: 'auto' }}>
        <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.2rem', fontWeight: 700, lineHeight: 1.25, color: 'var(--color-text-primary)', marginBottom: '8px' }}>
          Ready to transform at hyperspeed?
        </h3>
        <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.8125rem', lineHeight: 1.6, color: 'var(--color-text-muted)', marginBottom: '20px' }}>
          Join hundreds of enterprises accelerating their cloud journey with unified AI-powered automation.
        </p>
        <motion.a href="#" whileHover={{ scale: 1.04, boxShadow: '0 0 22px rgba(245,158,11,0.5)' }} whileTap={{ scale: 0.97 }}
          style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '10px 22px', borderRadius: '9999px', fontFamily: 'var(--font-body)', fontSize: '0.875rem', fontWeight: 600, background: '#F59E0B', color: '#000000', textDecoration: 'none', boxShadow: '0 0 14px rgba(245,158,11,0.3)', transition: 'box-shadow 300ms ease' }}>
          Get Started <ArrowRight size={14} />
        </motion.a>
      </div>
    </motion.div>
  )
}

/* ─── Section ──────────────────────────────────────────────────── */
export default function WhatSetsApart() {
  const headingRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = headingRef.current
    if (!el) return
    const observer = new IntersectionObserver(([entry]) => { if (entry.isIntersecting) el.classList.add('revealed') }, { threshold: 0.1 })
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <section style={{ position: 'relative', background: 'var(--color-bg-primary)', padding: 'clamp(5rem,8vw,8rem) clamp(1.5rem,5vw,4rem)' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        <div ref={headingRef} data-reveal style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'flex-end', justifyContent: 'space-between', gap: '24px', marginBottom: '3rem' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '14px' }}>
              <div style={{ width: '14px', height: '14px', borderRadius: '4px', background: 'linear-gradient(135deg, #F59E0B, #38BDF8)' }} />
              <span style={{ fontFamily: 'var(--font-body)', fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--color-text-faint)' }}>
                Differentiators
              </span>
            </div>
            <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(2rem,4vw,3rem)', fontWeight: 800, lineHeight: 1.05, letterSpacing: '-0.02em', color: 'var(--color-text-primary)' }}>
              What sets Concierto apart
            </h2>
          </div>
          <p className="wsa-subtitle" style={{ fontFamily: 'var(--font-body)', fontSize: '1rem', lineHeight: 1.6, color: 'var(--color-text-muted)' }}>
            Faster, smarter, and more unified than traditional cloud transformation tools.
          </p>
        </div>
        <div className="bento-grid">
          <BentoCard card={cards[0]} delay={0} />
          <BentoCard card={cards[1]} delay={0.1} />
          <div className="cta-span-rows"><CTACard /></div>
          <BentoCard card={cards[2]} delay={0.2} />
          <BentoCard card={cards[3]} delay={0.3} />
        </div>
      </div>
    </section>
  )
}
