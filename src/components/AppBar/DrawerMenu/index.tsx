import React, { useState } from 'react'
import {
    List,
    ListItem,
    ListItemText,
    IconButton,
    Drawer,
    useMediaQuery,
    useTheme,
    Link,
    ListItemButton,
} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import { useSelector } from 'react-redux'
import { selectDictionary } from '@/slice/language'
import { Cancel } from '@mui/icons-material'
import Contact from '@/components/Contact'

const CustomLink = ({
    onClick,
    text,
}: {
    onClick: () => void
    text: string
}) => (
    <ListItem disablePadding>
        <ListItemButton onClick={onClick} component="button">
            <ListItemText
                primaryTypographyProps={{
                    variant: 'h5',
                    textAlign: 'center',
                }}
                primary={text}
            />
        </ListItemButton>
    </ListItem>
)

const MobileDrawer = () => {
    const [drawerOpen, setDrawerOpen] = useState(false)
    const dict = useSelector(selectDictionary)
    const service = dict.Index?.service ?? ''
    const about = dict.Index?.about ?? ''
    const aboutMe = dict.Index?.aboutMe ?? 'About Me'
    const theme = useTheme()
    const isMobile = useMediaQuery(theme.breakpoints.down('md'))

    const handleDrawerToggle = () => {
        setDrawerOpen(!drawerOpen)
    }

    const drawerItems = (
        <List>
            <CustomLink
                onClick={() => {
                    setDrawerOpen(false)
                    window.location.href = '/services'
                }}
                text={service}
            />
            <CustomLink
                onClick={() => {
                    setDrawerOpen(false)
                    window.location.href = '/details'
                }}
                text={about}
            />
            <CustomLink
                onClick={() => {
                    setDrawerOpen(false)
                    window.location.href = '/about'
                }}
                text={aboutMe}
            />
        </List>
    )

    return (
        <>
            {isMobile && (
                <>
                    <IconButton onClick={handleDrawerToggle}>
                        <MenuIcon />
                    </IconButton>
                    <Drawer
                        variant="temporary"
                        open={drawerOpen}
                        anchor="right"
                        style={{ width: '100%', flexShrink: 0 }}
                        classes={{ paper: 'drawerPaper' }}
                    >
                        {drawerItems}
                        <IconButton
                            onClick={() => setDrawerOpen(false)}
                            edge="end"
                            color="inherit"
                            aria-label="close drawer"
                            className="closeIconButton"
                        >
                            <Cancel fontSize="large" />
                        </IconButton>
                    </Drawer>
                </>
            )}
            {/* Other non-mobile layout */}
        </>
    )
}

export default MobileDrawer
