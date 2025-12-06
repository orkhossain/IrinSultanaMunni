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
                        fontFamily: "'Times New Roman', Times, serif",
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
                                fontFamily: "'Times New Roman', Times, serif",
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
                            {service}
                        </MuiLink>
                    </ListItemText>
                    <ListItemText>
                        <MuiLink
                            sx={{
                                color: 'black',
                                fontFamily: "'Times New Roman', Times, serif",
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
                            {aboutMe}
                        </MuiLink>
                    </ListItemText>
                    <ListItemText>
                        <MuiLink
                            sx={{
                                color: 'black',
                                fontFamily: "'Times New Roman', Times, serif",
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
                            {contact}
                        </MuiLink>
                    </ListItemText>
                </List>
            </Box>
        </>
    )

    return (
        <Box sx={{ width: '100%', px: { xs: 1.5, md: 2 } }}>
            <List
                sx={{
                    width: '100%',
                    color: 'black',
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    gap: { xs: 1, md: 2 },
                    py: { xs: 0.5, md: 1 },
                }}
            >
                {!isMobile && (
                    <Box
                        sx={{
                            display: 'flex',
                            justifyContent: 'flex-start',
                            flex: 1,
                            minWidth: 0,
                        }}
                    >
                        <ListItem sx={{ px: 0 }}>
                            <AppLogo />
                        </ListItem>
                    </Box>
                )}
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        flex: 1.6,
                    }}
                >
                    <ListItem sx={{ px: { xs: 0.5, md: 1 } }}>
                        <PillTab />
                    </ListItem>
                </Box>
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'flex-end',
                        flex: 1,
                        minWidth: 0,
                    }}
                >
                    {isMobile ? <MobileDrawer /> : drawerItems}
                </Box>
            </List>
        </Box>
    )
}

export default HideAppBar
