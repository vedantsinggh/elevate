import React from 'react';
import { Box, Typography, Grid, Paper, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import sampleTest from '../components/testdata';

const tests = [sampleTest]; // Array of test data for demonstration

const TestsPage = () => {
  const navigate = useNavigate();

  const handleTestClick = (testId) => {
    navigate(`/test/${testId}`);
  };

  return (
    <Box sx={{ padding: 3 }}>
      <Typography variant="h4" gutterBottom>
        Available Tests
      </Typography>
      <Grid container spacing={2}>
        {tests.map((test) => (
          <Grid item xs={12} sm={6} md={4} key={test.id}>
            <Paper sx={{ padding: 2, textAlign: 'center' }}>
              <Typography variant="h6">{test.name}</Typography>
              <Typography variant="body2">{test.date}</Typography>
              <Button
                variant="contained"
                color="primary"
                sx={{ marginTop: 2 }}
                onClick={() => handleTestClick(test.id)}
              >
                Start Test
              </Button>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default TestsPage;
