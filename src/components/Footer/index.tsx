import { selectDictionary } from '@/slice/language'
import { Container, Typography, Link, Box, Stack } from '@mui/material'
import { useSelector } from 'react-redux'

const Footer = () => {
    const dict = useSelector(selectDictionary)
    const service = dict.Index?.service ?? ''
    const about = dict.Index?.about ?? ''
    const contact = dict.Index?.contact ?? 'Contact'

    return (
        <footer
            style={{
                background:
                    'linear-gradient(135deg, rgba(245,237,223,0.94), rgba(234,215,190,0.9))',
                borderTop: '1px solid rgba(145,80,50,0.12)',
                boxShadow: '0 -10px 30px rgba(38,29,20,0.08)',
                padding: '28px 0',
                marginTop: '48px',
            }}
        >
            <Container maxWidth="lg">
                <Stack
                    direction={{ xs: 'column', sm: 'row' }}
                    spacing={{ xs: 2, sm: 3 }}
                    justifyContent="space-between"
                    alignItems={{ xs: 'flex-start', sm: 'center' }}
                    sx={{ color: '#3a2a1c', fontFamily: 'Cambria, serif' }}
                >
                    <Box>
                        <Typography
                            variant="body1"
                            sx={{ fontWeight: 600, letterSpacing: '0.02em' }}
                        >
                            Irin Sultana Munni
                        </Typography>
                        <Typography
                            variant="body2"
                            sx={{ color: '#5a4a3a', mt: 0.5 }}
                        >
                            Language mediation & cultural integration
                        </Typography>
                        <Typography
                            variant="body2"
                            sx={{ color: '#6b5643', mt: 0.75 }}
                        >
                            © {new Date().getFullYear()}
                        </Typography>
                    </Box>

                    <Stack direction="row" spacing={2} sx={{ flexWrap: 'wrap' }}>
                        <Link
                            href="/about"
                            underline="none"
                            sx={{
                                color: '#3a2a1c',
                                fontWeight: 600,
                                px: 1,
                                py: 0.5,
                                borderRadius: '12px',
                                transition: 'background 160ms ease, color 160ms ease',
                                '&:hover': {
                                    backgroundColor: 'rgba(145,80,50,0.08)',
                                },
                            }}
                        >
                            {about}
                        </Link>
                        <Link
                            href="/services"
                            underline="none"
                            sx={{
                                color: '#3a2a1c',
                                fontWeight: 600,
                                px: 1,
                                py: 0.5,
                                borderRadius: '12px',
                                transition: 'background 160ms ease, color 160ms ease',
                                '&:hover': {
                                    backgroundColor: 'rgba(145,80,50,0.08)',
                                },
                            }}
                        >
                            {service}
                        </Link>
                        <Link
                            href="/contact"
                            underline="none"
                            sx={{
                                color: '#3a2a1c',
                                fontWeight: 600,
                                px: 1,
                                py: 0.5,
                                borderRadius: '12px',
                                transition: 'background 160ms ease, color 160ms ease',
                                '&:hover': {
                                    backgroundColor: 'rgba(145,80,50,0.08)',
                                },
                            }}
                        >
                            {contact}
                        </Link>
                    </Stack>
                </Stack>
            </Container>
        </footer>
    )
}
export default Footer
