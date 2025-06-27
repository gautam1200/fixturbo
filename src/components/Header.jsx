import React, { useEffect, useState } from "react";
import { Box, Drawer, IconButton, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import logo from '../Images/logo-white.svg'

const navItems = ["Home", "About", "Contact", "Services ", " projects", "blog ", "Contact"];

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scroll , setscroll] = useState(false);
  const handleDrawerToggle = () => {
    setMobileOpen((prev) => !prev);
  };

  useEffect(() =>{
    const handleScroll = () => {
      const ofset = window.scrollY;
      setscroll(ofset > 100);
  }
  window.addEventListener('scroll', handleScroll);
  return () => {
    window.removeEventListener('scroll', handleScroll);
  }
},[])
  return (
    <>

      <Box sx={{
        backgroundColor: scroll ? "#000" : 'transparent',
        height: "80px",
      }}>
        <Box
          width="85%"
          mx="auto"
          height="100%"
          display="flex"
          alignItems="center"
          justifyContent="space-between"
        >

          <Box>
            <img src={logo} alt="Logo" />
          </Box>


          <Box
            component="nav"
            sx={{
              display: { xs: "none", md: "block" },
            }}
          >
            <ul
              style={{
                display: "flex",
                listStyle: "none",
                gap: "30px",
                margin: 0,
                padding: 0,
              }}
            >
              {navItems.map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase().replace(/\s/g, "")}`}
                    style={{
                      color: "white",
                      textDecoration: "none",
                      fontWeight: "500",
                      fontSize: "16px",
                      transition: 'all 0.6s'
                    }}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </Box>


          <IconButton
            sx={{ color: "white", display: { xs: "block", md: "none" } }}
            onClick={handleDrawerToggle}
          >
            <MenuIcon />
          </IconButton>
        </Box>
      </Box>


      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        PaperProps={{
          sx: { backgroundColor: "#111", color: "white", width: 250 },
        }}
      >
        <Box p={2}>
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <Typography variant="h6">Menu</Typography>
            <IconButton onClick={handleDrawerToggle} sx={{ color: "white" }}>
              <CloseIcon />
            </IconButton>
          </Box>
          <ul style={{ listStyle: "none", padding: "20px 0", margin: 0 }}>
            {navItems.map((item) => (
              <li key={item} style={{ marginBottom: "15px" }}>
                <a
                  href={`#${item.toLowerCase().replace(/\s/g, "")}`}
                  style={{
                    color: "white",
                    textDecoration: "none",
                    fontSize: "16px",
                    display: "block",
                    padding: "5px 0",
                  }}
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </Box>
      </Drawer>
    </>
  );
};

export default Header;










