import React from 'react';
import { Box, Container, Grid, Typography, Link, IconButton } from '@mui/material';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaYoutube, FaTelegram } from 'react-icons/fa';

const Footer = () => {
  return (
    <Box bgcolor="#3f51b5" color="white" py={6}>
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" gutterBottom>
              JEE elevate
            </Typography>
            <Typography variant="body2">
              Accelerate Your Growth with Personalized Mentorship. Get one-on-one guidance from IITians and 99 Percentilers to reach your goals faster.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={2}>
            <Typography variant="h6" gutterBottom>
              Links
            </Typography>
            <Link href="/" color="inherit" underline="none" variant="body2" display="block">
              Home
            </Link>
            <Link href="/about" color="inherit" underline="none" variant="body2" display="block">
              About
            </Link>
            <Link href="/pricing" color="inherit" underline="none" variant="body2" display="block">
              Pricing
            </Link>
            <Link href="/contact" color="inherit" underline="none" variant="body2" display="block">
              Contact
            </Link>
          </Grid>
          <Grid item xs={12} sm={3}>
            <Typography variant="h6" gutterBottom>
              Contact Us
            </Typography>
            <Typography variant="body2">
              Email: jeeelevate@gmail.com
            </Typography>
            <Typography variant="body2">
              Phone: +1234567890
            </Typography>
          </Grid>
          <Grid item xs={12} sm={3}>
            <Typography variant="h6" gutterBottom>
              Follow Us
            </Typography>
            <Box>
              <IconButton href="https://www.youtube.com/@JEE_Elevate" target="_blank" color="inherit">
                <FaYoutube />
              </IconButton>
              <IconButton href="https://instagram.com/JEE_Elevate" target="_blank" color="inherit">
                <FaInstagram />
              </IconButton>
              <IconButton href="https://t.me/ash_jee" target="_blank" color="inherit">
                <FaTelegram />
              </IconButton>
            </Box>
          </Grid>
        </Grid>
        <Box mt={4} textAlign="center">
          <Typography variant="body2">
            &copy; {new Date().getFullYear()} JEE elevate. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
