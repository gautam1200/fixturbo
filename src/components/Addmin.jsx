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
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

import Cart from '../components/Cart'; 
import Footer from './Herosection';    
import Servicess from './Servicess';

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
    } else {
      setSelectedComponent('cart');
    }
    handleDrawerClose();
  };

  const menuItems = ['Cart', 'services', 'Send email', 'Drafts'];

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
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {['All mail', 'Trash', 'Spam'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton onClick={() => handleMenuClick(text)}>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  const renderComponent = () => {
    if (selectedComponent === 'inbox') {
      return <Servicess />;
    } else if (selectedComponent === 'footer') {
      return <Cart />;
    } else {
      return (
        <Typography sx={{ marginBottom: 2 }}>
          Welcome to the dashboard!
        </Typography>
      );
    }
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
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
          boxSizing:'border-box'
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



// https://interview-pannel.vercel.app/



// import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import { Formik, Form} from 'formik';
// import { TextField, Typography, Button, Box, Card } from '@mui/material';
// import axios from 'axios';

// const Adminpenal = () => {
//   const navigate = useNavigate();

//   const handleSubmit = async (values, actions) => {
//     try {
//       await axios.post('https://interviewback-ucb4.onrender.com/admin/login', values);
//       console.log('success');
//       actions.resetForm();
//       navigate('/home');
//     } catch (err) {
//       console.error('error', err);
//       actions.setSubmitting(false);
//     }
//   };

//   // https://generateapi.onrender.com/api/addmin
//   return (
//     <Box >
//       <Card >
//         <Box>
//           <Typography variant="h4" color="#0288d1" fontWeight="700">
//             Admin Panel
//           </Typography>

//           <Formik
//             initialValues={{ email: '', password: '' }}
//             onSubmit={handleSubmit}
//           >
//             {({ values, handleChange, isSubmitting }) => (
//               <Form>
//                 <Box display="flex" flexDirection="column" alignItems="center">
//                   <TextField
//                     name="email"
//                     placeholder="email"
//                     value={values.email}
//                     onChange={handleChange}
//                     fullWidth
//                     sx={{ maxWidth: 330 }}
//                   />
//                   <TextField
//                     name="password"
//                     type="password"
//                     placeholder="password"
//                     value={values.password}
//                     onChange={handleChange}
//                     fullWidth
//                     sx={{ maxWidth: 330, mt: 2 }}
//                   />
//                   <Button
//                     type='submit'
//                     variant="contained"
//                     sx={{
//                       background: 'linear-gradient(135deg, #4fc3f7 0%, #0288d1 100%)',
//                       color: "white",
//                       width: { lg: 330, md: 330, sm: 330, xs: 200 },
//                       fontWeight: '600'
//                     }}
//                   >
//                     Submit
//                   </Button>
//                 </Box>
//               </Form>
//             )}
//           </Formik>
//         </Box>
//       </Card>
//     </Box>
//   );
// };

// export default Adminpenal;
