// src/components/ResultsShowcase.js
import React from 'react';
import { Box, Grid, Typography, Card, CardContent, CardMedia } from '@mui/material';

const students = [
  {
    name: 'John Doe',
    result: 'JEE Rank: 123',
    photo: 'https://via.placeholder.com/150',
  },
  {
    name: 'Jane Smith',
    result: 'JEE Rank: 456',
    photo: 'https://via.placeholder.com/150',
  },
  {
    name: 'Alice Johnson',
    result: 'JEE Rank: 789',
    photo: 'https://via.placeholder.com/150',
  },
  // Add more student objects as needed
];

const ResultsShowcase = () => {
  return (
    <Box sx={{ py: 5 }}>
      <Typography variant="h4" align="center" gutterBottom>
        Our Successful Students
      </Typography>
      <Grid container spacing={4}>
        {students.map((student, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card sx={{ maxWidth: 345, mx: 'auto' }}>
              <CardMedia
                component="img"
                height="200"
                image={student.photo}
                alt={student.name}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {student.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {student.result}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ResultsShowcase;
