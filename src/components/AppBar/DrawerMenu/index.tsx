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
    Box,
    Typography,
} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import InstagramIcon from '@mui/icons-material/Instagram'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import FacebookIcon from '@mui/icons-material/Facebook'
import { useSelector } from 'react-redux'
import { selectDictionary } from '@/slice/language'
import { Cancel } from '@mui/icons-material'
import { useRouter } from 'next/navigation'
import { motion } from 'framer-motion'

const CustomLink = ({
    onClick,
    text,
}: {
    onClick: () => void
    text: string
}) => (
    <ListItem disablePadding>
        <ListItemButton
            onClick={onClick}
            component="button"
            sx={{
                borderRadius: '10px',
                px: 2,
                py: 1.25,
            }}
        >
            <ListItemText
                primaryTypographyProps={{
                    variant: 'h5',
                    textAlign: 'left',
                    fontFamily: "'Fancy Cut Pro', 'Cambria', 'Georgia', serif",
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
                        anchor="bottom"
                        style={{ width: '100%', flexShrink: 0 }}
                        PaperProps={{
                            sx: {
                                backgroundColor: 'rgba(255,255,255,0.56)',
                                backdropFilter: 'blur(20px)',
                                borderRadius: 0,
                                border: '1px solid rgba(255,255,255,0.45)',
                                boxShadow: '0 -10px 40px rgba(0,0,0,0.18)',
                                p: 1.5,
                                width: '100vw',
                                maxWidth: '100%',
                                height: '100vh',
                            },
                        }}
                    ModalProps={{
                        BackdropProps: {
                            style: {
                                background: 'rgba(0,0,0,0.2)',
                                backdropFilter: 'blur(4px)',
                            },
                        },
                    }}
                >
                        <Box
                            sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                height: '100%',
                            }}
                        >
                            <Box
                                sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'flex-end',
                                    mb: 1,
                                    pb: 0.5,
                                }}
                            >
                                <IconButton
                                    onClick={() => setDrawerOpen(false)}
                                    edge="end"
                                    color="inherit"
                                    aria-label="close drawer"
                                    sx={{ p: 0, color: '#111' }}
                                >
                                    <Cancel sx={{ fontSize: 36 }} />
                                </IconButton>
                                </Box>
                            <Box sx={{ pb: 1.5, flex: 1 }}>{drawerItems}</Box>
                            <Box
                                sx={{
                                    display: 'flex',
                                    justifyContent: 'flex-start',
                                    gap: 1,
                                    pb: 2,
                                    pl: 0.5,
                                }}
                            >
                                <IconButton
                                    component="a"
                                    href="https://www.instagram.com"
                                    target="_blank"
                                    rel="noreferrer"
                                    sx={{
                                        backgroundColor: 'rgba(0,0,0,0.06)',
                                        '&:hover': { backgroundColor: 'rgba(0,0,0,0.12)' },
                                    }}
                                >
                                    <InstagramIcon />
                                </IconButton>
                                <IconButton
                                    component="a"
                                    href="https://www.linkedin.com"
                                    target="_blank"
                                    rel="noreferrer"
                                    sx={{
                                        backgroundColor: 'rgba(0,0,0,0.06)',
                                        '&:hover': { backgroundColor: 'rgba(0,0,0,0.12)' },
                                    }}
                                >
                                    <LinkedInIcon />
                                </IconButton>
                                <IconButton
                                    component="a"
                                    href="https://www.facebook.com"
                                    target="_blank"
                                    rel="noreferrer"
                                    sx={{
                                        backgroundColor: 'rgba(0,0,0,0.06)',
                                        '&:hover': { backgroundColor: 'rgba(0,0,0,0.12)' },
                                    }}
                                >
                                    <FacebookIcon />
                                </IconButton>
                            </Box>
                        </Box>
                    </Drawer>
                </>
            )}
            {/* Other non-mobile layout */}
        </>
    )
}

export default MobileDrawer
