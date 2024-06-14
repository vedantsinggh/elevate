// src/components/Testimonial.js
import React from 'react';
import { Box, Container, Typography, Grid, Card, CardContent } from '@mui/material';

const testimonials = [
  {
    content: "The mentorship program helped me excel in my exams and beyond.",
    author: "Student 1"
  },
  {
    content: "I gained invaluable insights and guidance from my mentor.",
    author: "Student 2"
  },
  {
    content: "The personalized approach made all the difference in my journey.",
    author: "Student 3"
  }
];

const Testimonial = () => {
  return (
    <Box bgcolor="#a586e8" py={20}>
      <Container maxWidth="lg">
        <Typography variant="h2" color="white" gutterBottom textAlign="center">
          Testimonials
        </Typography>
        <Grid container spacing={4}>
          {testimonials.map((testimonial, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Card>
                <CardContent sx={{ bgcolor: '#5b2c91', color: 'white', minHeight: '150px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                  <Typography variant="h5" gutterBottom>
                    {testimonial.content}
                  </Typography>
                  <Typography variant="body2" mt={2}>
                    - {testimonial.author}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Testimonial;
