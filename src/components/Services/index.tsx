import React from 'react'
import { Card, CardContent, Typography } from '@mui/material'

const ServicesComponent: React.FC = () => {
  const cardStyle: React.CSSProperties = {
    marginBottom: '16px',
    maxWidth: '400px',
    marginLeft: 'auto',
    marginRight: 'auto',
  }

  const titleStyle: React.CSSProperties = {
    fontSize: '18px',
    marginBottom: '8px',
  }

  const descriptionStyle: React.CSSProperties = {
    fontSize: '14px',
  }

  return (
    <div>
      <Card style={cardStyle}>
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

      <Card style={cardStyle}>
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
