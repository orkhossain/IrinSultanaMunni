'use client'

import * as React from 'react'
import { Box, Stack, Typography } from '@mui/material'
import { selectDictionary } from '@/slice/language'
import { useSelector } from 'react-redux'
import { motion, useReducedMotion } from 'framer-motion'
import Image1 from '@/assets/img1.webp'
import Image2 from '@/assets/img2.webp'
import FadeText from '@/components/FadeText'

const fontFamily = "'Fancy Cut Pro', 'Cambria', 'Georgia', serif"
const tileMinHeight = { xs: 260, md: 600 }
const gradientOverlay =
    'linear-gradient(160deg, rgba(0,0,0,0.06) 0%, rgba(0,0,0,0.32) 100%)'
const tileVariants = {
    hidden: (custom: { shouldReduceMotion: boolean }) =>
        custom.shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 80 },
    show: (custom: { index: number; shouldReduceMotion: boolean }) => ({
        opacity: 1,
        y: 0,
        transition: custom.shouldReduceMotion
            ? { duration: 0.12, ease: 'linear' as const }
            : {
                  duration: 0.7,
                  delay: custom.index * 0.08,
                  ease: [0.22, 1, 0.36, 1] as const,
              },
    }),
}

const ServiceCard = ({
    title,
    description,
    imageSrc,
    isInverted,
    index,
}: any) => {
    const shouldReduceMotion = useReducedMotion()

    return (
        <motion.div
            variants={tileVariants}
            custom={{ index, shouldReduceMotion }}
            initial="hidden"
            whileInView="show"
            whileHover={shouldReduceMotion ? undefined : { y: -6 }}
            whileTap={shouldReduceMotion ? undefined : { scale: 0.99 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={
                shouldReduceMotion
                    ? { duration: 0 }
                    : { type: 'spring', stiffness: 260, damping: 22 }
            }
            style={{ height: '100%' }}
        >
            <Box
                sx={{
                    height: '100%',
                    overflow: 'hidden',
                    mb: { xs: 4, md: 0 },
                    borderTop: '1px solid rgba(34,68,42,0.06)',
                    borderRadius: { xs: 0, md: '22px' },
                    backgroundColor: 'rgba(255,255,255,0.35)',
                    transition:
                        'box-shadow 220ms ease, border-color 220ms ease, background-color 220ms ease',
                    willChange: 'transform',
                    '&:hover': {
                        borderTopColor: 'rgba(34,68,42,0.12)',
                        boxShadow: '0 18px 40px rgba(34,68,42,0.10)',
                        backgroundColor: 'rgba(255,255,255,0.55)',
                    },
                    '&:focus-within': {
                        borderTopColor: 'rgba(34,68,42,0.12)',
                        boxShadow: '0 18px 40px rgba(34,68,42,0.10)',
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
                        background: '#e4eee0',
                        borderRadius: { xs: 0, md: '22px' },
                        overflow: 'hidden',
                        outline: 'none',
                        '&:focus-visible': {
                            boxShadow: '0 0 0 3px rgba(34,68,42,0.18)',
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
                                    'linear-gradient(180deg, rgba(34,68,42,0) 0%, rgba(34,68,42,0.10) 100%)',
                                opacity: 0,
                                transition: 'opacity 450ms ease',
                            },
                        }}
                        className="serviceCardImage"
                    />
                    <Box
                        sx={{
                            flex: '1 1 50%',
                            backgroundColor: '#f8fbf5',
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
                                component={motion.div}
                                whileHover={
                                    shouldReduceMotion
                                        ? undefined
                                        : { scaleX: 1.16 }
                                }
                                transition={{
                                    type: 'spring',
                                    stiffness: 420,
                                    damping: 24,
                                }}
                                sx={{
                                    width: 44,
                                    height: 2,
                                    borderRadius: 999,
                                    backgroundColor: 'rgba(34,68,42,0.18)',
                                    transition: 'width 260ms ease',
                                }}
                                className="serviceCardDivider"
                            />
                            <FadeText
                                fadeKey={`service-title-${title}`}
                                variant="h4"
                                sx={{
                                    fontWeight: 600,
                                    color: '#0f2518',
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
                                    color: '#2f4634',
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
                index={0}
                title={service1}
                description={mediation}
                imageSrc={Image1}
            />
            <ServiceCard
                index={1}
                isInverted
                title={service2}
                description={translation}
                imageSrc={Image2}
            />
        </div>
    )
}

export default ServicesComponent
