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

    const containerVariants = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.08,
                delayChildren: 0.15,
                duration: 0.4,
            },
        },
    }

    const itemVariants = {
        hidden: { opacity: 0, y: 24, x: -40 },
        show: {
            opacity: 1,
            y: 0,
            x: 0,
            transition: { duration: 0.6, ease: [0.23, 1, 0.320, 1] },
        },
    }

    const drawerBackdropVariants = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: { duration: 0.3, ease: 'easeOut' },
        },
    }

    const closeButtonVariants = {
        hidden: { opacity: 0, scale: 0.8, rotate: -45 },
        show: {
            opacity: 1,
            scale: 1,
            rotate: 0,
            transition: { duration: 0.4, ease: [0.23, 1, 0.320, 1] },
        },
    }

    const socialIconsVariants = {
        hidden: { opacity: 0, y: 30 },
        show: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, delay: 0.4, ease: [0.23, 1, 0.320, 1] },
        },
    }

    const drawerItems = (
        <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={drawerOpen ? 'show' : 'hidden'}
        >
            <List>
                <motion.div variants={itemVariants}>
                    <CustomLink
                        onClick={() => handleNavigate('/services')}
                        text={service}
                    />
                </motion.div>
                <motion.div variants={itemVariants}>
                    <CustomLink
                        onClick={() => handleNavigate('/about')}
                        text={aboutMe}
                    />
                </motion.div>
                <motion.div variants={itemVariants}>
                    <CustomLink
                        onClick={() => handleNavigate('/contact')}
                        text={contact}
                    />
                </motion.div>
            </List>
        </motion.div>
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
                            <motion.div
                                variants={closeButtonVariants}
                                initial="hidden"
                                animate={drawerOpen ? 'show' : 'hidden'}
                            >
                                <Box
                                    sx={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'flex-end',
                                        mb: 2,
                                        pb: 1,
                                    }}
                                >
                                    <IconButton
                                        onClick={() => setDrawerOpen(false)}
                                        edge="end"
                                        color="inherit"
                                        aria-label="close drawer"
                                        sx={{
                                            p: 0.5,
                                            color: '#111',
                                            transition: 'all 0.3s ease',
                                            '&:hover': { transform: 'scale(1.1)' },
                                        }}
                                    >
                                        <Cancel sx={{ fontSize: 32 }} />
                                    </IconButton>
                                </Box>
                            </motion.div>
                            <Box sx={{ pb: 1.5, flex: 1 }}>{drawerItems}</Box>
                            <motion.div
                                variants={socialIconsVariants}
                                initial="hidden"
                                animate={drawerOpen ? 'show' : 'hidden'}
                            >
                                <Box
                                    sx={{
                                        display: 'flex',
                                        justifyContent: 'flex-start',
                                        gap: 1.5,
                                        pb: 2,
                                        pl: 0,
                                    }}
                                >
                                    <IconButton
                                        component="a"
                                        href="https://www.instagram.com"
                                        target="_blank"
                                        rel="noreferrer"
                                        sx={{
                                            backgroundColor: 'rgba(0,0,0,0.05)',
                                            transition: 'all 0.3s cubic-bezier(0.23, 1, 0.320, 1)',
                                            '&:hover': {
                                                backgroundColor: 'rgba(0,0,0,0.1)',
                                                transform: 'translateY(-4px)',
                                                boxShadow: '0 8px 16px rgba(0,0,0,0.12)',
                                            },
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
                                            backgroundColor: 'rgba(0,0,0,0.05)',
                                            transition: 'all 0.3s cubic-bezier(0.23, 1, 0.320, 1)',
                                            '&:hover': {
                                                backgroundColor: 'rgba(0,0,0,0.1)',
                                                transform: 'translateY(-4px)',
                                                boxShadow: '0 8px 16px rgba(0,0,0,0.12)',
                                            },
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
                                            backgroundColor: 'rgba(0,0,0,0.05)',
                                            transition: 'all 0.3s cubic-bezier(0.23, 1, 0.320, 1)',
                                            '&:hover': {
                                                backgroundColor: 'rgba(0,0,0,0.1)',
                                                transform: 'translateY(-4px)',
                                                boxShadow: '0 8px 16px rgba(0,0,0,0.12)',
                                            },
                                        }}
                                    >
                                        <FacebookIcon />
                                    </IconButton>
                                </Box>
                            </motion.div>
                        </Box>
                    </Drawer>
                </>
            )}
            {/* Other non-mobile layout */}
        </>
    )
}

export default MobileDrawer
