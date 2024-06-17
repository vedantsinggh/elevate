// src/components/PricingCards.js
import React from 'react';
import { Box, Container, Typography, Grid, Card, CardContent, CardMedia, Button } from '@mui/material';
import { NavLink } from 'react-router-dom';

const priceOptions = [
  {
    title: 'Udaan - Mentorship',
    price: '₹3499/- till Jan 2025',
    features: [
      'Your pathway to first-attempt success with personalized mentorship and comprehensive guidance.',
      '📚 Tailored Mentorship',
      '🎓 Comprehensive Curriculum',
      '💬 Expert Instructors',
      '🏆 Progress Tracking',
    ],
    actionText: 'Buy Now',
    image: 'https://png.pngtree.com/thumb_back/fh260/back_our/20190619/ourmid/pngtree-class-reunion-poster-image_133308.jpg',
  },
  {
    title: 'Resolve - Doubt solving',
    price: '₹2999 till Jan 2025',
    features: [
      'Nirantar Resolve 2999 ensures seamless doubt-solving till January, offering unwavering support and expertise for your exam readiness',
      '📚 Continuous Doubt Resolution',
      '🎓 Expert Guidance',
      '💬 Comprehensive Coverage',
      '💬 Interactive Learning',
    ],
    actionText: 'Buy Now',
    image: 'https://png.pngtree.com/thumb_back/fh260/back_our/20190620/ourmid/pngtree-class-reunion-watercolor-poster-background-template-image_146703.jpg',

  },
  {
    title: 'Vishwaas - All in one',
    price: '₹5999 till Jan 2025',
    features: [
      'Your trusted partner for exam success, featuring unlimited doubt solving, personalized mentorship, and performance analytics.',
      '📚 Unlimited Doubt Solving',
      '🎓 Comprehensive Curriculum',
      '💬 Personalized Mentorship',
      '🏆 Performance Analytics',
    ],
    actionText: 'Buy Now',
    image: 'https://img.freepik.com/premium-photo/happy-international-womens-day-around-world-illustration-image-generated-by-ai_349001-5008.jpg',

  },
];

const PricingCards = () => {
  return (
    <Box bgcolor="#f9f4fc" py={20}>
      <Container maxWidth="lg">
        <Typography variant="h2" color="#5b2c91" gutterBottom textAlign="center">
          Pricing
        </Typography>
        <Grid container spacing={4}>
          {priceOptions.map((option, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Card>
                <CardMedia
                  component="img"
                  alt={option.title}
                  height="140"
                  image={option.image}
                  title={option.title}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {option.title}
                  </Typography>
                  <Typography variant="h6" color="textSecondary" component="div">
                    {option.price}
                  </Typography>
                  <Box mt={2}>
                    {option.features.map((feature, idx) => (
                      <Typography key={idx} variant="body2" color="textSecondary" component="p">
                        {feature}
                      </Typography>
                    ))}
                  </Box>
                  <Box mt={2}>
                    <NavLink to={"/pricing"}>
                      <Button variant="contained" color="primary">
                        {option.actionText}
                      </Button>
                      </NavLink>
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

export default PricingCards;
