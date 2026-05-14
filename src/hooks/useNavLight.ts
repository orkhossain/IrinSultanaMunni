'use client'
import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'

export function useNavLight(): boolean {
    const pathname = usePathname()
    const isHome = pathname === '/'
    const [pastHero, setPastHero] = useState(false)

    useEffect(() => {
        if (!isHome) {
            setPastHero(false)
            return
        }
        const check = () => {
            setPastHero(window.scrollY > window.innerHeight * 0.88)
        }
        check()
        window.addEventListener('scroll', check, { passive: true })
        return () => window.removeEventListener('scroll', check)
    }, [isHome])

    // returns true when text should be white (light-on-dark)
    return isHome && !pastHero
}
