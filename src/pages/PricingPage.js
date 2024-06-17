import React from 'react';
import { Box, Container, Typography, Grid, Card, CardContent, Button, CardMedia, Chip } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';

const pricingPlans = [
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

const reasons = [
  {
    title: 'Expert Mentors',
    description: 'Learn from the best in the industry with years of experience.',
  },
  {
    title: 'Comprehensive Resources',
    description: 'Access a wide range of resources to help you succeed.',
  },
  {
    title: 'Personalized Support',
    description: 'Get personalized support tailored to your needs.',
  },
  {
    title: 'Flexible Learning',
    description: 'Learn at your own pace with our flexible learning options.',
  },
];

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const StyledCard = styled(Card)`
  animation: ${fadeIn} 1s ease-in-out;
  transition: transform 0.3s ease-in-out;
  &:hover {
    transform: scale(1.05);
  }
`;

const PricingPage = () => {
  const theme = useTheme();

  return (
    <Box sx={{ py: 10, background: theme.palette.background.default }}>
      <Container maxWidth="lg">
        <Typography variant="h2" color={theme.palette.primary.main} gutterBottom textAlign="center">
          Pricing Plans
        </Typography>
        <Typography variant="h6" color={theme.palette.text.secondary} gutterBottom textAlign="center" sx={{ mb: 4 }}>
          Choose the plan that best suits your needs.
        </Typography>
        <Grid container spacing={4}>
          {pricingPlans.map((plan, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <StyledCard
                sx={{
                  maxWidth: 345,
                  mx: 'auto',
                  background: theme.palette.background.paper,
                  boxShadow: 6,
                  borderRadius: 3,
                  overflow: 'hidden',
                  textAlign: 'center',
                  padding: 2,
                  position: 'relative',
                }}
              >
                {index === pricingPlans.length - 1 && (
                  <Chip
                    label="Best Seller"
                    color="secondary"
                    sx={{ position: 'absolute', top: 16, left: 16 }}
                  />
                )}
                <CardMedia
                  component="img"
                  height="140"
                  image={plan.image}
                  alt={plan.title}
                />
                <CardContent>
                  <Typography variant="h5" component="div" sx={{ color: theme.palette.text.primary }}>
                    {plan.title}
                  </Typography>
                  <Typography variant="h4" component="div" sx={{ color: theme.palette.primary.main, my: 2 }}>
                    {plan.price}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" component="ul" sx={{ listStyleType: 'none', p: 0 }}>
                    {plan.features.map((feature, i) => (
                      <li key={i}>{feature}</li>
                    ))}
                  </Typography>
                  <Box mt={2}>
                    <Button variant="contained" color="primary">
                      {plan.actionText}
                    </Button>
                  </Box>
                </CardContent>
              </StyledCard>
            </Grid>
          ))}
        </Grid>

        <Box sx={{ mt: 10, textAlign: 'center' }}>
          <Typography variant="h4" color={theme.palette.primary.main} gutterBottom>
            Why Choose Us
          </Typography>
          <Grid container spacing={4}>
            {reasons.map((reason, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <StyledCard
                  sx={{
                    maxWidth: 345,
                    mx: 'auto',
                    background: theme.palette.background.paper,
                    boxShadow: 6,
                    borderRadius: 3,
                    overflow: 'hidden',
                    textAlign: 'center',
                    padding: 2,
                  }}
                >
                  <CardContent>
                    <Typography variant="h5" component="div" sx={{ color: theme.palette.text.primary }}>
                      {reason.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" component="p">
                      {reason.description}
                    </Typography>
                  </CardContent>
                </StyledCard>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default PricingPage;
