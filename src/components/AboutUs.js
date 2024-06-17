// src/components/AboutUs.js
import React from 'react';
import { Box, Container, Typography, Grid, Avatar, IconButton } from '@mui/material';
import { FaTrophy, FaChartLine, FaUserCheck } from 'react-icons/fa';

const AboutUs = () => {
  return (
    <Box bgcolor="#d6c8f0" py={20}>
      <Container maxWidth="lg">
        <Typography variant="h2" color="#5b2c91" gutterBottom textAlign="center">
          About Our Success
        </Typography>
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={6} textAlign="center">
            <Avatar
              src="/assets/students/devansh.jpeg"
              alt="Student"
              sx={{ width: 200, height: 200, mx: 'auto', boxShadow: 3 }}
            />
            <Typography variant="body1" fontWeight="bold" color="#5b2c91" mt={2}>
              DEVNASH - 99.8%ile
            </Typography>
            <Typography variant="body2" fontWeight="light" color="#5b2c91" mt={2}>
              "The mentorship program transformed my academic journey. I am now more confident and motivated to excel in my studies."
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="h5" color="#5b2c91" textAlign={{ xs: 'center', md: 'left' }} gutterBottom>
              We are proud to be recognized for our achievements:
            </Typography>
            <Grid container spacing={2}>
              <Grid item xs={12} md={4}>
                <Box textAlign="center">
                  <IconButton color="primary">
                    <FaTrophy size={32} />
                  </IconButton>
                  <Typography variant="body1" color="#5b2c91">
                    Top Performer
                  </Typography>
                  <Typography variant="body2">
                    Consistently ranked as a top performer in mentorship programs.
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={12} md={4}>
                <Box textAlign="center">
                  <IconButton color="primary">
                    <FaChartLine size={32} />
                  </IconButton>
                  <Typography variant="body1" color="#5b2c91">
                    High Success Rate
                  </Typography>
                  <Typography variant="body2">
                    Proven track record of helping students achieve their academic goals.
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={12} md={4}>
                <Box textAlign="center">
                  <IconButton color="primary">
                    <FaUserCheck size={32} />
                  </IconButton>
                  <Typography variant="body1" color="#5b2c91">
                    Trusted Mentorship
                  </Typography>
                  <Typography variant="body2">
                    Trusted by thousands of students for personalized mentorship and guidance.
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default AboutUs;
