// src/components/Testimonial.js
import React from 'react';
import { Box, Container, Typography, Grid, Card, CardContent } from '@mui/material';

const testimonials = [
  {
    content: "Very helpful in covering backlog and boosting my score. Initially 172, after mentorship, increased to 210-220. Niza significantly improved my chemistry score from 50 to 91 in mains. Ansh provided great motivation from the start of my mentorship journey. Thanks!",
    author: "Deep"
  },
  {
    content: "It's great for motivating me to study, especially in challenging subjects like math. Setting and achieving targets gives me inner satisfaction and has been crucial in improving my preparation. Aswarya Bhaiya's guidance has been invaluable. Thank you.",
    author: "Divyanshu"
  },
  {
    content: "Mera anubhav Ashwarya bhaiya aur Niza didi ke saath bahut achha raha. Unki madad se maine subject ke tips aur maths ke sawaal solve karne ka tarika samjha. Aap logon ki mehnat aur bacchon ki madad karte rahiye. Dhanyavad.\n\n\n",
    author: "Alok Pandey"
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
