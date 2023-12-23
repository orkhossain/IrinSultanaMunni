import React from 'react'
import { useTheme } from '@mui/material/styles'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import Slider from '../../Slider'
import { useMediaQuery } from '@mui/material'

export default function Content() {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('md'))

  const cardStyle: React.CSSProperties = {
    display: 'flex',
    height: isMobile ? '68vh' : '50vh',
    borderRadius: '25px',
    padding: '10px',
    margin: '25% 0 8vh',
    backgroundColor: 'rgba(255, 255, 255, 0.25)',
    backdropFilter: 'blur(10px)',
    border: '1px solid rgba(255, 255, 255, 0.2)',
    flexDirection: isMobile ? 'column' : 'row',
    justifyContent: isMobile ? 'center' : 'space-evenly',
  }

  const cardMediaStyle: React.CSSProperties = {
    width: isMobile ? '100%' : '30vw',
    padding: '20px',
  }

  const cardContentStyle: React.CSSProperties = {
    padding: isMobile ? '20px' : '40px',
    textAlign: 'left',
  }

  return (
    <Card style={cardStyle}>
      <CardMedia
        component="img"
        style={cardMediaStyle}
        image="/flags/uk.webp"
        alt="Live from space album cover"
      />
      <Slider
        slidesData={[
          <>
            <CardContent style={cardContentStyle}>
              <Typography component="div" variant="h5">
                Benvenuto sul mio sito! Mi chiamo Munni!
              </Typography>
              <Typography
                variant="subtitle1"
                color="text.secondary"
                component="div"
              >
                Sono una mediatrice culturale professionale con 10 anni di
                esperienza ed aiuto a creare ponti tra culture diverse, fornendo
                supporto e facilitando la comunicazione. Posseggo una solida
                comprensione delle culture, delle lingue e delle dinamiche
                interculturali, particolarmente quelle sud asiatiche visto le
                mie origini. La mia abilità nella mediazione culturale aiuta a
                fare comprendere prevenire malintesi e a promuovere la
                comprensione e la collaborazione tra le parti interessate. Ho
                esperienza
              </Typography>
            </CardContent>
          </>,
          '',
        ]}
      />
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}
      />
    </Card>
  )
}
