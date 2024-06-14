import React from 'react';
import { Grid } from '@mui/material';
import TestCard from './TestCard';

const tests = [
  {
    name: 'Mathematics Full Syllabus Test',
    syllabus: 'Algebra, Geometry, Trigonometry, Calculus',
    date: '2024-06-20',
    time: '10:00 AM',
    duration: '3 hours',
    canTakeAnytime: false,
    level: 'Medium',
    tag: 'JEE Mains',
  },
  {
    name: 'Physics Mechanics Test',
    syllabus: 'Kinematics, Dynamics, Work, Energy, Power',
    date: '2024-07-10',
    time: '2:00 PM',
    duration: '2 hours',
    canTakeAnytime: true,
    level: 'Hard',
    tag: 'JEE Advanced',
  },
  // Add more test objects as needed
];

const TestsList = () => {
  return (
    <Grid container spacing={2}>
      {tests.map((test, index) => (
        <Grid item xs={12} sm={6} md={4} key={index}>
          <TestCard test={test} />
        </Grid>
      ))}
    </Grid>
  );
};

export default TestsList;
