import React from 'react'
import { useTheme } from '@mui/material/styles'
import { Box, Typography, useMediaQuery } from '@mui/material'
import { useSelector } from 'react-redux'
import { selectDictionary } from '@/slice/language'
import ScrollAnimation from 'react-animate-on-scroll'
import Slider from './Slider'

export default function Profile() {
    const theme = useTheme()
    const isMobile = useMediaQuery(theme.breakpoints.down('md'))
    const isSmall = useMediaQuery(theme.breakpoints.down('sm'))

    const dict = useSelector(selectDictionary)
    const description = dict.Index?.description ?? ''
    const description2 = dict.Index?.description2 ?? ''

    return (
        <>
            <ScrollAnimation
                animateIn="fadeInRight"
                animateOut="fadeOutLeft"
                animateOnce={true}
            >
                <Box
                    sx={{
                        width: '100%',
                        display: 'grid',
                        gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
                        minHeight: { md: '70vh' },
                        background: 'linear-gradient(135deg, #f6f1e7, #f9f4ea)',
                        borderRadius: 0,
                        overflow: 'hidden',
                    }}
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

                    <Slider
                        slidesData={[
                            <>
                                <Box
                                    sx={{
                                        order: { xs: 2, md: 2 },
                                        display: 'flex',
                                        alignItems: 'center',
                                        p: { xs: 3, md: 6 },
                                        bgcolor: 'rgba(255,255,255,0.72)',
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
                                    >
                                        {description}
                                    </Typography>
                                </Box>
                            </>,
                            <>
                                <Box
                                    sx={{
                                        order: { xs: 2, md: 2 },
                                        display: 'flex',
                                        alignItems: 'center',
                                        p: { xs: 3, md: 6 },
                                        bgcolor: 'rgba(255,255,255,0.72)',
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
                                    >
                                        {description2}
                                    </Typography>
                                </Box>
                            </>,
                        ]}
                    />
                </Box>
            </ScrollAnimation>
        </>
    )
}
