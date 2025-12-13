import { useEffect, useRef, useState } from 'react'

interface ParallaxConfig {
    intensity?: number
    direction?: 'up' | 'down'
}

export const useParallax = (config: ParallaxConfig = {}) => {
    const { intensity = 0.5, direction = 'up' } = config
    const elementRef = useRef<HTMLDivElement>(null)
    const [offset, setOffset] = useState(0)

    useEffect(() => {
        const handleScroll = () => {
            if (!elementRef.current) return

            const elementTop = elementRef.current.getBoundingClientRect().top
            const elementHeight = elementRef.current.offsetHeight
            const windowHeight = window.innerHeight

            // Calculate how much of the element is visible in the viewport
            const visibleFraction = (windowHeight - elementTop) / (windowHeight + elementHeight)

            if (visibleFraction > 0 && visibleFraction < 1) {
                const parallaxOffset = visibleFraction * 100 * intensity * (direction === 'up' ? 1 : -1)
                setOffset(parallaxOffset)
            }
        }

        window.addEventListener('scroll', handleScroll, { passive: true })
        return () => window.removeEventListener('scroll', handleScroll)
    }, [intensity, direction])

    return { elementRef, offset }
}
