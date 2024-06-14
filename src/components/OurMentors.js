// src/components/OurMentors.js
import React from 'react';
import { Box, Container, Typography, Grid, Card, CardContent, CardMedia, Button } from '@mui/material';
import { FaAward } from 'react-icons/fa';

const mentors = [
  {
    name: 'Mentor 1',
    expertise: 'Expert in Math and Science',
    imageUrl: 'https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg',
    badge: 'IITian',
  },
  {
    name: 'Mentor 2',
    expertise: 'Specialist in English and History',
    imageUrl: 'https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg',
    badge: '99 Percentile',
  },
  {
    name: 'Mentor 3',
    expertise: 'Professional Career Coach',
    imageUrl: 'https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg',
    badge: 'IITian',
  },
  {
    name: 'Mentor 4',
    expertise: 'Professional Exam Strategist',
    imageUrl: 'https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg',
    badge: '99 Percentile',
  },
];

const OurMentors = () => {
  return (
    <Box bgcolor="#f9f4fc" py={24}>
      <Container maxWidth="lg">
        <Typography variant="h2" color="#5b2c91" gutterBottom textAlign="center">
          Meet the Mentors
        </Typography>
        <Grid container spacing={4}>
          {mentors.map((mentor, index) => (
            <Grid item xs={12} md={3} key={index}>
              <Card>
                <CardMedia
                  component="img"
                  alt={mentor.name}
                  height="200"
                  image={mentor.imageUrl}
                  title={mentor.name}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {mentor.name}
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                    {mentor.expertise}
                  </Typography>
                  <Box mt={2}>
                    <Button variant="contained" color="primary" size="small" startIcon={<FaAward />}>
                      {mentor.badge}
                    </Button>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default OurMentors;
