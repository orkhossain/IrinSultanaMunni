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
} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import InstagramIcon from '@mui/icons-material/Instagram'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import FacebookIcon from '@mui/icons-material/Facebook'
import { useSelector } from 'react-redux'
import { selectDictionary } from '@/slice/language'
import ClearIcon from '@mui/icons-material/Clear'
import { useRouter } from 'next/navigation'

const CustomLink = ({ onClick, text }: { onClick: () => void; text: string }) => (
    <ListItem disablePadding>
        <ListItemButton
            onClick={onClick}
            component="button"
            sx={{
                borderRadius: '16px',
                px: 3,
                py: 1.75,
                transition: 'transform 220ms ease, background-color 220ms ease, box-shadow 220ms ease, color 220ms ease',
                '&:hover': {
                    backgroundColor: 'rgba(0,0,0,0.06)',
                    boxShadow: '0 10px 30px rgba(0,0,0,0.08)',
                    transform: 'translateX(6px)',
                },
                '&:active': { transform: 'translateX(3px) scale(0.99)' },
            }}
        >
            <ListItemText
                primaryTypographyProps={{
                    textAlign: 'left',
                    fontFamily: "'Fancy Cut Pro', 'Cambria', 'Georgia', serif",
                    fontSize: '1.6rem',
                    letterSpacing: '0.01em',
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
                    <IconButton
                        onClick={handleDrawerToggle}
                        sx={{
                            p: 1.25,
                            '& .MuiSvgIcon-root': { fontSize: 34 },
                        }}
                    >
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
                                    disableRipple
                                    disableFocusRipple
                                    sx={{
                                        p: 0,
                                        color: '#111',
                                        backgroundColor: 'transparent',
                                        '&:hover': {
                                            backgroundColor: 'transparent',
                                            transform: 'scale(1.12)',
                                        },
                                        '& .MuiSvgIcon-root': { fontSize: 60 },
                                        transition: 'transform 180ms ease',
                                    }}
                                >
                                    <ClearIcon />
                                </IconButton>
                            </Box>
                            <Box sx={{ pb: 1.5, flex: 1 }}>{drawerItems}</Box>
                            <Box
                                sx={{
                                    display: 'flex',
                                    justifyContent: 'flex-start',
                                    gap: 1.5,
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
                                        width: 54,
                                        height: 54,
                                        backgroundColor: 'rgba(0,0,0,0.06)',
                                        '&:hover': {
                                            backgroundColor: 'rgba(0,0,0,0.12)',
                                            transform: 'translateY(-2px)',
                                        },
                                        '& .MuiSvgIcon-root': { fontSize: 28 },
                                        transition: 'transform 200ms ease, background-color 200ms ease',
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
                                        width: 54,
                                        height: 54,
                                        backgroundColor: 'rgba(0,0,0,0.06)',
                                        '&:hover': {
                                            backgroundColor: 'rgba(0,0,0,0.12)',
                                            transform: 'translateY(-2px)',
                                        },
                                        '& .MuiSvgIcon-root': { fontSize: 28 },
                                        transition: 'transform 200ms ease, background-color 200ms ease',
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
                                        width: 54,
                                        height: 54,
                                        backgroundColor: 'rgba(0,0,0,0.06)',
                                        '&:hover': {
                                            backgroundColor: 'rgba(0,0,0,0.12)',
                                            transform: 'translateY(-2px)',
                                        },
                                        '& .MuiSvgIcon-root': { fontSize: 28 },
                                        transition: 'transform 200ms ease, background-color 200ms ease',
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
