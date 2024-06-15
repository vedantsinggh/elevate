import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Box, Container, Grid, Button, Typography, Paper, Drawer, IconButton, AppBar, Toolbar } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import sampleTest from '../components/testdata'; // Replace with your actual test data import
import QuestionDetails from '../components/QuestionDetails';
import QuestionGrid from '../components/QuestionGrid';
import { useTheme, useMediaQuery } from '@mui/material';

const Test = () => {
  const { testId } = useParams();
  const test = sampleTest; // Replace with logic to fetch test by ID
  const [currentQuestion, setCurrentQuestion] = useState(null);
  const [selectedSubject, setSelectedSubject] = useState('physics');
  const [answer, setAnswer] = useState(null);
  const [questionData, setQuestionData] = useState([]);
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [markedForReview, setMarkedForReview] = useState([]);
  const [timeSpent, setTimeSpent] = useState(0);
  const [questionTimers, setQuestionTimers] = useState({});
  const [drawerOpen, setDrawerOpen] = useState(false);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  useEffect(() => {
    if (test.subjects[selectedSubject].length > 0) {
      setCurrentQuestion(test.subjects[selectedSubject][0]);
    }

    const handleBeforeUnload = (event) => {
      event.preventDefault();
      event.returnValue = 'Are you sure you want to leave? Your progress will be lost.';
    };

    window.addEventListener('beforeunload', handleBeforeUnload);

    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, [test, selectedSubject]);

  useEffect(() => {
    let timer;
    if (currentQuestion) {
      timer = setInterval(() => {
        setTimeSpent((prevTime) => prevTime + 1);
      }, 1000);
    }
    return () => {
      clearInterval(timer);
    };
  }, [currentQuestion]);

  const handleFullScreen = () => {
    const docElm = document.documentElement;
    if (docElm.requestFullscreen) {
      docElm.requestFullscreen();
    } else if (docElm.mozRequestFullScreen) {
      docElm.mozRequestFullScreen();
    } else if (docElm.webkitRequestFullScreen) {
      docElm.webkitRequestFullScreen();
    } else if (docElm.msRequestFullscreen) {
      docElm.msRequestFullscreen();
    }
    setIsFullScreen(true);
  };

  const handleExitFullScreen = () => {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.mozCancelFullScreen) {
      document.mozCancelFullScreen();
    } else if (document.webkitExitFullScreen) {
      document.webkitExitFullScreen();
    } else if (document.msExitFullscreen) {
      document.msExitFullscreen();
    }
    setIsFullScreen(false);
  };

  const handleQuestionClick = (question, subject) => {
    setQuestionTimers((prevTimers) => ({
      ...prevTimers,
      [currentQuestion.id]: (prevTimers[currentQuestion.id] || 0) + timeSpent,
    }));
    setCurrentQuestion(question);
    setSelectedSubject(subject);
    setTimeSpent(0);
    if (isMobile) setDrawerOpen(false);
  };

  const handleInputChange = (event) => {
    setAnswer(event.target.value);
  };

  const handleSubmitAnswer = () => {
    setQuestionData((prevData) => {
      const existingData = prevData.find((data) => data.id === currentQuestion.id);
      if (existingData) {
        return prevData.map((data) =>
          data.id === currentQuestion.id ? { ...data, userResponse: answer } : data
        );
      } else {
        return [
          ...prevData,
          {
            id: currentQuestion.id,
            userResponse: answer,
            visited: true,
            correctAnswer: currentQuestion.correctAnswer,
            idleTime: questionTimers[currentQuestion.id] || timeSpent,
            subject: selectedSubject,
            questionNumber: test.subjects[selectedSubject].indexOf(currentQuestion) + 1
          },
        ];
      }
    });
    setAnswer(null);
  };

  const handleMarkForReview = () => {
    setMarkedForReview((prev) => {
      if (prev.includes(currentQuestion.id)) {
        return prev.filter((id) => id !== currentQuestion.id);
      } else {
        return [...prev, currentQuestion.id];
      }
    });
  };

  const isMarkedForReview = (questionId) => {
    return markedForReview.includes(questionId);
  };

  const handleSubmitTest = () => {
    if (window.confirm('Are you sure you want to submit the test?')) {
      const finalData = questionData.map((data) => ({
        ...data,
        idleTime: questionTimers[data.id] || 0,
        userResponse: data.userResponse !== null ? data.userResponse : null
      }));
      console.log(JSON.stringify(finalData, null, 2));
      alert('Test submitted!');
    }
  };

  const isSubmitAnswerEnabled = () => {
    return answer !== null;
  };

  const getQuestionStatus = (question) => {
    if (question.id === currentQuestion?.id) return 'yellow';
    const currentQuestionData = questionData.find((q) => q.id === question.id);
    if (isMarkedForReview(question.id)) return 'purple';
    if (currentQuestionData) {
      if (currentQuestionData.userResponse) return 'green';
      return 'red';
    }
    return 'transparent';
  };

  return (
    <Container maxWidth="xl" sx={{ mt: 8 }}>
      {isMobile && (
        <AppBar position="fixed">
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              aria-label="open drawer"
              onClick={() => setDrawerOpen(true)}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" noWrap>
              Test
            </Typography>
          </Toolbar>
        </AppBar>
      )}
      <Grid container spacing={4} sx={{ mt: isMobile ? 10 : 0 }}>
        <Grid item xs={12} md={9}>
          <QuestionDetails
            selectedQuestion={currentQuestion}
            answer={answer}
            setAnswer={setAnswer}
            handleSubmitAnswer={handleSubmitAnswer}
            isSubmitAnswerEnabled={isSubmitAnswerEnabled}
            questionData={questionData}
            handleFullScreen={handleFullScreen}
            handleExitFullScreen={handleExitFullScreen}
            isFullScreen={isFullScreen}
            handleMarkForReview={handleMarkForReview}
            isMarkedForReview={isMarkedForReview(currentQuestion?.id)}
          />
          <Box sx={{ mt: 2 }}>
            <Button variant="contained" color="secondary" onClick={handleSubmitTest}>
              Submit Test
            </Button>
          </Box>
        </Grid>
        <Grid item xs={12} md={3}>
          {isMobile ? (
            <Drawer anchor="left" open={drawerOpen} onClose={() => setDrawerOpen(false)}>
              <Box sx={{ width: 250 }}>
                <QuestionGrid
                  questions={test.subjects}
                  handleQuestionClick={handleQuestionClick}
                  selectedQuestion={currentQuestion}
                  questionData={questionData}
                  markedForReview={markedForReview}
                  getQuestionStatus={getQuestionStatus}
                />
              </Box>
            </Drawer>
          ) : (
            <Paper sx={{ p: 2 }}>
              <Typography variant="h6" mb={2}>
                Question Grid
              </Typography>
              <QuestionGrid
                questions={test.subjects}
                handleQuestionClick={handleQuestionClick}
                selectedQuestion={currentQuestion}
                questionData={questionData}
                markedForReview={markedForReview}
                getQuestionStatus={getQuestionStatus}
              />
            </Paper>
          )}
        </Grid>
      </Grid>
    </Container>
  );
};

export default Test;
