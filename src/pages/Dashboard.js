import React, { useState } from 'react';
import { Box, CssBaseline, Toolbar, Drawer, Divider, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { Outlet, Link } from 'react-router-dom';
import GlassAppBar from '../components/GlassAppBar';
import HomeIcon from '@mui/icons-material/Home';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import DrawerMenu from '../components/DrawerMenu';

const drawerWidth = 240;

const Dashboard = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleLogout = () => {
    console.log('Logout');
    // Add your logout logic here
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <GlassAppBar handleDrawerToggle={handleDrawerToggle} />
      <Box component="nav" sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }} aria-label="mailbox folders">
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{ keepMounted: true }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          <DrawerMenu logoSrc="/path/to/your/logo.png" handleLogout={handleLogout} />
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          <DrawerMenu logoSrc="/path/to/your/logo.png" handleLogout={handleLogout} />
        </Drawer>
      </Box>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
        <Outlet />
      </Box>
    </Box>
  );
};

export default Dashboard;
