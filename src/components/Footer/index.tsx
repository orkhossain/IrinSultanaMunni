'use client'

import React from 'react'
import { selectDictionary } from '@/slice/language'
import { Box, Button, Container, Divider, Link, Stack, Typography } from '@mui/material'
import Image from 'next/image'
import { useSelector } from 'react-redux'
import logo from '@/assets/logo.png'

const Footer = () => {
    const dict = useSelector(selectDictionary)
    const service = dict.Index?.service ?? ''
    const about = dict.Index?.about ?? ''
    const contact = dict.Index?.contact ?? 'Contact'

    const navItems = [
        { href: '/about', label: about },
        { href: '/services', label: service },
        { href: '/contact', label: contact },
    ]

    return (
        <Box
            component="footer"
            sx={{
                backgroundColor: '#f7f3ec',
                borderTop: '1px solid #e5ddcf',
                color: '#1b1410',
                fontFamily: "'Fancy Cut Pro', 'Cambria', 'Georgia', serif",
                width: '100vw',
                minHeight: '100vh',
            }}
        >
            <Container
                maxWidth={false}
                disableGutters
                sx={{ height: '100%', display: 'flex', flexDirection: 'column', px: 0 }}
            >
                <Stack
                    spacing={{ xs: 4, md: 6 }}
                    sx={{
                        flex: 1,
                        alignItems: 'stretch',
                        justifyContent: 'space-between',
                        pt: { xs: 4, md: 5 },
                        pb: { xs: 2, md: 3 },
                        px: 0,
                    }}
                >
                    <Stack
                        direction={{ xs: 'column', md: 'row' }}
                        spacing={{ xs: 4, md: 8 }}
                        justifyContent="space-between"
                        alignItems={{ xs: 'flex-start', md: 'center' }}
                        sx={{ px: { xs: 3, md: 6 } }}
                    >
                        <Stack spacing={1.5} sx={{ minWidth: 180 }}>
                            {navItems.map((item) => (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    underline="none"
                                    sx={{
                                        color: '#24315a',
                                        fontWeight: 500,
                                        letterSpacing: '0.01em',
                                        fontSize: '1.05rem',
                                        display: 'block',
                                        '&:hover': { color: '#0f1b3a' },
                                    }}
                                >
                                    {item.label}
                                </Link>
                            ))}
                        </Stack>
                        <Box sx={{ display: { xs: 'none', md: 'block' }, minWidth: 180, flexShrink: 0 }} />

                        <Stack
                            spacing={{ xs: 2, md: 2.5 }}
                            alignItems="flex-end"
                            sx={{
                                flex: 1,
                                textAlign: { xs: 'right', md: 'right' },
                                alignSelf: { xs: 'flex-end', md: 'flex-end' },
                            }}
                        >
                            <Typography
                                variant="h2"
                                sx={{
                                    fontWeight: 500,
                                    letterSpacing: '-0.02em',
                                    color: '#24315a',
                                    fontFamily: "'Playfair Display', 'Cambria', 'Georgia', serif",
                                }}
                            >
                                Irin <Box component="span" sx={{ fontStyle: 'italic' }}>Sultana</Box> Munni
                            </Typography>
                            <Typography
                                variant="body1"
                                sx={{
                                    color: '#374469',
                                    lineHeight: 1.65,
                                    fontSize: '1.05rem',
                                    fontWeight: 400,
                                    textAlign: { xs: 'right', md: 'right' },
                                    maxWidth: 640,
                                    fontFamily: "'Libre Baskerville', 'Times New Roman', serif",
                                }}
                            >
                                Language mediation, interpreting, and cultural integration across medical, legal, and social contexts.
                            </Typography>
                        </Stack>
                    </Stack>

                    <Stack
                        direction={{ xs: 'column', md: 'row' }}
                        spacing={{ xs: 5, md: 8 }}
                        justifyContent="space-between"
                        alignItems={{ xs: 'flex-start', md: 'center' }}
                        sx={{ width: '100%', px: { xs: 3, md: 6 } }}
                    >
                        <Stack
                            direction="row"
                            spacing={{ xs: 4, md: 6 }}
                            flexWrap="wrap"
                            rowGap={2}
                            sx={{ minWidth: { md: 260 }, alignSelf: { xs: 'flex-start', md: 'flex-start' } }}
                        >
                            <Stack spacing={1}>
                                <Typography
                                    variant="body2"
                                    sx={{ fontWeight: 500, letterSpacing: '0.05em', textTransform: 'uppercase', color: '#3a3128' }}
                                >
                                    Connect
                                </Typography>
                                <Link
                                    href="https://www.linkedin.com"
                                    underline="none"
                                    sx={{
                                        color: '#1b1410',
                                        fontWeight: 500,
                                        letterSpacing: '0.01em',
                                        fontSize: '1rem',
                                        '&:hover': { color: '#0f1b3a' },
                                    }}
                                >
                                    LinkedIn
                                </Link>
                                <Link
                                    href="https://www.instagram.com"
                                    underline="none"
                                    sx={{
                                        color: '#1b1410',
                                        fontWeight: 500,
                                        letterSpacing: '0.01em',
                                        fontSize: '1rem',
                                        '&:hover': { color: '#0f1b3a' },
                                    }}
                                >
                                    Instagram
                                </Link>
                            </Stack>
                        </Stack>

                        <Box sx={{ flexGrow: 1 }} />

                        <Stack
                            spacing={{ xs: 1.25, md: 1.75 }}
                            sx={{
                                minWidth: { xs: 'auto', md: 260 },
                                alignItems: { xs: 'flex-end', md: 'flex-end' },
                                textAlign: { xs: 'right', md: 'right' },
                                width: '100%',
                                alignSelf: { xs: 'flex-end', md: 'flex-end' },
                            }}
                        >
                            <Typography
                                variant="body2"
                                sx={{ fontWeight: 500, letterSpacing: '0.05em', textTransform: 'uppercase', color: '#3a3128' }}
                            >
                                Get in touch
                            </Typography>
                            <Link
                                href="mailto:irin.munni78@gmail.com"
                                underline="none"
                                sx={{
                                    color: '#1b1410',
                                    fontWeight: 500,
                                    letterSpacing: '0.01em',
                                    fontSize: '1rem',
                                    '&:hover': { color: '#0f1b3a' },
                                }}
                            >
                                irin.munni78@gmail.com
                            </Link>
                            <Button
                                variant="outlined"
                                href="/contact"
                                sx={{
                                    mt: 0.5,
                                    borderRadius: '999px',
                                    textTransform: 'none',
                                    fontWeight: 600,
                                    borderColor: '#24315a',
                                    color: '#24315a',
                                    px: 2.4,
                                    py: 0.75,
                                    alignSelf: 'flex-end',
                                    '&:hover': { borderColor: '#0f1b3a', color: '#0f1b3a' },
                                }}
                            >
                                Get in touch
                            </Button>
                        </Stack>
                    </Stack>

                    <Box sx={{ width: '100%', height: { xs: 90, md: '15vh' } }} />

                    <Stack spacing={{ xs: 2, md: 3 }} sx={{ width: '100%' }}>
                        <Box
                            sx={{
                                width: '100%',
                                overflow: 'hidden',
                                ml: 0,
                            }}
                        >
                            <Box
                                sx={{
                                    display: 'flex',
                                    margin: 0,
                                    padding: 0,
                                    gap: { xs: 4, md: 6 },
                                    animation: 'nameMarquee 22s linear infinite',
                                    whiteSpace: 'nowrap',
                                    color: 'rgba(27,20,16,0.22)',
                                    fontFamily: "'Playfair Display', 'Cambria', 'Georgia', serif",
                                    fontWeight: 500,
                                    letterSpacing: '0.1em',
                                    textTransform: 'uppercase',
                                    fontSize: { xs: '14vw', md: '9vw' },
                                    '@keyframes nameMarquee': {
                                        '0%': { transform: 'translateX(0%)' },
                                        '100%': { transform: 'translateX(-50%)' },
                                    },
                                }}
                            >
                                <span>IRIN SULTANA MUNNI</span>
                            </Box>
                        </Box>

                        <Divider
                            sx={{
                                borderColor: 'rgba(0,0,0,0.06)',
                                m: 0,
                                width: '100%',
                                ml: 0,
                            }}
                        />
                        <Stack
                            direction="row"
                            spacing={1.25}
                            justifyContent="center"
                            alignItems="center"
                            sx={{ color: 'rgba(27,20,16,0.65)' }}
                        >
                            <Box
                                sx={{

                                    borderRadius: '10px',
                                    overflow: 'hidden',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                }}
                            >
                                <Image
                                    src={logo}
                                    alt="Irin Sultana Munni logo"
                                    width={54}
                                    height={54}
                                    style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                                />
                            </Box>
                            <Typography
                                variant="body2"
                                sx={{
                                    color: 'rgba(27,20,16,0.65)',
                                    letterSpacing: '0.04em',
                                    textTransform: 'uppercase',
                                    fontWeight: 500,
                                    textAlign: 'center',
                                    fontFamily: "'Inter', 'Helvetica Neue', 'Arial', sans-serif",
                                }}
                            >
                                Made with ♥ in Europe · © {new Date().getFullYear()} Irin Sultana Munni
                            </Typography>
                        </Stack>
                    </Stack>
                </Stack>
            </Container>
        </Box>
    )
}

export default Footer
