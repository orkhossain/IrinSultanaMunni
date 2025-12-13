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
                width: '100%',
                display: 'flex',
                justifyContent: 'center',
            }}
        >
            <Box zIndex={1} sx={{ display: 'flex', justifyContent: 'center' }}>
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
                        backgroundColor: 'rgba(255,255,255,0.06)',
                        backdropFilter: 'blur(20px)',
                        border: '1px solid rgba(255,255,255,0.16)',
                        padding: { xs: '1px 4px', sm: '6px 8px' },
                        minHeight: { xs: 32, sm: 44 },
                        borderRadius: '9999px',
                        boxShadow: '0 16px 48px rgba(0,0,0,0.25)',
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
