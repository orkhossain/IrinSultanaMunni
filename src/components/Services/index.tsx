'use client'

import * as React from 'react'
import { Box, Stack, Typography } from '@mui/material'
import { selectDictionary } from '@/slice/language'
import { useSelector } from 'react-redux'
import { motion } from 'framer-motion'
import Image1 from '@/assets/img1.webp'
import Image2 from '@/assets/img2.webp'
import FadeText from '@/components/FadeText'
import { useParallax } from '@/hooks/useParallax'

const fontFamily = "'Fancy Cut Pro', 'Cambria', 'Georgia', serif"
const tileMinHeight = { xs: 340, md: 520 }
const gradientOverlay =
    'linear-gradient(180deg, rgba(198,172,143,0.6) 0%, rgba(234,224,213,0.9) 100%)'
const tileVariants = {
    hidden: { opacity: 0, y: 80 },
    show: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
    },
}

const ServiceCard = ({
    title,
    description,
    imageSrc,
    isInverted,
}: any) => {
    const { elementRef: imageRef, offset: imageOffset } = useParallax({ intensity: 0.3, direction: 'up' })
    const { elementRef: textRef, offset: textOffset } = useParallax({ intensity: 0.15, direction: 'down' })

    return (
        <motion.div
            variants={tileVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.35 }}
            style={{ height: '100%' }}
        >
            <Box sx={{ height: '100%', overflow: 'hidden' }}>
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: isInverted ? 'row-reverse' : 'row',
                        minHeight: tileMinHeight,
                        background: '#e8ded2',
                    }}
                >
                    <Box
                        ref={imageRef}
                        sx={{
                            flex: '1 1 50%',
                            position: 'relative',
                            minHeight: tileMinHeight,
                            backgroundImage: `${gradientOverlay}, url(${imageSrc.src})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            transform: `translateY(${imageOffset}px)`,
                            transition: 'transform 0.1s ease-out',
                        }}
                    />
                    <Box
                        ref={textRef}
                        sx={{
                            flex: '1 1 50%',
                            backgroundColor: '#fbf9f7',
                            p: { xs: 3, md: 3.5 },
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            transform: `translateY(${textOffset}px)`,
                            transition: 'transform 0.1s ease-out',
                        }}
                    >
                        <Stack spacing={1.25}>
                            <FadeText
                                fadeKey={`service-title-${title}`}
                                variant="h5"
                                sx={{
                                    fontWeight: 700,
                                    color: '#4c4133',
                                    fontFamily,
                                    fontSize: { xs: '1.35rem', md: '1.55rem' },
                                    letterSpacing: '-0.01em',
                                }}
                            >
                                {title}
                            </FadeText>
                            <FadeText
                                fadeKey={`service-desc-${title}`}
                                sx={{
                                    color: '#393026',
                                    lineHeight: 1.75,
                                    fontFamily,
                                    fontSize: { xs: '1.05rem', md: '1.15rem' },
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
        <div style={{ display: 'flex', flexDirection: 'column', width: '100%', gap: 0 }}>
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
