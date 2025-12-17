'use client'

import React from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { usePathname } from 'next/navigation'

export default function PageTransition({
    children,
}: {
    children: React.ReactNode
}) {
    const pathname = usePathname()
    const shouldReduceMotion = useReducedMotion()

    const transition = shouldReduceMotion
        ? { duration: 0.12, ease: 'linear' as const }
        : { duration: 0.38, ease: [0.22, 1, 0.36, 1] as const }

    const variants = shouldReduceMotion
        ? {
              initial: { opacity: 0 },
              animate: { opacity: 1 },
              exit: { opacity: 0 },
          }
        : {
              initial: { opacity: 0, y: 14, filter: 'blur(6px)' },
              animate: { opacity: 1, y: 0, filter: 'blur(0px)' },
              exit: { opacity: 0, y: -14, filter: 'blur(6px)' },
          }

    return (
        <AnimatePresence mode="wait" initial={false}>
            <motion.div
                key={pathname}
                variants={variants}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={transition}
                style={{
                    minHeight: '100%',
                    position: 'relative',
                    willChange: 'transform, opacity, filter',
                }}
            >
                {children}
            </motion.div>
        </AnimatePresence>
    )
}
