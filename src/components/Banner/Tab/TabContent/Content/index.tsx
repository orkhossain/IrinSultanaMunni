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
                    top: { xs: '15%', md: '15%' },
                    left: { xs: '1.5%', md: '2%' },
                    maxWidth: { xs: '90%', md: '64%' },
                    display: 'flex',
                    alignItems: 'flex-start',
                }}
            >
                <Typography
                    color="#e2e8f0"
                    variant={isMobile ? 'h3' : 'h2'}
                    sx={{
                        fontFamily: 'Cambria',
                        fontWeight: 400,
                        lineHeight: 1.2,
                        display: '-webkit-box',
                        WebkitLineClamp: 3,
                        WebkitBoxOrient: 'vertical',
                        overflow: 'hidden',
                        textShadow: '0 8px 32px rgba(0,0,0,0.35)',
                    }}
                >
                    {title}
                </Typography>
            </Box>
        </>
    )
}
