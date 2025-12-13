'use client'
import React from 'react'
import TabStepper from './Stepper'
import CenteredTabs from './Tab'
import { usePathname } from 'next/navigation'
import { motion } from 'framer-motion'

function Banner() {
    const pathname = usePathname()

    return (
        <>
            <motion.div
                key={pathname}
                initial={{ opacity: 0, y: -80 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                    type: 'spring',
                    stiffness: 140,
                    damping: 18,
                    mass: 0.8,
                }}
            >
                <CenteredTabs />
                <TabStepper />
            </motion.div>
        </>
    )
}

export default Banner
