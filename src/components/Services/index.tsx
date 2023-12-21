import React from 'react'
import {
  Card,
  CardContent,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material'

const ServicesComponent: React.FC = () => {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'))

  const handleHover = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget
    card.style.opacity = '0.7'
  }

  const handleHoverExit = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget
    card.style.opacity = '1'
  }

  const containerStyle: React.CSSProperties = {
    display: 'flex',
    flexDirection: !isMobile ? 'row' : 'column', // Initially display cards side by side
    height: !isMobile ? '50vh' : '100vh', // Occupying half the window height
  }

  const cardStyle: React.CSSProperties = {
    flex: '1',
    maxWidth: !isMobile ? 'calc(50% - 32px)' : '100%', // Half of the window with padding
    margin: '10px',
  }

  const titleStyle: React.CSSProperties = {
    fontSize: '18px',
    marginBottom: '8px',
  }

  const descriptionStyle: React.CSSProperties = {
    fontSize: '14px',
  }

  return (
    <div style={containerStyle}>
      <Card
        style={cardStyle}
        onMouseEnter={handleHover}
        onMouseLeave={handleHoverExit}
      >
        <CardContent>
          <Typography variant="h6" style={titleStyle}>
            Translation Services
          </Typography>
          <Typography variant="body1" style={descriptionStyle}>
            I offer professional paper translations in English, Italian, and
            Bangla based on word count or document length.
          </Typography>
        </CardContent>
      </Card>

      <Card
        style={cardStyle}
        onMouseEnter={handleHover}
        onMouseLeave={handleHoverExit}
      >
        <CardContent>
          <Typography variant="h6" style={titleStyle}>
            Mediation Services
          </Typography>
          <Typography variant="body1" style={descriptionStyle}>
            I provide mediation services in English, Italian, Bangla, Urdu, and
            Hindi to facilitate communication and resolution.
          </Typography>
        </CardContent>
      </Card>
    </div>
  )
}

export default ServicesComponent
