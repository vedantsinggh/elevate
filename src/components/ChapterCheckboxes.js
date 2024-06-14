import React from 'react';
import { Box, FormControlLabel, Checkbox, Typography } from '@mui/material';
import { styled } from '@mui/system';

const ChapterBox = styled(Box)(({ theme }) => ({
  padding: '10px',
  backgroundColor: theme.palette.mode === 'light' ? '#f5f5f5' : '#333333',
  borderRadius: '8px',
  marginBottom: '10px',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
}));

const ChapterTitle = styled(Typography)(({ theme }) => ({
  marginBottom: '8px',
  fontWeight: 'bold',
  color: theme.palette.mode === 'light' ? '#333' : '#fff',
}));

const ChapterCheckboxes = ({ subject, unit, chapter, chapterCompletion, handleCheckboxChange }) => {
  const tasks = chapterCompletion[subject]?.[unit]?.[chapter] || {
    lecture: false,
    practice: false,
    pyqs: false,
    test: false,
  };

  return (
    <ChapterBox>
      <ChapterTitle variant="subtitle1">{chapter}</ChapterTitle>
      <FormControlLabel
        control={<Checkbox checked={tasks.lecture} onChange={() => handleCheckboxChange(subject, unit, chapter, 'lecture')} />}
        label="Lecture Done"
      />
      <FormControlLabel
        control={<Checkbox checked={tasks.practice} onChange={() => handleCheckboxChange(subject, unit, chapter, 'practice')} />}
        label="Practiced"
      />
      <FormControlLabel
        control={<Checkbox checked={tasks.pyqs} onChange={() => handleCheckboxChange(subject, unit, chapter, 'pyqs')} />}
        label="PYQs Done"
      />
      <FormControlLabel
        control={<Checkbox checked={tasks.test} onChange={() => handleCheckboxChange(subject, unit, chapter, 'test')} />}
        label="Test Given"
      />
    </ChapterBox>
  );
};

export default ChapterCheckboxes;
