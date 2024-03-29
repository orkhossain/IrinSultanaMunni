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
                        color: isMobile ? 'black' : 'white',
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
                                color: isMobile ? 'black' : 'white',
                                fontSize: isMobile ? '1.5rem' : '1rem',
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
                                color: isMobile ? 'black' : 'white',
                                fontSize: isMobile ? '1.5rem' : '1rem',
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
                    color: 'white',
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: isMobile
                        ? 'space-between'
                        : 'space-between',
                    // alignContent: 'flex-end',
                }}
            >
                {!isMobile && (
                    <Box sx={{ display: 'flex', justifyContent: 'flex-start' }}>
                        <ListItem>
                            <AppLogo />
                        </ListItem>
                    </Box>
                )}
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: isMobile ? 'center' : 'center',
                    }}
                >
                    <ListItem>
                        <PillTab />
                    </ListItem>
                </Box>
                {isMobile && <MobileDrawer />}
                {!isMobile && drawerItems}
            </List>
        </>
    )
}

export default HideAppBar
