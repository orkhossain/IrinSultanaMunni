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
} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import PillTab from '../../PillTab'
import '../style.css'
import AppLogo from '../AppLogo'
import { Cancel } from '@mui/icons-material'

const HideAppBar = () => {
  const [drawerOpen, setDrawerOpen] = React.useState(false)

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
            color: 'black',
            display: 'flex',
            flexDirection: isMobile ? 'column' : 'row',
            justifyContent: !isMobile ? 'space-between' : 'flex-end',
          }}
        >
          <ListItemText
            sx={{
              fontSize: isMobile ? '1.5rem' : '1rem',
            }}
          >
            Services
          </ListItemText>
          <ListItemText sx={{ fontSize: isMobile ? '1.5rem' : '1rem' }}>
            Services
          </ListItemText>{' '}
        </List>
      </Box>
    </>
  )

  return (
    <>
      <List
        style={{
          width: '100%',
          color: 'black',
          display: 'flex',
          flexDirection: 'row',
          justifyContent: isMobile ? 'space-between' : 'space-between',
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
        {isMobile && (
          <>
            <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
              <ListItem>
                <IconButton onClick={handleDrawerToggle}>
                  <MenuIcon />
                </IconButton>
              </ListItem>
            </Box>

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
        {!isMobile && drawerItems}
      </List>
    </>
  )
}

export default HideAppBar
