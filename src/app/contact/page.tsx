'use client'

import React from 'react'
import { Box, Button, Container, Stack, TextField, Typography } from '@mui/material'
import { motion } from 'framer-motion'

export default function ContactPage() {
    const tileMinHeight = { xs: '100vh', md: '100vh' }
    const gradientOverlay =
        'linear-gradient(180deg, rgba(198,172,143,0.6) 0%, rgba(234,224,213,0.9) 100%)'
    const tileVariants = {
        hidden: { opacity: 0, y: 80 },
        show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
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
                <Box
                    sx={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(1, minmax(0, 1fr))',
                        gap: 0,
                        px: 0,
                    }}
                >
                    <motion.div
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
                                    flexDirection: { xs: 'column', md: 'row' },
                                    minHeight: tileMinHeight,
                                    background: '#e8ded2',
                                }}
                            >
                                <Box
                                    sx={{
                                        flex: '1 1 50%',
                                        backgroundImage: `${gradientOverlay}, url(/bg.jpg)`,
                                        backgroundSize: 'cover',
                                        backgroundPosition: 'center',
                                        minHeight: tileMinHeight,
                                    }}
                                />
                                <Box
                                    sx={{
                                        flex: '1 1 50%',
                                        backgroundColor: '#fbf9f7',
                                        p: { xs: 3, md: 4 },
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                    }}
                                >
                                    <Stack spacing={2.25} sx={{ width: '100%', maxWidth: 560 }}>
                                        <Stack spacing={1}>
                                            <Typography
                                                variant="h4"
                                                sx={{
                                                    fontWeight: 700,
                                                    color: '#4c4133',
                                                    fontFamily: "'Fancy Cut Pro', 'Cambria', 'Georgia', serif",
                                                }}
                                            >
                                                Contact Irin Sultana Munni
                                            </Typography>
                                            <Typography
                                                sx={{
                                                    color: '#393026',
                                                    lineHeight: 1.7,
                                                    fontFamily: "'Fancy Cut Pro', 'Cambria', 'Georgia', serif",
                                                }}
                                            >
                                                Reach out for interpreting, mediation, or cultural integration
                                                support. I respond quickly and tailor each engagement to the
                                                context and people involved.
                                            </Typography>
                                        </Stack>
                                        <Stack spacing={2} sx={{ width: '100%' }}>
                                            <TextField
                                                label="Name"
                                                fullWidth
                                                variant="outlined"
                                                sx={{
                                                    backgroundColor: '#fbf9f7',
                                                    borderRadius: '12px',
                                                    '& .MuiOutlinedInput-root fieldset': { borderColor: '#c7baab' },
                                                    '&:hover .MuiOutlinedInput-root fieldset': { borderColor: '#ab9880' },
                                                    '& .MuiOutlinedInput-input': {
                                                        fontFamily: "'Fancy Cut Pro', 'Cambria', 'Georgia', serif",
                                                        color: '#393026',
                                                    },
                                                    '& .MuiInputLabel-root': {
                                                        fontFamily: "'Fancy Cut Pro', 'Cambria', 'Georgia', serif",
                                                        color: '#4c4133',
                                                    },
                                                }}
                                            />
                                            <TextField
                                                label="Email"
                                                type="email"
                                                fullWidth
                                                variant="outlined"
                                                sx={{
                                                    backgroundColor: '#fbf9f7',
                                                    borderRadius: '12px',
                                                    '& .MuiOutlinedInput-root fieldset': { borderColor: '#c7baab' },
                                                    '&:hover .MuiOutlinedInput-root fieldset': { borderColor: '#ab9880' },
                                                    '& .MuiOutlinedInput-input': {
                                                        fontFamily: "'Fancy Cut Pro', 'Cambria', 'Georgia', serif",
                                                        color: '#393026',
                                                    },
                                                    '& .MuiInputLabel-root': {
                                                        fontFamily: "'Fancy Cut Pro', 'Cambria', 'Georgia', serif",
                                                        color: '#4c4133',
                                                    },
                                                }}
                                            />
                                            <TextField
                                                label="How can I help?"
                                                multiline
                                                minRows={4}
                                                fullWidth
                                                variant="outlined"
                                                sx={{
                                                    backgroundColor: '#fbf9f7',
                                                    borderRadius: '12px',
                                                    '& .MuiOutlinedInput-root fieldset': { borderColor: '#c7baab' },
                                                    '&:hover .MuiOutlinedInput-root fieldset': { borderColor: '#ab9880' },
                                                    '& .MuiOutlinedInput-input': {
                                                        fontFamily: "'Fancy Cut Pro', 'Cambria', 'Georgia', serif",
                                                        color: '#393026',
                                                    },
                                                    '& .MuiInputLabel-root': {
                                                        fontFamily: "'Fancy Cut Pro', 'Cambria', 'Georgia', serif",
                                                        color: '#4c4133',
                                                    },
                                                }}
                                            />
                                            <Button
                                                variant="contained"
                                                disableElevation
                                                sx={{
                                                    alignSelf: { xs: 'stretch', md: 'flex-start' },
                                                    backgroundColor: '#22333b',
                                                    color: '#fbf9f7',
                                                    fontWeight: 700,
                                                    letterSpacing: '0.02em',
                                                    fontSize: '0.95rem',
                                                    fontFamily: "'Fancy Cut Pro', 'Cambria', 'Georgia', serif",
                                                    px: 4,
                                                    py: 1.4,
                                                    borderRadius: '22px',
                                                    border: '1px solid #1b282f',
                                                    textTransform: 'none',
                                                    boxShadow: '0 16px 28px rgba(13,20,23,0.16)',
                                                    transition: 'all 0.2s ease',
                                                    '&:hover': { backgroundColor: '#1b282f', boxShadow: '0 18px 32px rgba(13,20,23,0.18)' },
                                                }}
                                                onClick={() => {
                                                    const mailto = `mailto:irin.munni78@gmail.com`
                                                    window.location.href = mailto
                                                }}
                                            >
                                                Send message
                                            </Button>
                                        </Stack>
                                    </Stack>
                                </Box>
                            </Box>
                        </Box>
                    </motion.div>

                </Box>
            </Container>
        </main>
    )
}
