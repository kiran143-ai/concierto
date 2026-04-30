import * as React from 'react'
import useEmblaCarousel, { type UseEmblaCarouselType } from 'embla-carousel-react'
import { cn } from '@/lib/utils'

type CarouselApi     = UseEmblaCarouselType[1]
type CarouselOptions = Parameters<typeof useEmblaCarousel>[0]
type CarouselPlugin  = Parameters<typeof useEmblaCarousel>[1]

type CarouselContextProps = {
  carouselRef: ReturnType<typeof useEmblaCarousel>[0]
  api: CarouselApi
}

const CarouselContext = React.createContext<CarouselContextProps | null>(null)

function useCarousel() {
  const ctx = React.useContext(CarouselContext)
  if (!ctx) throw new Error('useCarousel must be used within <Carousel />')
  return ctx
}

interface CarouselProps extends React.HTMLAttributes<HTMLDivElement> {
  opts?: CarouselOptions
  plugins?: CarouselPlugin
}

const Carousel = React.forwardRef<HTMLDivElement, CarouselProps>(
  ({ opts, plugins, className, children, ...props }, ref) => {
    const [carouselRef, api] = useEmblaCarousel({ ...opts }, plugins)
    return (
      <CarouselContext.Provider value={{ carouselRef, api }}>
        <div ref={ref} className={cn('relative', className)} {...props}>
          {children}
        </div>
      </CarouselContext.Provider>
    )
  }
)
Carousel.displayName = 'Carousel'

const CarouselContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => {
    const { carouselRef } = useCarousel()
    return (
      <div ref={carouselRef} className="overflow-hidden">
        <div ref={ref} className={cn('flex', className)} {...props} />
      </div>
    )
  }
)
CarouselContent.displayName = 'CarouselContent'

const CarouselItem = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      role="group"
      aria-roledescription="slide"
      className={cn('min-w-0 shrink-0 grow-0 basis-full', className)}
      {...props}
    />
  )
)
CarouselItem.displayName = 'CarouselItem'

export { type CarouselApi, Carousel, CarouselContent, CarouselItem }
