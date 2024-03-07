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
                    position: 'fixed',
                    top: '-10%',
                    width: '60vw',
                    display: 'flex',
                    justifyContent: 'flex-start',
                    alignItems: 'flex-end',
                    justifySelf: 'flex-start',
                    height: '70vh',
                }}
            >
                <Typography
                    color={'white'}
                    variant={isMobile ? 'h4' : 'h3'}
                    style={{ fontFamily: 'Cambria' }}
                >
                    {title}
                </Typography>
            </Box>
        </>
    )
}
