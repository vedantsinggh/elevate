import React from 'react';
import { Button, Typography, Paper } from '@mui/material';

const SubjectSelector = ({ selectedSubject, setSelectedSubject }) => (
  <Paper sx={{ padding: 2 }}>
    <Typography variant="h6" gutterBottom>
      Subjects
    </Typography>
    <Button
      variant={selectedSubject === 'math' ? 'contained' : 'outlined'}
      onClick={() => setSelectedSubject('math')}
      fullWidth
    >
      Math
    </Button>
    <Button
      variant={selectedSubject === 'physics' ? 'contained' : 'outlined'}
      onClick={() => setSelectedSubject('physics')}
      fullWidth
    >
      Physics
    </Button>
    <Button
      variant={selectedSubject === 'chemistry' ? 'contained' : 'outlined'}
      onClick={() => setSelectedSubject('chemistry')}
      fullWidth
    >
      Chemistry
    </Button>
  </Paper>
);

export default SubjectSelector;
