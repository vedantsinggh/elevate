import React from 'react';
import { Card, CardContent, Typography, Avatar, Box } from '@mui/material';
import { styled } from '@mui/system';

const CardContainer = styled(Card)(({ theme }) => ({
  borderRadius: '15px',
  background: theme.palette.mode === 'light' ? 'linear-gradient(145deg, #e0e0e0, #ffffff)' : 'linear-gradient(145deg, #2a2a2a, #3a3a3a)',
  boxShadow: '0 10px 20px rgba(0, 0, 0, 0.2)',
  color: theme.palette.mode === 'light' ? '#333' : '#fff',
  transition: 'transform 0.3s, box-shadow 0.3s',
  '&:hover': {
    transform: 'translateY(-5px)',
    boxShadow: '0 15px 30px rgba(0, 0, 0, 0.3)',
  },
}));

const IconContainer = styled(Box)({
  backgroundColor: 'rgba(255, 255, 255, 0.2)',
  borderRadius: '50%',
  width: '64px',
  height: '64px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  margin: '16px auto',
});

const StatsCard = ({ title, subheader, icon: Icon, value }) => {
  return (
    <CardContainer>
      <CardContent>
        <IconContainer>
          <Avatar sx={{ backgroundColor: 'transparent' }}>
            <Icon sx={{ fontSize: '32px', color: '#8884d8' }} />
          </Avatar>
        </IconContainer>
        <Typography variant="h6" component="div" sx={{ textAlign: 'center', fontWeight: 'bold' }}>
          {title}
        </Typography>
        <Typography variant="subtitle2" component="div" sx={{ textAlign: 'center', marginBottom: '16px' }}>
          {subheader}
        </Typography>
        <Typography variant="h4" component="div" sx={{ textAlign: 'center', fontWeight: 'bold' }}>
          {value}
        </Typography>
      </CardContent>
    </CardContainer>
  );
};

export default StatsCard;
