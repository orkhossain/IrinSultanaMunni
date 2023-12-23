import React, { useEffect } from 'react'
import {
    Card,
    CardContent,
    Typography,
    useMediaQuery,
    useTheme,
} from '@mui/material'
import { selectDictionary } from '@/slice/language'
import { useSelector } from 'react-redux'
import TranslateIcon from '@mui/icons-material/Translate'
import ScrollAnimation from 'react-animate-on-scroll'

const ServicesComponent: React.FC = () => {
    const dict = useSelector(selectDictionary)
    const service1 = dict.Index?.service1 ?? ''
    const service2 = dict.Index?.service2 ?? ''
    const mediation = dict.Index?.mediation ?? ''
    const translation = dict.Index?.translation ?? ''

    const theme = useTheme()
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'))

    const handleHover = (e: React.MouseEvent<HTMLDivElement>) => {
        const card = e.currentTarget
        card.style.opacity = '0.7'
    }

    const handleHoverExit = (e: React.MouseEvent<HTMLDivElement>) => {
        const card = e.currentTarget
        card.style.opacity = '1'
    }

    const containerStyle: React.CSSProperties = {
        display: 'flex',
        flexDirection: 'column', // Initially display cards side by side
        height: '100vh',
    }

    const cardStyle: React.CSSProperties = {
        padding: '5vh 5vh 5vh 5vh',
        flex: '1',
        width: '100vw', // Each card takes half or full width based on screen size
    }

    const titleStyle: React.CSSProperties = {
        marginBottom: '8px',
    }

    const descriptionStyle: React.CSSProperties = {
        fontSize: '14px',
    }

    return (
        <div style={containerStyle}>
            <Card
                style={cardStyle}
                onMouseEnter={handleHover}
                onMouseLeave={handleHoverExit}
            >
                <CardContent>
                    <ScrollAnimation
                        animateIn="fadeInUpBig"
                        animateOut="fadeOutUpBig"
                        animateOnce={true}
                    >
                        <Typography variant="h4" style={titleStyle}>
                            {service1}
                        </Typography>
                        <Typography variant="body1" style={descriptionStyle}>
                            {mediation}
                        </Typography>
                    </ScrollAnimation>
                </CardContent>
            </Card>
            <Card
                style={cardStyle}
                onMouseEnter={handleHover}
                onMouseLeave={handleHoverExit}
            >
                <CardContent>
                    <ScrollAnimation
                        animateIn="fadeInUpBig"
                        animateOut="fadeOutUpBig"
                        animateOnce={true}
                    >
                        <Typography variant="h4" style={titleStyle}>
                            {service2}
                        </Typography>
                        <Typography variant="body1" style={descriptionStyle}>
                            {translation}
                        </Typography>
                    </ScrollAnimation>
                </CardContent>
            </Card>
        </div>
    )
}

export default ServicesComponent
