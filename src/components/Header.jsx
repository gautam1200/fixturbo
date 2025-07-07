import React, { useEffect, useState } from "react";
import { Box, Button, Dialog, DialogContent, DialogTitle, Drawer, IconButton, TextField, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import logo from '../Images/logo-white.svg';
import { Link } from "react-router-dom";
import ResponsiveDrawer from "./Addmin";


const navItems = ["Home", "About", "Services", "Product", "Contact"];

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scroll, setScroll] = useState(false);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false);
  const [signupOpen, setSignupOpen] = useState(false);

  const openLoginDialog = () => setLoginOpen(true);
  const closeLoginDialog = () => setLoginOpen(false);

  const openSignupDialog = () => {
    setLoginOpen(false);
    setSignupOpen(true);
  };
  const closeSignupDialog = () => setSignupOpen(false);

  const handleDrawerToggle = () => setMobileOpen(prev => !prev);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY
      setScroll(offset > 100);
    }
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* <ResponsiveDrawer /> */}
      <Box
        sx={{
          backgroundColor: scroll ? "#000" : "transparent",
          transition: "background-color 0.3s ease",
          // backgroundColor: "#000",
          height: "80px",
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
        }}>
        <Box width="85%" mx="auto" display="flex" alignItems="center" justifyContent="space-between" height="100%">
          <Box><img src={logo} alt="Logo" /></Box>

          <Box component="nav" sx={{ display: { xs: "none", md: "block" } }}>
            <ul style={{ display: "flex", gap: "30px", alignItems: 'center', listStyle: "none", margin: 0, padding: 0 }}>
              {navItems.map(item => (
                <>
                  <li key={item.trim()}>
                    <Link
                      to={`/${item.toLowerCase().trim()}`}
                      style={{
                        color: "white",
                        textDecoration: "none",
                        fontWeight: 500,
                        fontSize: "16px",
                        transition: 'all 0.6s'
                      }}
                    >
                      {item}
                    </Link>
                  </li>
                </>

              ))}
              <li> <Button
                variant="outlined"
                onClick={openLoginDialog}
                sx={{
                  padding: '5px 15px',
                  fontSize: '16px',
                  border: '2px solid white',
                  borderRadius: '15px',
                  color: 'white',
                  '&:hover': {
                    color: 'white',
                    backgroundColor: 'red',
                    border: '2px solid red'
                  },
                }}
              >
                Login
              </Button></li>
            </ul>
          </Box>
          <Dialog onClose={closeLoginDialog} open={loginOpen}>
            <DialogTitle>
              Login
              <IconButton
                aria-label="close"
                onClick={closeLoginDialog}
                sx={{
                  position: 'absolute',
                  right: 8,
                  top: 8,
                  color: (theme) => theme.palette.grey[500],
                }}
              >
                <CloseIcon />
              </IconButton>
            </DialogTitle>
            <DialogContent dividers>
              <Typography variant="h4" gutterBottom sx={{ color: 'red', fontWeight: 'bold' }}>
                Welcome Back!
              </Typography>
              <Typography variant="subtitle1" sx={{ color: '#616161', mb: 3 }}>
                Welcome to Fixturbo – Log In to Your Account
              </Typography>
              <Box component="form" onSubmit={(e) => e.preventDefault()}>
                <TextField label="Email" type="email" fullWidth margin="normal" required />
                <TextField label="Password" type="password" fullWidth margin="normal" required />
                <Button
                  type="submit"
                  variant="contained"
                  fullWidth
                  sx={{
                    mt: 2,
                    backgroundColor: '#d84848',
                    color: '#fff',
                    '&:hover': {
                      backgroundColor: 'red',
                    },
                  }}
                >
                  Login
                </Button>
              </Box>
              <Typography variant="body2" sx={{ mt: 2 }}>
                New here?{' '}
                <Link href="#" underline="hover" sx={{ color: '#0288D1' }} onClick={openSignupDialog}>
                  Create an account
                </Link>
              </Typography>
            </DialogContent>
          </Dialog>

          {/* Signup Dialog */}
          <Dialog onClose={closeSignupDialog} open={signupOpen}>
            <DialogTitle>
              Sign Up
              <IconButton
                aria-label="close"
                onClick={closeSignupDialog}
                sx={{
                  position: 'absolute',
                  right: 8,
                  top: 8,
                  color: (theme) => theme.palette.grey[500],
                }}
              >
                <CloseIcon />
              </IconButton>
            </DialogTitle>
            <DialogContent dividers>
              <Typography variant="h4" gutterBottom sx={{ color: 'red', fontWeight: 'bold' }}>
                Create Account
              </Typography>
              <Typography variant="subtitle1" sx={{ color: '#616161', mb: 3 }}>
                Surya Solar Customer Portal – Sign In
              </Typography>
              <Box component="form" onSubmit={(e) => e.preventDefault()}>
                <TextField label="Full Name" fullWidth margin="normal" required />
                <TextField label="Email" type="email" fullWidth margin="normal" required />
                <TextField label="Password" type="password" fullWidth margin="normal" required />
                <TextField label="Confirm Password" type="password" fullWidth margin="normal" required />
                <Button
                  variant="contained"
                  fullWidth
                  sx={{
                    mt: 3,
                    backgroundColor: '#d84848',
                    color: '#fff',
                    '&:hover': {
                      backgroundColor: 'red',
                    },
                  }}
                >
                  Sign Up
                </Button>
              </Box>
              <Typography variant="body2" sx={{ mt: 2, color: '#616161' }}>
                Already have an account?{' '}
                <Link
                  href="#"
                  underline="hover"
                  sx={{ color: '#0288D1' }}
                  onClick={() => {
                    closeSignupDialog();
                    openLoginDialog();
                  }}
                >
                  Log in
                </Link>
              </Typography>
            </DialogContent>
          </Dialog>

          <IconButton sx={{ color: "white", display: { xs: "block", md: "none" } }} onClick={handleDrawerToggle}>
            <MenuIcon />
          </IconButton>
        </Box>
      </Box>

      {/* Mobile Drawer */}
      <Drawer anchor="right" open={mobileOpen} onClose={handleDrawerToggle} PaperProps={{ sx: { backgroundColor: "#111", color: "white", width: 250 } }}>
        <Box p={2}>
          <Box display="flex" justifyContent="space-between" alignItems="center">
            <Typography variant="h6">Menu</Typography>
            <IconButton onClick={handleDrawerToggle} sx={{ color: "white" }}><CloseIcon /></IconButton>
          </Box>
          <ul style={{ listStyle: "none", padding: "20px 0", margin: 0 }}>
            {navItems.map(item => (
              <li key={item.trim()} style={{ marginBottom: "15px" }}>
                <Link
                  to={`/${item.toLowerCase().trim()}`}
                  style={{
                    color: "white",
                    textDecoration: "none",
                    fontSize: "16px",
                    display: "block",
                    padding: "5px 0"
                  }}
                  onClick={handleDrawerToggle}
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </Box>
      </Drawer>
    </>
  );
};

export default Header;
