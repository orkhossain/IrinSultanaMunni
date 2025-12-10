'use client'

import React from 'react'
import { Box, Button, Container, Stack, TextField, Typography } from '@mui/material'

export default function ContactPage() {
    return (
        <main
            style={{
                minHeight: '100vh',
                background:
                    'radial-gradient(circle at 18% 18%, rgba(216,184,157,0.18), transparent 34%), radial-gradient(circle at 76% 12%, rgba(183,126,97,0.16), transparent 30%), linear-gradient(135deg, rgba(245,237,223,1), rgba(234,215,190,1))',
                padding: '6rem 0 4rem',
                color: '#24190f',
                fontFamily: "'Fancy Cut Pro', 'Cambria', 'Georgia', serif",
            }}
        >
            <Container maxWidth="lg">
                <Box
                    sx={{
                        background: 'rgba(255,255,255,0.94)',
                        borderRadius: '24px',
                        padding: { xs: '1.75rem', md: '2.5rem' },
                        boxShadow: '0 26px 72px rgba(0,0,0,0.14)',
                        border: '1px solid rgba(0,0,0,0.06)',
                    }}
                >
                    <Stack spacing={3}>
                        <Stack spacing={1}>
                            <Typography variant="h3" sx={{ fontWeight: 600, color: '#0f172a' }}>
                                Contact Irin Sultana Munni
                            </Typography>
                            <Typography variant="h6" sx={{ color: '#334155', lineHeight: 1.6 }}>
                                Reach out for interpreting, mediation, or cultural integration support. I
                                respond quickly and tailor each engagement to the context and people involved.
                            </Typography>
                        </Stack>

                        <Stack
                            spacing={2}
                            direction={{ xs: 'column', md: 'row' }}
                            alignItems={{ xs: 'stretch', md: 'flex-start' }}
                        >
                            <Stack spacing={2} sx={{ flex: 1 }}>
                                <TextField
                                    label="Name"
                                    fullWidth
                                    variant="outlined"
                                    sx={{ backgroundColor: '#fff', borderRadius: '12px' }}
                                />
                                <TextField
                                    label="Email"
                                    type="email"
                                    fullWidth
                                    variant="outlined"
                                    sx={{ backgroundColor: '#fff', borderRadius: '12px' }}
                                />
                                <TextField
                                    label="How can I help?"
                                    multiline
                                    minRows={4}
                                    fullWidth
                                    variant="outlined"
                                    sx={{ backgroundColor: '#fff', borderRadius: '12px' }}
                                />
                                <Button
                                    variant="contained"
                                    disableElevation
                                    sx={{
                                        alignSelf: { xs: 'stretch', md: 'flex-start' },
                                        background:
                                            'linear-gradient(135deg, rgba(124,58,237,0.9), rgba(6,182,212,0.9))',
                                        color: '#fff',
                                        fontWeight: 600,
                                        px: 3,
                                        py: 1.25,
                                        borderRadius: '12px',
                                        textTransform: 'none',
                                    }}
                                    onClick={() => {
                                        const mailto = `mailto:irin.munni78@gmail.com`
                                        window.location.href = mailto
                                    }}
                                >
                                    Send message
                                </Button>
                            </Stack>

                            <Box
                                sx={{
                                    flex: { xs: 1, md: 0.9 },
                                    background: 'rgba(15,23,42,0.03)',
                                    borderRadius: '16px',
                                    border: '1px solid rgba(0,0,0,0.06)',
                                    p: 2.5,
                                }}
                            >
                                <Typography variant="h5" sx={{ fontWeight: 600, color: '#0f172a', mb: 1 }}>
                                    Direct contact
                                </Typography>
                                <Stack spacing={1}>
                                    <Typography sx={{ color: '#334155' }}>
                                        Email:{' '}
                                        <Button
                                            sx={{ textTransform: 'none', px: 0 }}
                                            onClick={() =>
                                                (window.location.href = 'mailto:irin.munni78@gmail.com')
                                            }
                                        >
                                            irin.munni78@gmail.com
                                        </Button>
                                    </Typography>
                                    <Typography sx={{ color: '#334155' }}>
                                        Languages: Bengali, Urdu, Hindi, Italian, English
                                    </Typography>
                                    <Typography sx={{ color: '#334155' }}>
                                        Based in Italy; available onsite or remote.
                                    </Typography>
                                </Stack>
                            </Box>
                        </Stack>
                    </Stack>
                </Box>
            </Container>
        </main>
    )
}
