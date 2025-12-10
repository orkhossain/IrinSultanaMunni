import { selectDictionary } from '@/slice/language'
import { Container, Typography, Link, Box, Stack } from '@mui/material'
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
                backgroundColor: '#fcfbf9',
                borderTop: '1px solid #e9e1d7',
                mt: 0,
                py: { xs: 4.5, sm: 6 },
                color: '#2d241b',
            }}
        >
            <Container maxWidth="lg">
                <Stack
                    direction={{ xs: 'column', sm: 'row' }}
                    spacing={{ xs: 3, sm: 3.75 }}
                    justifyContent="space-between"
                    alignItems={{ xs: 'flex-start', sm: 'center' }}
                    sx={{ fontFamily: '"Times New Roman", Times, serif' }}
                >
                    <Box sx={{ maxWidth: 460 }}>
                        <Typography
                            variant="h6"
                            sx={{
                                fontWeight: 500,
                                letterSpacing: '-0.015em',
                                color: '#241a14',
                                fontSize: '1.2rem',
                            }}
                        >
                            Irin Sultana Munni
                        </Typography>
                        <Typography
                            variant="body2"
                            sx={{
                                color: 'rgba(45,36,27,0.72)',
                                mt: 0.75,
                                fontSize: '1rem',
                                fontStyle: 'italic',
                                lineHeight: 1.65,
                            }}
                        >
                            Language mediation · Cultural integration
                        </Typography>
                        <Typography
                            variant="caption"
                            sx={{
                                display: 'block',
                                color: 'rgba(45,36,27,0.64)',
                                mt: 2,
                                letterSpacing: '0.1em',
                                textTransform: 'uppercase',
                                fontWeight: 500,
                            }}
                        >
                            © {new Date().getFullYear()}
                        </Typography>
                    </Box>

                    <Stack
                        direction="row"
                        spacing={1.25}
                        sx={{
                            flexWrap: 'wrap',
                            gap: 1.35,
                            justifyContent: { xs: 'flex-start', sm: 'flex-end' },
                        }}
                    >
                        {navItems.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                underline="none"
                                sx={{
                                    display: 'inline-flex',
                                    alignItems: 'center',
                                    color: '#2d241b',
                                    fontWeight: 500,
                                    letterSpacing: '0.04em',
                                    textTransform: 'uppercase',
                                    fontSize: '0.9rem',
                                    px: 1.15,
                                    py: 0.5,
                                    borderRadius: '14px',
                                    border: '1px solid transparent',
                                    transition: 'color 120ms ease, border 120ms ease',
                                    '&:hover': {
                                        color: '#1c140f',
                                        borderColor: '#e0d7cb',
                                    },
                                }}
                            >
                                {item.label}
                            </Link>
                        ))}
                    </Stack>
                </Stack>
            </Container>
        </Box>
    )
}
export default Footer
