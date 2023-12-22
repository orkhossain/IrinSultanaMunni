'use client'
import React, { useState } from 'react'
import Box from '@mui/material/Box'
import { useTheme } from '@mui/material/styles'
import { Button, MobileStepper, useMediaQuery } from '@mui/material'
import { StyledTabs, StyledTab } from './CustomTabSelector'
import { useSelector, useDispatch } from 'react-redux'
import { setValue, selectCount } from '../../slice/count'
import { BorderAll, Opacity } from '@mui/icons-material'

export default function PillTab() {
  const count = useSelector(selectCount)
  const dispatch = useDispatch()

  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('md'))

  const languages = !isMobile
    ? ['Italiano', 'English', 'বাংলা', 'اردو', 'हिन्दी']
    : ['🇮🇹', '🇬🇧', '🇧🇩', '🇵🇰', '🇮🇳']

  const handleChange = (newValue: number) => {
    dispatch(setValue(newValue))
  }

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
          onChange={(event: React.SyntheticEvent, newValue: number) =>
            handleChange(newValue)
          }
          aria-label="styled tabs example"
          sx={{
            backgroundColor: `rgba(211, 211, 211, 0.4)`, // Set the background color with opacity
            backdropFilter: 'blur(10px)',
            border: '1px solid lightggray',
            padding: '5px',
            borderRadius: '50px',
          }}
        >
          {languages.map((language, index) => (
            <StyledTab key={index} label={language} />
          ))}
        </StyledTabs>
      </Box>
    </div>
  )
}
