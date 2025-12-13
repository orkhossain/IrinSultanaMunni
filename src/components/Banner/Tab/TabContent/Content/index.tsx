import React from 'react'
import { useTheme } from '@mui/material/styles'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { useMediaQuery } from '@mui/material'
import { useSelector } from 'react-redux'
import { selectDictionary } from '@/slice/language'
import { motion, Variants } from 'framer-motion'

export default function Content() {
    const theme = useTheme()
    const isMobile = useMediaQuery(theme.breakpoints.down('md'))
    const dict = useSelector(selectDictionary)
    const title = dict.Index?.title ?? ''
    const easeCurve = [0.22, 1, 0.36, 1] as const
    const textVariants: Variants = {
        hidden: { opacity: 0, y: 28, filter: 'blur(8px)' },
        show: {
            opacity: 1,
            y: 0,
            filter: 'blur(0px)',
            transition: { duration: 1, ease: easeCurve, type: 'spring', stiffness: 240, damping: 22 },
        },
    }

    return (
        <>
            <Box
                sx={{
                    position: 'absolute',
                    inset: 0,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: { xs: 'flex-start', md: 'flex-start' },
                    px: { xs: '6%', md: '8%' },
                }}
            >
                <motion.div
                    key={title}
                    variants={textVariants}
                    initial="hidden"
                    animate="show"
                    style={{ width: '100%' }}
                >
                    <Typography
                        color="#e2e8f0"
                        variant={isMobile ? 'h2' : 'h1'}
                        sx={{
                            fontFamily:
                                "'Fancy Cut Pro', 'Cambria', 'Georgia', serif",
                            fontWeight: 400,
                            lineHeight: 1.08,
                            textAlign: { xs: 'left', md: 'left' },
                            maxWidth: { xs: '86%', md: '62%' },
                            textShadow: '0 8px 32px rgba(0,0,0,0.35)',
                            letterSpacing: '-0.01em',
                        }}
                    >
                        {title}
                    </Typography>
                </motion.div>
            </Box>
        </>
    )
}
