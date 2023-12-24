import React from 'react'
import { useTheme } from '@mui/material/styles'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import Slider from './Slider'
import { useMediaQuery } from '@mui/material'
import { useSelector } from 'react-redux'
import { selectDictionary } from '@/slice/language'
import ScrollAnimation from 'react-animate-on-scroll'

export default function Profile() {
    const theme = useTheme()
    const isMobile = useMediaQuery(theme.breakpoints.down('md'))
    const dict = useSelector(selectDictionary)
    const description = dict.Index?.description ?? ''
    const description2 = dict.Index?.description ?? ''

    const cardStyle: React.CSSProperties = {
        display: 'flex',
        height: '50vh',
        borderRadius: '25px',
        padding: '1vh',
        margin: '0 3vh',
        backgroundImage: `url(/bg.jpg)`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        // border: '1px solid rgba(255, 255, 255, 0.2)',
        flexDirection: isMobile ? 'column' : 'row',
        justifyContent: isMobile ? 'center' : 'space-evenly',
    }

    const cardMediaStyle: React.CSSProperties = {
        width: isMobile ? '100%' : '30vw',
        margin: '20px',
    }

    const cardContentStyle: React.CSSProperties = {
        padding: isMobile ? '4vw 2vw' : '3vw 2vw',
        margin: '3vh 0',
        textAlign: 'left',
        backgroundColor: 'rgba(255, 255, 255, 0.25)',
        backdropFilter: 'blur(10px)',
        width: isMobile ? '90vw' : '60vw',
        borderRadius: '25px',
    }

    return (
        <>
            <ScrollAnimation animateIn="fadeInRight" animateOut="fadeOutLeft">
                <Card style={cardStyle}>
                    <CardMedia
                        component="img"
                        style={cardMediaStyle}
                        image="/flags/uk.webp"
                        alt="Live from space album cover"
                    />

                    <Slider
                        slidesData={[
                            <>
                                <CardContent style={cardContentStyle}>
                                    {/* <Typography component="div" variant="h4">
                                    Benvenuto sul mio sito! Mi chiamo Munni!
                                </Typography> */}
                                    <Typography
                                        variant={isMobile ? 'body1' : 'h5'}
                                        color="text.secondary"
                                        component="span"
                                    >
                                        {description}
                                    </Typography>
                                </CardContent>
                            </>,
                            <>
                                <CardContent style={cardContentStyle}>
                                    <Typography
                                        variant={isMobile ? 'body1' : 'h5'}
                                        color="text.secondary"
                                        component="span"
                                    >
                                        {description2}
                                    </Typography>
                                </CardContent>
                            </>,
                        ]}
                    />
                </Card>
            </ScrollAnimation>
        </>
    )
}
