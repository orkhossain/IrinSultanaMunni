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
        padding: '2vw',
        margin: ' 0 1vw',
        fontFamily: 'Cambria',
    }

    const descriptionStyle: React.CSSProperties = {
        fontSize: !isMobile ? '22px' : '18px',
        margin: ' 0 1vw',
        padding: '0 2vw',
        fontFamily: 'Cambria',
    }

    const attributionStyle: React.CSSProperties = {
        fontSize: '10px', // Adjust the font size as needed
        textAlign: isInverted ? 'right' : 'left', // Adjust alignment based on card orientation
        margin: '0 1vw',
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
                                    animateOnce={true}
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
                                    animateOnce={true}
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
                                            <div
                                                style={{ position: 'relative' }}
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
                                                <div style={attributionStyle}>
                                                    <a href="https://www.freepik.com/free-vector/ethnicity-abstract-concept-vector-illustration-ethnic-group-common-language-ancestry-history-cultural-heritage-national-cuisine-social-difference-human-rights-abstract-metaphor_11668221.htm#query=vectorjuice&position=9&from_view=search&track=sph&uuid=cf2f10ff-8809-4534-b9d1-dfff372479e2">
                                                        Image by vectorjuice on
                                                        Freepik
                                                    </a>
                                                </div>
                                            </div>
                                        </Box>
                                    )}
                                </ScrollAnimation>
                            </Box>
                        </>
                    ) : (
                        <>
                            <Box>
                                <ScrollAnimation
                                    animateOnce={true}
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
                                            <div
                                                style={{ position: 'relative' }}
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
                                                <div style={attributionStyle}>
                                                    <a href="https://www.freepik.com/free-vector/mediation-flat-isometric-business-conflict_12259040.htm#query=mediation&position=3&from_view=search&track=sph&uuid=5ecce42a-e8ca-4593-8204-02d995bd6a68">
                                                        Image by sentavio on
                                                        Freepik
                                                    </a>
                                                </div>
                                            </div>
                                        </Box>
                                    )}
                                </ScrollAnimation>
                            </Box>

                            <Box>
                                <ScrollAnimation
                                    animateIn="fadeInUp"
                                    animateOut="fadeOutDown"
                                    animateOnce={true}
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
