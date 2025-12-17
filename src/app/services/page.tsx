'use client'

import React from 'react'
import { Box, Container, Typography } from '@mui/material'
import Services from '@/components/Services'
import { motion } from 'framer-motion'
import { useSelector } from 'react-redux'
import { selectDictionary } from '@/slice/language'
import Image1 from '@/assets/logos/Image1.webp'
import Image2 from '@/assets/logos/Image2.webp'
import Image3 from '@/assets/logos/Image3.webp'
import Image4 from '@/assets/logos/Image4.webp'
import Image5 from '@/assets/logos/Image5.webp'
import Image6 from '@/assets/logos/Image6.webp'
import Image7 from '@/assets/logos/Image7.webp'
import Image8 from '@/assets/logos/Image8.webp'
import Image9 from '@/assets/logos/Image9.webp'
import Image10 from '@/assets/logos/Image10.webp'
import Image11 from '@/assets/logos/Image11.webp'
import Image12 from '@/assets/logos/Image12.webp'
import Image13 from '@/assets/logos/Image13.webp'
import Image14 from '@/assets/logos/Image14.webp'
import Image15 from '@/assets/logos/Image15.webp'
import Image16 from '@/assets/logos/Image16.webp'
import Image17 from '@/assets/logos/Image17.webp'
import Image18 from '@/assets/logos/Image18.webp'
import Image19 from '@/assets/logos/Image19.webp'
import Image20 from '@/assets/logos/Image20.webp'
import Image21 from '@/assets/logos/Image21.webp'

export default function ServicesPage() {
    const dict = useSelector(selectDictionary)
    const servicesPage = dict.ServicesPage ?? {}
    const pageHeading = servicesPage.heading ?? 'My Services'
    const introDescription =
        servicesPage.introDescription ??
        'I offer professional translation and mediation services across Italian, English, and Bengali. With over 13 years of experience, I specialize in creating meaningful connections through accurate communication in sensitive sectors.'
    const mainHeading1 = servicesPage.mainHeading1 ?? 'COMMUNICATION'
    const mainHeading2 = servicesPage.mainHeading2 ?? 'UNDERSTANDING'
    const collaborationTitle =
        servicesPage.collaborationTitle ?? 'Collaborated With'
    const collaborationSubtitle =
        servicesPage.collaborationSubtitle ??
        'Partners, NGOs, and social cooperatives I have supported'
    const testimonials = [
        {
            quote:
                'Precise, empathetic, and always ahead of deadlines. Working together made complex situations feel simple.',
            name: 'Elena Rossi',
            role: 'Coordinator, Cultural Mediation Program',
        },
        {
            quote:
                'Her translations were spotless and her presence reassuring for our teams and clients alike.',
            name: 'Marco Bianchi',
            role: 'Director, Legal Aid Cooperative',
        },
        {
            quote:
                'Bridging languages and contexts with calm clarity—exactly what we needed in sensitive environments.',
            name: 'Ayesha Khan',
            role: 'Program Lead, Community Health Initiative',
        },
    ]
    const logosRow1 = [
        Image1,
        Image2,
        Image3,
        Image4,
        Image5,
        Image6,
        Image7,
        Image8,
        Image9,
        Image10,
    ]
    const logosRow2 = [
        Image11,
        Image12,
        Image13,
        Image14,
        Image15,
        Image16,
        Image17,
        Image18,
        Image19,
        Image20,
        Image21,
    ]
    const collaborationLogos = [...logosRow1, ...logosRow2]
    const tileVariants = {
        hidden: { opacity: 0, y: 60 },
        show: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
        },
    }

    return (
        <main
            style={{
                minHeight: '100vh',
                background: 'linear-gradient(180deg, #f4efe9 0%, #e8ded2 100%)',
                padding: 0,
                color: '#393026',
                fontFamily: "'Fancy Cut Pro', 'Cambria', 'Georgia', serif",
            }}
        >
            <Container maxWidth={false} disableGutters>
                <Box sx={{ px: 0 }}>
                    <Box
                        sx={{
                            background:
                                'linear-gradient(135deg, #f5ede3 0%, #ede5db 100%)',
                            pt: { xs: 24, md: 32 },
                            pb: { xs: 8, md: 12 },
                            px: { xs: 3, md: 6 },
                            position: 'relative',
                            overflow: 'hidden',
                        }}
                    >
                        <Box
                            sx={{
                                maxWidth: '1200px',
                                mx: 'auto',
                                position: 'relative',
                                zIndex: 2,
                            }}
                        >
                            <motion.div
                                initial={{ opacity: 0, y: 32 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{
                                    duration: 0.8,
                                    ease: [0.23, 1, 0.32, 1] as const,
                                }}
                            >
                                <Typography
                                    variant="h1"
                                    sx={{
                                        fontSize: { xs: '3rem', md: '4.5rem' },
                                        fontWeight: 200,
                                        color: '#13100d',
                                        marginBottom: 3,
                                        fontFamily:
                                            "'Fancy Cut Pro', 'Cambria', 'Georgia', serif",
                                        letterSpacing: '-0.02em',
                                        lineHeight: 1.1,
                                    }}
                                >
                                    {pageHeading}
                                </Typography>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 32 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{
                                    duration: 0.8,
                                    delay: 0.12,
                                    ease: [0.23, 1, 0.32, 1] as const,
                                }}
                            >
                                <Typography
                                    sx={{
                                        fontSize: {
                                            xs: '1.1rem',
                                            md: '1.3rem',
                                        },
                                        color: '#393026',
                                        lineHeight: 1.8,
                                        maxWidth: '800px',
                                        fontFamily:
                                            "'Fancy Cut Pro', 'Cambria', 'Georgia', serif",
                                        marginBottom: 4,
                                        fontWeight: 400,
                                    }}
                                >
                                    {introDescription}
                                </Typography>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 32 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{
                                    duration: 0.8,
                                    delay: 0.24,
                                    ease: [0.23, 1, 0.32, 1] as const,
                                }}
                                style={{
                                    marginTop: '4rem',
                                    position: 'relative',
                                }}
                            >
                                <Box
                                    sx={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: 3,
                                        flexWrap: 'wrap',
                                    }}
                                >
                                    <Typography
                                        sx={{
                                            fontSize: {
                                                xs: '2.8rem',
                                                md: '3.8rem',
                                            },
                                            fontWeight: 700,
                                            color: '#13100d',
                                            letterSpacing: '-0.02em',
                                            fontFamily:
                                                "'Fancy Cut Pro', 'Cambria', 'Georgia', serif",
                                            lineHeight: 1.1,
                                        }}
                                    >
                                        {mainHeading1}
                                    </Typography>
	                            <motion.div
	                                initial={{ scale: 0, rotate: -180 }}
	                                animate={{ scale: 1, rotate: 0 }}
	                                transition={{
	                                    duration: 0.6,
	                                    delay: 0.5,
	                                    ease: [0.23, 1, 0.32, 1],
	                                }}
	                            >
	                                <Typography
	                                    component="span"
	                                    sx={{
	                                        fontSize: {
	                                            xs: '2.2rem',
	                                            md: '2.8rem',
	                                        },
	                                        fontWeight: 300,
	                                        color: 'rgba(19,16,13,0.65)',
	                                        letterSpacing: '-0.02em',
	                                        lineHeight: 1,
	                                        fontFamily:
	                                            "'Fancy Cut Pro', 'Cambria', 'Georgia', serif",
	                                        display: 'inline-block',
	                                        transform: {
	                                            xs: 'translateY(2px)',
	                                            md: 'translateY(3px)',
	                                        },
	                                    }}
	                                >
	                                    &
	                                </Typography>
	                            </motion.div>
	                        </Box>
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: 0.36 }}
                                    style={{ marginTop: '0.8rem' }}
                                >
                                    <Typography
                                        sx={{
                                            fontSize: {
                                                xs: '2.8rem',
                                                md: '3.8rem',
                                            },
                                            fontWeight: 700,
                                            color: '#13100d',
                                            letterSpacing: '-0.02em',
                                            fontFamily:
                                                "'Fancy Cut Pro', 'Cambria', 'Georgia', serif",
                                            lineHeight: 1.1,
                                        }}
                                    >
                                        {mainHeading2}
                                    </Typography>
                                </motion.div>
                            </motion.div>
                        </Box>

	                    <Box
	                        sx={{
	                            position: 'absolute',
	                            right: { xs: '-60px', md: '20px' },
	                            bottom: { xs: '-60px', md: '-80px' },
	                            width: { xs: '380px', md: '500px' },
	                            height: { xs: '380px', md: '500px' },
	                            background:
	                                'radial-gradient(circle, rgba(255, 255, 255, 0.65) 0%, rgba(255, 255, 255, 0) 68%)',
	                            borderRadius: '50%',
	                            zIndex: 1,
	                            filter: 'blur(2px)',
	                        }}
	                    />
	                </Box>

                    <Services />
                    <Box
                        sx={{
                            mt: { xs: 8, md: 10 },
                            mb: { xs: 6, md: 8 },
                            px: { xs: 3, md: 6 },
                        }}
                    >
                        <Box
                            sx={{
                                maxWidth: '1100px',
                                mx: 'auto',
                                backgroundColor: 'rgba(255, 255, 255, 0.55)',
                                borderRadius: { xs: '18px', md: '24px' },
                                p: { xs: 3, md: 5 },
                                boxShadow: '0 10px 28px rgba(19,16,13,0.05)',
                                border: '1px solid rgba(19,16,13,0.08)',
                                backdropFilter: 'blur(10px)',
                                display: 'grid',
                                gap: { xs: 3, md: 4 },
                            }}
                        >
                            <Box
                                sx={{
                                    textAlign: 'center',
                                    maxWidth: '720px',
                                    mx: 'auto',
                                    display: 'grid',
                                    gap: 1,
                                }}
                            >
                                <Box
                                    sx={{
                                        width: 56,
                                        height: 2,
                                        borderRadius: 999,
                                        backgroundColor: 'rgba(19,16,13,0.18)',
                                        mx: 'auto',
                                    }}
                                />
                                <Typography
                                    variant="h5"
                                    sx={{
                                        fontWeight: 600,
                                        letterSpacing: '0.02em',
                                        color: '#13100d',
                                        fontFamily:
                                            "'Fancy Cut Pro', 'Cambria', 'Georgia', serif",
                                    }}
                                >
                                    Voices of Trust
                                </Typography>
                                <Typography
                                    sx={{
                                        mt: 0.25,
                                        color: '#393026',
                                        letterSpacing: '0.01em',
                                        fontFamily:
                                            "'Fancy Cut Pro', 'Cambria', 'Georgia', serif",
                                    }}
                                >
                                    Brief reflections from partners and teams
                                </Typography>
                            </Box>

                            <Box
                                sx={{
                                    display: 'grid',
                                    gridTemplateColumns: {
                                        xs: '1fr',
                                        md: 'repeat(2, minmax(0, 1fr))',
                                        lg: 'repeat(3, minmax(0, 1fr))',
                                    },
                                    gap: { xs: 2, md: 2.5 },
                                }}
                            >
                                {testimonials.map((item, idx) => (
                                    <motion.div
                                        key={`testimonial-${idx}`}
                                        initial={{ opacity: 0, y: 12 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true, amount: 0.5 }}
                                        transition={{
                                            duration: 0.5,
                                            delay: idx * 0.05,
                                            ease: [0.22, 1, 0.36, 1] as const,
                                        }}
                                        whileHover={{ y: -2 }}
                                    >
                                        <Box
                                            sx={{
                                                height: '100%',
                                                backgroundColor:
                                                    'rgba(255, 255, 255, 0.9)',
                                                borderRadius: '16px',
                                                p: { xs: 2.75, md: 3.25 },
                                                boxShadow: 'none',
                                                border: '1px solid rgba(19,16,13,0.08)',
                                                display: 'grid',
                                                gap: 2,
                                                position: 'relative',
                                                overflow: 'hidden',
                                                transition:
                                                    'border-color 180ms ease, box-shadow 180ms ease',
                                                '&:before': {
                                                    content: '"“"',
                                                    position: 'absolute',
                                                    top: 8,
                                                    left: 14,
                                                    fontSize: '4rem',
                                                    lineHeight: 1,
                                                    color: 'rgba(19,16,13,0.07)',
                                                    zIndex: 0,
                                                },
                                                '&:hover': {
                                                    borderColor:
                                                        'rgba(19,16,13,0.14)',
                                                    boxShadow:
                                                        '0 14px 34px rgba(19,16,13,0.08)',
                                                },
                                            }}
                                        >
                                            <Typography
                                                sx={{
                                                    position: 'relative',
                                                    zIndex: 1,
                                                    color: '#13100d',
                                                    lineHeight: 1.6,
                                                    fontSize: {
                                                        xs: '1rem',
                                                        md: '1.05rem',
                                                    },
                                                    fontFamily:
                                                        "'Fancy Cut Pro', 'Cambria', 'Georgia', serif",
                                                }}
                                            >
                                                “{item.quote}”
                                            </Typography>
                                            <Box sx={{ position: 'relative', zIndex: 1 }}>
                                                <Typography
                                                    sx={{
                                                        fontWeight: 600,
                                                        color: '#13100d',
                                                        letterSpacing: '0.01em',
                                                        fontFamily:
                                                            "'Fancy Cut Pro', 'Cambria', 'Georgia', serif",
                                                    }}
                                                >
                                                    {item.name}
                                                </Typography>
                                                <Typography
                                                    sx={{
                                                        color: '#5a5146',
                                                        fontSize: '0.95rem',
                                                        fontFamily:
                                                            "'Fancy Cut Pro', 'Cambria', 'Georgia', serif",
                                                    }}
                                                >
                                                    {item.role}
                                                </Typography>
                                            </Box>
                                        </Box>
                                    </motion.div>
                                ))}
                            </Box>
                        </Box>
                    </Box>

                    <motion.div
                        variants={tileVariants}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, amount: 0.35 }}
                    >
                        <Box sx={{ px: { xs: 3, md: 6 }, pb: { xs: 10, md: 12 } }}>
                            <Box
                                sx={{
                                    maxWidth: '1200px',
                                    mx: 'auto',
                                    backgroundColor: 'rgba(255, 255, 255, 0.55)',
                                    borderRadius: { xs: '18px', md: '24px' },
                                    p: { xs: 3, md: 5 },
                                    boxShadow: '0 10px 28px rgba(19,16,13,0.05)',
                                    border: '1px solid rgba(19,16,13,0.08)',
                                    backdropFilter: 'blur(10px)',
                                    display: 'grid',
                                    gap: { xs: 2.5, md: 3.5 },
                                }}
                            >
                                <Box
                                    sx={{
                                        textAlign: 'center',
                                        maxWidth: '760px',
                                        mx: 'auto',
                                        display: 'grid',
                                        gap: 1,
                                    }}
                                >
                                    <Box
                                        sx={{
                                            width: 56,
                                            height: 2,
                                            borderRadius: 999,
                                            backgroundColor:
                                                'rgba(19,16,13,0.18)',
                                            mx: 'auto',
                                        }}
                                    />
                                    <Typography
                                        variant="h5"
                                        sx={{
                                            fontWeight: 600,
                                            letterSpacing: '0.02em',
                                            color: '#13100d',
                                            fontFamily:
                                                "'Fancy Cut Pro', 'Cambria', 'Georgia', serif",
                                        }}
                                    >
                                        {collaborationTitle}
                                    </Typography>
                                    <Typography
                                        sx={{
                                            mt: 0.25,
                                            color: '#393026',
                                            letterSpacing: '0.01em',
                                            fontFamily:
                                                "'Fancy Cut Pro', 'Cambria', 'Georgia', serif",
                                        }}
                                    >
                                        {collaborationSubtitle}
                                    </Typography>
                                </Box>
                                <Box
                                    sx={{
                                        display: 'grid',
                                        gridTemplateColumns: {
                                            xs: 'repeat(2, minmax(0, 1fr))',
                                            sm: 'repeat(3, minmax(0, 1fr))',
                                            md: 'repeat(4, minmax(0, 1fr))',
                                            lg: 'repeat(6, minmax(0, 1fr))',
                                        },
                                        gap: { xs: 1.25, md: 1.5 },
                                        alignItems: 'stretch',
                                    }}
                                >
                                    {collaborationLogos.map((logo, idx) => (
                                        <motion.div
                                            key={`logo-${idx}`}
                                            initial={{ opacity: 0, y: 14 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            whileHover={{ scale: 1.01, y: -2 }}
                                            transition={{
                                                duration: 0.45,
                                                ease: [0.22, 1, 0.36, 1] as const,
                                            }}
                                            viewport={{ once: true, amount: 0.5 }}
                                            style={{ width: '100%' }}
                                        >
	                                            <Box
	                                                sx={{
	                                                    width: '100%',
	                                                    height: '100%',
	                                                    minHeight: 96,
	                                                    borderRadius: '16px',
	                                                    border: '1px solid rgba(19,16,13,0.08)',
	                                                    backgroundColor:
	                                                        'rgba(244, 237, 227, 0.95)',
	                                                    boxShadow:
	                                                        'inset 0 1px 0 rgba(255,255,255,0.7)',
	                                                    display: 'flex',
	                                                    alignItems: 'center',
	                                                    justifyContent: 'center',
	                                                    p: { xs: 2, md: 2.25 },
	                                                    transition:
	                                                        'border-color 180ms ease, background-color 180ms ease, box-shadow 180ms ease',
	                                                    '& img': {
	                                                        width: '100%',
	                                                        maxWidth: 160,
	                                                        maxHeight: 46,
	                                                        objectFit: 'contain',
	                                                        filter:
	                                                            'grayscale(100%) contrast(1.05) drop-shadow(0 1px 1px rgba(19,16,13,0.25))',
	                                                        opacity: 0.85,
	                                                        mixBlendMode: 'normal',
	                                                        transition:
	                                                            'filter 220ms ease, opacity 220ms ease, transform 220ms ease',
	                                                    },
	                                                    '&:hover': {
	                                                        borderColor:
	                                                            'rgba(19,16,13,0.14)',
	                                                        backgroundColor:
	                                                            'rgba(255, 255, 255, 0.9)',
	                                                        boxShadow:
	                                                            '0 14px 34px rgba(19,16,13,0.08)',
	                                                    },
	                                                    '&:hover img': {
	                                                        filter:
	                                                            'grayscale(0%) contrast(1.04) drop-shadow(0 1px 1px rgba(19,16,13,0.15))',
	                                                        opacity: 0.95,
	                                                        transform:
	                                                            'translateY(-1px)',
	                                                    },
	                                                }}
	                                            >
                                                <Box
                                                    component="img"
                                                    src={logo.src}
                                                    alt={`Collaborator logo ${idx + 1}`}
                                                    loading="lazy"
                                                    decoding="async"
                                                />
                                            </Box>
                                        </motion.div>
                                    ))}
                                </Box>
                            </Box>
                        </Box>
                    </motion.div>
                </Box>
            </Container>
        </main>
    )
}
