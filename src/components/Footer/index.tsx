import { selectDictionary } from '@/slice/language'
import { Container, Typography, Link, Grid } from '@mui/material'
import { useSelector } from 'react-redux'

const Footer = () => {
    const dict = useSelector(selectDictionary)

    const service = dict.Index?.service ?? ''
    const about = dict.Index?.about ?? ''

    return (
        <footer
            style={{
                backgroundColor: '#f8f8f8',
                padding: '20px 0',
                textAlign: 'center',
            }}
        >
            <Container maxWidth="lg">
                <Grid container spacing={2} justifyContent="center">
                    <Grid item xs={12} sm={6}>
                        <Typography variant="body2" color="textSecondary">
                            &copy; {new Date().getFullYear()} Irin Sultana Munni
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Typography variant="body2" color="textSecondary">
                            <Link
                                href="#about"
                                color="inherit"
                                underline="none"
                                style={{ marginRight: 20 }}
                            >
                                {about}
                            </Link>
                            <Link
                                href="#services"
                                underline="none"
                                color="inherit"
                            >
                                {service}
                            </Link>
                        </Typography>
                    </Grid>
                </Grid>
            </Container>
        </footer>
    )
}
export default Footer
