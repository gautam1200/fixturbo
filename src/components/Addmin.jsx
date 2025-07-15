import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MiscellaneousServicesIcon from '@mui/icons-material/MiscellaneousServices';
import CollectionsIcon from '@mui/icons-material/Collections';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

import Cart from '../components/Cart';
import Footer from './Herosection';
import Servicess from './Servicess';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';
import Gallery from './Gallery';

const drawerWidth = 240;

function ResponsiveDrawer(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [isClosing, setIsClosing] = React.useState(false);
  const [selectedComponent, setSelectedComponent] = React.useState('home');

  const handleDrawerClose = () => {
    setIsClosing(true);
    setMobileOpen(false);
  };

  const handleDrawerTransitionEnd = () => {
    setIsClosing(false);
  };

  const handleDrawerToggle = () => {
    if (!isClosing) {
      setMobileOpen(!mobileOpen);
    }
  };

  const handleMenuClick = (text) => {
    if (text === 'services') {
      setSelectedComponent('inbox');
    } else if (text === 'Cart') {
      setSelectedComponent('footer');
    } else if (text === 'gallery') {
      setSelectedComponent('gallery');
    } else {
      setSelectedComponent('cart');
    }
    handleDrawerClose();
  };

  const menuItems = ['Cart', 'services','gallery'];

  const drawer = (
    <div>

      <h1>𝐈𝐧𝐭𝐞𝐫𝐯𝐢𝐞𝐰 𝐏𝐨𝐫𝐭𝐚𝐥</h1>
      {/* <Toolbar /> */}
      <Divider />
      <List>
        {menuItems.map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton onClick={() => handleMenuClick(text)}>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon />  : <MiscellaneousServicesIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
     
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  const renderComponent = () => {
    if (selectedComponent === 'inbox') {
      return <Servicess />;
    } else if (selectedComponent === 'footer') {
      return <Cart />;
    } else if (selectedComponent === 'gallery') {
      return <Gallery />;
    } else {
      return (
        console.log("0")
        
      );
    }
  };

  return (
    <Box sx={{ display: 'flex',
      justifyContent:'space-between'
     }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar sx={{
          justifyContent:'space-between'
        }}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Welcome To Admin Panel
          </Typography>
          <Box>
            <Link to="/home" style={{ color: 'black', textDecoration: 'none' }}>
              <Button
                sx={{
                  alignItems: 'center',
                  fontSize: '18px',
                  display: 'flex',
                  background: 'none',
                  border: 'none',
                  padding: '10px 20px',
                  color: 'white',
                  '&:hover': {
                    backgroundColor: 'red',
                    color: 'white',
                    transition: '0.5s',
                  },
                }}>
                Home
              </Button>
            </Link>
          </Box>
        </Toolbar>
      </AppBar>

      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >

        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onTransitionEnd={handleDrawerTransitionEnd}
          onClose={handleDrawerClose}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          slotProps={{ root: { keepMounted: true } }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>

      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 0,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          boxSizing: 'border-box'
        }}
      >

        <Toolbar />
        {renderComponent()}
      </Box>
    </Box>
  );
}

ResponsiveDrawer.propTypes = {
  window: PropTypes.func,
};

export default ResponsiveDrawer;

