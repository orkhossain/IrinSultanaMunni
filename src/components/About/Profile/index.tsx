import React from 'react'
import { useTheme } from '@mui/material/styles'
import { Box, Typography, useMediaQuery } from '@mui/material'
import { useSelector } from 'react-redux'
import { selectDictionary } from '@/slice/language'
import Slider from './Slider'
import { motion, useViewportScroll, useTransform } from 'framer-motion'
import FadeText from '@/components/FadeText'

export default function Profile() {
    const theme = useTheme()
    const isMobile = useMediaQuery(theme.breakpoints.down('md'))
    const isSmall = useMediaQuery(theme.breakpoints.down('sm'))

    const dict = useSelector(selectDictionary)
    const description = dict.Index?.description ?? ''
    const description2 = dict.Index?.description2 ?? ''
    const { scrollYProgress } = useViewportScroll()
    const imageY = useTransform(scrollYProgress, [0, 1], [18, -18])
    const textY = useTransform(scrollYProgress, [0, 1], [-12, 12])

    return (
        <>
            <Box
                sx={{
                    width: '100%',
                    display: 'grid',
                    gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
                    minHeight: { md: '60vh' },
                    background: 'linear-gradient(180deg, #f9f4ea 0%, #f4ede3 100%)',
                    borderRadius: 0,
                    overflow: 'hidden',
                }}
            >
                <motion.div
                    style={{ y: imageY }}
                    initial={{ opacity: 0, scale: 1.04 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] as const }}
                >
                    <Box
                        sx={{
                            order: { xs: 1, md: 1 },
                            position: 'relative',
                            width: '100%',
                            height: '100%',
                            minHeight: { xs: 260, md: '100%' },
                        }}
                    >
                        <Box
                            component="img"
                            src="/profile.png"
                            alt="Profile"
                            sx={{
                                width: '100%',
                                height: '100%',
                                objectFit: 'cover',
                                display: 'block',
                                borderRadius: 0,
                            }}
                        />
                    </Box>
                </motion.div>

                <Slider
                    slidesData={[
                        <>
                            <motion.div style={{ y: textY }} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
                                <Box
                                    sx={{
                                        order: { xs: 2, md: 2 },
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        p: { xs: 2, md: 4 },
                                        bgcolor: 'rgba(255,255,255,0.88)',
                                        height: '100%',
                                        textAlign: 'center',
                                    }}
                                >
                                    <FadeText
                                        fadeKey="about-desc-1"
                                        variant={isMobile ? 'h5' : 'h4'}
                                        color="text.secondary"
                                        component="span"
                                        fontSize={isSmall ? '22px' : '1.8rem'}
                                        sx={{
                                            lineHeight: 2.15,
                                            fontFamily: "'Playfair Display', 'Fancy Cut Pro', 'Cambria', 'Georgia', serif",
                                            fontStyle: 'italic',
                                            letterSpacing: '0.01em',
                                        }}
                                    >
                                        {`"${description}"`}
                                    </FadeText>
                                </Box>
                            </motion.div>
                        </>,
                        <>
                            <motion.div style={{ y: textY }} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
                                <Box
                                    sx={{
                                        order: { xs: 2, md: 2 },
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        p: { xs: 2, md: 4 },
                                        bgcolor: 'rgba(255,255,255,0.88)',
                                        height: '100%',
                                        textAlign: 'center',
                                    }}
                                >
                                    <FadeText
                                        fadeKey="about-desc-2"
                                        variant={isMobile ? 'h5' : 'h4'}
                                        color="text.secondary"
                                        component="span"
                                        fontSize={isSmall ? '22px' : '1.8rem'}
                                        sx={{
                                            lineHeight: 2.15,
                                            fontFamily: "'Playfair Display', 'Fancy Cut Pro', 'Cambria', 'Georgia', serif",
                                            fontStyle: 'italic',
                                            letterSpacing: '0.01em',
                                        }}
                                    >
                                        {`"${description2}"`}
                                    </FadeText>
                                </Box>
                            </motion.div>
                        </>,
                    ]}
                />
            </Box>
        </>
    )
}
