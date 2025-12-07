import React from 'react'
import { useTheme } from '@mui/material/styles'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { useMediaQuery } from '@mui/material'
import { useSelector } from 'react-redux'
import { selectDictionary } from '@/slice/language'

export default function Content() {
    const theme = useTheme()
    const isMobile = useMediaQuery(theme.breakpoints.down('md'))
    const dict = useSelector(selectDictionary)
    const title = dict.Index?.title ?? ''

    return (
        <>
            <Box
                sx={{
                    position: 'absolute',
                    inset: 0,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: { xs: 'flex-start', md: 'flex-start' },
                    px: { xs: '6%', md: '8%' },
                }}
            >
                <Typography
                    color="#e2e8f0"
                    variant={isMobile ? 'h2' : 'h1'}
                    sx={{
                        fontFamily: 'Cambria',
                        fontWeight: 400,
                        lineHeight: 1.15,
                        textAlign: { xs: 'left', md: 'left' },
                        maxWidth: { xs: '88%', md: '60%' },
                        textShadow: '0 8px 32px rgba(0,0,0,0.35)',
                    }}
                >
                    {title}
                </Typography>
            </Box>
        </>
    )
}
