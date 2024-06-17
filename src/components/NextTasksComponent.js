// src/components/NextTasksComponent.js
import React from 'react';
import { List, ListItem, ListItemText, Typography } from '@mui/material';

const taskEmojis = {
  lecture: '🎓',
  practice: '✏️',
  pyqs: '📚',
  test: '📝',
};

const NextTasksComponent = ({ tasks }) => {
  return (
    <div>
      <Typography variant="h6" gutterBottom>
        Top 5 Tasks
      </Typography>
      <List>
        {tasks.map((task, index) => (
          <ListItem key={index}>
            <ListItemText
              primary={`${taskEmojis[task.task]} ${task.subject} - ${task.unit} - ${task.chapter} (${task.task})`}
            />
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default NextTasksComponent;
