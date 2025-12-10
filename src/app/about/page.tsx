'use client'

import React from 'react'
import {
    Box,
    Chip,
    Container,
    Divider,
    Stack,
    Typography,
} from '@mui/material'
import Grid from '@mui/material/Grid'
import { useSelector } from 'react-redux'
import { selectDictionary } from '@/slice/language'
import styles from '../page.module.css'

const pill = (label: string) => (
    <Chip
        key={label}
        label={label}
        sx={{
            backgroundColor: 'rgba(0,0,0,0.05)',
            border: '1px solid rgba(0,0,0,0.12)',
            color: '#0f172a',
            fontFamily: "'Fancy Cut Pro', 'Cambria', 'Georgia', serif",
        }}
    />
)

export default function AboutMePage() {
    const dict = useSelector(selectDictionary)
    const about = dict.AboutPage ?? {}
    const introTitle =
        about.introTitle ?? 'About Irin Sultana Munni'
    const introBody =
        about.introBody ??
        'I am a language mediator and interpreter with over thirteen years of experience guiding people through critical moments—whether in hospitals, courts, or cultural integration settings. My work blends clear communication with cultural intelligence to create trust between professionals and the communities they serve.'
    const languages: string[] =
        about.languages ?? ['Bengali', 'Urdu', 'Hindi', 'Italian', 'English']

    const sections = [
        {
            title: about.medicalTitle ?? 'Medical & wellbeing',
            body:
                about.medicalBody ??
                'I support doctors, nurses, psychologists, and social workers in hospitals and clinics. My role is to ensure every patient—especially those navigating treatment far from home—feels understood and respected.',
            tags:
                about.medicalTags ??
                ['Hospitals & wards', 'Psychology sessions', 'Social services', 'Care pathways'],
        },
        {
            title: about.legalTitle ?? 'Immigration & legal',
            body:
                about.legalBody ??
                'From asylum hearings to consultations with lawyers and judges, I help clients articulate their stories clearly and confidently while preserving nuance and respect.',
            tags:
                about.legalTags ??
                ['Asylum pathways', 'Hearings & courts', 'Legal consultations', 'Case preparation'],
        },
        {
            title: about.culturalTitle ?? 'Cultural integration',
            body:
                about.culturalBody ??
                'I build bridges between institutions and communities—translating not only language, but customs, expectations, and lived experiences.',
            tags:
                about.culturalTags ??
                ['Education & schools', 'Community workshops', 'Public services', 'Cultural mediation'],
        },
    ]

    const howTitle = about.howTitle ?? 'How I work'
    const howSteps: string[] =
        about.howSteps ??
        [
            'Prepare: align on context, stakeholders, and sensitivities.',
            'Facilitate: keep conversations clear, respectful, and on time.',
            'Document: deliver accurate notes and translations with next steps.',
            'Follow up: ensure both sides feel heard and supported.',
        ]

    const ctaTitle = about.ctaTitle ?? "Let's talk"
    const ctaBody =
        about.ctaBody ??
        "Whether you need in-hospital support, legal mediation, or cultural onboarding for teams, I'm here to help you create clarity and trust."
    const ctaEmail = about.ctaEmail ?? 'irin.munni78@gmail.com'

    return (
        <main className={styles.main}>
            <Container maxWidth="lg">
                <Box
                    sx={{
                        background: 'rgba(255,255,255,0.94)',
                        borderRadius: '24px',
                        padding: { xs: '1.75rem', md: '2.75rem' },
                        boxShadow: '0 26px 72px rgba(0,0,0,0.14)',
                        border: '1px solid rgba(0,0,0,0.06)',
                    }}
                >
                    <Stack spacing={2.5} alignItems="flex-start">
                        <Typography
                            variant="h3"
                            sx={{
                                fontWeight: 600,
                                fontFamily:
                                    "'Fancy Cut Pro', 'Cambria', 'Georgia', serif",
                                color: '#0f172a',
                            }}
                        >
                            {introTitle}
                        </Typography>
                        <Typography
                            variant="h6"
                            sx={{
                                color: '#334155',
                                lineHeight: 1.6,
                                fontFamily:
                                    "'Fancy Cut Pro', 'Cambria', 'Georgia', serif",
                            }}
                        >
                            {introBody}
                        </Typography>
                        <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
                            {languages.map(pill)}
                        </Stack>
                    </Stack>

                    <Divider sx={{ my: 3, borderColor: 'rgba(0,0,0,0.08)' }} />

                    <Grid container spacing={3}>
                        {sections.map((section) => (
                            <Grid key={section.title} xs={12} md={4}>
                                <Box
                                    sx={{
                                        background: 'rgba(255,255,255,0.92)',
                                        borderRadius: '16px',
                                        padding: '1.25rem',
                                        height: '100%',
                                        border: '1px solid rgba(0,0,0,0.06)',
                                        boxShadow: '0 12px 36px rgba(0,0,0,0.12)',
                                    }}
                                >
                                    <Typography variant="h5" sx={{ fontWeight: 600, color: '#0f172a' }}>
                                        {section.title}
                                    </Typography>
                                    <Typography sx={{ color: '#334155', lineHeight: 1.6 }}>
                                        {section.body}
                                    </Typography>
                                    <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap mt={1}>
                                        {section.tags.map(pill)}
                                    </Stack>
                                </Box>
                            </Grid>
                        ))}
                    </Grid>

                    <Divider sx={{ my: 3, borderColor: 'rgba(0,0,0,0.08)' }} />

                    <Grid container spacing={3}>
                        <Grid xs={12} md={6}>
                            <Typography variant="h5" sx={{ fontWeight: 600, mb: 1, color: '#0f172a' }}>
                                {howTitle}
                            </Typography>
                            <Stack spacing={1.25}>
                                {howSteps.map((step) => (
                                    <Typography key={step} sx={{ color: '#334155', lineHeight: 1.6 }}>
                                        {step}
                                    </Typography>
                                ))}
                            </Stack>
                        </Grid>
                        <Grid xs={12} md={6}>
                            <Typography variant="h5" sx={{ fontWeight: 600, mb: 1, color: '#0f172a' }}>
                                {ctaTitle}
                            </Typography>
                            <Typography sx={{ color: '#334155', lineHeight: 1.6, mb: 1 }}>
                                {ctaBody}
                            </Typography>
                            <Typography sx={{ color: '#0f172a', fontWeight: 600 }}>
                                {ctaEmail}
                            </Typography>
                        </Grid>
                    </Grid>
                </Box>
            </Container>
        </main>
    )
}
