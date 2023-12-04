import { useState } from 'react';
import { AppBar, Toolbar, Typography, List, ListItem, ListItemText, IconButton,Slide} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import './style.css'; // Import CSS for custom styles

interface Props {
  window?: () => Window;
  children: React.ReactElement;
}

function HideOnScroll(props: Props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

export default function HideAppBar(props: Props) {
  const [hovered, setHovered] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const handleDarkModeToggle = () => {
    setDarkMode(!darkMode);
  };

  return (
    <>
      <HideOnScroll {...props}>
        <AppBar position="fixed" style={{ backgroundColor: 'transparent', boxShadow: 'none' }}>
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              <span
                className={`logo-text ${hovered ? 'grow' : ''}`}
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
              >
                {hovered ? 'Irin Sultana Munni' : 'Irin'}
              </span>
            </Typography>
            <List sx={{ display: 'flex', flexDirection: 'row', gap: '20px', alignItems: 'center' }}>
              <ListItem button>
                <ListItemText primary="Home" />
              </ListItem>
              <ListItem button>
                <ListItemText primary="Mediazioni" />
              </ListItem>
              {/* Add more ListItems for additional links */}
              <ListItem>
                <IconButton onClick={handleDarkModeToggle}>
                  {darkMode ? <Brightness4Icon sx={{ color: 'grey' }} /> : <Brightness7Icon sx={{ color: 'white' }} />}
                </IconButton>
              </ListItem>
            </List>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
      <Toolbar />
    </>
  );
}
