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
import ClearIcon from '@mui/icons-material/Clear'
import { useRouter } from 'next/navigation'
import { motion } from 'framer-motion'
import Image from 'next/image'
import logo from '@/assets/logo.png'

const CustomLink = ({ onClick, text }: { onClick: () => void; text: string }) => (
    <ListItem disablePadding>
        <ListItemButton
            onClick={onClick}
            component="button"
            sx={{
                borderRadius: '20px',
                px: 4,
                py: 2.25,
                transition:
                    'transform 240ms ease, background-color 240ms ease, box-shadow 240ms ease, color 240ms ease',
                '&:hover, &:focus-visible': {
                    backgroundColor: 'rgba(0,0,0,0.06)',
                    boxShadow: '0 18px 40px rgba(0,0,0,0.12)',
                    transform: 'translateX(10px)',
                    '& .menu-text': {
                        color: '#1f140d',
                        letterSpacing: '0.02em',
                        transform: 'translateX(2px)',
                        textShadow: '0 8px 18px rgba(31,20,13,0.12)',
                    },
                    '& .menu-text::after': {
                        transform: 'scaleX(1)',
                    },
                },
                '@media (hover: none)': {
                    '&:active': {
                        backgroundColor: 'rgba(0,0,0,0.06)',
                        boxShadow: '0 18px 40px rgba(0,0,0,0.12)',
                        transform: 'translateX(10px)',
                        '& .menu-text': {
                            color: '#1f140d',
                            letterSpacing: '0.02em',
                            transform: 'translateX(2px)',
                            textShadow: '0 8px 18px rgba(31,20,13,0.12)',
                        },
                        '& .menu-text::after': {
                            transform: 'scaleX(1)',
                        },
                    },
                },
                '&:active': { transform: 'translateX(5px) scale(0.99)' },
            }}
        >
            <ListItemText
                primaryTypographyProps={{
                    className: 'menu-text',
                    align: 'left',
                    sx: {
                        textAlign: 'left',
                        fontFamily: "'Fancy Cut Pro', 'Cambria', 'Georgia', serif",
                        fontSize: '2.05rem',
                        letterSpacing: '0.014em',
                        position: 'relative',
                        display: 'inline-flex',
                        alignItems: 'center',
                        pb: '4px',
                        transition:
                            'color 220ms ease, letter-spacing 220ms ease, transform 220ms ease, text-shadow 220ms ease',
                        '&::after': {
                            content: '""',
                            position: 'absolute',
                            left: 0,
                            bottom: 0,
                            width: '100%',
                            height: 2,
                            backgroundColor: '#1f140d',
                            transform: 'scaleX(0)',
                            transformOrigin: 'left center',
                            transition: 'transform 220ms ease',
                        },
                    },
                }}
                primary={text}
            />
        </ListItemButton>
    </ListItem>
)

const MobileDrawer = () => {
    const [drawerOpen, setDrawerOpen] = useState(false)
    const easeCurve: [number, number, number, number] = [0.23, 1, 0.32, 1]
    const dict = useSelector(selectDictionary)
    const home = dict.Index?.home ?? 'Home'
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
            transition: { duration: 0.6, ease: easeCurve },
        },
    }

    const closeButtonVariants = {
        hidden: { opacity: 0, scale: 0.8, rotate: -45 },
        show: {
            opacity: 1,
            scale: 1,
            rotate: 0,
            transition: { duration: 0.4, ease: easeCurve },
        },
    }

    const socialIconsVariants = {
        hidden: { opacity: 0, y: 30 },
        show: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, delay: 0.4, ease: easeCurve },
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
                        onClick={() => handleNavigate('/')}
                        text={home}
                    />
                </motion.div>
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
                    <IconButton
                        onClick={handleDrawerToggle}
                        sx={{
                            p: 1.5,
                            color: '#111',
                            '& .MuiSvgIcon-root': { fontSize: 42 },
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
                                backgroundColor: '#f4e9db',
                                backgroundImage:
                                    'linear-gradient(180deg, rgba(0,0,0,0.04) 1px, transparent 1px)',
                                backgroundSize: '100% 52px',
                                backdropFilter: 'blur(10px)',
                                borderRadius: 0,
                                border: '1px solid #e1d1ba',
                                boxShadow: '0 -20px 80px rgba(80,60,32,0.2)',
                                p: { xs: 2, sm: 2.5 },
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
                                        justifyContent: 'space-between',
                                        gap: 2,
                                        mb: 3,
                                        pb: 2,
                                        pr: 0.5,
                                    }}
                                >
                                    <Box
                                        sx={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: 1.75,
                                        }}
                                    >
                                        <Box
                                            sx={{
                                                width: 88,
                                                height: 88,
                                                borderRadius: '20px',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                            }}
                                        >
                                            <Image
                                                src={logo}
                                                alt="Irin Sultana Munni logo"
                                                width={170}
                                                height={170}
                                                style={{
                                                    height: '170px',
                                                    // width: 'auto',
                                                    // objectFit: 'contain',
                                                    // display: 'block',
                                                    margin: -10, }}
                                            />
                                        </Box>
                                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0.25 }}>
                                            <Typography
                                                variant="h4"
                                                sx={{
                                                    fontFamily: "'Fancy Cut Pro', 'Cambria', 'Georgia', serif",
                                                    fontWeight: 200,
                                                    letterSpacing: '-0.01em',
                                                    color: '#22160d',
                                                    fontSize: '1.9rem',
                                                    fontStyle:'italic'
                                                }}
                                            >
                                                Irin Sultana Munni
                                            </Typography>
                                            <Typography
                                                variant="body1"
                                                sx={{
                                                    fontFamily: "'Fancy Cut Pro', 'Cambria', serif",
                                                    color: '#4a382a',
                                                    letterSpacing: '0.03em',
                                                    fontSize: '1.2rem',
                                                }}
                                            >
                                                Language & Culture
                                            </Typography>
                                        </Box>
                                    </Box>
                                    <motion.div whileHover={{ scale: 1.06 }} whileTap={{ scale: 0.95 }}>
                                        <IconButton
                                            onClick={() => setDrawerOpen(false)}
                                            edge="end"
                                            color="inherit"
                                            aria-label="close drawer"
                                            disableRipple
                                            disableFocusRipple
                                            sx={{
                                                width: 64,
                                                height: 64,
                                                p: 1.25,
                                                backgroundColor: 'transparent',
                                                borderRadius: '18px',
                                                transition:
                                                    'transform 0.28s cubic-bezier(0.23, 1, 0.320, 1)',
                                                '&:hover': {
                                                    backgroundColor: 'transparent',
                                                    transform: 'scale(1.08)',
                                                },
                                                '& .MuiSvgIcon-root': { fontSize: 42 },
                                                color: '#13100d',
                                            }}
                                        >
                                            <ClearIcon />
                                        </IconButton>
                                    </motion.div>
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
                                            width: 64,
                                            height: 64,
                                            backgroundColor: 'rgba(0,0,0,0.05)',
                                            transition:
                                                'all 0.3s cubic-bezier(0.23, 1, 0.320, 1)',
                                            '&:hover': {
                                                backgroundColor:
                                                    'rgba(0,0,0,0.1)',
                                                transform: 'translateY(-4px)',
                                                boxShadow:
                                                    '0 8px 16px rgba(0,0,0,0.12)',
                                            },
                                            '& .MuiSvgIcon-root': { fontSize: 32 },
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
                                            width: 64,
                                            height: 64,
                                            backgroundColor: 'rgba(0,0,0,0.05)',
                                            transition:
                                                'all 0.3s cubic-bezier(0.23, 1, 0.320, 1)',
                                            '&:hover': {
                                                backgroundColor:
                                                    'rgba(0,0,0,0.1)',
                                                transform: 'translateY(-4px)',
                                                boxShadow:
                                                    '0 8px 16px rgba(0,0,0,0.12)',
                                            },
                                            '& .MuiSvgIcon-root': { fontSize: 32 },
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
                                            width: 64,
                                            height: 64,
                                            backgroundColor: 'rgba(0,0,0,0.05)',
                                            transition:
                                                'all 0.3s cubic-bezier(0.23, 1, 0.320, 1)',
                                            '&:hover': {
                                                backgroundColor:
                                                    'rgba(0,0,0,0.1)',
                                                transform: 'translateY(-4px)',
                                                boxShadow:
                                                    '0 8px 16px rgba(0,0,0,0.12)',
                                            },
                                            '& .MuiSvgIcon-root': { fontSize: 32 },
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
