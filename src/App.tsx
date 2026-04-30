import { lazy, Suspense } from 'react'
import { MotionConfig } from 'framer-motion'
import Nav from './components/Nav'
import Hero from './components/Hero'

// ── Lazy-load everything below the fold ──────────────────────────
const LogoMarquee    = lazy(() => import('./components/LogoMarquee'))
const WhatSetsApart  = lazy(() => import('./components/WhatSetsApart'))
const FeatureTabs    = lazy(() => import('./components/FeatureTabs'))
const MetricsSection = lazy(() => import('./components/MetricsSection'))
const Testimonials   = lazy(() => import('./components/Testimonials'))
const Integrations   = lazy(() => import('./components/Integrations'))
const CTASection     = lazy(() => import('./components/CTASection'))
const Footer         = lazy(() => import('./components/Footer'))

// Thin placeholder keeps layout stable while chunk loads
const Fallback = ({ h = 120 }: { h?: number }) => (
  <div style={{ minHeight: h }} aria-hidden="true" />
)

function App() {
  return (
    <MotionConfig reducedMotion="user">
      <div style={{ background: 'var(--color-bg-primary)', minHeight: '100vh' }}>
        {/* Above-fold — eager */}
        <Nav />
        <Hero />

        {/* Below-fold — lazy, loaded as browser becomes idle */}
        <Suspense fallback={<Fallback h={80} />}>
          <LogoMarquee />
        </Suspense>

        <Suspense fallback={<Fallback h={600} />}>
          <WhatSetsApart />
        </Suspense>

        <Suspense fallback={<Fallback h={600} />}>
          <FeatureTabs />
        </Suspense>

        <Suspense fallback={<Fallback h={400} />}>
          <MetricsSection />
        </Suspense>

        <Suspense fallback={<Fallback h={360} />}>
          <Testimonials />
        </Suspense>

        <Suspense fallback={<Fallback h={400} />}>
          <Integrations />
        </Suspense>

        <Suspense fallback={<Fallback h={280} />}>
          <CTASection />
        </Suspense>

        <Suspense fallback={<Fallback h={320} />}>
          <Footer />
        </Suspense>
      </div>
    </MotionConfig>
  )
}

export default App
