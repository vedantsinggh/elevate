import React from 'react';
import { Box, Typography, Paper, Chip, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Button } from '@mui/material';
import { styled } from '@mui/system';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import EventIcon from '@mui/icons-material/Event';
import ScheduleIcon from '@mui/icons-material/Schedule';
import { School, EmojiEvents } from '@mui/icons-material';

const CardContainer = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(2),
  marginBottom: theme.spacing(2),
  borderRadius: '12px',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  backgroundColor: theme.palette.mode === 'light' ? '#f9f9f9' : '#2c2c2c',
  position: 'relative',
  overflow: 'hidden',
  cursor: 'pointer',
  '&:hover': {
    boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)',
  },
}));

const BannerTag = styled(Box)(({ theme, level }) => ({
  position: 'absolute',
  bottom: 0,
  right: 0,
  backgroundColor: level === 'Easy' ? '#4caf50' : level === 'Medium' ? '#ff9800' : '#f44336',
  color: theme.palette.getContrastText(level === 'Easy' ? '#4caf50' : level === 'Medium' ? '#ff9800' : '#f44336'),
  padding: theme.spacing(1),
  borderTopLeftRadius: '8px',
  fontWeight: 'bold',
  fontSize: '0.75rem',
  textTransform: 'uppercase',
}));

const TestCard = ({ test }) => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleStartTest = () => {
    window.open(`/test/${test.testId}`, '_blank');
    handleClose();
  };

  return (
    <CardContainer elevation={3} onClick={handleClickOpen}>
      <BannerTag level={test.level}>{test.level}</BannerTag>
      <Typography variant="h5" gutterBottom>
        {test.name} {test.tag === 'JEE Mains' ? '📘' : '📙'}
      </Typography>
      <Typography variant="body1" gutterBottom>
        <strong>Syllabus:</strong> {test.syllabus}
      </Typography>
      <Box display="flex" alignItems="center" mb={1}>
        <EventIcon fontSize="small" style={{ marginRight: '8px' }} />
        <Typography variant="body2">
          <strong>Date:</strong> {test.date}
        </Typography>
      </Box>
      <Box display="flex" alignItems="center" mb={1}>
        <ScheduleIcon fontSize="small" style={{ marginRight: '8px' }} />
        <Typography variant="body2">
          <strong>Time:</strong> {test.time}
        </Typography>
      </Box>
      <Box display="flex" alignItems="center" mb={1}>
        <AccessTimeIcon fontSize="small" style={{ marginRight: '8px' }} />
        <Typography variant="body2">
          <strong>Duration:</strong> {test.duration}
        </Typography>
      </Box>
      <Typography variant="body2" gutterBottom>
        <strong>Available:</strong> {test.canTakeAnytime ? 'Anytime ⏰' : 'Scheduled ⏰'}
      </Typography>
      <Chip
        label={test.tag}
        color={test.tag === 'JEE Mains' ? 'primary' : 'secondary'}
        icon={test.tag === 'JEE Mains' ? <School /> : <EmojiEvents />}
        sx={{ marginTop: '8px' }}
      />
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Start Test Confirmation"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Are you sure you want to start the test "{test.name}"?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleStartTest} color="primary" autoFocus>
            Start Test
          </Button>
        </DialogActions>
      </Dialog>
    </CardContainer>
  );
};

export default TestCard;
