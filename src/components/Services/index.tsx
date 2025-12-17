'use client'

import * as React from 'react'
import { Box, Stack, Typography } from '@mui/material'
import { selectDictionary } from '@/slice/language'
import { useSelector } from 'react-redux'
import { motion } from 'framer-motion'
import Image1 from '@/assets/img1.webp'
import Image2 from '@/assets/img2.webp'
import FadeText from '@/components/FadeText'

const fontFamily = "'Fancy Cut Pro', 'Cambria', 'Georgia', serif"
const tileMinHeight = { xs: 260, md: 600 }
const gradientOverlay =
    'linear-gradient(180deg, rgba(198,172,143,0.5) 0%, rgba(234,224,213,0.85) 100%)'
const tileVariants = {
    hidden: { opacity: 0, y: 80 },
    show: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
    },
}

const ServiceCard = ({ title, description, imageSrc, isInverted }: any) => {
    return (
        <motion.div
            variants={tileVariants}
            initial="hidden"
            whileInView="show"
            whileHover={{ y: -6 }}
            whileTap={{ scale: 0.99 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ type: 'spring', stiffness: 260, damping: 22 }}
            style={{ height: '100%' }}
        >
            <Box
                sx={{
                    height: '100%',
                    overflow: 'hidden',
                    mb: { xs: 4, md: 0 },
                    borderTop: '1px solid rgba(19,16,13,0.06)',
                    borderRadius: { xs: 0, md: '22px' },
                    backgroundColor: 'rgba(255,255,255,0.35)',
                    transition:
                        'box-shadow 220ms ease, border-color 220ms ease, background-color 220ms ease',
                    willChange: 'transform',
                    '&:hover': {
                        borderTopColor: 'rgba(19,16,13,0.12)',
                        boxShadow: '0 18px 40px rgba(19,16,13,0.10)',
                        backgroundColor: 'rgba(255,255,255,0.55)',
                    },
                    '&:focus-within': {
                        borderTopColor: 'rgba(19,16,13,0.12)',
                        boxShadow: '0 18px 40px rgba(19,16,13,0.10)',
                        backgroundColor: 'rgba(255,255,255,0.55)',
                    },
                    '&:hover .serviceCardImage::before': {
                        transform: 'scale(1.06)',
                    },
                    '&:hover .serviceCardImage::after': {
                        opacity: 1,
                    },
                    '&:hover .serviceCardDivider': {
                        width: 72,
                    },
                }}
            >
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: {
                            xs: 'column-reverse',
                            md: isInverted ? 'row-reverse' : 'row',
                        },
                        minHeight: tileMinHeight,
                        background: '#e8ded2',
                        borderRadius: { xs: 0, md: '22px' },
                        overflow: 'hidden',
                        outline: 'none',
                        '&:focus-visible': {
                            boxShadow: '0 0 0 3px rgba(19,16,13,0.18)',
                        },
                    }}
                    tabIndex={0}
                >
                    <Box
                        sx={{
                            flex: '1 1 50%',
                            position: 'relative',
                            minHeight: tileMinHeight,
                            overflow: 'hidden',
                            '&::before': {
                                content: "''",
                                position: 'absolute',
                                inset: 0,
                                backgroundImage: `${gradientOverlay}, url(${imageSrc.src})`,
                                backgroundSize: 'cover',
                                backgroundPosition: {
                                    xs: 'center 30%',
                                    md: 'center',
                                },
                                transform: 'scale(1.01)',
                                transition:
                                    'transform 700ms cubic-bezier(0.22,1,0.36,1)',
                                willChange: 'transform',
                            },
                            '&::after': {
                                content: "''",
                                position: 'absolute',
                                inset: 0,
                                background:
                                    'linear-gradient(180deg, rgba(19,16,13,0) 0%, rgba(19,16,13,0.10) 100%)',
                                opacity: 0,
                                transition: 'opacity 450ms ease',
                            },
                        }}
                        className="serviceCardImage"
                    />
                    <Box
                        sx={{
                            flex: '1 1 50%',
                            backgroundColor: '#fbf9f7',
                            p: { xs: 3.25, md: 3.5 },
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            transition: 'background-color 220ms ease',
                            '&:hover': {
                                backgroundColor: '#ffffff',
                            },
                        }}
                    >
                        <Stack spacing={2}>
                            <Box
                                sx={{
                                    width: 44,
                                    height: 2,
                                    borderRadius: 999,
                                    backgroundColor:
                                        'rgba(19,16,13,0.18)',
                                    transition: 'width 260ms ease',
                                }}
                                className="serviceCardDivider"
                            />
                            <FadeText
                                fadeKey={`service-title-${title}`}
                                variant="h4"
                                sx={{
                                    fontWeight: 600,
                                    color: '#13100d',
                                    fontFamily,
                                    fontSize: {
                                        xs: '1.7rem',
                                        md: '2.05rem',
                                    },
                                    letterSpacing: '-0.01em',
                                    marginBottom: 0.5,
                                }}
                            >
                                {title}
                            </FadeText>
                            <FadeText
                                fadeKey={`service-desc-${title}`}
                                sx={{
                                    color: '#393026',
                                    lineHeight: 1.85,
                                    fontFamily,
                                    fontSize: { xs: '1.05rem', md: '1.25rem' },
                                    fontWeight: 400,
                                }}
                            >
                                {description}
                            </FadeText>
                        </Stack>
                    </Box>
                </Box>
            </Box>
        </motion.div>
    )
}

const ServicesComponent: React.FC = () => {
    const dict = useSelector(selectDictionary)
    const service1 = dict.Index?.service1 ?? ''
    const service2 = dict.Index?.service2 ?? ''
    const mediation = dict.Index?.mediation ?? ''
    const translation = dict.Index?.translation ?? ''

    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                width: '100%',
                gap: 0,
            }}
        >
            <ServiceCard
                title={service1}
                description={mediation}
                imageSrc={Image1}
            />
            <ServiceCard
                isInverted
                title={service2}
                description={translation}
                imageSrc={Image2}
            />
        </div>
    )
}

export default ServicesComponent
