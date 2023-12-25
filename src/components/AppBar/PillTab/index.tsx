'use client'
import React, { useEffect, useState } from 'react'
import Box from '@mui/material/Box'
import { useTheme } from '@mui/material/styles'
import { Button, MobileStepper, useMediaQuery } from '@mui/material'
import { StyledTabs, StyledTab } from './CustomTabSelector'
import { useSelector, useDispatch } from 'react-redux'
import { setValue, selectCount } from '../../../slice/count'
import { selectLanguage, setLanguage, setDictionary } from '@/slice/language'
import exportData from '@/global/objects/languages'
import { getDictionary } from '@/i18n/get-dictionary'
import { fetchDictionary } from '@/slice/language/fetch'

export default function PillTab() {
    const { languages, flags } = exportData
    const count = useSelector(selectCount)
    const dispatch = useDispatch()

    const theme = useTheme()
    const isMobile = useMediaQuery(theme.breakpoints.down('md'))

    const flagArray = Object.keys(flags)
    const languagArray = Object.keys(languages)

    const array = isMobile ? flagArray : languagArray

    const handleChange = (newValue: number) => {
        dispatch(setValue(newValue))
        dispatch(
            setLanguage(flags[array[newValue]] || languages[array[newValue]])
        )
    }
    const lan = useSelector(selectLanguage)
    useEffect(() => {
        dispatch(fetchDictionary(lan))
    }, [dispatch, lan])

    return (
        <div
            style={{
                display: 'flex',
                justifyContent: 'center',
            }}
        >
            <Box zIndex={1}>
                <StyledTabs
                    value={count}
                    onChange={(
                        event: React.SyntheticEvent,
                        newValue: number
                    ) => {
                        handleChange(newValue)
                    }}
                    aria-label="styled tabs example"
                    sx={{
                        backgroundColor: `rgba(211, 211, 211, 0.4)`, // Set the background color with opacity
                        backdropFilter: 'blur(10px)',
                        border: '1px solid lightggray',
                        padding: '5px',
                        borderRadius: '50px',
                    }}
                >
                    {array.map((language, index) => (
                        <StyledTab key={index} label={language} />
                    ))}
                </StyledTabs>
            </Box>
        </div>
    )
}
