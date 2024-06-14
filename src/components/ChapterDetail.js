import React, { useState } from 'react';
import { Box, Typography, TextField, Button } from '@mui/material';
import { styled } from '@mui/system';

const NoteBox = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'light' ? '#f9f9f9' : '#2c2c2c',
  padding: theme.spacing(2),
  borderRadius: '12px',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  marginBottom: theme.spacing(2),
}));

const ChapterDetail = ({ subject, unit, chapter, notes, setNotes }) => {
  const [note, setNote] = useState('');

  const handleAddNote = () => {
    setNotes(prevNotes => ({
      ...prevNotes,
      [subject]: {
        ...prevNotes[subject],
        [unit]: {
          ...prevNotes[subject][unit],
          [chapter]: [...(prevNotes[subject][unit][chapter] || []), note]
        }
      }
    }));
    setNote('');
  };

  return (
    <NoteBox>
      <Typography variant="h6" sx={{ fontWeight: 'bold', marginBottom: 2 }}>
        {chapter} - {unit} - {subject}
      </Typography>
      <TextField
        label="Add Note"
        variant="outlined"
        fullWidth
        value={note}
        onChange={(e) => setNote(e.target.value)}
        sx={{ marginBottom: 2 }}
      />
      <Button variant="contained" color="primary" onClick={handleAddNote}>
        Add Note
      </Button>
      <Box sx={{ marginTop: 2 }}>
        <Typography variant="subtitle1" sx={{ fontWeight: 'bold', marginBottom: 1 }}>
          Notes:
        </Typography>
        {notes[subject]?.[unit]?.[chapter]?.map((note, index) => (
          <Typography key={index} variant="body2" sx={{ marginBottom: 1 }}>
            {note}
          </Typography>
        ))}
      </Box>
    </NoteBox>
  );
};

export default ChapterDetail;
