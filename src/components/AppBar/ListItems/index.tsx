import * as React from 'react'
import NextLink from 'next/link'
import {
    List,
    ListItem,
    ListItemText,
    useMediaQuery,
    useTheme,
    Box,
    Link as MuiLink,
} from '@mui/material'
import PillTab from '../PillTab'
import '../style.css'
import AppLogo from '../AppLogo'
import { selectDictionary } from '@/slice/language'
import { useSelector } from 'react-redux'
import MobileDrawer from '../DrawerMenu'
import FadeText from '@/components/FadeText'

const HideAppBar = () => {
    const dict = useSelector(selectDictionary)
    const service = dict.Index?.service ?? ''
    const aboutMe = dict.Index?.aboutMe ?? 'About Me'
    const contact = dict.Index?.contact ?? 'Contact'

    const theme = useTheme()
    const isMobile = useMediaQuery(theme.breakpoints.down('md'))

    const drawerItems = (
        <>
            <Box
                sx={{
                    maxWidth: '20vw',
                    minWidth: '15vw',
                    display: 'flex',
                    alignContent: 'center',
                    alignItems: 'center',
                }}
            >
                <List
                    className="listItem"
                    sx={{
                        color: 'black',
                        fontFamily: "'Fancy Cut Pro', 'Cambria', 'Georgia', serif",
                        display: 'flex',
                        flexDirection: isMobile ? 'column' : 'row',
                        justifyContent: !isMobile
                            ? 'space-between'
                            : 'flex-end',
                        columnGap: { xs: 1.5, md: 3 },
                    }}
                >
                    <ListItemText
                        sx={{
                            fontSize: isMobile ? '1.5rem' : '1rem',
                        }}
                    >
                        <MuiLink
                            sx={{
                                color: 'black',
                                fontFamily:
                                    "'Fancy Cut Pro', 'Cambria', 'Georgia', serif",
                                fontSize: isMobile ? '1.5rem' : '1rem',
                                position: 'relative',
                                pb: '2px',
                                '&:after': {
                                    content: '""',
                                    position: 'absolute',
                                    left: 0,
                                    bottom: 0,
                                    width: '100%',
                                    height: '1px',
                                    backgroundColor: 'black',
                                    transform: 'scaleX(0)',
                                    transformOrigin: 'left center',
                                    transition: 'transform 180ms ease',
                                },
                                '&:hover:after': {
                                    transform: 'scaleX(1)',
                                },
                            }}
                            underline="none"
                            component={NextLink}
                            href="/services"
                        >
                            <FadeText
                                component="span"
                                sx={{
                                    display: 'inline-block',
                                    fontFamily: "'Fancy Cut Pro', 'Cambria', 'Georgia', serif",
                                    fontSize: isMobile ? '1.5rem' : '1rem',
                                    color: 'black',
                                }}
                                fadeKey="nav-service"
                            >
                                {service}
                            </FadeText>
                        </MuiLink>
                    </ListItemText>
                    <ListItemText>
                        <MuiLink
                            sx={{
                                color: 'black',
                                fontFamily:
                                    "'Fancy Cut Pro', 'Cambria', 'Georgia', serif",
                                fontSize: isMobile ? '1.5rem' : '1rem',
                                position: 'relative',
                                pb: '2px',
                                '&:after': {
                                    content: '""',
                                    position: 'absolute',
                                    left: 0,
                                    bottom: 0,
                                    width: '100%',
                                    height: '1px',
                                    backgroundColor: 'black',
                                    transform: 'scaleX(0)',
                                    transformOrigin: 'left center',
                                    transition: 'transform 180ms ease',
                                },
                                '&:hover:after': {
                                    transform: 'scaleX(1)',
                                },
                            }}
                            underline="none"
                            component={NextLink}
                            href="/about"
                        >
                            <FadeText
                                component="span"
                                sx={{
                                    display: 'inline-block',
                                    fontFamily: "'Fancy Cut Pro', 'Cambria', 'Georgia', serif",
                                    fontSize: isMobile ? '1.5rem' : '1rem',
                                    color: 'black',
                                }}
                                fadeKey="nav-about"
                            >
                                {aboutMe}
                            </FadeText>
                        </MuiLink>
                    </ListItemText>
                    <ListItemText>
                        <MuiLink
                            sx={{
                                color: 'black',
                                fontFamily:
                                    "'Fancy Cut Pro', 'Cambria', 'Georgia', serif",
                                fontSize: isMobile ? '1.5rem' : '1rem',
                                position: 'relative',
                                pb: '2px',
                                '&:after': {
                                    content: '""',
                                    position: 'absolute',
                                    left: 0,
                                    bottom: 0,
                                    width: '100%',
                                    height: '1px',
                                    backgroundColor: 'black',
                                    transform: 'scaleX(0)',
                                    transformOrigin: 'left center',
                                    transition: 'transform 180ms ease',
                                },
                                '&:hover:after': {
                                    transform: 'scaleX(1)',
                                },
                            }}
                            underline="none"
                            component={NextLink}
                            href="/contact"
                        >
                            <FadeText
                                component="span"
                                sx={{
                                    display: 'inline-block',
                                    fontFamily: "'Fancy Cut Pro', 'Cambria', 'Georgia', serif",
                                    fontSize: isMobile ? '1.5rem' : '1rem',
                                    color: 'black',
                                }}
                                fadeKey="nav-contact"
                            >
                                {contact}
                            </FadeText>
                        </MuiLink>
                    </ListItemText>
                </List>
            </Box>
        </>
    )

    return (
        <Box
            sx={{
                width: '100%',
                px: { xs: 0, md: 0.75 },
                mt: { xs: -0.25, md: -0.5 },
            }}
        >
            <List
                sx={{
                    width: '100%',
                    color: 'black',
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    gap: { xs: 0.5, md: 1.5 },
                    py: { xs: 0, md: 0.25 },
                }}
            >
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: { xs: 'flex-start', md: 'flex-start' },
                        flex: { xs: 1, md: 1 },
                        minWidth: 0,
                        width: '100%',
                        pl: { xs: 0, md: 6 },
                    }}
                >
                    <ListItem
                        sx={{
                            px: 0,
                            justifyContent: 'flex-start',
                            ml: { xs: -4, md: '10%' },
                        }}
                    >
                        <AppLogo />
                    </ListItem>
                </Box>
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        flex: { xs: 2, md: 1.4 },
                        minWidth: 0,
                        width: '100%',
                        mx: { md: 'auto' },
                    }}
                >
                    <ListItem sx={{ px: { xs: 0.25, md: 0.5 } }}>
                        <PillTab />
                    </ListItem>
                </Box>
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'flex-end',
                        flex: { xs: 1, md: 1 },
                        minWidth: 0,
                        width: '100%',
                        pr: { xs: -2.5, md: 4 },
                    }}
                >
                    {isMobile ? <MobileDrawer /> : drawerItems}
                </Box>
            </List>
        </Box>
    )
}

export default HideAppBar
