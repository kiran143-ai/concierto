import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

const tabs = [
  {
    id: 'modernize',
    label: 'Modernize',
    image: '/images/Section 1.png',
    color: '#F59E0B',
    heading: 'From Legacy to Future-Ready in Weeks',
    body: 'Transform applications faster with Concierto\'s agents to accelerate Modernize Compass for assessment and Modernize Studio for transformation. Deliver cloud-ready systems in weeks, not months — with minimum rewrites and maximum speed.',
    bullets: [
      'AI-driven application scanning and assessment',
      'Automated modernization pathway recommendations',
      'Containerization and modern architecture transformation',
      'Security and performance optimizations built-in',
    ],
    tags: ['AI Scanning', 'Auto Pathways', 'Containerization', 'Security'],
    cta: 'Discover Concierto Modernize',
    metrics: [
      { value: '3×', label: 'Faster than traditional' },
      { value: '80%', label: 'Less manual effort' },
    ],
  },
  {
    id: 'migrate',
    label: 'Migrate',
    image: '/images/Section 2.jpg',
    color: '#4ADE80',
    heading: 'Migration Without Disruption',
    body: 'Eliminate migration guesswork with AI-powered cloud/edge assessments and CloudMach execution. Move any workload to any cloud seamlessly — completing up to 3× faster migrations from traditional approaches.',
    bullets: [
      'Zero-disruption migrations at enterprise scale',
      'Complete dependency tracking and risk analysis',
      'Any cloud-to-any-cloud compatibility',
      'Proven cost optimization post-migration',
    ],
    tags: ['Zero Downtime', 'Dependency Mapping', 'Any→Any Cloud', 'Risk Analysis'],
    cta: 'Explore Concierto Migrate',
    metrics: [
      { value: '3×', label: 'Faster migrations' },
      { value: '0', label: 'Downtime incidents' },
    ],
  },
  {
    id: 'manage',
    label: 'Manage',
    image: '/images/Section 3.jpg',
    color: '#38BDF8',
    heading: 'Unified Command Center for Hybrid Cloud',
    body: 'Unified control plane with real-time cost insights, anomaly detection, and enterprise-grade ITSM, observability, patching, and compliance workflows across all frontiers. Unlock thousands of pre-built automations for day-two operations.',
    bullets: [
      'Integrated single pane of glass for all cloud operations',
      'Automated workflows and compliance monitoring',
      'Multi-cloud and hybrid environment support',
      'Enterprise-grade security and governance',
    ],
    tags: ['ITSM', 'Observability', 'Compliance', 'Multi-Cloud'],
    cta: 'Explore Concierto Manage',
    metrics: [
      { value: '1K+', label: 'Pre-built automations' },
      { value: '80%', label: 'Less manual ops' },
    ],
  },
  {
    id: 'maximize',
    label: 'Maximize',
    image: '/images/Section 4.jpg',
    color: '#C084FC',
    heading: 'AI-Powered Cloud Optimization',
    body: 'Maximize cloud ROI with AI-Agent optimization for spend, performance, and operations. Real-time pro-active cost forecasting and intelligence-driven, proactive remediation — AI-powered FinOps at its finest.',
    bullets: [
      'Real-time cost optimization and forecasting',
      'Performance benchmarking and automated scaling',
      'Intelligent resource right-sizing recommendations',
      'Comprehensive FinOps governance and reporting',
    ],
    tags: ['FinOps', 'Cost Forecasting', 'Right-Sizing', 'Governance'],
    cta: 'Get Even with Concierto Maximize',
    metrics: [
      { value: '50%+', label: 'Cost reduction' },
      { value: 'Real-time', label: 'Cost visibility' },
    ],
  },
  {
    id: 'intelligence',
    label: 'Intelligence',
    image: '/images/Section 5.jpg',
    color: '#818CF8',
    heading: 'Data to Intelligence Without Migration',
    body: 'Transform your data landscape with our revolutionary federated AI platform. Connect all data sources instantly, deploy a rich library of autonomous agents, and establish your data-to-AI foundation in 4 weeks — without moving a byte of data.',
    bullets: [
      'Zero-data migration with federated architecture',
      'Multi-library of pre-built autonomous agents',
      'Deploy data to AI foundation in 4 weeks vs. 12–24 months traditional timeline',
      '10X+ cost savings with predictable pricing',
    ],
    tags: ['Federated AI', 'Pre-built Agents', 'No Migration', '10X+ Savings'],
    cta: 'Discover Concierto Intelligence',
    metrics: [
      { value: '4 Wks', label: 'To AI foundation' },
      { value: '10X+', label: 'Cost savings vs. traditional' },
    ],
  },
]

export default function FeatureTabs() {
  const [active, setActive] = useState('intelligence')
  const current = tabs.find(t => t.id === active)!

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
          style={{ marginBottom: '3.5rem' }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '14px' }}>
            <div style={{
              width: '14px', height: '14px', borderRadius: '4px',
              background: 'linear-gradient(135deg, #F59E0B, #818CF8)',
            }} />
            <span style={{
              fontFamily: 'var(--font-body)', fontSize: '0.6875rem', fontWeight: 700,
              letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--color-text-faint)',
            }}>
              Features
            </span>
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', alignItems: 'flex-end', justifyContent: 'space-between' }}>
            <h2 style={{
              fontFamily: 'var(--font-heading)', fontSize: 'clamp(1.75rem,3.5vw,2.75rem)',
              fontWeight: 800, lineHeight: 1.1, letterSpacing: '-0.02em', color: 'var(--color-text-primary)',
            }}>
              One Platform. Every Transformation Stage.
            </h2>
            <p style={{
              fontFamily: 'var(--font-body)', fontSize: '1rem', lineHeight: 1.6,
              color: 'var(--color-text-muted)', maxWidth: '300px', textAlign: 'right',
            }}>
              From migration to modernization to AI — accelerate every stage of enterprise transformation in a single, unified platform.
            </p>
          </div>
        </motion.div>

        {/* Tab layout */}
        <div className="feature-tab-outer">

          {/* Left tab list */}
          <div className="feature-tab-sidebar">
            {tabs.map(tab => (
              <button
                key={tab.id}
                onClick={() => setActive(tab.id)}
                style={{
                  display: 'flex', alignItems: 'center', gap: '10px',
                  padding: '12px 14px', borderRadius: '10px',
                  fontFamily: 'var(--font-body)', fontSize: '0.875rem', fontWeight: 500,
                  color: active === tab.id ? 'var(--color-text-primary)' : 'var(--color-text-muted)',
                  background: active === tab.id ? 'var(--color-bg-card-hover)' : 'transparent',
                  border: 'none', cursor: 'pointer', textAlign: 'left',
                  borderLeft: active === tab.id ? `3px solid ${tab.color}` : '3px solid transparent',
                  transition: 'all 200ms ease',
                }}
                onMouseEnter={e => {
                  if (active !== tab.id) (e.currentTarget as HTMLElement).style.color = 'var(--color-text-secondary)'
                }}
                onMouseLeave={e => {
                  if (active !== tab.id) (e.currentTarget as HTMLElement).style.color = 'var(--color-text-muted)'
                }}
              >
                <span style={{
                  width: '6px', height: '6px', borderRadius: '50%', flexShrink: 0,
                  background: active === tab.id ? tab.color : 'var(--color-border-default)',
                  boxShadow: active === tab.id ? `0 0 8px ${tab.color}` : 'none',
                  transition: 'all 200ms ease',
                }} />
                {tab.label}
              </button>
            ))}
          </div>

          {/* Right content panel */}
          <div style={{ background: 'var(--color-bg-primary)', display: 'flex', alignItems: 'stretch' }}>
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                className="feature-tab-content" style={{ flex: 1 }}
              >
                {/* Text column */}
                <div style={{ padding: '40px 44px', position: 'relative' }}>
                  {/* Accent glow */}
                  <div style={{
                    position: 'absolute', top: '-60px', right: '-60px',
                    width: '300px', height: '300px', borderRadius: '50%',
                    background: `radial-gradient(ellipse, ${current.color}18 0%, transparent 70%)`,
                    filter: 'blur(40px)', pointerEvents: 'none',
                  }} />

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', position: 'relative' }}>
                    <h3 style={{
                      fontFamily: 'var(--font-heading)', fontSize: 'clamp(1.25rem,2vw,1.75rem)',
                      fontWeight: 700, lineHeight: 1.2, letterSpacing: '-0.01em', color: 'var(--color-text-primary)',
                    }}>
                      {current.heading}
                    </h3>

                    <p style={{
                      fontFamily: 'var(--font-body)', fontSize: '1rem', lineHeight: 1.7,
                      color: 'var(--color-text-muted)',
                    }}>
                      {current.body}
                    </p>

                    <ul style={{ display: 'flex', flexDirection: 'column', gap: '8px', listStyle: 'none', padding: 0, margin: 0 }}>
                      {current.bullets.map(b => (
                        <li key={b} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                          <span style={{
                            width: '16px', height: '16px', borderRadius: '50%', flexShrink: 0, marginTop: '2px',
                            background: `${current.color}22`, border: `1px solid ${current.color}55`,
                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                          }}>
                            <span style={{ width: '5px', height: '5px', borderRadius: '50%', background: current.color, display: 'block' }} />
                          </span>
                          <span style={{ fontFamily: 'var(--font-body)', fontSize: '0.875rem', color: 'var(--color-text-muted)', lineHeight: 1.5 }}>
                            {b}
                          </span>
                        </li>
                      ))}
                    </ul>

                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                      {current.tags.map(tag => (
                        <span key={tag} style={{
                          padding: '5px 12px', borderRadius: '9999px',
                          fontFamily: 'var(--font-body)', fontSize: '0.75rem', fontWeight: 500,
                          color: current.color,
                          background: `${current.color}15`,
                          border: `1px solid ${current.color}30`,
                        }}>
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap' }}>
                      {current.metrics.map(m => (
                        <div key={m.label} style={{
                          padding: '16px 20px', borderRadius: '14px',
                          background: 'var(--color-bg-card)',
                          border: `1px solid ${current.color}20`,
                        }}>
                          <div style={{
                            fontFamily: 'var(--font-heading)', fontSize: '1.75rem', fontWeight: 800,
                            letterSpacing: '-0.02em', color: current.color, lineHeight: 1, marginBottom: '4px',
                          }}>
                            {m.value}
                          </div>
                          <div style={{ fontFamily: 'var(--font-body)', fontSize: '0.8125rem', color: 'var(--color-text-muted)' }}>
                            {m.label}
                          </div>
                        </div>
                      ))}
                    </div>

                    <motion.a
                      href="#"
                      whileHover={{ x: 3 }}
                      style={{
                        display: 'inline-flex', alignItems: 'center', gap: '6px',
                        fontFamily: 'var(--font-body)', fontSize: '0.875rem', fontWeight: 600,
                        color: current.color, textDecoration: 'none', width: 'fit-content',
                      }}
                    >
                      {current.cta} <ArrowRight size={15} />
                    </motion.a>
                  </div>
                </div>

                {/* Image column */}
                <div className="feature-tab-image">
                  <motion.img
                    src={current.image}
                    alt={current.heading}
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    style={{
                      position: 'absolute', inset: 0,
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      objectPosition: 'center top',
                      display: 'block',
                    }}
                  />
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  )
}
