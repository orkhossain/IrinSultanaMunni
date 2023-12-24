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

const CustomLink = ({ href, onClick, text }: any) => (
    <ListItem button component="a" href={href} onClick={onClick}>
        <ListItemText
            primaryTypographyProps={{
                variant: 'h5',
                textAlign: 'center',
            }}
            primary={text}
        />
    </ListItem>
)

const MobileDrawer = () => {
    const [drawerOpen, setDrawerOpen] = useState(false)
    const dict = useSelector(selectDictionary)
    const service = dict.Index?.service ?? ''
    const about = dict.Index?.about ?? ''
    const theme = useTheme()
    const isMobile = useMediaQuery(theme.breakpoints.down('md'))

    const handleDrawerToggle = () => {
        setDrawerOpen(!drawerOpen)
    }

    const handleLinkClick = (sectionId: any) => {
        setDrawerOpen(false)
        const sectionElement = document.getElementById(sectionId)
        if (sectionElement) {
            sectionElement.scrollIntoView({ behavior: 'smooth' })
        }
    }

    const drawerItems = (
        <List>
            <CustomLink
                // href="#service"
                onClick={() => handleLinkClick('service')}
                text={service}
            />
            <CustomLink
                // href="#about"
                onClick={() => handleLinkClick('about')}
                text={about}
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
