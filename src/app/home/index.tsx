import React, { useEffect } from 'react'
import Marquee from '@/components/Marquee'
import Banner from '@/components/Banner'
import About from '@/components/About'
import 'animate.css/animate.compat.css'
import { motion, useMotionValue, useSpring, Variants } from 'framer-motion'
import { useSelector } from 'react-redux'
import { selectLanguage } from '@/slice/language'
import { useTheme } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'

function Home() {
    const mouseX = useMotionValue(0)
    const mouseY = useMotionValue(0)
    const springX = useSpring(mouseX, { stiffness: 220, damping: 22, mass: 0.25 })
    const springY = useSpring(mouseY, { stiffness: 220, damping: 22, mass: 0.25 })
    const theme = useTheme()
    const isMobile = useMediaQuery(theme.breakpoints.down('md'))

    useEffect(() => {
        if (isMobile) return
        const handleMove = (e: PointerEvent) => {
            mouseX.set(e.clientX - 12)
            mouseY.set(e.clientY - 12)
        }
        window.addEventListener('pointermove', handleMove, { passive: true })
        return () => window.removeEventListener('pointermove', handleMove)
    }, [isMobile, mouseX, mouseY])

    const easeCurve = [0.22, 1, 0.36, 1] as const
    const language = useSelector(selectLanguage)

    const sectionVariants: Variants = {
        hidden: { opacity: 0, scale: 0.98, y: 24 },
        show: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.6, ease: easeCurve } },
    }

    const contentReveal: Variants = {
        hidden: { opacity: 0, y: 28, filter: 'blur(10px)' },
        show: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 1.1, ease: easeCurve } },
    }

    const pageReveal: Variants = {
        hidden: { opacity: 0, y: 18 },
        show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: easeCurve } },
    }

    return (
        <div style={{ position: 'relative' }}>
            {!isMobile && (
                <motion.div
                    style={{
                        x: springX,
                        y: springY,
                        position: 'fixed',
                        width: 24,
                        height: 24,
                        borderRadius: '50%',
                        background: 'rgba(34,51,59,0.25)',
                        border: '1px solid rgba(19,16,13,0.3)',
                        mixBlendMode: 'multiply',
                        zIndex: 999,
                        pointerEvents: 'none',
                    }}
                />
            )}

            <motion.div variants={pageReveal} initial="hidden" animate="show">
                <motion.section variants={sectionVariants} initial="hidden" animate="show">
                    <Banner />
                </motion.section>

                <motion.section
                    key={`about-${language}`}
                    variants={contentReveal}
                    initial="hidden"
                    animate="show"
                >
                    <About />
                </motion.section>

	                <motion.section
	                    key={`marquee-${language}`}
	                    variants={contentReveal}
	                    initial="hidden"
	                    animate="show"
                >
                    <Marquee />
                </motion.section>
            </motion.div>
        </div>
    )
}

export default Home
