'use client'

import React from 'react'
import { Typography, TypographyProps } from '@mui/material'
import { AnimatePresence, motion, Variants } from 'framer-motion'
import { useSelector } from 'react-redux'
import { selectLanguage } from '@/slice/language'

const textVariants: Variants = {
    hidden: { opacity: 0, y: 12, filter: 'blur(6px)' },
    show: {
        opacity: 1,
        y: 0,
        filter: 'blur(0px)',
        transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as const },
    },
    exit: {
        opacity: 0,
        y: -10,
        filter: 'blur(6px)',
        transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] as const },
    },
}

type FadeTextProps = TypographyProps & {
    as?: React.ElementType
    fadeKey?: string
}

// Use a loose component type to avoid MUI drag handler type conflicts with framer-motion.
const MotionTypography = motion(Typography as React.ComponentType<any>)

const FadeText: React.FC<FadeTextProps> = ({ children, as, fadeKey, ...rest }) => {
    const language = useSelector(selectLanguage)
    const instanceKey = `${fadeKey ?? 'text'}-${language}`

    return (
        <AnimatePresence mode="wait">
            <MotionTypography
                key={instanceKey}
                variants={textVariants}
                initial="hidden"
                animate="show"
                exit="exit"
                {...rest}
            >
                {children}
            </MotionTypography>
        </AnimatePresence>
    )
}

export default FadeText
