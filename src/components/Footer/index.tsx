import { Container, Typography, Link, Grid } from '@mui/material';

const Footer = () => {
  return (
    <footer style={{ backgroundColor: '#f8f8f8', padding: '20px 0', textAlign: 'center' }}>
      <Container maxWidth="lg">
        <Grid container spacing={2} justifyContent="center">
          <Grid item xs={12} sm={6}>
            <Typography variant="body2" color="textSecondary">
              &copy; {new Date().getFullYear()} Your Name
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="body2" color="textSecondary">
              <Link href="/translations" color="inherit" style={{ marginRight: 20 }}>
                Translation Services
              </Link>
              <Link href="/mediations" color="inherit">
                Mediation
              </Link>
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </footer>
  );
};

export default Footer;
