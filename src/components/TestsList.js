import React from 'react';
import { Grid } from '@mui/material';
import TestCard from './TestCard';
import tests from './testdata'

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
