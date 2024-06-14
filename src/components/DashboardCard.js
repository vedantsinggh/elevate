import React from 'react';
import { Card, CardContent, Typography, Box } from '@mui/material';
import { styled } from '@mui/system';

const CardContainer = styled(Card)(({ theme }) => ({
  background: theme.palette.background.paper,
  boxShadow: '0 10px 20px rgba(0, 0, 0, 0.2)',
  color: theme.palette.text.primary,
  transition: 'transform 0.3s, box-shadow 0.3s',
  '&:hover': {
    transform: 'translateY(-5px)',
    boxShadow: '0 15px 30px rgba(0, 0, 0, 0.3)',
  },
  padding: theme.spacing(2),
}));

const DashboardCard = ({ title, value, icon: Icon, growth }) => {
  return (
    <CardContainer>
      <CardContent>
        <Box display="flex" alignItems="center" justifyContent="space-between">
          <Typography variant="h6" component="div" sx={{ fontWeight: 'bold' }}>
            {title}
          </Typography>
          {Icon && <Icon sx={{ fontSize: '2rem', color: '#8884d8' }} />}
        </Box>
        <Typography variant="h4" component="div" sx={{ fontWeight: 'bold', marginTop: 2 }}>
          {value}
        </Typography>
        {growth && (
          <Typography variant="subtitle1" component="div" sx={{ color: growth > 0 ? '#76c7c0' : '#f76c6c' }}>
            {growth > 0 ? `+${growth}%` : `${growth}%`}
          </Typography>
        )}
      </CardContent>
    </CardContainer>
  );
};

export default DashboardCard;
