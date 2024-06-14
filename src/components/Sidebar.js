import React from 'react';
import { Drawer, List, ListItem, ListItemIcon, ListItemText, Box } from '@mui/material';
import { Home as HomeIcon, Person as PersonIcon, Settings as SettingsIcon, ExitToApp as ExitToAppIcon } from '@mui/icons-material';
import { NavLink } from 'react-router-dom';

const Sidebar = ({ open, onClose }) => {
  const drawerWidth = 240;

  return (
    <Drawer
      variant="persistent"
      anchor="left"
      open={open}
      onClose={onClose}
      sx={{
        '& .MuiDrawer-paper': {
          width: drawerWidth,
          boxSizing: 'border-box',
          backgroundColor: '#1d1d1d',
          color: '#fff',
        },
      }}
    >
      <Box sx={{ p: 2, textAlign: 'center', backgroundColor: '#121212' }}>
        <img src="/logo.png" alt="Logo" style={{ maxWidth: '100%' }} />
      </Box>
      <List>
        <ListItem button component={NavLink} to="/dashboard/home">
          <ListItemIcon><HomeIcon style={{ color: '#fff' }} /></ListItemIcon>
          <ListItemText primary="Home" />
        </ListItem>
        <ListItem button component={NavLink} to="/dashboard/profile">
          <ListItemIcon><PersonIcon style={{ color: '#fff' }} /></ListItemIcon>
          <ListItemText primary="Profile" />
        </ListItem>
        <ListItem button component={NavLink} to="/dashboard/settings">
          <ListItemIcon><SettingsIcon style={{ color: '#fff' }} /></ListItemIcon>
          <ListItemText primary="Settings" />
        </ListItem>
        <ListItem button component={NavLink} to="/dashboard/logout">
          <ListItemIcon><ExitToAppIcon style={{ color: '#fff' }} /></ListItemIcon>
          <ListItemText primary="Logout" />
        </ListItem>
      </List>
    </Drawer>
  );
};

export default Sidebar;
