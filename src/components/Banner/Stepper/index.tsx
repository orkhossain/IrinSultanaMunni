'use client'
import React from 'react'
import { useTheme } from '@mui/material/styles'
import { Button, MobileStepper, useMediaQuery } from '@mui/material'
import { KeyboardArrowLeft, KeyboardArrowRight } from '@mui/icons-material'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment, selectCount } from '@//slice/count'
import { setLanguage } from '@/slice/language'
import exportData from '@/global/objects/languages'

function TabStepper() {
    const count = useSelector(selectCount)
    const dispatch = useDispatch()
    const { languages, flags } = exportData

    const theme = useTheme()
    const isMobile = useMediaQuery(theme.breakpoints.down('md'))
    const flagArray = Object.keys(flags)
    const languageArray = Object.keys(languages)
    const array = isMobile ? flagArray : languageArray
    const maxSteps = array.length

    const handleNext = () => {
        const nextIndex = (count + 1) % maxSteps
        dispatch(increment())
        dispatch(
            setLanguage(flags[array[nextIndex]] || languages[array[nextIndex]])
        )
    }

    const handleBack = () => {
        const prevIndex = (count - 1 + maxSteps) % maxSteps
        dispatch(decrement())
        dispatch(
            setLanguage(flags[array[prevIndex]] || languages[array[prevIndex]])
        )
    }
    const icons: React.CSSProperties = {
        width: !isMobile ? '80px' : '30px',
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
	                        {array[count + 1] ? (
	                            <div style={icons}>{array[count + 1]}</div>
	                        ) : (
	                            <div style={icons} />
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
	                        {array[count - 1] ? (
	                            <div style={icons}>{array[count - 1]}</div>
	                        ) : (
	                            <div style={icons} />
	                        )}
	                    </Button>
	                }
	            />
        </>
    )
}

export default TabStepper
