import React from 'react';
import { Paper, Typography } from '@mui/material';
import { styled } from '@mui/system';

const StatPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(2),
  backgroundColor: theme.palette.mode === 'light' ? '#f9f9f9' : '#2c2c2c',
  borderRadius: '12px',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
}));

const StatsDisplay = ({ title, value }) => {
  return (
    <StatPaper elevation={3}>
      <Typography variant="h6" sx={{ fontWeight: 'bold', marginBottom: 1 }}>
        {title}
      </Typography>
      <Typography variant="h4" sx={{ fontWeight: 'bold', color: '#8884d8' }}>
        {value}
      </Typography>
    </StatPaper>
  );
};

export default StatsDisplay;
