import React from 'react';
import { Box, Container, Typography, Grid, Card, CardContent, Button } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';

const pricingPlans = [
  {
    title: 'Basic Plan',
    price: '$9.99/month',
    features: ['Feature 1', 'Feature 2', 'Feature 3'],
  },
  {
    title: 'Standard Plan',
    price: '$19.99/month',
    features: ['Feature 1', 'Feature 2', 'Feature 3', 'Feature 4'],
  },
  {
    title: 'Premium Plan',
    price: '$29.99/month',
    features: ['Feature 1', 'Feature 2', 'Feature 3', 'Feature 4', 'Feature 5'],
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
                }}
              >
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
                      Choose Plan
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
