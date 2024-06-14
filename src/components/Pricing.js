// src/components/PricingCards.js
import React from 'react';
import { Box, Container, Typography, Grid, Card, CardContent, CardMedia, Button } from '@mui/material';

const priceOptions = [
  {
    title: 'Basic Batch',
    price: '$199',
    features: [
      'Access to all basic resources and group sessions',
      '📚 Personalized study plans',
      '🎓 Expert mentorship',
      '🎓 Expert mentorship',
      '🎓 Expert mentorship',
    ],
    actionText: 'Buy Now',
    image: 'https://via.placeholder.com/150',
  },
  {
    title: 'Pro Batch',
    price: '$299',
    features: [
      'Access to all basic resources and group sessions',
      '📚 Personalized study plans',
      '🎓 Expert mentorship',
      '💬 24/7 support',
      '💬 24/7 support',
    ],
    actionText: 'Buy Now',
    image: 'https://via.placeholder.com/150',
  },
  {
    title: 'Premium Batch',
    price: '$499',
    features: [
      'Includes everything in Basic plus one-on-one sessions',
      '📚 Personalized study plans',
      '🎓 Expert mentorship',
      '💬 24/7 support',
      '🏆 Priority access',
    ],
    actionText: 'Buy Now',
    image: 'https://via.placeholder.com/150',
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
                    <Button variant="contained" color="primary">
                      {option.actionText}
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

export default PricingCards;
