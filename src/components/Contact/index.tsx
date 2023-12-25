import React, { useEffect, useState } from 'react'
import {
    Button,
    IconButton,
    Slide,
    useMediaQuery,
    useTheme,
} from '@mui/material'
import MailOutlineIcon from '@mui/icons-material/MailOutline'

const ContactMeChat = () => {
    const handleMailClick = () => {
        window.location.href = 'mailto:irin.munni78@gmail.com'
    }

    const theme = useTheme()
    const isMobile = useMediaQuery(theme.breakpoints.down('md'))
    const [showButton, setShowButton] = useState(false)
    const [prevScrollPos, setPrevScrollPos] = useState(0)
    const [scrollDirection, setScrollDirection] = useState<any>('left') // Track scroll direction

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollPos = window.pageYOffset
            const shouldShow = currentScrollPos > 0 // Show button if scroll position is not at the top
            setShowButton(shouldShow)

            // Determine scroll direction
            setScrollDirection(
                currentScrollPos < prevScrollPos ? 'left' : 'left'
            )

            setPrevScrollPos(currentScrollPos)
        }

        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [prevScrollPos])

    return (
        <>
            {isMobile && (
                <Button
                    variant="contained"
                    style={{ backgroundColor: 'orage', color: 'white' }}
                    endIcon={<MailOutlineIcon />}
                    onClick={handleMailClick}
                >
                    Contact Me
                </Button>
            )}

            {!isMobile && (
                <Slide
                    direction={scrollDirection}
                    in={showButton && Boolean(prevScrollPos)}
                >
                    <IconButton
                        style={{
                            position: 'fixed',
                            bottom: '20px',
                            right: '20px',
                            zIndex: 1000,
                            backgroundColor: 'orange',
                            borderRadius: '50%',
                            width: '60px',
                            height: '60px',
                        }}
                        onClick={handleMailClick}
                    >
                        <MailOutlineIcon fontSize="large" />
                    </IconButton>
                </Slide>
            )}
        </>
    )
}

export default ContactMeChat
