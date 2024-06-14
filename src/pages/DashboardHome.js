import React from 'react';
import { Box, Grid, Typography, Toolbar } from '@mui/material';
import { Assessment, CheckCircle, School } from '@mui/icons-material';
import DashboardCard from '../components/DashboardCard';
import PieChartComponent from '../components/PieChartComponent';
import BarChartComponent from '../components/BarChartComponent';
import Banner from '../components/Banner';

const DashboardHome = () => {
  const pieData = [
    { name: 'Group A', value: 400 },
    { name: 'Group B', value: 300 },
    { name: 'Group C', value: 300 },
    { name: 'Group D', value: 200 },
  ];
  const barData = [
    { name: 'Jan', uv: 4000, pv: 2400, amt: 2400 },
    { name: 'Feb', uv: 3000, pv: 1398, amt: 2210 },
    { name: 'Mar', uv: 2000, pv: 9800, amt: 2290 },
    { name: 'Apr', uv: 2780, pv: 3908, amt: 2000 },
    { name: 'May', uv: 1890, pv: 4800, amt: 2181 },
    { name: 'Jun', uv: 2390, pv: 3800, amt: 2500 },
    { name: 'Jul', uv: 3490, pv: 4300, amt: 2100 },
  ];

  return (
    <Box sx={{ p: 3 }}>
      <Banner />
      <Grid container spacing={3}>
        <Grid item xs={12} md={4}>
          <DashboardCard
            title="Tests Taken"
            value="123"
            icon={Assessment}
            growth={2.6}
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <DashboardCard
            title="Tests Passed"
            value="110"
            icon={CheckCircle}
            growth={3.1}
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <DashboardCard
            title="Top Scores"
            value="98%"
            icon={School}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <PieChartComponent data={pieData} title="Test Performance Distribution" />
        </Grid>
        <Grid item xs={12} md={6}>
          <BarChartComponent data={barData} title="Monthly Test Performance" />
        </Grid>
      </Grid>
    </Box>
  );
};

export default DashboardHome;
