import React from 'react';
import { Box, Container, Typography, Grid, Card, CardContent, Avatar } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';

const teamMembers = [
  {
    name: 'John Doe',
    role: 'CEO & Founder',
    photo: 'https://via.placeholder.com/150',
    description: 'John is the visionary behind our company with over 20 years of experience.',
  },
  {
    name: 'Jane Smith',
    role: 'CTO',
    photo: 'https://via.placeholder.com/150',
    description: 'Jane is a tech genius leading our development team with innovative solutions.',
  },
  {
    name: 'Alice Johnson',
    role: 'CMO',
    photo: 'https://via.placeholder.com/150',
    description: 'Alice is a marketing expert with a knack for crafting compelling campaigns.',
  },
  {
    name: 'Bob Brown',
    role: 'CFO',
    photo: 'https://via.placeholder.com/150',
    description: 'Bob manages our finances and ensures our company’s financial health.',
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
`;

const AboutUs = () => {
  const theme = useTheme();

  return (
    <Box sx={{ py: 10, background: theme.palette.background.default }}>
      <Container maxWidth="lg">
        <Typography variant="h2" color={theme.palette.primary.main} gutterBottom textAlign="center">
          About Us
        </Typography>
        <Typography variant="h6" color={theme.palette.text.secondary} gutterBottom textAlign="center" sx={{ mb: 4 }}>
          We are a team of passionate individuals dedicated to providing the best services.
        </Typography>
        <Grid container spacing={4}>
          {teamMembers.map((member, index) => (
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
                  '&:hover': {
                    transform: 'scale(1.05)',
                    transition: 'transform 0.3s ease-in-out',
                  },
                }}
              >
                <Avatar
                  src={member.photo}
                  alt={member.name}
                  sx={{
                    width: 100,
                    height: 100,
                    mx: 'auto',
                    mb: 2,
                  }}
                />
                <CardContent>
                  <Typography variant="h5" component="div" sx={{ color: theme.palette.text.primary }}>
                    {member.name}
                  </Typography>
                  <Typography variant="subtitle1" color="text.secondary">
                    {member.role}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {member.description}
                  </Typography>
                </CardContent>
              </StyledCard>
            </Grid>
          ))}
        </Grid>
        <Box sx={{ mt: 10, textAlign: 'center' }}>
          <Typography variant="h4" color={theme.palette.primary.main} gutterBottom>
            Our Mission
          </Typography>
          <Typography variant="h6" color={theme.palette.text.secondary} sx={{ maxWidth: 800, mx: 'auto', mb: 4 }}>
            Our mission is to empower students with the knowledge and skills they need to achieve their academic goals. We strive to provide the best educational resources and support to help them succeed.
          </Typography>
          <Typography variant="h4" color={theme.palette.primary.main} gutterBottom>
            Our Values
          </Typography>
          <Typography variant="h6" color={theme.palette.text.secondary} sx={{ maxWidth: 800, mx: 'auto' }}>
            We believe in integrity, excellence, and commitment to our students. Our values guide us in everything we do, ensuring we provide the highest quality education and support.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default AboutUs;
