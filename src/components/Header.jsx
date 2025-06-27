import React, { useEffect, useState } from "react";
import { Box, Drawer, IconButton, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import logo from '../Images/logo-white.svg';
import { Link } from "react-router-dom";

const navItems = ["Home", "About", "Contact", "Services", "Projects", "Blog"];

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scroll, setScroll] = useState(false);

  const handleDrawerToggle = () => setMobileOpen(prev => !prev);

  useEffect(() => {
    const handleScroll = () => setScroll(window.scrollY > 100);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <Box sx={{ backgroundColor: scroll ? "#000" : "transparent", height: "80px" }}>
        <Box width="85%" mx="auto" display="flex" alignItems="center" justifyContent="space-between" height="100%">
          <Box><img src={logo} alt="Logo" /></Box>

          <Box component="nav" sx={{ display: { xs: "none", md: "block" } }}>
            <ul style={{ display: "flex", gap: "30px", listStyle: "none", margin: 0, padding: 0 }}>
              {navItems.map(item => (
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
              ))}
            </ul>
          </Box>

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
