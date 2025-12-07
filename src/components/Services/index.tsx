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
        fontFamily: 'Cambria',
        fontWeight: 600,
        fontSize: isMobile ? '28px' : '32px',
        letterSpacing: '-0.01em',
        color: '#3a2a1c',
    }

    const descriptionStyle: React.CSSProperties = {
        fontSize: !isMobile ? '19px' : '17px',
        margin: 0,
        fontFamily: 'Cambria',
        color: '#44352a',
        lineHeight: 1.6,
    }

    const attributionStyle: React.CSSProperties = {
        fontSize: '11px',
        textAlign: isInverted ? 'right' : 'left',
        marginTop: '8px',
        fontFamily: 'Cambria',
        color: '#6b5643',
    }

    return (
        <Card
            style={{
                flex: '1',
                width: '100%',
                maxWidth: '1100px',
                margin: '0 auto',
                background: 'linear-gradient(135deg, rgba(245,237,223,0.96), rgba(234,215,190,0.9))',
                borderRadius: '32px',
                boxShadow: '0 24px 54px rgba(38,29,20,0.12)',
                border: '1px solid rgba(145,80,50,0.12)',
            }}
        >
            <CardContent
                sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    gap: { xs: 2.5, md: 5 },
                    flexDirection: !isMobile ? 'row' : 'column',
                    textAlign: 'start',
                    alignItems: 'center',
                    p: { xs: 3, md: 4.5 },
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
                                                width: '100%',
                                            }}
                                        >
                                            <div style={{ position: 'relative' }}>
                                                <Image
                                                    src={imageSrc}
                                                    alt={altText}
                                                    style={{
                                                        maxHeight: !isMobile ? '36vh' : '30vh',
                                                        width: 'auto',
                                                        borderRadius: '22px',
                                                        boxShadow: '0 18px 36px rgba(38,29,20,0.18)',
                                                    }}
                                                />
                                                <div style={attributionStyle}>
                                                    <a href="https://www.freepik.com/free-vector/ethnicity-abstract-concept-vector-illustration-ethnic-group-common-language-ancestry-history-cultural-heritage-national-cuisine-social-difference-human-rights-abstract-metaphor_11668221.htm#query=vectorjuice&position=9&from_view=search&track=sph&uuid=cf2f10ff-8809-4534-b9d1-dfff372479e2">
                                                        Image by vectorjuice on Freepik
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
                                        <Typography variant="body1" style={descriptionStyle}>
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
                gap: '32px',
                maxWidth: '1280px',
                margin: '0 auto',
                padding: '32px 16px 56px',
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
