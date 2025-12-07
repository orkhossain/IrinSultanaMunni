'use client'

import React from 'react'
import { Box, Container } from '@mui/material'
import CustomCursor from '@/components/CustomCursor'
import Services from '@/components/Services'

export default function ServicesPage() {
    return (
        <main
            style={{
                minHeight: '100vh',
                background:
                    'radial-gradient(circle at 18% 18%, rgba(216,184,157,0.18), transparent 34%), radial-gradient(circle at 76% 12%, rgba(183,126,97,0.16), transparent 30%), linear-gradient(135deg, rgba(245,237,223,1), rgba(234,215,190,1))',
                padding: '6rem 0 4rem',
                color: '#24190f',
                fontFamily: "'Times New Roman', Times, serif",
            }}
        >
            <CustomCursor />
            <Container maxWidth="lg">
                <Box
                    sx={{
                        background: 'rgba(255,255,255,0.94)',
                        borderRadius: '24px',
                        padding: { xs: '1.5rem', md: '2.25rem' },
                        boxShadow: '0 26px 72px rgba(0,0,0,0.14)',
                        border: '1px solid rgba(0,0,0,0.06)',
                    }}
                >
                    <Services />
                </Box>
            </Container>
        </main>
    )
}
