'use-client'
import * as React from 'react'
import { useTheme } from '@mui/material/styles'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import Slider from '../Swiper'
import { useMediaQuery } from '@mui/material'
export default function Content() {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'))

  return isMobile ? (
    <Card
      sx={{
        display: 'flex',
        flexDirection: 'column', // Changed direction to column for mobile view
        width: '90vw',
        minHeight: '70vh', // Adjusted width for better fit on smaller screens
        borderRadius: '25px',
        padding: '10px',
        backgroundColor: 'rgba(255, 255, 255, 0.25)',
        backdropFilter: 'blur(10px)',
        border: '1px solid rgba(255, 255, 255, 0.2)',
      }}
    >
      <CardMedia
        component="img"
        sx={{ width: '100%', padding: '20px' }} // Made the image take full width
        image="/flags/uk.webp"
        alt="Live from space album cover"
      />
      <Slider
        slidesData={[
          <>
            <CardContent
              sx={{
                padding: '20px', // Reduced padding for smaller screens
                textAlign: 'left',
              }}
            >
              <Typography
                component="div"
                variant="h5"
                sx={{ fontSize: theme.typography.h5.fontSize }}
              >
                Benvenuto sul mio sito! Mi chiamo Munni!{' '}
              </Typography>
              <Typography
                variant="subtitle1"
                color="text.secondary"
                component="div"
                sx={{ fontSize: theme.typography.body1.fontSize }}
              >
                {/* Content */}
              </Typography>
            </CardContent>
          </>,
          '', // Empty slide
        ]}
      />
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}
      >
        {/* Content */}
      </Box>
    </Card>
  ) : (
    <>
      <Card
        sx={{
          display: 'flex',
          justifyContent: 'space-evenly',
          flexDirection: 'row',
          width: '80vw',
          height: '65vh',
          borderRadius: '25px',
          padding: '10px',
          backgroundColor: 'rgba(255, 255, 255, 0.25)',
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(255, 255, 255, 0.2)',
        }}
      >
        <CardMedia
          component="img"
          sx={{ display: 'flex', width: '30vw', padding: '20px' }}
          image="/flags/uk.webp"
          alt="Live from space album cover"
        />
        <Slider
          slidesData={[
            <>
              <CardContent
                sx={{
                  padding: '40px',
                  flex: '1 0 auto',
                  maxWidth: '50vw',
                  maxHeight: '20vh',
                  justifyContent: 'flex-start',
                  textAlign: 'left',
                  alignItems: 'start',
                }}
              >
                <Typography component="div" variant="h5">
                  Benveuto sul mio sito! Mi chiamo Munni!{' '}
                </Typography>
                <Typography
                  variant="subtitle1"
                  color="text.secondary"
                  component="div"
                  sx={{ maxHeight: '10vh' }}
                >
                  Sono una mediatrice culturale professionale con 10 anni di
                  esperienza ed aiuto a creare ponti tra culture diverse,
                  fornendo supporto e facilitando la comunicazione. Posseggo una
                  solida comprensione delle culture, delle lingue e delle
                  dinamiche interculturali, particolarmente quelle sud asiatiche
                  visto le mie origini. La mia abilità nella mediazione
                  culturale aiuta a fare comprendere prevenire malintesi e a
                  promuovere la comprensione e la collaborazione tra le parti
                  interessate. Ho esperienza
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
        ></Box>
      </Card>
    </>
  )
}
