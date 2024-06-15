import React from 'react';
import { Box, Divider, List, ListItem, ListItemIcon, ListItemText, Button, IconButton } from '@mui/material';
import { Home as HomeIcon, Person as PersonIcon, Settings as SettingsIcon, ExitToApp as ExitToAppIcon, Brightness4, Brightness7, MenuBook as MenuBookIcon } from '@mui/icons-material';
import { NavLink } from 'react-router-dom';
import { useThemeContext } from '../context/ThemeContext';

const DrawerMenu = ({ logoSrc, handleLogout }) => {
  const { mode, toggleTheme } = useThemeContext();

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
      <Box sx={{ p: 2, textAlign: 'center', backgroundColor: '#121212' }}>
        <img src={logoSrc} alt="Company Logo" style={{ maxWidth: '100%' }} />
      </Box>
      <Divider />
      <List sx={{ flexGrow: 1 }}>
        <ListItem button component={NavLink} to="/dashboard/home">
          <ListItemIcon><HomeIcon style={{ color: '#fff' }} /></ListItemIcon>
          <ListItemText primary="Home" />
        </ListItem>
        <ListItem button component={NavLink} to="/dashboard/profile">
          <ListItemIcon><PersonIcon style={{ color: '#fff' }} /></ListItemIcon>
          <ListItemText primary="Profile" />
        </ListItem>
        <ListItem button component={NavLink} to="/dashboard/tests">
          <ListItemIcon><PersonIcon style={{ color: '#fff' }} /></ListItemIcon>
          <ListItemText primary="Tests" />
        </ListItem>
        <ListItem button component={NavLink} to="/dashboard/settings">
          <ListItemIcon><SettingsIcon style={{ color: '#fff' }} /></ListItemIcon>
          <ListItemText primary="Settings" />
        </ListItem>
        <ListItem button component={NavLink} to="/dashboard/tracker">
          <ListItemIcon><MenuBookIcon style={{ color: '#fff' }} /></ListItemIcon>
          <ListItemText primary="Tracker" />
        </ListItem>
      </List>
      <Divider />
      <List>
        <ListItem button onClick={toggleTheme}>
          <ListItemIcon>
            {mode === 'light' ? <Brightness4 /> : <Brightness7 />}
          </ListItemIcon>
          <ListItemText primary={mode === 'light' ? 'Dark Mode' : 'Light Mode'} />
        </ListItem>
        <ListItem button onClick={handleLogout}>
          <ListItemIcon>
            <ExitToAppIcon style={{ color: '#fff' }} />
          </ListItemIcon>
          <ListItemText primary="Logout" />
        </ListItem>
      </List>
    </Box>
  );
};

export default DrawerMenu;
