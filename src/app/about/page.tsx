'use client'

import React from 'react'
import { Box, Container, Stack, Typography } from '@mui/material'
import { motion, useScroll, useSpring, useTransform } from 'framer-motion'
import { useSelector } from 'react-redux'
import { selectDictionary } from '@/slice/language'
import styles from '../page.module.css'

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

export default function AboutMePage() {
    const dict = useSelector(selectDictionary)
    const { scrollYProgress } = useScroll()
    const scrollProgress = useSpring(scrollYProgress, {
        stiffness: 140,
        damping: 30,
        mass: 0.2,
    })
    const heroGlowY = useTransform(scrollYProgress, [0, 0.35], [0, -24])
    const heroGlowX = useTransform(scrollYProgress, [0, 0.35], [0, 14])
    const heroGlowScale = useTransform(scrollYProgress, [0, 0.35], [1, 1.05])
    const about = dict.AboutPage ?? {}
    const introTitle = about.introTitle ?? 'About Me'
    const introBody =
        about.introBody ??
        'With over 13 years of professional experience, I specialize in bridging language and cultural gaps across healthcare, immigration, legal, and educational sectors. My mission is to ensure every voice is heard and understood.'
    const heroHeading1 = about.heroHeading1 ?? 'EXPERTISE'
    const heroHeading2 = about.heroHeading2 ?? 'TRUST'
    const medicalTitle = about.medicalTitle ?? 'Sanità e benessere'
    const medicalBody =
        about.medicalBody ??
        'Supporto a medici, infermieri e operatori sociali in corsia e ambulatorio, per garantire che ogni paziente si senta compreso e accompagnato.'
    const medicalTags = (
        about.medicalTags ?? [
            'Reparti',
            'Psicologia',
            'Servizi sociali',
            'Percorsi di cura',
        ]
    ).join(' • ')

    const immigrationTitle = about.immigrationTitle ?? 'Immigration'
    const immigrationBody =
        about.immigrationBody ??
        'I support individuals and families through asylum, permits, and integration pathways—facilitating clear communication with institutions and services.'
    const immigrationTags = (
        about.immigrationTags ?? [
            'Asylum pathways',
            'Permits',
            'Residency',
            'Guidance',
        ]
    ).join(' • ')

    const legalTitle = about.legalTitle ?? 'Giustizia'
    const legalBody =
        about.legalBody ??
        'Dalle audizioni alle consulenze con avvocati e giudici, aiuto a raccontare le proprie storie con precisione, rispetto e sicurezza.'
    const legalTags = (
        about.legalTags ?? [
            'Asilo',
            'Tribunali',
            'Consulenze legali',
            'Preparazione casi',
        ]
    ).join(' • ')

    const culturalTitle = about.culturalTitle ?? 'Mediazione culturale'
    const culturalBody =
        about.culturalBody ??
        'Creo ponti tra istituzioni e comunità, traducendo lingue, usi e aspettative per favorire fiducia e collaborazione.'
    const culturalTags = (
        about.culturalTags ?? [
            'Scuole',
            'Laboratori',
            'Servizi pubblici',
            'Mediazione',
        ]
    ).join(' • ')

    const tiles = [
        {
            title: medicalTitle,
            body: medicalBody,
            extra: medicalTags,
            image: '/img1.webp',
        },
        {
            title: immigrationTitle,
            body: immigrationBody,
            extra: immigrationTags,
            image: '/img2.webp',
        },
        {
            title: legalTitle,
            body: legalBody,
            extra: legalTags,
            image: '/bg.jpg',
        },
        {
            title: culturalTitle,
            body: culturalBody,
            extra: culturalTags,
            image: '/countries/1.webp',
        },
    ]

    return (
        <main className={styles.main}>
            <motion.div
                style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    right: 0,
                    height: 2,
                    transformOrigin: '0% 50%',
                    scaleX: scrollProgress,
                    backgroundColor: 'rgba(19,16,13,0.22)',
                    zIndex: 1400,
                }}
            />
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
                        initial={{ opacity: 0, y: 24 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                            duration: 0.6,
                            ease: [0.22, 1, 0.36, 1] as const,
                        }}
                    >
                        <Typography
                            variant="h1"
                            sx={{
                                fontSize: { xs: '2.5rem', md: '3.5rem' },
                                fontWeight: 300,
                                color: '#13100d',
                                marginBottom: 2.5,
                                fontFamily,
                                letterSpacing: '-0.02em',
                            }}
	                        >
	                            {introTitle}
	                        </Typography>
	                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 24 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                            duration: 0.6,
                            delay: 0.1,
                            ease: [0.22, 1, 0.36, 1] as const,
                        }}
                    >
                        <Typography
                            sx={{
                                fontSize: { xs: '1rem', md: '1.1rem' },
                                color: '#393026',
                                lineHeight: 1.75,
                                maxWidth: '700px',
                                fontFamily,
                                marginBottom: 3,
                            }}
	                        >
	                            {introBody}
	                        </Typography>
	                    </motion.div>

	                    <motion.div
                        initial={{ opacity: 0, y: 24 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                            duration: 0.6,
                            delay: 0.2,
                            ease: [0.22, 1, 0.36, 1] as const,
                        }}
	                        style={{ marginTop: '3rem', position: 'relative' }}
	                    >
	                        <Box
	                            sx={{
	                                display: 'flex',
	                                alignItems: 'baseline',
	                                gap: { xs: 1.5, md: 2 },
	                                flexWrap: 'wrap',
	                            }}
	                        >
	                            <Typography
	                                component="span"
	                                sx={{
	                                    fontSize: {
	                                        xs: '2.6rem',
	                                        md: '3.2rem',
	                                    },
	                                    fontWeight: 700,
	                                    color: '#13100d',
	                                    letterSpacing: '-0.03em',
	                                    fontFamily,
	                                    lineHeight: 1.05,
	                                }}
	                            >
	                                {heroHeading1}
	                            </Typography>
	                            <Typography
	                                component="span"
	                                sx={{
	                                    fontSize: {
	                                        xs: '2.1rem',
	                                        md: '2.5rem',
	                                    },
	                                    fontWeight: 300,
	                                    color: 'rgba(19,16,13,0.45)',
	                                    lineHeight: 1,
	                                    fontFamily,
	                                    display: 'inline-block',
	                                    transform: 'translateY(-1px)',
	                                }}
	                            >
	                                &
	                            </Typography>
	                        </Box>
	                            <Typography
	                            sx={{
	                                mt: { xs: 0.75, md: 1 },
	                                fontSize: { xs: '2.6rem', md: '3.2rem' },
	                                fontWeight: 700,
	                                color: '#13100d',
	                                letterSpacing: '-0.03em',
	                                fontFamily,
	                                lineHeight: 1.05,
	                            }}
	                            >
	                            {heroHeading2}
	                        </Typography>
	                    </motion.div>
	                </Box>

		                <Box
		                    component={motion.div}
		                    style={{
		                        y: heroGlowY,
		                        x: heroGlowX,
		                        scale: heroGlowScale,
		                    }}
		                    sx={{
		                        position: 'absolute',
		                        right: { xs: '-50px', md: '0' },
		                        bottom: { xs: '-30px', md: '-60px' },
		                        width: { xs: '300px', md: '400px' },
		                        height: { xs: '300px', md: '400px' },
		                        background:
		                            'radial-gradient(circle, rgba(255, 255, 255, 0.65) 0%, rgba(255, 255, 255, 0) 70%)',
		                        borderRadius: '50%',
		                        zIndex: 1,
		                        filter: 'blur(2px)',
		                        pointerEvents: 'none',
		                    }}
		                />
		            </Box>

            <Box sx={{ backgroundColor: '#f4efe9', py: { xs: 4, md: 6 } }}>
                <Container maxWidth={false} disableGutters>
	                    <Box
	                        sx={{
	                            display: 'grid',
	                            gridTemplateColumns: 'repeat(1, minmax(0, 1fr))',
	                            gap: 0,
	                            px: { xs: 0, md: 2 },
	                        }}
	                    >
	                        {[tiles[0], tiles[1], tiles[2], tiles[3]].map(
	                            (tile, index) => {
	                                const reverse = index % 2 === 1
	                                return (
	                                    <motion.div
	                                        key={tile.title}
	                                        variants={tileVariants}
	                                        initial="hidden"
	                                        whileInView="show"
	                                        whileHover={{ y: -6 }}
	                                        whileTap={{ scale: 0.99 }}
	                                        viewport={{ once: true, amount: 0.35 }}
	                                        transition={{
	                                            type: 'spring',
	                                            stiffness: 260,
	                                            damping: 22,
	                                        }}
	                                        style={{ height: '100%' }}
	                                    >
	                                        <Box
	                                            sx={{
	                                                height: '100%',
	                                                overflow: 'hidden',
	                                                borderTop:
	                                                    '1px solid rgba(19,16,13,0.06)',
	                                                borderRadius: {
	                                                    xs: 0,
	                                                    md: '22px',
	                                                },
	                                                backgroundColor:
	                                                    'rgba(255,255,255,0.35)',
	                                                transition:
	                                                    'box-shadow 220ms ease, border-color 220ms ease, background-color 220ms ease',
	                                                willChange: 'transform',
	                                                '&:hover': {
	                                                    borderTopColor:
	                                                        'rgba(19,16,13,0.12)',
	                                                    boxShadow:
	                                                        '0 18px 40px rgba(19,16,13,0.10)',
	                                                    backgroundColor:
	                                                        'rgba(255,255,255,0.55)',
	                                                },
	                                                '&:focus-within': {
	                                                    borderTopColor:
	                                                        'rgba(19,16,13,0.12)',
	                                                    boxShadow:
	                                                        '0 18px 40px rgba(19,16,13,0.10)',
	                                                    backgroundColor:
	                                                        'rgba(255,255,255,0.55)',
	                                                },
	                                                '&:hover .aboutTileImage::before':
	                                                    {
	                                                        transform:
	                                                            'scale(1.06)',
	                                                    },
	                                                '&:hover .aboutTileImage::after':
	                                                    {
	                                                        opacity: 1,
	                                                    },
	                                                '&:hover .aboutTileDivider': {
	                                                    width: 72,
	                                                },
	                                            }}
	                                        >
	                                            <Box
	                                                sx={{
	                                                    display: 'flex',
	                                                    flexDirection: reverse
	                                                        ? 'row-reverse'
	                                                        : 'row',
	                                                    minHeight: tileMinHeight,
	                                                    background: '#e8ded2',
	                                                    borderRadius: {
	                                                        xs: 0,
	                                                        md: '22px',
	                                                    },
	                                                    overflow: 'hidden',
	                                                    outline: 'none',
	                                                    '&:focus-visible': {
	                                                        boxShadow:
	                                                            '0 0 0 3px rgba(19,16,13,0.18)',
	                                                    },
	                                                }}
	                                                tabIndex={0}
	                                            >
	                                                <Box
	                                                    sx={{
	                                                        flex: '1 1 50%',
	                                                        position: 'relative',
	                                                        overflow: 'hidden',
	                                                        minHeight:
	                                                            tileMinHeight,
	                                                        '&::before': {
	                                                            content: "''",
	                                                            position:
	                                                                'absolute',
	                                                            inset: 0,
	                                                            backgroundImage: `${gradientOverlay}, url(${tile.image})`,
	                                                            backgroundSize:
	                                                                'cover',
	                                                            backgroundPosition:
	                                                                'center',
	                                                            transform:
	                                                                'scale(1.01)',
	                                                            transition:
	                                                                'transform 700ms cubic-bezier(0.22,1,0.36,1)',
	                                                            willChange:
	                                                                'transform',
	                                                        },
	                                                        '&::after': {
	                                                            content: "''",
	                                                            position:
	                                                                'absolute',
	                                                            inset: 0,
	                                                            background:
	                                                                'linear-gradient(180deg, rgba(19,16,13,0) 0%, rgba(19,16,13,0.10) 100%)',
	                                                            opacity: 0,
	                                                            transition:
	                                                                'opacity 450ms ease',
	                                                        },
	                                                    }}
	                                                    className="aboutTileImage"
	                                                />
		                                                <Box
		                                                    sx={{
		                                                        flex: '1 1 50%',
		                                                        backgroundColor:
		                                                            '#fbf9f7',
		                                                        p: { xs: 3, md: 3.5 },
		                                                        display: 'flex',
		                                                        alignItems: 'center',
		                                                        justifyContent:
		                                                            'center',
		                                                        transition:
		                                                            'background-color 220ms ease',
		                                                        '.MuiTypography-root':
		                                                            {
		                                                                transition:
		                                                                    'color 220ms ease',
		                                                            },
		                                                        '&:hover': {
		                                                            backgroundColor:
		                                                                '#ffffff',
		                                                        },
		                                                    }}
		                                                >
		                                                    <Stack
		                                                        spacing={1.25}
		                                                        sx={{
		                                                            width: '100%',
		                                                            maxWidth: 520,
		                                                        }}
		                                                    >
		                                                        <Box
		                                                            sx={{
		                                                                width: 44,
		                                                                height: 2,
		                                                                borderRadius: 999,
		                                                                backgroundColor:
		                                                                    'rgba(19,16,13,0.18)',
		                                                                transition:
		                                                                    'width 260ms ease',
		                                                            }}
		                                                            className="aboutTileDivider"
		                                                        />
	                                                        <Typography
	                                                            variant="h6"
	                                                            sx={{
	                                                                fontWeight: 600,
	                                                                color: '#13100d',
	                                                                fontFamily,
	                                                                fontSize: {
	                                                                    xs: '1.55rem',
	                                                                    md: '1.9rem',
	                                                                },
	                                                                letterSpacing:
	                                                                    '-0.01em',
	                                                            }}
	                                                        >
	                                                            {tile.title}
	                                                        </Typography>
                                                        <Typography
                                                            sx={{
                                                                color: '#393026',
                                                                lineHeight: 1.7,
                                                                fontFamily,
                                                            }}
                                                        >
                                                            {tile.body}
                                                        </Typography>
                                                        {tile.extra ? (
                                                            <Typography
                                                                sx={{
                                                                    color: '#89755b',
                                                                    lineHeight: 1.6,
                                                                    fontFamily,
                                                                }}
                                                            >
                                                                {tile.extra}
                                                            </Typography>
                                                        ) : null}
                                                    </Stack>
                                                </Box>
                                            </Box>
                                        </Box>
                                    </motion.div>
                                )
                            }
                        )}
                    </Box>
                </Container>
            </Box>
        </main>
    )
}
