'use client'

import React, { useEffect, useRef } from 'react'
import Lenis from 'lenis'

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
    const rafIdRef = useRef<number | null>(null)
    const lenisRef = useRef<Lenis | null>(null)

    useEffect(() => {
        const prefersReducedMotion =
            window.matchMedia?.('(prefers-reduced-motion: reduce)')?.matches ??
            false
        if (prefersReducedMotion) return

        const lenis = new Lenis({
            lerp: 0.1,
            smoothWheel: true,
            smoothTouch: false,
            wheelMultiplier: 0.9,
        })
        lenisRef.current = lenis

        const raf = (time: number) => {
            lenis.raf(time)
            rafIdRef.current = requestAnimationFrame(raf)
        }
        rafIdRef.current = requestAnimationFrame(raf)

        return () => {
            if (rafIdRef.current != null) {
                cancelAnimationFrame(rafIdRef.current)
                rafIdRef.current = null
            }
            lenisRef.current?.destroy()
            lenisRef.current = null
        }
    }, [])

    return <>{children}</>
}

