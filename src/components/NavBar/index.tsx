import * as React from 'react'
import {
  AppBar,
  Toolbar,
  Typography,
  List,
  ListItem,
  ListItemText,
  IconButton,
  Slide,
  Drawer,
  useMediaQuery,
  useTheme,
  Grow,
} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import Brightness4Icon from '@mui/icons-material/Brightness4'
import Brightness7Icon from '@mui/icons-material/Brightness7'
import useScrollTrigger from '@mui/material/useScrollTrigger'
import CloseIcon from '@mui/icons-material/Close'
import './style.css' // Import CSS for custom styles
import { Box } from '@mui/system'

interface Props {
  window?: () => Window
  children?: React.ReactElement
}

function HideOnScroll(props: Props) {
  const { children, window } = props
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  })

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children!}
    </Slide>
  )
}

export default function HideAppBar(props: Props) {
  const [hovered, setHovered] = React.useState(false)
  const [darkMode, setDarkMode] = React.useState(false)
  const [drawerOpen, setDrawerOpen] = React.useState(false)
  const containerRef = React.useRef<HTMLElement>(null)

  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'))

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen)
  }

  const handleDarkModeToggle = () => {
    setDarkMode(!darkMode)
  }

  return (
    <header>
      <HideOnScroll {...props}>
        <AppBar
          position="fixed"
          style={{
            backgroundColor: 'transparent',
            boxShadow: 'none',
          }}
        >
          <Toolbar
            sx={{ justifyContent: 'space-between' }}
            className="frosted-glass"
          >
            {isMobile ? (
              <IconButton onClick={handleDarkModeToggle}>
                {darkMode ? (
                  <Brightness4Icon sx={{ color: 'black' }} />
                ) : (
                  <Brightness7Icon sx={{ color: 'grey' }} />
                )}
              </IconButton>
            ) : (
              <Box
                width={'auto'}
                display={'flex'}
                justifyContent={'space-between'}
                ref={containerRef}
              >
                <Typography
                  color="black"
                  variant="h4"
                  component="div"
                  sx={{ flexGrow: 1 }}
                >
                  <span
                    onMouseEnter={() => setHovered(true)}
                    onMouseLeave={() => setHovered(false)}
                  >
                    Irin
                  </span>
                </Typography>
                <Slide
                  direction="right"
                  container={containerRef.current}
                  in={hovered}
                  style={{ zIndex: -1 }}
                >
                  <Typography
                    color="black"
                    variant="h4"
                    component="div"
                    sx={{ flexGrow: 1, marginLeft: 1 }}
                  >
                    <span> Sultana Munni</span>
                  </Typography>
                </Slide>
              </Box>
            )}

            <List
              sx={{
                color: 'black',
                display: 'flex',
                flexDirection: isMobile ? 'column' : 'row',
                gap: '20px',
                alignItems: isMobile ? 'flex-start' : 'center',
              }}
            >
              {isMobile ? (
                <>
                  <ListItem>
                    <IconButton onClick={handleDrawerToggle}>
                      <MenuIcon />
                    </IconButton>
                  </ListItem>
                  <Drawer
                    variant="temporary"
                    open={drawerOpen}
                    anchor="right"
                    sx={{
                      width: '100%',
                      flexShrink: 0,
                      '& .MuiDrawer-paper': {
                        width: '100%',
                        boxSizing: 'border-box',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'flex-start',
                        padding: '20px',
                      },
                    }}
                  >
                    <List sx={{ width: '100%', paddingTop: '4rem' }}>
                      <ListItem button>
                        <ListItemText
                          primary="Item 1"
                          primaryTypographyProps={{
                            variant: 'h6',
                            textAlign: 'center',
                            fontSize: '1.5rem',
                          }}
                        />
                      </ListItem>
                      <ListItem button>
                        <ListItemText
                          primary="Item 2"
                          primaryTypographyProps={{
                            variant: 'h6',
                            textAlign: 'center',
                            fontSize: '1.5rem',
                          }}
                        />
                      </ListItem>
                      {/* Add more list items with enlarged and centered text */}
                    </List>
                    <IconButton
                      onClick={() => setDrawerOpen(false)}
                      edge="end"
                      color="inherit"
                      aria-label="close drawer"
                      sx={{
                        position: 'absolute',
                        top: '20px',
                        right: '20px',
                        height: '20px',
                      }}
                    >
                      <CloseIcon fontSize={'large'} />
                    </IconButton>
                  </Drawer>
                </>
              ) : (
                <>
                  <ListItem>
                    <ListItemText
                      primary="Item 1"
                      primaryTypographyProps={{
                        variant: 'h6',
                        textAlign: 'center',
                        fontSize: '1rem',
                      }}
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemText
                      primary="Item 2"
                      primaryTypographyProps={{
                        variant: 'h6',
                        textAlign: 'center',
                        fontSize: '1rem',
                      }}
                    />
                  </ListItem>
                </>
              )}
            </List>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
      <Toolbar />
    </header>
  )
}
