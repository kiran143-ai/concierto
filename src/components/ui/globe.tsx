import createGlobe, { COBEOptions } from 'cobe'
import { useEffect, useRef } from 'react'

const GLOBE_CONFIG: COBEOptions = {
  width: 800,
  height: 800,
  onRender: () => {},
  devicePixelRatio: 2,
  phi: 0.6,
  theta: 0.3,
  dark: 1,
  diffuse: 1.4,
  mapSamples: 16000,
  mapBrightness: 8,
  baseColor: [0.18, 0.2, 0.35],       // visible dark-blue sphere
  markerColor: [0.96, 0.62, 0.04],     // amber markers
  glowColor: [0.2, 0.55, 1.0],         // blue glow
  markers: [
    { location: [37.7749, -122.4194], size: 0.05 },
    { location: [40.7128,  -74.006 ], size: 0.06 },
    { location: [51.5074,   -0.1278], size: 0.06 },
    { location: [48.8566,    2.3522], size: 0.05 },
    { location: [35.6762,  139.6503], size: 0.06 },
    { location: [1.3521,   103.8198], size: 0.05 },
    { location: [19.076,    72.8777], size: 0.06 },
    { location: [25.2048,   55.2708], size: 0.05 },
  ],
}

export function Globe({
  className,
  config = GLOBE_CONFIG,
}: {
  className?: string
  config?: COBEOptions
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    let phi = 0
    let globeInstance: ReturnType<typeof createGlobe> | null = null

    // Use requestAnimationFrame to ensure layout is complete before measuring
    const raf = requestAnimationFrame(() => {
      if (!canvasRef.current) return

      // Force a size — use container width or fall back to 600
      const size = canvasRef.current.offsetWidth || 600

      globeInstance = createGlobe(canvasRef.current, {
        ...config,
        width: size * 2,
        height: size * 2,
        onRender(state) {
          phi += 0.003
          state.phi = phi
          state.width = size * 2
          state.height = size * 2
        },
      })

      canvasRef.current.style.opacity = '1'
    })

    return () => {
      cancelAnimationFrame(raf)
      globeInstance?.destroy()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div
      className={className}
      style={{ width: '100%', height: '100%', position: 'relative' }}
    >
      <canvas
        ref={canvasRef}
        style={{
          width: '100%',
          height: '100%',
          opacity: 0,
          transition: 'opacity 0.8s ease',
        }}
      />
    </div>
  )
}

export default Globe
