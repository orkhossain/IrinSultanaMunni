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
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
}

export default function AboutMePage() {
    const dict = useSelector(selectDictionary)
    const about = dict.AboutPage ?? {}
    const medicalTitle = about.medicalTitle ?? 'Sanità e benessere'
    const medicalBody =
        about.medicalBody ??
        'Supporto a medici, infermieri e operatori sociali in corsia e ambulatorio, per garantire che ogni paziente si senta compreso e accompagnato.'
    const medicalTags = (about.medicalTags ??
        ['Reparti', 'Psicologia', 'Servizi sociali', 'Percorsi di cura']).join(' • ')

    const immigrationTitle = about.immigrationTitle ?? 'Immigrazione'
    const immigrationBody =
        about.immigrationBody ??
        'Affianco persone e famiglie in percorsi di asilo, permessi e integrazione, facilitando comunicazioni chiare con istituzioni e servizi.'
    const immigrationTags = (about.immigrationTags ??
        ['Asilo', 'Permessi', 'Residenza', 'Orientamento']).join(' • ')

    const legalTitle = about.legalTitle ?? 'Assistenza legale'
    const legalBody =
        about.legalBody ??
        'Dalle audizioni alle consulenze con avvocati e giudici, aiuto a raccontare le proprie storie con precisione, rispetto e sicurezza.'
    const legalTags = (about.legalTags ??
        ['Asilo', 'Tribunali', 'Consulenze legali', 'Preparazione casi']).join(' • ')

    const culturalTitle = about.culturalTitle ?? 'Mediazione culturale'
    const culturalBody =
        about.culturalBody ??
        'Creo ponti tra istituzioni e comunità, traducendo lingue, usi e aspettative per favorire fiducia e collaborazione.'
    const culturalTags = (about.culturalTags ??
        ['Scuole', 'Laboratori', 'Servizi pubblici', 'Mediazione']).join(' • ')

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
                        {[tiles[0], tiles[1], tiles[2], tiles[3]].map((tile, index) => {
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
                                    <Box sx={{ height: '100%', overflow: 'hidden' }}>
                                        <Box
                                            sx={{
                                                display: 'flex',
                                                flexDirection: reverse ? 'row-reverse' : 'row',
                                                minHeight: tileMinHeight,
                                                background: '#e8ded2',
                                            }}
                                        >
                                            <Box
                                                sx={{
                                                    flex: '1 1 50%',
                                                    backgroundImage: `${gradientOverlay}, url(${tile.image})`,
                                                    backgroundSize: 'cover',
                                                    backgroundPosition: 'center',
                                                    minHeight: tileMinHeight,
                                                }}
                                            />
                                            <Box
                                                sx={{
                                                    flex: '1 1 50%',
                                                    backgroundColor: '#fbf9f7',
                                                    p: { xs: 3, md: 3.5 },
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
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
                        })}
                    </Box>
                </Container>
            </Box>
        </main>
    )
}
