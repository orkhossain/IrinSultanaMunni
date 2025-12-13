'use client'

import { selectDictionary } from '@/slice/language'
import { Container, Typography, Link, Box, Stack, Divider } from '@mui/material'
import { useSelector } from 'react-redux'

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
                backgroundColor: '#f8f4ee',
                borderTop: '1px solid #e4d8c8',
                py: { xs: 5, md: 6 },
                color: '#2d241b',
                fontFamily: "'Fancy Cut Pro', 'Cambria', 'Georgia', serif",
            }}
        >
            <Container maxWidth="lg">
                <Stack
                    direction={{ xs: 'column', md: 'row' }}
                    spacing={{ xs: 4, md: 5 }}
                    justifyContent="space-between"
                    alignItems={{ xs: 'flex-start', md: 'center' }}
                    sx={{ mb: { xs: 3, md: 4 } }}
                >
                    <Box sx={{ maxWidth: 440 }}>
                        <Typography
                            variant="h5"
                            sx={{
                                fontWeight: 600,
                                letterSpacing: '-0.01em',
                                color: '#1b1410',
                            }}
                        >
                            Irin Sultana Munni
                        </Typography>
                        <Typography
                            variant="body1"
                            sx={{
                                color: 'rgba(27,20,16,0.76)',
                                mt: 0.75,
                                lineHeight: 1.65,
                                fontSize: '1.05rem',
                            }}
                        >
                            Language mediation, interpreting, and cultural integration across medical, legal, and social contexts.
                        </Typography>
                    </Box>

                    <Stack direction="row" spacing={{ xs: 2, md: 3 }} flexWrap="wrap" rowGap={1.5}>
                        {navItems.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                underline="none"
                                sx={{
                                    color: '#2d241b',
                                    fontWeight: 600,
                                    letterSpacing: '0.02em',
                                    fontSize: '0.95rem',
                                    px: 1.2,
                                    py: 0.55,
                                    borderRadius: '12px',
                                    border: '1px solid rgba(19,16,13,0.08)',
                                    backgroundColor: 'rgba(255,255,255,0.9)',
                                    transition: 'all 160ms ease',
                                    '&:hover': {
                                        borderColor: '#b08b62',
                                        backgroundColor: '#fff',
                                        transform: 'translateY(-1px)',
                                    },
                                }}
                            >
                                {item.label}
                            </Link>
                        ))}
                    </Stack>

                    <Stack spacing={1} sx={{ minWidth: { md: 220 } }}>
                        <Typography
                            variant="body1"
                            sx={{ fontWeight: 600, letterSpacing: '0.01em', color: '#1b1410' }}
                        >
                            Contact
                        </Typography>
                        <Link
                            href="mailto:irin.munni78@gmail.com"
                            underline="none"
                            sx={{
                                color: '#2d241b',
                                fontWeight: 600,
                                fontSize: '0.95rem',
                                letterSpacing: '0.01em',
                            }}
                        >
                            irin.munni78@gmail.com
                        </Link>
                        <Typography sx={{ color: 'rgba(27,20,16,0.68)', fontSize: '0.95rem' }}>
                            Based in Italy · Available onsite or remote
                        </Typography>
                    </Stack>
                </Stack>
                <Divider sx={{ borderColor: 'rgba(27,20,16,0.08)', mb: { xs: 2, md: 3 } }} />
                <Typography
                    variant="caption"
                    sx={{
                        display: 'block',
                        color: 'rgba(27,20,16,0.6)',
                        letterSpacing: '0.08em',
                        textTransform: 'uppercase',
                        fontWeight: 600,
                        textAlign: 'center',
                    }}
                >
                    © {new Date().getFullYear()} Irin Sultana Munni
                </Typography>
            </Container>
        </Box>
    )
}
export default Footer
