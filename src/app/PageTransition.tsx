'use client'

import React from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { usePathname } from 'next/navigation'

const transition = { duration: 0.35, ease: [0.25, 0.1, 0.25, 1] }

const variants = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -60 },
}

export default function PageTransition({
    children,
}: {
    children: React.ReactNode
}) {
    const pathname = usePathname()

    return (
        <AnimatePresence mode="sync" initial={false}>
            <motion.div
                key={pathname}
                variants={variants}
                initial="initial"
                animate="animate"
                exit="exit"
                // transition={transition}
                style={{ minHeight: '100%' }}
            >
                {children}
            </motion.div>
        </AnimatePresence>
    )
}
