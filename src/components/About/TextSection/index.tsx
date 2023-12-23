import React from 'react'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import ScrollAnimation from 'react-animate-on-scroll'
import { useMediaQuery, useTheme } from '@mui/material'

const QuoteComponent = () => {
    const theme = useTheme()
    const isMobile = useMediaQuery(theme.breakpoints.down('md'))
    const isSmall = useMediaQuery(theme.breakpoints.down('sm'))

    return (
        <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut">
            <section>
                <Box
                    position="relative"
                    top="-20vh"
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    height="50svh"
                    padding={'30px'}
                    className={'container'}
                    cursor-class="arrow"
                >
                    <Typography
                        variant={isMobile ? (isSmall ? 'h5' : 'h3') : 'h2'}
                        className="image-container"
                        sx={{
                            fontFamily:
                                "'Parisienne', cursive, 'Pinyon Script', cursive",
                            position: 'relative',
                            top: '15vh',
                        }}
                    >
                        &quot;To have another language <br></br> &nbsp; &nbsp;
                        &nbsp; &nbsp; is to possess a second soul.&quot; &nbsp;
                        <br></br> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; - &nbsp;
                        Charlemagne
                    </Typography>
                </Box>
            </section>
        </ScrollAnimation>
    )
}

export default QuoteComponent
