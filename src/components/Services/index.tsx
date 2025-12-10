import * as React from 'react'
import {
    Box,
    Card,
    CardContent,
    Typography,
    useMediaQuery,
    useTheme,
} from '@mui/material'
import { selectDictionary } from '@/slice/language'
import { useSelector } from 'react-redux'
import ScrollAnimation from 'react-animate-on-scroll'
import Image from 'next/image'
import Image1 from '@/assets/img1.webp'
import Image2 from '@/assets/img2.webp'

const ServiceCard = ({
    title,
    description,
    imageSrc,
    altText,
    isInverted,
}: any) => {
    const isMobile = useMediaQuery(useTheme().breakpoints.down('md'))

    const titleStyle: React.CSSProperties = {
        margin: 0,
        fontFamily: "'Fancy Cut Pro', 'Cambria', 'Georgia', serif",
        fontWeight: 600,
        fontSize: isMobile ? '28px' : '32px',
        letterSpacing: '-0.01em',
        color: '#3a2a1c',
    }

    const descriptionStyle: React.CSSProperties = {
        fontSize: !isMobile ? '19px' : '17px',
        margin: 0,
        fontFamily: "'Fancy Cut Pro', 'Cambria', 'Georgia', serif",
        color: '#44352a',
        lineHeight: 1.6,
    }

    return (
        <Card
            sx={{
                width: '100%',
                borderRadius: 0,
                m: 0,
                background:
                    'linear-gradient(135deg, rgba(245,237,223,0.96), rgba(234,215,190,0.9))',
                boxShadow: 'none',
                border: '1px solid rgba(145,80,50,0.1)',
            }}
        >
            <CardContent
                sx={{
                    display: 'grid',
                    gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
                    p: 0,
                    gap: 0,
                    alignItems: 'stretch',
                }}
            >
                <Box
                    sx={{
                        order: { xs: 1, md: isInverted ? 2 : 1 },
                        position: 'relative',
                        minHeight: { xs: 260, md: 420 },
                    }}
                >
                    <ScrollAnimation
                        animateOnce={true}
                        animateIn={isInverted ? 'fadeInDown' : 'fadeInDown'}
                        animateOut={isInverted ? 'fadeOutUp' : 'fadeOutUp'}
                    >
                        {imageSrc && (
                            <Box
                                sx={{
                                    position: 'relative',
                                    width: '100%',
                                    height: '100%',
                                    overflow: 'hidden',
                                }}
                            >
                                <Image
                                    src={imageSrc}
                                    alt={altText}
                                    fill
                                    sizes="(max-width: 900px) 100vw, 50vw"
                                    style={{
                                        objectFit: 'cover',
                                        borderRadius: 0,
                                    }}
                                />
                            </Box>
                        )}
                    </ScrollAnimation>
                </Box>

                <Box
                    sx={{
                        order: { xs: 2, md: isInverted ? 1 : 2 },
                        display: 'flex',
                        alignItems: 'center',
                        p: { xs: 3.5, md: 5 },
                        bgcolor: 'rgba(255,255,255,0.78)',
                        height: '100%',
                    }}
                >
                    <ScrollAnimation
                        animateIn="fadeInUp"
                        animateOut="fadeOutDown"
                        animateOnce={true}
                    >
                        <Typography variant="h4" style={titleStyle}>
                            {title}
                        </Typography>
                        <Typography variant="body1" style={descriptionStyle}>
                            {description}
                        </Typography>
                    </ScrollAnimation>
                </Box>
            </CardContent>
        </Card>
    )
}

const ServicesComponent: React.FC = () => {
    const dict = useSelector(selectDictionary)
    const service1 = dict.Index?.service1 ?? ''
    const service2 = dict.Index?.service2 ?? ''
    const mediation = dict.Index?.mediation ?? ''
    const translation = dict.Index?.translation ?? ''
    const isMobile = useMediaQuery(useTheme().breakpoints.down('md'))

    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                width: '100%',
                gap: '0px',
                margin: 0,
                padding: 0,
            }}
        >
            <ServiceCard
                title={service1}
                description={mediation}
                imageSrc={Image1}
                altText="Image1"
            />
            <ServiceCard
                isInverted={!isMobile ? true : false}
                title={service2}
                description={translation}
                imageSrc={Image2}
                altText="Image2"
            />
        </div>
    )
}

export default ServicesComponent
