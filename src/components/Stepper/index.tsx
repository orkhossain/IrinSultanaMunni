'use client'
import React from 'react'
import { useTheme } from '@mui/material/styles'
import { Button, MobileStepper, useMediaQuery } from '@mui/material'
import { KeyboardArrowLeft, KeyboardArrowRight } from '@mui/icons-material'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment, selectCount } from '../../slice/count'

function TabStepper() {
  const count = useSelector(selectCount)
  const dispatch = useDispatch()

  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'))

  const languages = !isMobile
    ? ['Italiano', 'English', 'বাংলা', 'اردو', 'हिन्दी']
    : ['🇬🇧', '🇮🇹', '🇧🇩', '🇵🇰', '🇮🇳']

  const handleNext = () => {
    dispatch(increment())
  }

  const handleBack = () => {
    dispatch(decrement())
  }

  return (
    <>
      <MobileStepper
        steps={5}
        color="white"
        sx={{
          position: 'relative',
          bgcolor: 'transparent',
          top: '-5vh',
          color: 'white !important',
          '& .MuiMobileStepper-dot': {
            display: 'none',
          },
        }}
        position="top"
        activeStep={count}
        nextButton={
          <Button
            size="small"
            sx={{
              color: 'white',
            }}
            onClick={handleNext}
            disabled={count === 4}
          >
            {<div style={{ width: '90px' }}>{languages[count + 1]}</div> ?? (
              <div style={{ width: '90px' }}></div>
            )}
            {theme.direction === 'rtl' ? (
              <KeyboardArrowLeft />
            ) : (
              <KeyboardArrowRight />
            )}
          </Button>
        }
        backButton={
          <Button
            size="small"
            sx={{
              color: 'white',
            }}
            onClick={handleBack}
            disabled={count === 0}
          >
            {theme.direction === 'rtl' ? (
              <KeyboardArrowRight />
            ) : (
              <KeyboardArrowLeft />
            )}
            {<div style={{ width: '90px' }}>{languages[count - 1]}</div> ?? (
              <div style={{ width: '90px' }}></div>
            )}
          </Button>
        }
      />
    </>
  )
}

export default TabStepper
