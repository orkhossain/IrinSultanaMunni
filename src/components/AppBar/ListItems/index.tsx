import * as React from 'react'
import {
    List,
    ListItem,
    ListItemText,
    IconButton,
    Drawer,
    useMediaQuery,
    useTheme,
    Box,
    Link,
} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import PillTab from '../PillTab'
import '../style.css'
import AppLogo from '../AppLogo'
import { Cancel } from '@mui/icons-material'
import { selectDictionary } from '@/slice/language'
import { useSelector } from 'react-redux'
import MobileDrawer from '../DrawerMenu'

const HideAppBar = () => {
    const [drawerOpen, setDrawerOpen] = React.useState(false)
    const dict = useSelector(selectDictionary)
    const service = dict.Index?.service ?? ''
    const about = dict.Index?.about ?? ''

    const theme = useTheme()
    const isMobile = useMediaQuery(theme.breakpoints.down('md'))

    const handleDrawerToggle = () => {
        setDrawerOpen(!drawerOpen)
    }

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
                    }}
                >
                    <ListItemText
                        sx={{
                            fontSize: isMobile ? '1.5rem' : '1rem',
                        }}
                    >
                        <Link
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
                            href="#service"
                        >
                            {service}
                        </Link>
                    </ListItemText>
                    <ListItemText>
                        <Link
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
                            href="#about"
                        >
                            {about}
                        </Link>
                    </ListItemText>
                </List>
            </Box>
        </>
    )

    return (
        <>
            <List
                style={{
                    width: '100%',
                    color: 'black',
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
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
                        <ListItem>
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
                    <ListItem>
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
        </>
    )
}

export default HideAppBar
