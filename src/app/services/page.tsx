'use client'

import React from 'react'
import { Box, Container } from '@mui/material'
import Services from '@/components/Services'

export default function ServicesPage() {
    return (
        <main
            style={{
                minHeight: '100vh',
                background: 'linear-gradient(180deg, #f4efe9 0%, #e8ded2 100%)',
                padding: '4rem 0 3rem',
                color: '#393026',
                fontFamily: "'Fancy Cut Pro', 'Cambria', 'Georgia', serif",
            }}
        >
            <Container maxWidth={false} disableGutters>
                <Box sx={{ px: { xs: 0, md: 2 } }}>
                    <Services />
                </Box>
            </Container>
        </main>
    )
}
