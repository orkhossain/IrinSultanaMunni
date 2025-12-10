import React from 'react'
import { useTheme } from '@mui/material/styles'
import { Box, Typography, useMediaQuery } from '@mui/material'
import { useSelector } from 'react-redux'
import { selectDictionary } from '@/slice/language'
import Slider from './Slider'
import { motion, useViewportScroll, useTransform } from 'framer-motion'

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
                <motion.div style={{ y: imageY }}>
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
                            src="/profile.jpeg"
                            alt="Profile"
                            sx={{
                                width: '100%',
                                height: '100%',
                                objectFit: 'cover',
                                display: 'block',
                            }}
                        />
                    </Box>
                </motion.div>

                <Slider
                    slidesData={[
                        <>
                            <motion.div style={{ y: textY }}>
                                <Box
                                    sx={{
                                        order: { xs: 2, md: 2 },
                                        display: 'flex',
                                        alignItems: 'center',
                                        p: { xs: 3, md: 6 },
                                        bgcolor: 'rgba(255,255,255,0.88)',
                                        height: '100%',
                                        textAlign: 'left',
                                    }}
                                >
                                    <Typography
                                        variant={isMobile ? 'body1' : 'h5'}
                                        color="text.secondary"
                                        component="span"
                                        fontSize={isSmall ? '13px' : 'auto'}
                                        sx={{ lineHeight: 1.7 }}
                                        sx={{ fontFamily: "'Fancy Cut Pro', 'Cambria', 'Georgia', serif" }}
                                    >
                                        {description}
                                    </Typography>
                                </Box>
                            </motion.div>
                        </>,
                        <>
                            <motion.div style={{ y: textY }}>
                                <Box
                                    sx={{
                                        order: { xs: 2, md: 2 },
                                        display: 'flex',
                                        alignItems: 'center',
                                        p: { xs: 3, md: 6 },
                                        bgcolor: 'rgba(255,255,255,0.88)',
                                        height: '100%',
                                        textAlign: 'left',
                                    }}
                                >
                                    <Typography
                                        variant={isMobile ? 'body1' : 'h5'}
                                        color="text.secondary"
                                        component="span"
                                        fontSize={isSmall ? '13px' : 'auto'}
                                        sx={{ lineHeight: 1.7 }}
                                        sx={{ fontFamily: "'Fancy Cut Pro', 'Cambria', 'Georgia', serif" }}
                                    >
                                        {description2}
                                    </Typography>
                                </Box>
                            </motion.div>
                        </>,
                    ]}
                />
            </Box>
        </>
    )
}
