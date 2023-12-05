import React, { useState } from 'react'
import Box from '@mui/material/Box'
import { useTheme } from '@mui/material/styles'
import SwipeableViews from 'react-swipeable-views'
import { Button, MobileStepper } from '@mui/material'
import { KeyboardArrowLeft, KeyboardArrowRight } from '@mui/icons-material'
import CustomTabPanel from '../TabContent'
import { StyledTabs, StyledTab } from '../CustomTab'

const AutoPlaySwipeableViewsComponent = SwipeableViews

function CenteredTabs() {
  const [value, setValue] = useState(0)
  const languages = ['Italiano', 'English', 'বাংলা', 'اردو', 'हिन्दी']
  const theme = useTheme()

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
              backgroundColor: 'white',
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
      <AutoPlaySwipeableViewsComponent
        axis={'x'}
        direction={'rtl'}
        resistance={true}
        index={value}
        enableMouseEvents={true}
        onChangeIndex={handleChange}
        style={{
          padding: 3,
          minHeight: '800px',
          minWidth: '90vw',
          opacity: 0.9,
          display: 'block',
          justifyContent: 'center',
          backgroundImage: `url('/3186532.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          position: 'relative',
          top: '-20vh',
          paddingTop: '20vh',
        }}
      >
        {languages.map((language, index) => (
          <CustomTabPanel key={index} value={value} index={index}>
            {`Content for ${language}`} {/* Placeholder content */}
          </CustomTabPanel>
        ))}
      </AutoPlaySwipeableViewsComponent>
      <MobileStepper
        steps={5}
        sx={{ position: 'relative', top: '-20vh' }}
        position="static"
        activeStep={value}
        nextButton={
          <Button size="small" onClick={handleNext} disabled={value === 4}>
            Next
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
            Back
          </Button>
        }
      />
    </>
  )
}

export default CenteredTabs
