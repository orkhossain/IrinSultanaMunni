import React from 'react'
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
import Image1 from 'public/img1.webp'
import Image2 from 'public/img2.webp'

const ServiceCard = ({
    title,
    description,
    imageSrc,
    altText,
    isInverted,
}: any) => {
    const isMobile = useMediaQuery(useTheme().breakpoints.down('sm'))

    const titleStyle: React.CSSProperties = {
        padding: '2vw',
        margin: ' 0 1vw',
        fontFamily: 'Cambria',
    }

    const descriptionStyle: React.CSSProperties = {
        fontSize: '22px',
        margin: ' 0 1vw',
        padding: '0 2vw',
        fontFamily: 'Cambria',
    }

    return (
        <Card
            style={{
                flex: '1',
                width: '100vw',
                height: !isMobile ? '50vh' : '100vh',
                backgroundColor: '#FAF9F6',
            }}
        >
            <CardContent
                sx={{
                    display: 'flex',
                    justifyContent: 'space-evenly',
                    flexDirection: !isMobile ? 'row' : 'column',
                    textAlign: 'start',
                    alignItems: 'center',
                }}
            >
                <>
                    {isInverted ? (
                        <>
                            <Box>
                                <ScrollAnimation
                                    animateIn="fadeInUp"
                                    animateOut="fadeOutDown"
                                >
                                    <Typography variant="h4" style={titleStyle}>
                                        {title}
                                    </Typography>
                                    <Typography
                                        variant="body1"
                                        style={descriptionStyle}
                                    >
                                        {description}
                                    </Typography>
                                </ScrollAnimation>
                            </Box>

                            <Box>
                                <ScrollAnimation
                                    animateIn="fadeInDown"
                                    animateOut="fadeOutUp"
                                >
                                    {imageSrc && (
                                        <Box
                                            sx={{
                                                display: 'flex',
                                                justifyContent: 'center',
                                                alignItems: 'center',
                                            }}
                                        >
                                            <Image
                                                src={imageSrc}
                                                alt={altText}
                                                style={{
                                                    maxHeight: '45vh',
                                                    width: 'auto',
                                                    borderRadius: '25px',
                                                }}
                                            />
                                        </Box>
                                    )}
                                </ScrollAnimation>
                            </Box>
                        </>
                    ) : (
                        <>
                            <Box>
                                <ScrollAnimation
                                    animateIn="fadeInDown"
                                    animateOut="fadeOutUp"
                                >
                                    {imageSrc && (
                                        <Box
                                            sx={{
                                                display: 'flex',
                                                justifyContent: 'center',
                                                alignItems: 'center',
                                            }}
                                        >
                                            <Image
                                                src={imageSrc}
                                                alt={altText}
                                                style={{
                                                    maxHeight: '45vh',
                                                    width: 'auto',
                                                    borderRadius: '25px',
                                                }}
                                            />
                                        </Box>
                                    )}
                                </ScrollAnimation>
                            </Box>

                            <Box>
                                <ScrollAnimation
                                    animateIn="fadeInUp"
                                    animateOut="fadeOutDown"
                                >
                                    <Typography variant="h4" style={titleStyle}>
                                        {title}
                                    </Typography>
                                    <Typography
                                        variant="body1"
                                        style={descriptionStyle}
                                    >
                                        {description}
                                    </Typography>
                                </ScrollAnimation>
                            </Box>
                        </>
                    )}
                </>
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
                height: !isMobile ? '100vh' : '200vh',
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
