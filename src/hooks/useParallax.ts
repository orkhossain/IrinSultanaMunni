import { useEffect, useRef, useState } from 'react'

interface ParallaxConfig {
    intensity?: number
    direction?: 'up' | 'down'
}

export const useParallax = (config: ParallaxConfig = {}) => {
    const { intensity = 0.5, direction = 'up' } = config
    const elementRef = useRef<HTMLDivElement>(null)
    const [offset, setOffset] = useState(0)
    const rafRef = useRef<number | null>(null)
    const lastValueRef = useRef(0)

    useEffect(() => {
        const cancelFrame = () => {
            if (rafRef.current !== null) {
                cancelAnimationFrame(rafRef.current)
                rafRef.current = null
            }
        }

        const updateOffset = (next: number) => {
            if (Math.abs(next - lastValueRef.current) < 0.5) return
            lastValueRef.current = next
            setOffset(next)
        }

        const handleScroll = () => {
            if (!elementRef.current) return

            const elementTop = elementRef.current.getBoundingClientRect().top
            const elementHeight = elementRef.current.offsetHeight
            const windowHeight = window.innerHeight

            const rawFraction = (windowHeight - elementTop) / (windowHeight + elementHeight)
            const visibleFraction = Math.min(1, Math.max(0, rawFraction))
            const parallaxOffset = visibleFraction * 100 * intensity * (direction === 'up' ? 1 : -1)

            cancelFrame()
            rafRef.current = requestAnimationFrame(() => updateOffset(parallaxOffset))
        }

        window.addEventListener('scroll', handleScroll, { passive: true })
        handleScroll()

        return () => {
            window.removeEventListener('scroll', handleScroll)
            cancelFrame()
        }
    }, [intensity, direction])

    return { elementRef, offset }
}
