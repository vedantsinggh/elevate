// src/pages/SettingsPage.js
import React from 'react';
import { Box, Typography, Container } from '@mui/material';
import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';

// Define the animation using keyframes
const bounceAnimation = keyframes`
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-30px);
  }
  60% {
    transform: translateY(-15px);
  }
`;

// Create a styled component with the animation
const AnimatedBox = styled(Box)`
  animation: ${bounceAnimation} 2s infinite;
`;

const SettingsPage = () => {
  return (
    <Container maxWidth="md" sx={{ textAlign: 'center', mt: 10 }}>
      <AnimatedBox>
        <Typography variant="h4" component="h1" gutterBottom>
          Settings Page
        </Typography>
        <Typography variant="h6" component="p" gutterBottom>
          Coming Soon
        </Typography>
        <Typography variant="body1" component="p">
          We're working hard to bring you this feature. Stay tuned!
        </Typography>
      </AnimatedBox>
    </Container>
  );
};

export default SettingsPage;
