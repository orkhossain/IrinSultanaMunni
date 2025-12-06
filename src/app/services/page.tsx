'use client'

import React from 'react'
import { Box, Container } from '@mui/material'
import Navbar from '@/components/AppBar'
import CustomCursor from '@/components/CustomCursor'
import Services from '@/components/Services'

export default function ServicesPage() {
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
            <Navbar />
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
