import React, { useEffect, useState } from 'react';
import { AppBar, Toolbar, IconButton, Typography, Box } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useTheme } from '@mui/material/styles';
import { getAuth } from 'firebase/auth';

const GlassAppBar = ({ handleDrawerToggle }) => {
  const theme = useTheme();
  const [userName, setUserName] = useState('');

  useEffect(() => {
    const auth = getAuth();
    const user = auth.currentUser;
    if (user) {
      setUserName(user.displayName || 'User');
    } else {
      setUserName('User');
    }
  }, []);

  return (
    <AppBar
      position="fixed"
      sx={{
        backdropFilter: 'blur(10px)',
        backgroundColor: theme.palette.mode === 'light' ? 'rgba(255, 255, 255, 0.7)' : 'rgba(30, 30, 30, 0.7)',
        boxShadow: 'none',
        borderRadius: '12px',
        margin: '16px',
        padding: '8px',
      }}
    >
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={handleDrawerToggle}
          sx={{ color: theme.palette.text.primary }}
        >
          <MenuIcon />
        </IconButton>
        <Typography
          variant="h6"
          component="div"
          sx={{
            flexGrow: 1,
            color: theme.palette.text.primary,
            textAlign: 'center',
            fontWeight: 'bold',
            fontFamily: 'Roboto, sans-serif',
            fontSize: '1.5rem',
            textShadow: '1px 1px 2px rgba(0, 0, 0, 0.1)',
          }}
        >
          Welcome {userName}
        </Typography>
        <Box sx={{ width: '30px' }} /> {/* Spacer to balance the MenuIcon button */}
      </Toolbar>
    </AppBar>
  );
};

export default GlassAppBar;
