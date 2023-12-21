'use client'
import React, { useState } from 'react'
import Box from '@mui/material/Box'
import { useTheme } from '@mui/material/styles'
import SwipeableViews from 'react-swipeable-views'
import { Button, MobileStepper, useMediaQuery } from '@mui/material'
import { KeyboardArrowLeft, KeyboardArrowRight } from '@mui/icons-material'
import CustomTabPanel from '../TabContent'
import { StyledTabs, StyledTab } from '../CustomTab'
import Content from '../Content'

const AutoPlaySwipeableViewsComponent = SwipeableViews

function CenteredTabs() {
  const [value, setValue] = useState(0)

  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'))

  const languages = !isMobile
    ? ['Italiano', 'English', 'বাংলা', 'اردو', 'हिन्दी']
    : ['🇬🇧', '🇮🇹', '🇧🇩', '🇵🇰', '🇮🇳']

  const handleChange = (newValue: number) => {
    setValue(newValue)
  }

  const handleNext = () => {
    setValue(value + 1)
  }

  const handleBack = () => {
    setValue(value - 1)
  }

  return (
    <>
      <div
        style={{ display: 'flex', justifyContent: 'center', padding: '20px' }}
      >
        <Box zIndex={1}>
          <StyledTabs
            value={value}
            onChange={(event: React.SyntheticEvent, newValue: number) =>
              handleChange(newValue)
            }
            aria-label="styled tabs example"
            sx={{
              backgroundColor: 'lightgrey',
              padding: '2px',
              borderRadius: '25px',
            }}
          >
            {languages.map((language, index) => (
              <StyledTab key={index} label={language} />
            ))}
          </StyledTabs>
        </Box>
      </div>
      <div style={{ position: 'relative', top: '-20vh' }}>
        <AutoPlaySwipeableViewsComponent
          axis={'x'}
          resistance={true}
          index={value}
          enableMouseEvents={true}
          onChangeIndex={handleChange}
          style={{
            padding: 3,
            minHeight: isMobile ? '70vh' : '90vh',
            minWidth: '90vw',
            display: 'block',
            justifyContent: 'center',
            backgroundImage: `url('/3186532.jpg')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',

            paddingTop: '18vh',
          }}
        >
          {languages.map((language, index) => (
            <CustomTabPanel key={index} value={value} index={index}>
              <Content />
            </CustomTabPanel>
          ))}
        </AutoPlaySwipeableViewsComponent>
        <MobileStepper
          steps={5}
          sx={{ position: 'relative' }}
          position="top"
          activeStep={value}
          nextButton={
            <Button size="small" onClick={handleNext} disabled={value === 4}>
              {languages[value + 1] ?? '   '}
              {theme.direction === 'rtl' ? (
                <KeyboardArrowLeft />
              ) : (
                <KeyboardArrowRight />
              )}
            </Button>
          }
          backButton={
            <Button size="small" onClick={handleBack} disabled={value === 0}>
              {theme.direction === 'rtl' ? (
                <KeyboardArrowRight />
              ) : (
                <KeyboardArrowLeft />
              )}
              {languages[value - 1]}
            </Button>
          }
        />
      </div>
    </>
  )
}

export default CenteredTabs
