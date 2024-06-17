import React from 'react';
import { Box, Container, Typography, Grid, Card, CardContent, CardMedia, Button } from '@mui/material';
import { FaAward } from 'react-icons/fa';
import { useTheme } from '@mui/material/styles';

const mentors = [
  // {
  //   name: 'Mentor 1',
  //   expertise: 'Expert in Math and Science',
  //   imageUrl: 'https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg',
  //   badge: 'IITian',
  //   emoji: '📘',
  // },
  // {
  //   name: 'Mentor 2',
  //   expertise: 'Specialist in English and History',
  //   imageUrl: 'https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg',
  //   badge: '99 Percentile',
  //   emoji: '📝',
  // },
  // {
  //   name: 'Mentor 3',
  //   expertise: 'Professional Career Coach',
  //   imageUrl: 'https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg',
  //   badge: 'IITian',
  //   emoji: '🎓',
  // },
  // {
  //   name: 'Mentor 4',
  //   expertise: 'Professional Exam Strategist',
  //   imageUrl: 'https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg',
  //   badge: '99 Percentile',
  //   emoji: '📈',
  // },
  // {
  //   name: 'Mentor 5',
  //   expertise: 'Experienced Mentor',
  //   imageUrl: 'https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg',
  //   badge: 'Top Ranker',
  //   emoji: '🌟',
  // },
  // {
  //   name: 'Mentor 6',
  //   expertise: 'Subject Matter Expert',
  //   imageUrl: 'https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg',
  //   badge: 'PhD',
  //   emoji: '🎓',
  // },
];

const OurMentors = () => {
  const theme = useTheme();

  return (
    <Box bgcolor="#826a95" sx={{ py: 5 }}>
      <Container maxWidth="lg">
        <Typography variant="h2" color="white" gutterBottom textAlign="center">
          Meet the Mentors
        </Typography>
        <Grid container spacing={4} justifyContent="center">
          {mentors.map((mentor, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card
                sx={{
                  maxWidth: 345,
                  mx: 'auto',
                  background: theme.palette.background.paper,
                  boxShadow: 6,
                  borderRadius: 3,
                  overflow: 'hidden',
                  transition: 'transform 0.3s ease-in-out',
                  '&:hover': {
                    transform: 'scale(1.05)',
                  },
                }}
              >
                <CardMedia
                  component="img"
                  alt={mentor.name}
                  height="200"
                  image={mentor.imageUrl}
                  title={mentor.name}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {mentor.name} {mentor.emoji}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" component="p">
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
