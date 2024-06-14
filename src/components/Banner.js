import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { styled } from '@mui/system';
import { useTheme } from '@mui/material/styles';

const BannerContainer = styled(Box)(({ theme }) => ({
  background: theme.palette.mode === 'light' ? 'linear-gradient(135deg, #ff7e5f 0%, #feb47b 100%)' : 'linear-gradient(135deg, #333333 0%, #555555 100%)',
  color: 'white',
  padding: theme.spacing(4),
  borderRadius: '15px',
  marginBottom: theme.spacing(3),
  textAlign: 'center',
  boxShadow: '0px 10px 20px rgba(0, 0, 0, 0.2)',
  animation: 'fadeIn 1.5s ease-out',
  '@keyframes fadeIn': {
    '0%': {
      opacity: 0,
      transform: 'translateY(-20px)',
    },
    '100%': {
      opacity: 1,
      transform: 'translateY(0)',
    },
  },
}));

const Banner = () => {
  const theme = useTheme();
  
  return (
    <BannerContainer>
      <Typography variant="h4" component="div" gutterBottom sx={{ fontWeight: 'bold' }}>
        Special Offer: Get 50% off on all courses!
      </Typography>
      <Typography variant="body1" component="div" gutterBottom>
        Enroll now and take advantage of our limited-time discount.
      </Typography>
      <Button
        variant="contained"
        sx={{
          backgroundColor: 'white',
          color: theme.palette.mode === 'light' ? '#ff7e5f' : '#333',
          fontWeight: 'bold',
          '&:hover': {
            backgroundColor: theme.palette.mode === 'light' ? '#ff7e5f' : '#555',
            color: 'white',
          },
        }}
      >
        Learn More
      </Button>
    </BannerContainer>
  );
};

export default Banner;
