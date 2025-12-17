'use client'

import React from 'react'
import { Box, Button, Container, Stack, TextField, Typography } from '@mui/material'
import { motion } from 'framer-motion'
import { useSelector } from 'react-redux'
import { selectDictionary } from '@/slice/language'

export default function ContactPage() {
    const dict = useSelector(selectDictionary)
    const contact = dict.ContactPage ?? {}
    const heading = contact.heading ?? 'Contact Irin Sultana Munni'
    const description =
        contact.description ??
        'Reach out for interpreting, mediation, or cultural integration support. I respond quickly and tailor each engagement to the context and people involved.'
    const nameLabel = contact.nameLabel ?? 'Name'
    const emailLabel = contact.emailLabel ?? 'Email'
    const messageLabel = contact.messageLabel ?? 'How can I help?'
    const sendLabel = contact.sendLabel ?? 'Send message'

    const fieldSx = {
        '& .MuiInputLabel-root': {
            fontFamily: "'Fancy Cut Pro', 'Cambria', 'Georgia', serif",
            color: 'rgba(19,16,13,0.62)',
        },
        '& .MuiInputLabel-root.Mui-focused': {
            color: 'rgba(19,16,13,0.78)',
        },
        '& .MuiOutlinedInput-root': {
            borderRadius: '14px',
            backgroundColor: 'rgba(255, 255, 255, 0.72)',
            backdropFilter: 'blur(8px)',
            transition:
                'box-shadow 180ms ease, border-color 180ms ease, background-color 180ms ease',
            '& fieldset': {
                borderColor: 'rgba(19,16,13,0.14)',
            },
            '&:hover fieldset': {
                borderColor: 'rgba(19,16,13,0.24)',
            },
            '&.Mui-focused': {
                backgroundColor: 'rgba(255, 255, 255, 0.88)',
                boxShadow: '0 0 0 4px rgba(19,16,13,0.06)',
            },
            '&.Mui-focused fieldset': {
                borderColor: 'rgba(19,16,13,0.42)',
            },
        },
        '& .MuiOutlinedInput-input': {
            fontFamily: "'Fancy Cut Pro', 'Cambria', 'Georgia', serif",
            color: '#393026',
            padding: '16px 14px',
        },
        '& .MuiOutlinedInput-inputMultiline': {
            padding: 0,
        },
    }

    const tileMinHeight = { xs: '100svh', md: '100vh' }
    const mobileImageHeight = { xs: 200, sm: 240, md: '100%' }
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
                        position: 'relative',
                        overflow: 'hidden',
                        display: 'grid',
                        gridTemplateColumns: 'repeat(1, minmax(0, 1fr))',
                        gap: 0,
                        px: 0,
                    }}
                >
                    <Box
                        sx={{
                            position: 'absolute',
                            inset: 0,
                            pointerEvents: 'none',
                            zIndex: 0,
                        }}
                    >
                        <Box
                            sx={{
                                position: 'absolute',
                                left: { xs: '-120px', md: '-140px' },
                                top: { xs: '120px', md: '160px' },
                                width: { xs: 320, md: 420 },
                                height: { xs: 320, md: 420 },
                                borderRadius: '50%',
                                background:
                                    'radial-gradient(circle, rgba(255,255,255,0.55) 0%, rgba(255,255,255,0) 70%)',
                                filter: 'blur(2px)',
                            }}
                        />
                        <Box
                            sx={{
                                position: 'absolute',
                                right: { xs: '-120px', md: '-80px' },
                                bottom: { xs: '-140px', md: '-120px' },
                                width: { xs: 360, md: 520 },
                                height: { xs: 360, md: 520 },
                                borderRadius: '50%',
                                background:
                                    'radial-gradient(circle, rgba(19,16,13,0.10) 0%, rgba(19,16,13,0) 65%)',
                                filter: 'blur(1px)',
                            }}
                        />
                    </Box>
                    <motion.div
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
                                position: 'relative',
                                zIndex: 1,
                            }}
                        >
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
                                        flex: { xs: '0 0 auto', md: '1 1 50%' },
                                        backgroundImage: `${gradientOverlay}, url(/bg.jpg)`,
                                        backgroundSize: 'cover',
                                        backgroundPosition: 'center',
                                        minHeight: mobileImageHeight,
                                    }}
                                />
                                <Box
                                    sx={{
                                        flex: { xs: '1 1 auto', md: '1 1 50%' },
                                        minHeight: {
                                            xs: `calc(100svh - 200px)`,
                                            sm: `calc(100svh - 240px)`,
                                            md: '100%',
                                        },
                                        backgroundColor: 'rgba(251, 249, 247, 0.92)',
                                        px: { xs: 2.25, sm: 3.25, md: 4 },
                                        py: { xs: 4, md: 4 },
                                        display: 'flex',
                                        alignItems: { xs: 'stretch', md: 'center' },
                                        justifyContent: 'center',
                                        position: 'relative',
                                        '&:before': {
                                            content: "''",
                                            position: 'absolute',
                                            inset: 0,
                                            background:
                                                'radial-gradient(circle at 20% 20%, rgba(255,255,255,0.65) 0%, rgba(255,255,255,0) 55%), radial-gradient(circle at 80% 30%, rgba(19,16,13,0.06) 0%, rgba(19,16,13,0) 60%)',
                                            opacity: 1,
                                            pointerEvents: 'none',
                                        },
                                    }}
                                >
                                    <Stack
                                        spacing={2.25}
                                        sx={{
                                            width: '100%',
                                            maxWidth: { xs: '100%', md: 560 },
                                            position: 'relative',
                                            zIndex: 1,
                                        }}
                                    >
	                                        <Stack spacing={1}>
		                                            <Typography
		                                                variant="h4"
		                                                sx={{
		                                                    fontWeight: 600,
		                                                    color: '#13100d',
		                                                    fontFamily: "'Fancy Cut Pro', 'Cambria', 'Georgia', serif",
		                                                    letterSpacing: '-0.02em',
		                                                }}
		                                            >
	                                                {heading}
	                                            </Typography>
	                                            <Typography
	                                                sx={{
	                                                    color: '#393026',
	                                                    lineHeight: 1.7,
	                                                    fontFamily: "'Fancy Cut Pro', 'Cambria', 'Georgia', serif",
	                                                }}
	                                            >
	                                                {description}
	                                            </Typography>
	                                        </Stack>
		                                        <Stack spacing={2} sx={{ width: '100%' }}>
		                                            <TextField
		                                                label={nameLabel}
		                                                fullWidth
		                                                variant="outlined"
		                                                autoComplete="name"
		                                                sx={fieldSx}
		                                            />
		                                            <TextField
		                                                label={emailLabel}
		                                                type="email"
		                                                fullWidth
		                                                variant="outlined"
		                                                autoComplete="email"
		                                                sx={fieldSx}
		                                            />
		                                            <TextField
		                                                label={messageLabel}
		                                                multiline
		                                                minRows={4}
		                                                fullWidth
		                                                variant="outlined"
	                                                sx={fieldSx}
	                                            />
	                                            <Button
	                                                variant="contained"
	                                                disableElevation
	                                                disableRipple
		                                                sx={{
		                                                    alignSelf: {
		                                                        xs: 'stretch',
		                                                        md: 'flex-end',
		                                                    },
		                                                    width: { xs: '100%', md: 'fit-content' },
		                                                    position: 'relative',
		                                                    overflow: 'hidden',
		                                                    backgroundImage:
		                                                        'linear-gradient(180deg, #f3e7d6 0%, #e6d2b9 100%)',
		                                                    color: '#13100d',
		                                                    fontWeight: 400,
		                                                    letterSpacing: '0.015em',
	                                                    fontSize: '0.95rem',
	                                                    fontFamily:
	                                                        "'Fancy Cut Pro', 'Cambria', 'Georgia', serif",
	                                                    fontStyle: 'italic',
	                                                    px: 3.5,
	                                                    py: 1.05,
		                                                    minHeight: 48,
		                                                    borderRadius: '14px',
		                                                    border: 'none',
		                                                    textTransform: 'none',
		                                                    boxShadow:
		                                                        '0 14px 30px rgba(19,16,13,0.10), inset 0 1px 0 rgba(255,255,255,0.65)',
		                                                    transition:
		                                                        'box-shadow 180ms ease, transform 180ms ease, filter 180ms ease',
		                                                    '& .MuiButton-label, & .MuiButton-startIcon, & .MuiButton-endIcon':
		                                                        {
		                                                            position:
		                                                                'relative',
		                                                            zIndex: 1,
		                                                        },
		                                                    '&::before': {
		                                                        content: "''",
		                                                        position:
		                                                            'absolute',
		                                                        inset: 0,
		                                                        background:
		                                                            'radial-gradient(circle at 30% 20%, rgba(255,255,255,0.65) 0%, rgba(255,255,255,0) 62%)',
		                                                        opacity: 0,
		                                                        transition:
		                                                            'opacity 220ms ease',
		                                                        pointerEvents:
		                                                            'none',
		                                                    },
		                                                    '&::after': {
		                                                        content: "''",
		                                                        position:
		                                                            'absolute',
		                                                        inset: -1,
		                                                        background:
		                                                            'linear-gradient(135deg, rgba(255,255,255,0.30) 0%, rgba(255,255,255,0) 42%)',
		                                                        opacity: 0,
		                                                        transform:
		                                                            'translateX(-18%)',
		                                                        transition:
		                                                            'opacity 220ms ease, transform 520ms cubic-bezier(0.22,1,0.36,1)',
		                                                        pointerEvents:
		                                                            'none',
		                                                    },
		                                                    '&:hover': {
		                                                        filter: 'brightness(1.02) saturate(1.02)',
		                                                        boxShadow:
		                                                            '0 16px 34px rgba(19,16,13,0.12), inset 0 1px 0 rgba(255,255,255,0.55)',
		                                                        transform:
		                                                            'translateY(-1px)',
		                                                    },
		                                                    '&:hover::before': {
		                                                        opacity: 1,
		                                                    },
		                                                    '&:hover::after': {
		                                                        opacity: 1,
		                                                        transform:
		                                                            'translateX(0%)',
		                                                    },
		                                                    '&:active': {
		                                                        transform:
		                                                            'translateY(0px)',
		                                                        boxShadow:
		                                                            '0 10px 22px rgba(19,16,13,0.10), inset 0 1px 0 rgba(255,255,255,0.50)',
		                                                    },
	                                                    '&:focus-visible': {
	                                                        boxShadow:
	                                                            '0 0 0 4px rgba(19,16,13,0.10)',
	                                                    },
	                                                }}
	                                                onClick={() => {
	                                                    const mailto = `mailto:irin.munni78@gmail.com`
	                                                    window.location.href = mailto
	                                                }}
	                                            >
	                                                {sendLabel}
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
