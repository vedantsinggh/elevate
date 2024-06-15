import React from 'react';
import { Box, Typography, Button, Grid, TextField, Card, CardContent, IconButton } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import FullscreenIcon from '@mui/icons-material/Fullscreen';
import FullscreenExitIcon from '@mui/icons-material/FullscreenExit';

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

const QuestionDetails = ({
  selectedQuestion,
  answer,
  setAnswer,
  handleSubmitAnswer,
  isSubmitAnswerEnabled,
  questionData,
  handleFullScreen,
  handleExitFullScreen,
  isFullScreen,
  handleMarkForReview,
  isMarkedForReview,
}) => {
  if (!selectedQuestion) return null;

  const options = ["A", "B", "C", "D"];
  const currentQuestionData = questionData.find((q) => q.id === selectedQuestion.id);

  return (
    <ThemeProvider theme={lightTheme}>
      <Card sx={{ p: 3, mb: 3 }}>
        <CardContent>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Typography variant="h6" mb={2} sx={{ color: lightTheme.palette.text.primary }}>
              Difficulty: {selectedQuestion.hardnessLevel}
            </Typography>
            <IconButton onClick={isFullScreen ? handleExitFullScreen : handleFullScreen}>
              {isFullScreen ? <FullscreenExitIcon /> : <FullscreenIcon />}
            </IconButton>
          </Box>
          {selectedQuestion.questionImage && (
            <img src={selectedQuestion.questionImage} alt="Question Image" style={{ maxHeight: '300px', width: '100%' }} />
          )}
          <Typography variant="body1" mb={2} sx={{ color: lightTheme.palette.text.primary }}>
            {selectedQuestion.questionText}
          </Typography>
          {/* For multiple choice questions */}
          {!selectedQuestion.isInteger && (
            <Grid container spacing={2} mb={4}>
              {options.map((option, index) => (
                <Grid item xs={12} sm={6} key={index}>
                  <Button
                    variant={answer === option ? 'contained' : 'outlined'}
                    onClick={() => setAnswer(option)}
                    fullWidth
                    sx={{
                      bgcolor:
                        currentQuestionData && currentQuestionData.userResponse === option ? 'green.200' : 'gray.200',
                      color: lightTheme.palette.text.primary,
                    }}
                  >
                    {option}
                  </Button>
                </Grid>
              ))}
            </Grid>
          )}
          {/* For integer type questions */}
          {selectedQuestion.isInteger && (
            <TextField
              type="number"
              placeholder="Enter your answer"
              fullWidth
              value={
                answer !== null ? answer : currentQuestionData && currentQuestionData.userResponse !== null ? currentQuestionData.userResponse : ""
              }
              onChange={(e) => setAnswer(e.target.value)}
              sx={{ mb: 4, color: lightTheme.palette.text.primary }}
            />
          )}
          <Button onClick={handleSubmitAnswer} variant="contained" color="primary" disabled={!isSubmitAnswerEnabled()}>
            Submit Answer
          </Button>
          <Button onClick={handleMarkForReview} variant="contained" color="secondary" sx={{ ml: 2 }}>
            {isMarkedForReview ? 'Unmark Review' : 'Mark for Review'}
          </Button>
        </CardContent>
      </Card>
    </ThemeProvider>
  );
};

export default QuestionDetails;
