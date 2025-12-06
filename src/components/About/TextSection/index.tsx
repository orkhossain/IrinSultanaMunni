import React from 'react'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import { useMediaQuery, useTheme } from '@mui/material'

const QuoteComponent = () => {
    const theme = useTheme()
    const isMobile = useMediaQuery(theme.breakpoints.down('md'))
    const isSmall = useMediaQuery(theme.breakpoints.down('sm'))

    return (
        <>
            <Box
                position="relative"
                top="-20vh"
                display="flex"
                justifyContent="center"
                alignItems="center"
                height={!isMobile ? '50svh' : '32svh'}
                padding={'30px'}
                className={'container'}
                cursor-class="arrow"
            >
                <Typography
                    variant={isMobile ? (isSmall ? 'h6' : 'h4') : 'h2'}
                    className="image-container"
                    sx={{
                        fontFamily: "'Times New Roman', Times, serif",
                        fontStyle: 'italic',
                        fontWeight: 400,
                        position: 'relative',
                        top: '15vh',
                        textAlign: 'center',
                        left: '-5vw',
                    }}
                >
                    &quot;To have another language <br></br> &nbsp;
                    &nbsp;&nbsp;&nbsp; &nbsp; &nbsp; is to possess a second
                    soul.&quot; &nbsp;
                    <br></br> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; -
                    &nbsp;Charlemagne
                </Typography>
            </Box>
        </>
    )
}

export default QuoteComponent
