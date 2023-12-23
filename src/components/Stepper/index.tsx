'use client'
import React from 'react'
import { useTheme } from '@mui/material/styles'
import { Button, MobileStepper, useMediaQuery } from '@mui/material'
import { KeyboardArrowLeft, KeyboardArrowRight } from '@mui/icons-material'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment, selectCount } from '../../slice/count'
import exportData from '@/global/objects/languages'

function TabStepper() {
  const count = useSelector(selectCount)
  const dispatch = useDispatch()
  const { languages, flags } = exportData

  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('md'))
  const flagArray = Object.keys(flags)
  const languagArray = Object.keys(languages)

  const array = isMobile ? flagArray : languagArray
  const handleNext = () => {
    dispatch(increment())
  }

  const handleBack = () => {
    dispatch(decrement())
  }

  const icons: React.CSSProperties = {
    width: !isMobile ? '80px' : '30px',
    // marginTop: !isMobile ? '2px' : '1px',
    fontSize: !isMobile ? '14px' : '1.7rem',
  }

  return (
    <>
      <MobileStepper
        steps={5}
        color="white"
        sx={{
          position: 'relative',
          bgcolor: 'transparent',
          top: isMobile ? '-8vh' : '-5vh',
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
            {<div style={icons}>{array[count + 1]}</div> ?? (
              <div style={icons}></div>
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
            {<div style={icons}>{array[count - 1]}</div> ?? (
              <div style={icons}></div>
            )}
          </Button>
        }
      />
    </>
  )
}

export default TabStepper
