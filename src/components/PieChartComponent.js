import React from 'react';
import { Card, CardContent, CardHeader, Box, Typography } from '@mui/material';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';
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

const COLORS = ['#8884d8', '#83a6ed', '#8dd1e1', '#82ca9d'];

const PieChartComponent = ({ data, title }) => {
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
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
                label
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip
                contentStyle={{
                  backgroundColor: theme.palette.background.paper,
                  borderColor: theme.palette.text.secondary,
                }}
                itemStyle={{ color: theme.palette.text.primary }}
              />
            </PieChart>
          </ResponsiveContainer>
        </Box>
      </CardContent>
    </CardContainer>
  );
};

export default PieChartComponent;
