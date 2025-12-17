'use client'

import React from 'react'
import { Box, Container, Stack, Typography } from '@mui/material'
import { motion } from 'framer-motion'
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
    const about = dict.AboutPage ?? {}
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

    const immigrationTitle = about.immigrationTitle ?? 'Immigrazione'
    const immigrationBody =
        about.immigrationBody ??
        'Affianco persone e famiglie in percorsi di asilo, permessi e integrazione, facilitando comunicazioni chiare con istituzioni e servizi.'
    const immigrationTags = (
        about.immigrationTags ?? [
            'Asilo',
            'Permessi',
            'Residenza',
            'Orientamento',
        ]
    ).join(' • ')

    const legalTitle = about.legalTitle ?? 'Assistenza legale'
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
                            About Me
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
                            With over 13 years of professional experience, I
                            specialize in bridging language and cultural gaps
                            across healthcare, immigration, legal, and
                            educational sectors. My mission is to ensure every
                            voice is heard and understood.
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
                        style={{
                            marginTop: '3rem',
                            fontSize: '2.8rem',
                            fontWeight: 600,
                            color: '#13100d',
                            letterSpacing: '-0.03em',
                            fontFamily,
                            position: 'relative',
                        }}
	                    >
	                        <Box
	                            sx={{
	                                display: 'flex',
	                                alignItems: 'center',
	                                gap: 2,
	                            }}
	                        >
	                            <span>EXPERTISE</span>
	                            <Typography
	                                component="span"
	                                sx={{
	                                    fontSize: { xs: '2rem', md: '2.2rem' },
	                                    fontWeight: 300,
	                                    color: 'rgba(19,16,13,0.65)',
	                                    lineHeight: 1,
	                                    fontFamily,
	                                    display: 'inline-block',
	                                    transform: 'translateY(2px)',
	                                }}
	                            >
	                                &
	                            </Typography>
	                        </Box>
	                        <div style={{ marginTop: '0.5rem' }}>TRUST</div>
	                    </motion.div>
                </Box>

	                <Box
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
                                        viewport={{ once: true, amount: 0.35 }}
                                        style={{ height: '100%' }}
                                    >
                                        <Box
                                            sx={{
                                                height: '100%',
                                                overflow: 'hidden',
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
                                                }}
                                            >
                                                <Box
                                                    sx={{
                                                        flex: '1 1 50%',
                                                        backgroundImage: `${gradientOverlay}, url(${tile.image})`,
                                                        backgroundSize: 'cover',
                                                        backgroundPosition:
                                                            'center',
                                                        minHeight:
                                                            tileMinHeight,
                                                    }}
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
                                                    }}
                                                >
                                                    <Stack spacing={1.25}>
                                                        <Typography
                                                            variant="h5"
                                                            sx={{
                                                                fontWeight: 700,
                                                                color: '#4c4133',
                                                                fontFamily,
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
