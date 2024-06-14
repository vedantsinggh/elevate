import React from 'react';
import { Box, Typography, Paper, List, ListItem, ListItemText, ListItemIcon } from '@mui/material';
import { styled } from '@mui/system';
import { School, Build, QuestionAnswer, CheckCircle } from '@mui/icons-material';

const TaskPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(2),
  backgroundColor: theme.palette.mode === 'light' ? '#f9f9f9' : '#2c2c2c',
  borderRadius: '12px',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  marginBottom: theme.spacing(2),
}));

const taskIcons = {
  Lecture: <School style={{ color: '#4caf50' }} />,
  Practice: <Build style={{ color: '#ff9800' }} />,
  PYQs: <QuestionAnswer style={{ color: '#3f51b5' }} />,
  Test: <CheckCircle style={{ color: '#f44336' }} />,
};

const NextTasksComponent = ({ tasks }) => {
  return (
    <TaskPaper elevation={3}>
      <Typography variant="h6" sx={{ fontWeight: 'bold', marginBottom: 2 }}>
        Top 5 Tasks to Do Next
      </Typography>
      <List>
        {tasks.map((task, index) => (
          <ListItem key={index}>
            <ListItemIcon>
              {taskIcons[task.task]}
            </ListItemIcon>
            <ListItemText
              primary={`${task.task} for ${task.chapter} (${task.unit} - ${task.subject})`}
              primaryTypographyProps={{ style: { fontWeight: 'bold' } }}
            />
          </ListItem>
        ))}
      </List>
    </TaskPaper>
  );
};

export default NextTasksComponent;
