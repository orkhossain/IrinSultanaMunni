import React from 'react'
import { useTheme } from '@mui/material/styles'
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
    const isSmall = useMediaQuery(theme.breakpoints.down('sm'))

    const dict = useSelector(selectDictionary)
    const description = dict.Index?.description ?? ''
    const description2 = dict.Index?.description2 ?? ''

    const cardStyle: React.CSSProperties = {
        display: 'flex',
        flexDirection: isMobile ? 'column' : 'row',
        justifyContent: isMobile ? 'center' : 'space-between',
        alignItems: 'center',
        gap: isMobile ? 16 : 24,
        borderRadius: '28px',
        padding: isMobile ? '18px' : '24px',
        margin: '0 auto',
        maxWidth: '1200px',
        background: 'linear-gradient(135deg, #f6f1e7, #f9f4ea)',
        boxShadow: '0 18px 40px rgba(0,0,0,0.12)',
    }

    const cardMediaStyle: React.CSSProperties = {
        width: isMobile ? '82vw' : '32vw',
        maxWidth: 360,
        height: 'auto',
        margin: isMobile ? '8px auto' : '0',
        borderRadius: '16px',
        objectPosition: 'center',
    }

    const cardContentStyle: React.CSSProperties = {
        display: 'flex',
        padding: isMobile ? '16px 12px' : '20px 18px',
        textAlign: 'left',
        backgroundColor: 'rgba(255, 255, 255, 0.66)',
        backdropFilter: 'blur(10px)',
        width: isMobile ? '100%' : '55%',
        alignContent: 'center',
        borderRadius: '18px',
        justifyContent: 'center',
    }

    return (
        <>
            <ScrollAnimation
                animateIn="fadeInRight"
                animateOut="fadeOutLeft"
                animateOnce={true}
            >
                <Card style={cardStyle}>
                    <CardMedia
                        component="img"
                        style={cardMediaStyle}
                        image="/profile.jpeg"
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
                                        fontSize={isSmall ? '13px' : 'auto'}
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
                                        fontSize={isSmall ? '13px' : 'auto'}
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
