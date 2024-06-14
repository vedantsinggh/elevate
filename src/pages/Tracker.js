import React, { useState } from 'react';
import { Box, Grid } from '@mui/material';
import SubjectTabs from '../components/SubjectTabs';
import UnitAccordion from '../components/UnitAccordion';
import StatsDisplay from '../components/StatsDisplay';
import NextTasksComponent from '../components/NextTasksComponent';
import { getNextTasks } from '../helpers/NextTaskHelper';

const subjects = [
  {
    name: 'Math',
    units: [
      {
        name: 'Algebra',
        chapters: ['Chapter 1', 'Chapter 2', 'Chapter 3'],
      },
      {
        name: 'Geometry',
        chapters: ['Chapter 1', 'Chapter 2'],
      },
    ],
  },
  {
    name: 'Physics',
    units: [
      {
        name: 'Mechanics',
        chapters: ['Chapter 1', 'Chapter 2', 'Chapter 3'],
      },
      {
        name: 'Thermodynamics',
        chapters: ['Chapter 1', 'Chapter 2'],
      },
    ],
  },
  {
    name: 'Chemistry',
    units: [
      {
        name: 'Organic Chemistry',
        chapters: ['Chapter 1', 'Chapter 2', 'Chapter 3'],
      },
      {
        name: 'Inorganic Chemistry',
        chapters: ['Chapter 1', 'Chapter 2'],
      },
    ],
  },
];

const Tracker = () => {
  const [selectedTab, setSelectedTab] = useState(0);
  const [chapterCompletion, setChapterCompletion] = useState({});

  const handleTabChange = (event, newValue) => {
    setSelectedTab(newValue);
  };

  const handleCheckboxChange = (subject, unit, chapter, task) => {
    setChapterCompletion((prevCompletion) => {
      const newCompletion = { ...prevCompletion };
      if (!newCompletion[subject]) newCompletion[subject] = {};
      if (!newCompletion[subject][unit]) newCompletion[subject][unit] = {};
      if (!newCompletion[subject][unit][chapter]) {
        newCompletion[subject][unit][chapter] = {
          lecture: false,
          practice: false,
          pyqs: false,
          test: false,
        };
      }
      newCompletion[subject][unit][chapter][task] = !newCompletion[subject][unit][chapter][task];
      return newCompletion;
    });
  };

  const calculateCompletion = (subject, unit) => {
    const unitChapters = chapterCompletion[subject]?.[unit];
    if (!unitChapters) return 0;

    const totalChapters = Object.keys(unitChapters).length;
    const completedTasks = Object.values(unitChapters).reduce(
      (acc, chapter) => acc + Object.values(chapter).filter((done) => done).length,
      0
    );

    const zeroCheckChapters = subjects
      .find(sub => sub.name === subject)
      .units.find(u => u.name === unit)
      .chapters.length - totalChapters;

    const totalTasks = (totalChapters + zeroCheckChapters) * 4; // 4 tasks per chapter
    return (completedTasks / totalTasks) * 100;
  };

  const getTotalChaptersCompleted = (subject) => {
    const subjectUnits = subjects.find(sub => sub.name === subject).units;
    let completedChapters = 0;

    subjectUnits.forEach(unit => {
      const unitChapters = chapterCompletion[subject]?.[unit.name];
      if (unitChapters) {
        Object.values(unitChapters).forEach(chapter => {
          if (Object.values(chapter).every(done => done)) {
            completedChapters++;
          }
        });
      }
    });

    return completedChapters;
  };

  const getTotalTasksCompleted = (subject) => {
    const subjectUnits = subjects.find(sub => sub.name === subject).units;
    let completedTasks = 0;

    subjectUnits.forEach(unit => {
      const unitChapters = chapterCompletion[subject]?.[unit.name];
      if (unitChapters) {
        Object.values(unitChapters).forEach(chapter => {
          completedTasks += Object.values(chapter).filter(done => done).length;
        });
      }
    });

    return completedTasks;
  };

  const nextTasks = getNextTasks(subjects, chapterCompletion);

  return (
    <Box sx={{ width: '100%' }}>
      <SubjectTabs subjects={subjects} selectedTab={selectedTab} handleTabChange={handleTabChange} />
      <Box sx={{ p: 3 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6} lg={4}>
            <StatsDisplay
              title="Total Chapters Completed"
              value={getTotalChaptersCompleted(subjects[selectedTab].name)}
            />
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <StatsDisplay
              title="Total Tasks Completed"
              value={getTotalTasksCompleted(subjects[selectedTab].name)}
            />
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <StatsDisplay
              title="Total Progress"
              value={`${Math.round(
                (getTotalTasksCompleted(subjects[selectedTab].name) / 
                (subjects[selectedTab].units.reduce((acc, unit) => acc + unit.chapters.length, 0) * 4)) * 100
              )}%`}
            />
          </Grid>
        </Grid>
        {subjects[selectedTab].units.map((unit) => (
          <UnitAccordion
            key={unit.name}
            subject={subjects[selectedTab].name}
            unit={unit}
            chapters={unit.chapters}
            chapterCompletion={chapterCompletion}
            handleCheckboxChange={handleCheckboxChange}
            calculateCompletion={calculateCompletion}
          />
        ))}
        <NextTasksComponent tasks={nextTasks} />
      </Box>
    </Box>
  );
};

export default Tracker;
