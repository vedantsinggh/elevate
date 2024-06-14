import React from 'react';
import { Accordion, AccordionSummary, AccordionDetails, Typography, Box, LinearProgress } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ChapterCheckboxes from './ChapterCheckboxes';
import { styled } from '@mui/system';

const StyledAccordion = styled(Accordion)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'light' ? '#f9f9f9' : '#2c2c2c',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  borderRadius: '8px',
  marginBottom: '10px',
}));

const StyledAccordionSummary = styled(AccordionSummary)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'light' ? '#ffffff' : '#1d1d1d',
  borderBottom: `1px solid ${theme.palette.divider}`,
  borderRadius: '8px 8px 0 0',
  '& .MuiAccordionSummary-content': {
    alignItems: 'center',
  },
}));

const ProgressBox = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  width: '30%',
  marginLeft: 'auto',
});

const StyledAccordionDetails = styled(AccordionDetails)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'light' ? '#ffffff' : '#1d1d1d',
}));

const UnitAccordion = ({ subject, unit, chapters, chapterCompletion, handleCheckboxChange, calculateCompletion }) => {
  return (
    <StyledAccordion>
      <StyledAccordionSummary expandIcon={<ExpandMoreIcon />}>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>{unit.name}</Typography>
        <ProgressBox>
          <LinearProgress
            variant="determinate"
            value={calculateCompletion(subject, unit.name)}
            sx={{
              height: 10,
              borderRadius: 5,
              flexGrow: 1,
              marginRight: 2,
            }}
          />
          <Typography variant="body2" sx={{ minWidth: 35 }}>
            {calculateCompletion(subject, unit.name).toFixed(0)}%
          </Typography>
        </ProgressBox>
      </StyledAccordionSummary>
      <StyledAccordionDetails>
        {chapters.map((chapter) => (
          <ChapterCheckboxes
            key={chapter}
            subject={subject}
            unit={unit.name}
            chapter={chapter}
            chapterCompletion={chapterCompletion}
            handleCheckboxChange={handleCheckboxChange}
          />
        ))}
      </StyledAccordionDetails>
    </StyledAccordion>
  );
};

export default UnitAccordion;
