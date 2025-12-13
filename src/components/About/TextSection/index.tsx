import React from 'react'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import { useMediaQuery, useTheme } from '@mui/material'
import { motion, useViewportScroll, useTransform, Variants } from 'framer-motion'
import { useSelector } from 'react-redux'
import { selectDictionary } from '@/slice/language'

const QuoteComponent = () => {
    const theme = useTheme()
    const isMobile = useMediaQuery(theme.breakpoints.down('md'))
    const isSmall = useMediaQuery(theme.breakpoints.down('sm'))
    const { scrollYProgress } = useViewportScroll()
    const y = useTransform(scrollYProgress, [0, 1], [40, -40])
    const dict = useSelector(selectDictionary)
    const quote =
        dict.Index?.quote ??
        'To have another language is to possess a second soul.'
    const quoteBy = dict.Index?.quoteBy ?? '— Charlemagne'
    const fadeVariants: Variants = {
        hidden: { opacity: 0, y: 22, filter: 'blur(8px)' },
        show: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 1.1, ease: [0.22, 1, 0.36, 1] } },
    }

    return (
        <motion.div style={{ y }} variants={fadeVariants} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.5 }}>
            <Box
                sx={{
                    position: 'relative',
                    minHeight: { xs: '60vh', md: '70vh' },
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    px: { xs: 3, md: 10 },
                    py: { xs: 6, md: 8 },
                    background: 'linear-gradient(180deg, #f9f4ea 0%, #f4ede3 100%)',
                }}
            >
                <motion.div variants={fadeVariants}>
                    <Typography
                        variant={isMobile ? (isSmall ? 'h4' : 'h2') : 'h1'}
                        sx={{
                            fontFamily:
                                "'Fancy Cut Pro', 'Cambria', 'Georgia', serif",
                            fontWeight: 400,
                            fontStyle: 'italic',
                            textAlign: 'center',
                            lineHeight: 1.15,
                            maxWidth: '980px',
                            color: '#231810',
                            letterSpacing: '-0.01em',
                        }}
                    >
                        {quote}
                        <br />
                        <Box
                            component="span"
                            sx={{
                                display: 'inline-block',
                                mt: 2,
                                fontSize: '0.8em',
                                letterSpacing: '0.12em',
                                color: 'rgba(35,24,16,0.72)',
                            }}
                        >
                            {quoteBy}
                        </Box>
                    </Typography>
                </motion.div>
            </Box>
        </motion.div>
    )
}

export default QuoteComponent
