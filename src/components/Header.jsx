import React, { useEffect, useState } from "react";
import {
  Box, Button, Dialog, DialogContent, DialogTitle, Drawer,
  IconButton, TextField, Typography
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import logo from "../Images/logo-white.svg";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { Formik, Form, Field } from "formik";

const navItems = ["Home", "About", "Services", "Product", "Contact"];

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scroll, setScroll] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false);
  const [signupOpen, setSignupOpen] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => setScroll(window.scrollY > 100);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSubmit = async (values, actions) => {
    try {
      const res = await axios.post(
        "https://interviewback-ucb4.onrender.com/admin/login",
        values
      );
      console.log("success", res.data);
      actions.resetForm();
      navigate("/adminpenal");
    } catch (err) {
      console.error("error", err);
      actions.setSubmitting(false);
      navigate("/home");
    }
  };

  return (
    <>
      <Box
        sx={{
          backgroundColor: scroll ? "#000" : "transparent",
          transition: "background-color 0.3s ease",
          height: "80px",
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
        }}
      >
        <Box
          width="85%"
          mx="auto"
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          height="100%"
        >
          <Box>
            <img src={logo} alt="Logo" />
          </Box>
          <Box component="nav" sx={{ display: { xs: "none", md: "block" } }}>
            <ul
              style={{
                display: "flex",
                gap: "30px",
                alignItems: "center",
                listStyle: "none",
                margin: 0,
                padding: 0,
              }}
            >
              {navItems.map((item) => (
                <li key={item}>
                  <Link
                    to={`/${item.toLowerCase()}`}
                    style={{
                      color: "white",
                      textDecoration: "none",
                      fontWeight: 500,
                      fontSize: "16px",
                      transition: "all 0.6s",
                    }}
                  >
                    {item}
                  </Link>
                </li>
              ))}
              <li>
                <Button
                  variant="outlined"
                  onClick={() => setLoginOpen(true)}
                  sx={{
                    padding: "5px 15px",
                    fontSize: "16px",
                    border: "2px solid white",
                    borderRadius: "15px",
                    color: "white",
                    "&:hover": {
                      color: "white",
                      backgroundColor: "red",
                      border: "2px solid red",
                    },
                  }}
                >
                  Login
                </Button>
              </li>
            </ul>
          </Box>
          <IconButton
            sx={{ color: "white", display: { xs: "block", md: "none" } }}
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            <MenuIcon />
          </IconButton>
        </Box>
      </Box>

      {/* Login Dialog */}
      <Dialog open={loginOpen} onClose={() => setLoginOpen(false)}>
        <DialogTitle>
          Login
          <IconButton
            aria-label="close"
            onClick={() => setLoginOpen(false)}
            sx={{
              position: "absolute",
              right: 8,
              top: 8,
              color: (theme) => theme.palette.grey[500],
            }}
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent dividers>
          <Typography variant="h4" gutterBottom sx={{ color: "red", fontWeight: "bold" }}>
            Welcome Back!
          </Typography>
          <Typography variant="subtitle1" sx={{ color: "#616161", mb: 3 }}>
            Welcome to Fixturbo – Log In to Your Account
          </Typography>
          <Formik initialValues={{ email: "", password: "" }} onSubmit={handleSubmit}>
            {({ isSubmitting }) => (
              <Form>
                <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", mt: 2 }}>
                  <Field
                    as={TextField}
                    name="email"
                    placeholder="Email"
                    fullWidth
                    sx={{ maxWidth: 330 }}
                  />
                  <Field
                    as={TextField}
                    type="password"
                    name="password"
                    placeholder="Password"
                    fullWidth
                    sx={{ maxWidth: 330, mt: 2 }}
                  />
                  <Button
                    type="submit"
                    variant="contained"
                    disabled={isSubmitting}
                    sx={{
                      mt: 2,
                      width: { xs: 200, sm: 330 },
                      background: "linear-gradient(135deg,rgb(247, 79, 79) 0%,rgb(209, 2, 2) 100%)",
                      fontWeight: 600,
                    }}
                  >
                    {isSubmitting ? "Submitting..." : "Submit"}
                  </Button>
                </Box>
              </Form>
            )}
          </Formik>
          <Typography variant="body2" sx={{ mt: 2 }}>
            New here?{" "}
            <Link
              component="button"
              variant="body2"
              onClick={() => {
                setLoginOpen(false);
                setSignupOpen(true);
              }}
            >
              Create an account
            </Link>
          </Typography>
        </DialogContent>
      </Dialog>

      {/* Signup Dialog */}
      <Dialog open={signupOpen} onClose={() => setSignupOpen(false)}>
        <DialogTitle>
          Sign Up
          <IconButton
            aria-label="close"
            onClick={() => setSignupOpen(false)}
            sx={{
              position: "absolute",
              right: 8,
              top: 8,
              color: (theme) => theme.palette.grey[500],
            }}
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent dividers>
          <Typography variant="h4" gutterBottom sx={{ color: "red", fontWeight: "bold" }}>
            Create Account
          </Typography>
          <Typography variant="subtitle1" sx={{ color: "#616161", mb: 3 }}>
           Fixturbo Customer Portal – Sign In
          </Typography>
          <Box
            component="form"
            onSubmit={(e) => {
              e.preventDefault();
              setSignupOpen(false);
            }}
          >
            <TextField label="Full Name" fullWidth margin="normal" required />
            <TextField label="Email" type="email" fullWidth margin="normal" required />
            <TextField label="Password" type="password" fullWidth margin="normal" required />
            <TextField
              label="Confirm Password"
              type="password"
              fullWidth
              margin="normal"
              required
            />
            <Button
              type="submit"
              variant="contained"
              fullWidth
              sx={{
                mt: 3,
                backgroundColor: "#d84848",
                color: "#fff",
                "&:hover": { backgroundColor: "red" },
              }}
            >
              Sign Up
            </Button>
          </Box>
          <Typography variant="body2" sx={{ mt: 2, color: "#616161" }}>
            Already have an account?{" "}
            <Link
              component="button"
              variant="body2"
              onClick={() => {
                setSignupOpen(false);
                setLoginOpen(true);
              }}
            >
              Log in
            </Link>
          </Typography>
        </DialogContent>
      </Dialog>

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        PaperProps={{ sx: { backgroundColor: "#111", color: "white", width: 250 } }}
      >
        <Box p={2}>
          <Box display="flex" justifyContent="space-between" alignItems="center">
            <Typography variant="h6">Menu</Typography>
            <IconButton onClick={() => setMobileOpen(false)} sx={{ color: "white" }}>
              <CloseIcon />
            </IconButton>
          </Box>
          <ul style={{ listStyle: "none", padding: "20px 0", margin: 0 }}>
            {navItems.map((item) => (
              <li key={item} style={{ marginBottom: "15px" }}>
                <Link
                  to={`/${item.toLowerCase()}`}
                  style={{
                    color: "white",
                    textDecoration: "none",
                    fontSize: "16px",
                    display: "block",
                    padding: "5px 0",
                  }}
                  onClick={() => setMobileOpen(false)}
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
