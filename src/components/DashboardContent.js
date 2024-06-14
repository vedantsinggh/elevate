import React from 'react';
import { Box, Toolbar, Typography } from '@mui/material';
import { Route, Routes } from 'react-router-dom';
import HomePage from '../pages/DashboardHome';
import ProfilePage from '../pages/ProfilePage';
import SettingsPage from '../pages/SettingsPage';

const DashboardContent = () => {
  return (
    <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
      <Toolbar />
      <Routes>
        <Route path="home" element={<HomePage />} />
        <Route path="profile" element={<ProfilePage />} />
        <Route path="settings" element={<SettingsPage />} />
      </Routes>
    </Box>
  );
};

export default DashboardContent;
