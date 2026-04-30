import AutoScroll from 'embla-carousel-auto-scroll'
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel'

const clients = [
  { id: 'mastercard',    name: 'Mastercard',       color: '#EB001B', bg: 'rgba(235,0,27,0.12)' },
  { id: 'mufg',         name: 'MUFG',              color: '#E60012', bg: 'rgba(230,0,18,0.1)'  },
  { id: 'nyl',          name: 'New York Life',     color: '#00A94F', bg: 'rgba(0,169,79,0.12)' },
  { id: 'grid',         name: 'Grid Dynamics',     color: '#818CF8', bg: 'rgba(129,140,248,0.1)' },
  { id: 'virtusa',      name: 'Virtusa',           color: '#FF6B00', bg: 'rgba(255,107,0,0.1)'  },
  { id: 'bespin',       name: 'Bespin Global',     color: '#38BDF8', bg: 'rgba(56,189,248,0.1)' },
  { id: 'brunei',       name: 'Brunei Shell',      color: '#F59E0B', bg: 'rgba(245,158,11,0.1)' },
  { id: 'sioux',        name: 'Sioux Steel',       color: '#94A3B8', bg: 'rgba(148,163,184,0.1)' },
  { id: 'effectual',    name: 'Effectual',         color: '#4ADE80', bg: 'rgba(74,222,128,0.1)' },
  { id: 'seattle',      name: 'Seattle University',color: '#C084FC', bg: 'rgba(192,132,252,0.1)' },
]

function LogoChip({ name, color, bg }: { name: string; color: string; bg: string }) {
  const initials = name.split(' ').map(w => w[0]).join('').slice(0, 2).toUpperCase()

  return (
    <div style={{
      display: 'flex', alignItems: 'center', gap: '10px',
      padding: '10px 20px', borderRadius: '9999px',
      background: bg,
      border: `1px solid ${color}30`,
      flexShrink: 0,
      transition: 'opacity 300ms ease, border-color 300ms ease',
      opacity: 0.55,
      userSelect: 'none',
    }}
    onMouseEnter={e => {
      const el = e.currentTarget as HTMLElement
      el.style.opacity = '1'
      el.style.borderColor = `${color}70`
    }}
    onMouseLeave={e => {
      const el = e.currentTarget as HTMLElement
      el.style.opacity = '0.55'
      el.style.borderColor = `${color}30`
    }}
    >
      {/* Initials badge */}
      <div style={{
        width: '28px', height: '28px', borderRadius: '8px', flexShrink: 0,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        background: `${color}22`,
        fontFamily: 'var(--font-heading)',
        fontSize: '0.6rem', fontWeight: 800,
        color: color,
        letterSpacing: '0.02em',
      }}>
        {initials}
      </div>
      {/* Name */}
      <span style={{
        fontFamily: 'var(--font-body)',
        fontSize: '0.8125rem', fontWeight: 600,
        color: 'var(--color-text-secondary)',
        whiteSpace: 'nowrap',
        letterSpacing: '0.01em',
      }}>
        {name}
      </span>
    </div>
  )
}

export default function LogoMarquee() {
  return (
    <section style={{
      position: 'relative',
      background: 'var(--color-bg-secondary)',
      borderTop: '1px solid var(--color-border-faint)',
      borderBottom: '1px solid var(--color-border-faint)',
      padding: '3.5rem 0',
      overflow: 'hidden',
    }}>
      {/* Label */}
      <p style={{
        textAlign: 'center',
        fontFamily: 'var(--font-body)',
        fontSize: '0.6875rem',
        fontWeight: 600,
        letterSpacing: '0.14em',
        textTransform: 'uppercase',
        color: 'var(--color-text-faint)',
        marginBottom: '2rem',
      }}>
        Trusted by Fortune 500 enterprises and global cloud innovators
      </p>

      {/* Embla auto-scroll carousel */}
      <Carousel
        opts={{ loop: true, dragFree: true }}
        plugins={[AutoScroll({ playOnInit: true, speed: 1.2, stopOnInteraction: false, stopOnMouseEnter: true })]}
        style={{ width: '100%' }}
      >
        <CarouselContent className="ml-0">
          {/* Duplicate for seamless loop */}
          {[...clients, ...clients].map((c, i) => (
            <CarouselItem
              key={`${c.id}-${i}`}
              className="pl-0 basis-auto"
              style={{ paddingLeft: 0, paddingRight: '1.5rem' }}
            >
              <LogoChip name={c.name} color={c.color} bg={c.bg} />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      {/* Edge fades */}
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        background: 'linear-gradient(to right, var(--color-bg-secondary) 0%, transparent 10%, transparent 90%, var(--color-bg-secondary) 100%)',
      }} />
    </section>
  )
}
