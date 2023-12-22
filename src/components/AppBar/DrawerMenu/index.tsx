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
  Slide,
  Typography,
} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import CloseIcon from '@mui/icons-material/Close'
import PillTab from '../../PillTab'
import '../style.css'
import ModeToggle from '../ModeToggle'
import AppLogo from '../AppLogo'

const ListItemContent = ({ text, fontSize }: any) => (
  <ListItem button>
    <ListItemText
      primary={text}
      primaryTypographyProps={{
        variant: 'h6',
        textAlign: 'center',
        fontSize,
      }}
    />
  </ListItem>
)

const HideAppBar = () => {
  const [drawerOpen, setDrawerOpen] = React.useState(false)
  const [hovered, setHovered] = React.useState(false)

  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('md'))

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen)
  }

  const drawerItems = (
    <>
      <PillTab />
      <List className="listItem">
        <ListItemContent
          text="Item 1"
          fontSize={isMobile ? '1.5rem' : '1rem'}
        />
        <ListItemContent
          text="Item 2"
          fontSize={isMobile ? '1.5rem' : '1rem'}
        />
      </List>
    </>
  )

  return (
    <>
      {isMobile ? <ModeToggle /> : <AppLogo />}
      <List
        style={{
          color: 'black',
          display: 'flex',
          flexDirection: isMobile ? 'column' : 'row',
          gap: '20px',
          alignItems: isMobile ? 'flex-start' : 'center',
          justifyContent: 'space-between',
        }}
      >
        {isMobile && (
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
                <CloseIcon fontSize="large" />
              </IconButton>
            </Drawer>
          </>
        )}
        {!isMobile && drawerItems}
      </List>
    </>
  )
}

export default HideAppBar
