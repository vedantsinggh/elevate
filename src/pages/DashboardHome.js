import React from 'react';
import { Box, Grid, Typography } from '@mui/material';
import { Assessment, CheckCircle, School } from '@mui/icons-material';
import DashboardCard from '../components/DashboardCard';
import PieChartComponent from '../components/PieChartComponent';
import BarChartComponent from '../components/BarChartComponent';
import Banner from '../components/Banner';
import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';

const pieData = [
  { name: 'Unsolved', value: 34 },
  { name: 'Maths', value: 16 },
  { name: 'Chemistry', value: 12 },
  { name: 'Physics', value: 13 },
];

const barData = [
  { name: 'Test 1', score: 112, average: 109 },
  { name: 'Test 2', score: 160, average: 130 },
  { name: 'Test 3', score: 96, average: 144 },
  { name: 'Test 4', score: 80, average: 133 },
  { name: 'Test 5', score: 150, average: 136 },
];

// Define the animation using keyframes
const blinkAnimation = keyframes`
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
`;

// Create a styled component for the overlay with the animation
const Overlay = styled(Box)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 1.5rem;
  animation: ${blinkAnimation} 1.5s infinite;
  z-index: 10;
`;

const CardWrapper = styled(Box)`
  position: relative;
`;

const DashboardHome = () => {
  return (
    <Box sx={{ p: 3 }}>
      <Banner />
      <Grid container spacing={3}>
        <Grid item xs={12} md={4}>
          <CardWrapper>
            <DashboardCard
              title="Questions Solved"
              value="123"
              icon={Assessment}
              growth={2.6}
            />
            <Overlay>Coming Soon</Overlay>
          </CardWrapper>
        </Grid>
        <Grid item xs={12} md={4}>
          <CardWrapper>
            <DashboardCard
              title="Last Test"
              value="136"
              icon={CheckCircle}
              growth={3.1}
            />
            <Overlay>Coming Soon</Overlay>
          </CardWrapper>
        </Grid>
        <Grid item xs={12} md={4}>
          <CardWrapper>
            <DashboardCard
              title="Top Scores"
              value="98%"
              icon={School}
            />
            <Overlay>Coming Soon</Overlay>
          </CardWrapper>
        </Grid>
        <Grid item xs={12} md={6}>
          <CardWrapper>
            <PieChartComponent data={pieData} title="Last Test Performance Distribution" />
            <Overlay>Coming Soon</Overlay>
          </CardWrapper>
        </Grid>
        <Grid item xs={12} md={6}>
          <CardWrapper>
            <BarChartComponent data={barData} title="Past Test Performance" />
            <Overlay>Coming Soon</Overlay>
          </CardWrapper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default DashboardHome;
