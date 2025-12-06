import React, { useState } from 'react'
import {
    List,
    ListItem,
    ListItemText,
    IconButton,
    Drawer,
    useMediaQuery,
    useTheme,
    ListItemButton,
} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import { useSelector } from 'react-redux'
import { selectDictionary } from '@/slice/language'
import { Cancel } from '@mui/icons-material'
import { useRouter } from 'next/navigation'

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
    const aboutMe = dict.Index?.aboutMe ?? 'About Me'
    const contact = dict.Index?.contact ?? 'Contact'
    const router = useRouter()
    const theme = useTheme()
    const isMobile = useMediaQuery(theme.breakpoints.down('md'))

    const handleDrawerToggle = () => {
        setDrawerOpen(!drawerOpen)
    }

    const handleNavigate = (path: string) => {
        setDrawerOpen(false)
        router.push(path)
    }

    const drawerItems = (
        <List>
            <CustomLink
                onClick={() => handleNavigate('/services')}
                text={service}
            />
            <CustomLink
                onClick={() => handleNavigate('/about')}
                text={aboutMe}
            />
            <CustomLink
                onClick={() => handleNavigate('/contact')}
                text={contact}
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
