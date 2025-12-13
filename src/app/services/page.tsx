'use client'

import React from 'react'
import { Box, Container, Typography } from '@mui/material'
import Services from '@/components/Services'
import { motion } from 'framer-motion'
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
    const logosRow1 = [Image1, Image2, Image3, Image4, Image5, Image6, Image7, Image8, Image9, Image10]
    const logosRow2 = [Image11, Image12, Image13, Image14, Image15, Image16, Image17, Image18, Image19, Image20, Image21]
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
                    <Services />
                    <motion.div
                        variants={tileVariants}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, amount: 0.35 }}
                        style={{ width: '100%' }}
                    >
                        <Box
                            sx={{
                                backgroundColor: '#fbf9f7',
                                borderRadius: '18px',
                                p: { xs: 3, md: 4 },
                                boxShadow: '0 18px 36px rgba(0,0,0,0.1)',
                                border: '1px solid rgba(19,16,13,0.06)',
                                display: 'grid',
                                gap: { xs: 2, md: 3 },
                            }}
                        >
                            <Box sx={{ textAlign: 'center' }}>
                                <Typography
                                    variant="h5"
                                    sx={{
                                        fontWeight: 600,
                                        letterSpacing: '0.02em',
                                        color: '#13100d',
                                        fontFamily: "'Fancy Cut Pro', 'Cambria', 'Georgia', serif",
                                    }}
                                >
                                    Collaborated With
                                </Typography>
                                <Typography
                                    sx={{
                                        mt: 0.5,
                                        color: '#393026',
                                        letterSpacing: '0.01em',
                                        fontFamily: "'Fancy Cut Pro', 'Cambria', 'Georgia', serif",
                                    }}
                                >
                                    Partners, NGOs, and social cooperatives I have supported
                                </Typography>
                            </Box>
                            <Box
                                sx={{
                                    display: 'grid',
                                    gap: { xs: 1.5, md: 2 },
                                }}
                            >
                                <Box
                                    sx={{
                                        display: 'grid',
                                        gridTemplateColumns: { xs: 'repeat(2, minmax(0, 1fr))', md: 'repeat(5, minmax(0, 1fr))' },
                                        gap: { xs: 1.5, md: 2 },
                                        alignItems: 'stretch',
                                        justifyItems: 'center',
                                    }}
                                >
                                    {logosRow1.map((logo, idx) => (
                                        <motion.div
                                            key={`row1-${idx}`}
                                            whileHover={{ scale: 1.02, y: -1 }}
                                            initial={{ opacity: 0, y: 12 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] as const }}
                                            viewport={{ once: true, amount: 0.5 }}
                                            style={{ width: '100%', display: 'flex', justifyContent: 'center' }}
                                        >
                                            <Box
                                                sx={{
                                                    width: '100%',
                                                    maxWidth: 170,
                                                    minHeight: 120,
                                                    border: '1px solid rgba(19,16,13,0.08)',
                                                    backgroundColor: '#ffffff',
                                                    borderRadius: '10px',
                                                    boxShadow: '0 10px 26px rgba(0,0,0,0.08)',
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                    p: { xs: 1.25, md: 1.75 },
                                                }}
                                            >
                                                <Box
                                                    component="img"
                                                    src={logo.src}
                                                    alt={`Company ${idx + 1}`}
                                                    sx={{
                                                        maxWidth: '100%',
                                                        height: 'auto',
                                                        filter: 'grayscale(8%)',
                                                        opacity: 0.95,
                                                    }}
                                                />
                                            </Box>
                                        </motion.div>
                                    ))}
                                </Box>
                                <Box
                                    sx={{
                                        display: 'grid',
                                        gridTemplateColumns: { xs: 'repeat(2, minmax(0, 1fr))', md: 'repeat(5, minmax(0, 1fr))' },
                                        gap: { xs: 1.5, md: 2 },
                                        alignItems: 'stretch',
                                        justifyItems: 'center',
                                    }}
                                >
                                    {logosRow2.map((logo, idx) => (
                                        <motion.div
                                            key={`row2-${idx}`}
                                            whileHover={{ scale: 1.02, y: -1 }}
                                            initial={{ opacity: 0, y: 12 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] as const }}
                                            viewport={{ once: true, amount: 0.5 }}
                                            style={{ width: '100%', display: 'flex', justifyContent: 'center' }}
                                        >
                                            <Box
                                                sx={{
                                                    width: '100%',
                                                    maxWidth: 170,
                                                    minHeight: 120,
                                                    border: '1px solid rgba(19,16,13,0.08)',
                                                    backgroundColor: '#ffffff',
                                                    borderRadius: '10px',
                                                    boxShadow: '0 10px 26px rgba(0,0,0,0.08)',
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                    p: { xs: 1.25, md: 1.75 },
                                                }}
                                            >
                                                <Box
                                                    component="img"
                                                    src={logo.src}
                                                    alt={`Company ${idx + 1 + logosRow1.length}`}
                                                    sx={{
                                                        maxWidth: '100%',
                                                        height: 'auto',
                                                        filter: 'grayscale(8%)',
                                                        opacity: 0.95,
                                                    }}
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
