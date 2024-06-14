import React from 'react';
import { Box, Typography } from '@mui/material';
import TestsList from '../components/TestsList';

const TestsPage = () => {
  return (
    <Box sx={{ width: '100%', padding: 3 }}>
      <Typography variant="h4" gutterBottom>
        📚 Upcoming Tests
      </Typography>
      <TestsList />
    </Box>
  );
};

export default TestsPage;
