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
import CustomCursor from '@/components/CustomCursor'

const pill = (label: string) => (
    <Chip
        key={label}
        label={label}
        sx={{
            backgroundColor: 'rgba(0,0,0,0.05)',
            border: '1px solid rgba(0,0,0,0.12)',
            color: '#0f172a',
            fontFamily: "'Times New Roman', Times, serif",
        }}
    />
)

export default function AboutMePage() {
    return (
        <main
            style={{
                minHeight: '100vh',
                background:
                    'radial-gradient(circle at 20% 20%, rgba(124,58,237,0.12), transparent 32%), radial-gradient(circle at 80% 10%, rgba(6,182,212,0.12), transparent 30%), #f7f8fb',
                padding: '6rem 0 4rem',
                color: '#0f172a',
                fontFamily: "'Times New Roman', Times, serif",
            }}
        >
            <CustomCursor />
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
                                fontFamily: "'Times New Roman', Times, serif",
                                color: '#0f172a',
                            }}
                        >
                            About Irin Sultana Munni
                        </Typography>
                        <Typography
                            variant="h6"
                            sx={{
                                color: '#334155',
                                lineHeight: 1.6,
                                fontFamily: "'Times New Roman', Times, serif",
                            }}
                        >
                            I am a language mediator and interpreter with over
                            thirteen years of experience guiding people through
                            critical moments—whether in hospitals, courts, or
                            cultural integration settings. My work blends clear
                            communication with cultural intelligence to create
                            trust between professionals and the communities they
                            serve.
                        </Typography>
                        <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
                            {['Bengali', 'Urdu', 'Hindi', 'Italian', 'English'].map(pill)}
                        </Stack>
                    </Stack>

                    <Divider sx={{ my: 3, borderColor: 'rgba(0,0,0,0.08)' }} />

                    <Grid container spacing={3}>
                        <Grid xs={12} md={4}>
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
                                    Medical & wellbeing
                                </Typography>
                                <Typography sx={{ color: '#334155', lineHeight: 1.6 }}>
                                    I support doctors, nurses, psychologists, and social workers in
                                    hospitals and clinics. My role is to ensure every patient—especially
                                    those navigating treatment far from home—feels understood and respected.
                                </Typography>
                                <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap mt={1}>
                                    {[
                                        'Hospitals & wards',
                                        'Psychology sessions',
                                        'Social services',
                                        'Care pathways',
                                    ].map(pill)}
                                </Stack>
                            </Box>
                        </Grid>

                        <Grid xs={12} md={4}>
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
                                    Immigration & legal
                                </Typography>
                                <Typography sx={{ color: '#334155', lineHeight: 1.6 }}>
                                    From asylum hearings to consultations with lawyers and judges, I help
                                    clients articulate their stories clearly and confidently while preserving
                                    nuance and respect.
                                </Typography>
                                <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap mt={1}>
                                    {[
                                        'Asylum pathways',
                                        'Hearings & courts',
                                        'Legal consultations',
                                        'Case preparation',
                                    ].map(pill)}
                                </Stack>
                            </Box>
                        </Grid>

                        <Grid xs={12} md={4}>
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
                                    Cultural integration
                                </Typography>
                                <Typography sx={{ color: '#334155', lineHeight: 1.6 }}>
                                    I build bridges between institutions and communities—translating not
                                    only language, but customs, expectations, and lived experiences.
                                </Typography>
                                <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap mt={1}>
                                    {[
                                        'Education & schools',
                                        'Community workshops',
                                        'Public services',
                                        'Cultural mediation',
                                    ].map(pill)}
                                </Stack>
                            </Box>
                        </Grid>
                    </Grid>

                    <Divider sx={{ my: 3, borderColor: 'rgba(0,0,0,0.08)' }} />

                    <Grid container spacing={3}>
                        <Grid xs={12} md={6}>
                            <Typography variant="h5" sx={{ fontWeight: 600, mb: 1, color: '#0f172a' }}>
                                How I work
                            </Typography>
                            <Stack spacing={1.25}>
                                {[
                                    'Prepare: align on context, stakeholders, and sensitivities.',
                                    'Facilitate: keep conversations clear, respectful, and on time.',
                                    'Document: deliver accurate notes and translations with next steps.',
                                    'Follow up: ensure both sides feel heard and supported.',
                                ].map((step) => (
                                    <Typography key={step} sx={{ color: '#334155', lineHeight: 1.6 }}>
                                        {step}
                                    </Typography>
                                ))}
                            </Stack>
                        </Grid>
                        <Grid xs={12} md={6}>
                            <Typography variant="h5" sx={{ fontWeight: 600, mb: 1, color: '#0f172a' }}>
                                Let&apos;s talk
                            </Typography>
                            <Typography sx={{ color: '#334155', lineHeight: 1.6, mb: 1 }}>
                                Whether you need in-hospital support, legal mediation, or cultural
                                onboarding for teams, I&apos;m here to help you create clarity and trust.
                            </Typography>
                            <Typography sx={{ color: '#0f172a', fontWeight: 600 }}>
                                irin.munni78@gmail.com
                            </Typography>
                        </Grid>
                    </Grid>
                </Box>
            </Container>
        </main>
    )
}
