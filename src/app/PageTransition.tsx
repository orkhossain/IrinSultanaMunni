'use client'

import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { usePathname } from 'next/navigation'

export default function PageTransition({
    children,
}: {
    children: React.ReactNode
}) {
    const pathname = usePathname()
    const shouldReduceMotion = useReducedMotion()

    return (
        <AnimatePresence mode="wait" initial={false}>
            <motion.div
                key={pathname}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={
                    shouldReduceMotion
                        ? { duration: 0 }
                        : { duration: 0.3, ease: 'easeInOut' }
                }
                style={{ minHeight: '100%' }}
            >
                {children}
            </motion.div>
        </AnimatePresence>
    )
}
