import React from 'react';
import { Box, Container, Typography, Button, Grid } from '@mui/material';
import { NavLink } from 'react-router-dom';

const HeroSection = () => {
  return (
    <Box
      sx={{
        position: 'relative',
        height: '100vh',
        color: 'white',
        backgroundImage: 'url(https://images.unsplash.com/photo-1507525428034-b723cf961d3e)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        '&:before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0, 0, 0, 0.6)',
        },
      }}
    >
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2 }}>
        <Grid container spacing={4}>
          <Grid item xs={12} md={8}>
            <Typography variant="h2" component="h1" gutterBottom sx={{ fontWeight: 'bold' }}>
              Accelerate Your Growth with Personalized Mentorship
            </Typography>
            <Typography variant="h5" component="p" gutterBottom sx={{ mb: 4 }}>
              Get one-on-one guidance from IITians and 99 Percentilers to reach your goals faster.
            </Typography>
            <NavLink to="/login" style={{ textDecoration: 'none' }}>
              <Button variant="contained" color="secondary" size="large" sx={{ mr: 2 }}>
                Get Started
              </Button>
            </NavLink>
            <NavLink to="/about" style={{ textDecoration: 'none' }}>
              <Button variant="outlined" color="secondary" size="large">
                Learn More
              </Button>
            </NavLink>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default HeroSection;
