import React from 'react';
import { Card, CardContent, CardHeader, Box, Typography } from '@mui/material';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer, CartesianGrid } from 'recharts';
import { styled } from '@mui/system';
import { useTheme } from '@mui/material/styles';

const CardContainer = styled(Card)(({ theme }) => ({
  borderRadius: '15px',
  background: theme.palette.background.paper,
  boxShadow: '0 10px 20px rgba(0, 0, 0, 0.2)',
  color: theme.palette.text.primary,
  transition: 'transform 0.3s, box-shadow 0.3s',
  '&:hover': {
    transform: 'translateY(-5px)',
    boxShadow: '0 15px 30px rgba(0, 0, 0, 0.3)',
  },
}));

const BarChartComponent = ({ data, title }) => {
  const theme = useTheme();

  return (
    <CardContainer>
      <CardHeader
        title={<Typography variant="h6" sx={{ fontWeight: 'bold' }}>{title}</Typography>}
        sx={{ textAlign: 'center', color: theme.palette.text.primary }}
      />
      <CardContent>
        <Box sx={{ height: 300 }}>
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data}>
              <CartesianGrid strokeDasharray="3 3" stroke={theme.palette.text.secondary} />
              <XAxis dataKey="name" stroke={theme.palette.text.primary} />
              <YAxis stroke={theme.palette.text.primary} />
              <Tooltip
                contentStyle={{
                  backgroundColor: theme.palette.background.paper,
                  borderColor: theme.palette.text.secondary,
                }}
                itemStyle={{ color: theme.palette.text.primary }}
              />
              <Legend />
              <Bar dataKey="score" fill="#8884d8" />
              <Bar dataKey="average" fill="#83a6ed" />
            </BarChart>
          </ResponsiveContainer>
        </Box>
      </CardContent>
    </CardContainer>
  );
};

export default BarChartComponent;
