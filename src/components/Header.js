import React, { useState, useEffect } from 'react';
import { AppBar, Toolbar, Typography, Button, Container, Box, IconButton, Drawer, List, ListItem, ListItemText } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { NavLink } from 'react-router-dom';
import { auth } from '../firebase'; // Ensure this import is correct

const Header = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user);
    });

    return () => unsubscribe();
  }, []);

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setDrawerOpen(open);
  };

  const drawerList = () => (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        <ListItem button component={NavLink} to="/about">
          <ListItemText primary="About" />
        </ListItem>
        <ListItem button component={NavLink} to="/mentors">
          <ListItemText primary="Mentors" />
        </ListItem>
        <ListItem button component={NavLink} to="/pricing">
          <ListItemText primary="Pricing" />
        </ListItem>
        <ListItem button component={NavLink} to="/contact">
          <ListItemText primary="Contact" />
        </ListItem>
        <ListItem button component={NavLink} to={user ? "/dashboard" : "/login"}>
          <ListItemText primary={user ? "Go to Dashboard" : "Sign In"} />
        </ListItem>
      </List>
    </Box>
  );

  return (
    <>
      <AppBar position="static" sx={{ background: 'rgba(63, 81, 181, 0.7)', backdropFilter: 'blur(10px)' }}>
        <Container maxWidth="lg">
          <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Typography variant="h6" component="div">
              JEE Mentorship
            </Typography>
            <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
              <Button component={NavLink} to="/about" color="inherit" sx={{ mx: 2 }}>
                About
              </Button>
              <Button component={NavLink} to="/mentors" color="inherit" sx={{ mx: 2 }}>
                Mentors
              </Button>
              <Button component={NavLink} to="/pricing" color="inherit" sx={{ mx: 2 }}>
                Pricing
              </Button>
              <Button component={NavLink} to="/contact" color="inherit" sx={{ mx: 2 }}>
                Contact
              </Button>
            </Box>
            <Button
              component={NavLink}
              to={user ? "/dashboard" : "/login"}
              variant="contained"
              color="secondary"
              sx={{
                display: { xs: 'none', md: 'block' },
                backgroundColor: '#ff4081',
                color: 'white',
                '&:hover': {
                  backgroundColor: '#ff79b0'
                }
              }}
            >
              {user ? "Go to Dashboard" : "Sign In"}
            </Button>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="end"
              onClick={toggleDrawer(true)}
              sx={{ display: { xs: 'block', md: 'none' } }}
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </Container>
      </AppBar>
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={toggleDrawer(false)}
      >
        {drawerList()}
      </Drawer>
    </>
  );
};

export default Header;
