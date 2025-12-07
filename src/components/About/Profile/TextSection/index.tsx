import React from 'react'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import ScrollAnimation from 'react-animate-on-scroll'
import { useMediaQuery, useTheme } from '@mui/material'
import { motion, useViewportScroll, useTransform } from 'framer-motion'

const QuoteComponent = () => {
    const theme = useTheme()
    const isMobile = useMediaQuery(theme.breakpoints.down('md'))
    const isSmall = useMediaQuery(theme.breakpoints.down('sm'))
    const { scrollYProgress } = useViewportScroll()
    const y = useTransform(scrollYProgress, [0, 1], [40, -40])

    return (
        <ScrollAnimation
            animateIn="fadeIn"
            animateOut="fadeOut"
            animateOnce={true}
        >
            <motion.div style={{ y }}>
                <Box
                    sx={{
                        position: 'relative',
                        height: { xs: '100svh', md: '100vh' },
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        px: { xs: 3, md: 8 },
                        background:
                            'radial-gradient(circle at 20% 20%, rgba(209,175,134,0.16), transparent 32%), radial-gradient(circle at 80% 10%, rgba(161,135,99,0.12), transparent 28%), linear-gradient(135deg, #f6f1e7, #f9f4ea)',
                    }}
                >
                    <Typography
                        variant={isMobile ? (isSmall ? 'h4' : 'h2') : 'h1'}
                        sx={{
                            fontFamily: "'Times New Roman', Times, serif",
                            fontWeight: 400,
                            textAlign: 'center',
                            lineHeight: 1.15,
                            maxWidth: '960px',
                            color: '#1f1a12',
                            textShadow: '0 14px 42px rgba(0,0,0,0.18)',
                        }}
                    >
                        &quot;To have another language is to possess a second soul.&quot;
                        <br />
                        <Box component="span" sx={{ display: 'inline-block', mt: 2, fontSize: '0.8em', letterSpacing: '0.12em' }}>
                            — Charlemagne
                        </Box>
                    </Typography>
                </Box>
            </motion.div>
        </ScrollAnimation>
    )
}

export default QuoteComponent
