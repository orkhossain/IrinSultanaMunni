import React, { useEffect, useState } from 'react'
import {
    Box,
    Button,
    IconButton,
    Slide,
    Typography,
    useMediaQuery,
    useTheme,
} from '@mui/material'
import { useSelector } from 'react-redux'
import { selectDictionary } from '@/slice/language'
import ScrollAnimation from 'react-animate-on-scroll'
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined'
const boxStyles = {
    height: '20vh',
    bgcolor: '#FAF9F6',
    display: 'flex',
    flexDirection: 'row',
    padding: '4vw',
}

const typographyStyles = {
    m: '1vw',
    variant: 'body1',
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'left',
    alignSelf: 'flex-start',
    fontSize: '24px',
    fontStyle: 'italic',
    fontFamily: 'cambria',
    padding: '2vw',
}

const buttonStyles = {
    backgroundColor: '#fff6d1',
    alignSelf: 'center',
    margin: '5vw',
    width: '15vw',
    borderRadius: '15px',
    height: '6vh',
    color: 'black',
    boxShadow: 'rgb(38, 57, 77) 0px 20px 30px -10px;',
}
const ContactMeChat = () => {
    const handleMailClick = () => {
        window.location.href = 'mailto:irin.munni78@gmail.com'
    }

    const theme = useTheme()
    const isMobile = useMediaQuery(theme.breakpoints.down('md'))
    const [showButton, setShowButton] = useState(false)
    const [prevScrollPos, setPrevScrollPos] = useState(0)
    const [scrollDirection, setScrollDirection] = useState<any>('left') // Track scroll direction
    const dict = useSelector(selectDictionary)
    const contact = dict.Index?.contact ?? ''
    const question = dict.Index?.question ?? ''

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
                <Box sx={boxStyles}>
                    <Typography sx={typographyStyles}>{question}</Typography>

                    <IconButton sx={buttonStyles} onClick={handleMailClick}>
                        {/* {contact} */}
                        <EmailOutlinedIcon sx={{ fontSize: '50px' }} />
                    </IconButton>
                </Box>
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
                            backgroundColor: '#fff6d1',
                            borderRadius: '50%',
                            width: '60px',
                            height: '60px',
                            boxShadow: 'rgb(38, 57, 77) 0px 20px 30px -10px;',
                        }}
                        onClick={handleMailClick}
                    >
                        <EmailOutlinedIcon
                            fontSize="large"
                            sx={{ color: 'black' }}
                        />
                    </IconButton>
                </Slide>
            )}
        </>
    )
}

export default ContactMeChat
