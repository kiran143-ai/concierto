import { motion } from 'framer-motion'

const cloudPartners = [
  { name: 'AWS', color: '#FF9900', abbr: 'AWS' },
  { name: 'Azure', color: '#0078D4', abbr: 'AZURE' },
  { name: 'GCP', color: '#4285F4', abbr: 'GCP' },
]

const integrations = [
  { name: 'ServiceNow', abbr: 'SN', color: '#62D84E' },
  { name: 'SAP', abbr: 'SAP', color: '#0070F2' },
  { name: 'Slack', abbr: 'SL', color: '#4A154B' },
  { name: 'Confluence', abbr: 'CF', color: '#0052CC' },
  { name: 'SharePoint', abbr: 'SP', color: '#038387' },
  { name: 'Terraform', abbr: 'TF', color: '#7B42BC' },
  { name: 'Kubernetes', abbr: 'K8s', color: '#326CE5' },
  { name: 'Datadog', abbr: 'DD', color: '#632CA6' },
]

function CloudLogo({ name, color, abbr }: { name: string; color: string; abbr: string }) {
  return (
    <motion.div
      whileHover={{ scale: 1.04, y: -2 }}
      style={{
        display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '12px',
        padding: '28px 32px', borderRadius: '20px',
        background: 'rgba(255,255,255,0.03)',
        border: `1px solid ${color}25`,
        flex: 1, cursor: 'default',
        transition: 'border-color 250ms ease',
      }}
      onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = `${color}50` }}
      onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = `${color}25` }}
    >
      <div style={{
        width: '56px', height: '56px', borderRadius: '14px',
        background: `${color}18`, border: `1px solid ${color}30`,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        fontFamily: 'var(--font-heading)', fontSize: '0.75rem', fontWeight: 800,
        color, letterSpacing: '0.05em',
      }}>
        {abbr}
      </div>
      <span style={{
        fontFamily: 'var(--font-body)', fontSize: '0.875rem', fontWeight: 600,
        color: 'rgba(255,255,255,0.7)',
      }}>
        {name}
      </span>
      <div style={{
        display: 'inline-flex', padding: '3px 10px', borderRadius: '9999px',
        background: `${color}15`, border: `1px solid ${color}30`,
        fontFamily: 'var(--font-body)', fontSize: '0.6875rem', fontWeight: 600,
        color, letterSpacing: '0.05em',
      }}>
        Certified Partner
      </div>
    </motion.div>
  )
}

function IntegrationBadge({ name, abbr, color }: { name: string; abbr: string; color: string }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05, y: -1 }}
      style={{
        display: 'flex', alignItems: 'center', gap: '10px',
        padding: '10px 16px', borderRadius: '12px',
        background: 'rgba(255,255,255,0.03)',
        border: '1px solid rgba(255,255,255,0.08)',
        cursor: 'default', transition: 'border-color 200ms ease',
      }}
      onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = `${color}40` }}
      onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.08)' }}
    >
      <div style={{
        width: '28px', height: '28px', borderRadius: '8px', flexShrink: 0,
        background: `${color}20`, display: 'flex', alignItems: 'center', justifyContent: 'center',
        fontFamily: 'var(--font-heading)', fontSize: '0.625rem', fontWeight: 800,
        color, letterSpacing: '0',
      }}>
        {abbr}
      </div>
      <span style={{
        fontFamily: 'var(--font-body)', fontSize: '0.8125rem', fontWeight: 500,
        color: 'rgba(255,255,255,0.65)', whiteSpace: 'nowrap',
      }}>
        {name}
      </span>
    </motion.div>
  )
}

export default function Integrations() {
  return (
    <section style={{
      background: 'var(--color-bg-secondary)',
      padding: 'clamp(5rem,8vw,8rem) clamp(1.5rem,5vw,4rem)',
      borderTop: '1px solid rgba(255,255,255,0.06)',
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
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', marginBottom: '14px' }}>
            <div style={{
              width: '14px', height: '14px', borderRadius: '4px',
              background: 'linear-gradient(135deg, #FF9900, #4285F4)',
            }} />
            <span style={{
              fontFamily: 'var(--font-body)', fontSize: '0.6875rem', fontWeight: 700,
              letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.35)',
            }}>
              Integrations
            </span>
          </div>
          <h2 style={{
            fontFamily: 'var(--font-heading)', fontSize: 'clamp(1.75rem,3.5vw,2.75rem)',
            fontWeight: 800, lineHeight: 1.1, letterSpacing: '-0.02em', color: '#FFFFFF',
            marginBottom: '0.75rem',
          }}>
            Powered by global cloud leaders
          </h2>
          <p style={{
            fontFamily: 'var(--font-body)', fontSize: '1rem', lineHeight: 1.65,
            color: 'rgba(255,255,255,0.45)', maxWidth: '440px', margin: '0 auto',
          }}>
            Concierto integrates natively with the platforms your teams already rely on.
          </p>
        </motion.div>

        {/* Primary cloud partners */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          style={{ display: 'flex', gap: '16px', marginBottom: '24px' }}
        >
          {cloudPartners.map(p => (
            <CloudLogo key={p.name} {...p} />
          ))}
        </motion.div>

        {/* Integration grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          style={{
            display: 'flex', flexWrap: 'wrap', gap: '10px',
            padding: '24px', borderRadius: '16px',
            background: 'rgba(255,255,255,0.02)',
            border: '1px solid rgba(255,255,255,0.06)',
          }}
        >
          <span style={{
            width: '100%', fontFamily: 'var(--font-body)', fontSize: '0.75rem', fontWeight: 600,
            letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.25)',
            marginBottom: '4px',
          }}>
            And many more integrations
          </span>
          {integrations.map(i => (
            <IntegrationBadge key={i.name} {...i} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
