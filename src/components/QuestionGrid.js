import React from 'react';
import { Grid, Typography, Box, Paper } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const lightTheme = createTheme({
  palette: {
    mode: 'light',
    background: {
      default: '#ffffff',
      paper: '#ffffff',
    },
    text: {
      primary: '#000000',
      secondary: '#555555',
    },
  },
});

const QuestionGrid = ({ questions, handleQuestionClick, selectedQuestion, questionData, getQuestionStatus }) => {
  const renderQuestions = (questions, title, subject) => (
    <Box sx={{ mb: 4 }}>
      <Typography variant="h6" mb={2} sx={{ color: lightTheme.palette.text.primary }}>
        {title}
      </Typography>
      <Grid container spacing={2}>
        {questions?.map((question, index) => {
          const statusColor = getQuestionStatus(question);
          const uniqueKey = `${subject}-${question.id || index}`;

          return (
            <Grid item xs={2} key={uniqueKey}>
              <Paper
                sx={{
                  p: 1,
                  textAlign: 'center',
                  cursor: 'pointer',
                  bgcolor: statusColor,
                  color: lightTheme.palette.text.primary,
                }}
                onClick={() => handleQuestionClick(question, subject)}
              >
                {index + 1}
              </Paper>
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );

  return (
    <ThemeProvider theme={lightTheme}>
      <Box sx={{ overflowY: 'auto', maxHeight: '80vh', p: 2, bgcolor: lightTheme.palette.background.paper }}>
        {renderQuestions(questions.physics, 'Physics', 'physics')}
        {renderQuestions(questions.chemistry, 'Chemistry', 'chemistry')}
        {renderQuestions(questions.math, 'Maths', 'math')}
      </Box>
    </ThemeProvider>
  );
};

export default QuestionGrid;
