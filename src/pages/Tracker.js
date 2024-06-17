import React, { useState, useEffect } from 'react';
import { Box, Grid, Typography } from '@mui/material';
import { doc, getDoc, setDoc, updateDoc } from 'firebase/firestore';
import { onAuthStateChanged } from 'firebase/auth';
import { db, auth } from '../firebase'; // Import Firestore and Auth
import SubjectTabs from '../components/SubjectTabs';
import UnitAccordion from '../components/UnitAccordion';
import StatsDisplay from '../components/StatsDisplay';
import NextTasksComponent from '../components/NextTasksComponent';
import { getNextTasks } from '../helpers/NextTaskHelper';

const subjects = [
  {
    name: 'Math',
    units: [
      { name: 'Algebra', chapters: ['Quadratic Equations', 'Sequences and Series', 'Complex Numbers', 'Binomial Theorem', 'Matrices and Determinants'] },
      { name: 'Calculus', chapters: ['Limits, Continuity and Differentiability', 'Applications of Derivatives', 'Integrals', 'Applications of Integrals', 'Differential Equations'] },
      { name: 'Coordinate Geometry', chapters: ['Straight Lines', 'Circles', 'Parabolas', 'Ellipses', 'Hyperbolas'] },
      { name: 'Trigonometry', chapters: ['Trigonometric Ratios and Identities', 'Trigonometric Equations', 'Properties of Triangles'] },
      { name: 'Vectors and 3D Geometry', chapters: ['Vectors', 'Three-dimensional Geometry'] },
      { name: 'Statistics and Probability', chapters: ['Measures of Central Tendency and Dispersion', 'Probability'] }
    ],
  },
  {
    name: 'Physics',
    units: [
      { name: 'Mechanics', chapters: ['Kinematics', 'Laws of Motion', 'Work, Energy and Power', 'Rotational Motion', 'Gravitation'] },
      { name: 'Thermodynamics', chapters: ['Thermal Properties of Matter', 'Thermodynamics', 'Kinetic Theory of Gases'] },
      { name: 'Electrodynamics', chapters: ['Electrostatics', 'Current Electricity', 'Magnetism', 'Electromagnetic Induction', 'Alternating Current'] },
      { name: 'Optics', chapters: ['Ray Optics', 'Wave Optics'] },
      { name: 'Modern Physics', chapters: ['Dual Nature of Matter and Radiation', 'Atoms and Nuclei', 'Electronic Devices'] },
    ],
  },
  {
    name: 'Chemistry',
    units: [
      { name: 'Physical Chemistry', chapters: ['Some Basic Concepts in Chemistry', 'States of Matter', 'Atomic Structure', 'Chemical Bonding and Molecular Structure', 'Thermodynamics', 'Equilibrium', 'Redox Reactions', 'Electrochemistry', 'Chemical Kinetics', 'Surface Chemistry'] },
      { name: 'Inorganic Chemistry', chapters: ['Periodic Table and Periodicity in Properties', 'Chemical Bonding and Molecular Structure', 'Coordination Compounds', 'Environmental Chemistry', 'General Principles and Processes of Isolation of Metals', 'Hydrogen', 's-Block Elements', 'p-Block Elements', 'd- and f-Block Elements'] },
      { name: 'Organic Chemistry', chapters: ['Basic Principles of Organic Chemistry', 'Hydrocarbons', 'Haloalkanes and Haloarenes', 'Alcohols, Phenols and Ethers', 'Aldehydes, Ketones and Carboxylic Acids', 'Organic Compounds Containing Nitrogen', 'Biomolecules', 'Polymers', 'Chemistry in Everyday Life'] },
    ],
  }
];

const Tracker = () => {
  const [selectedTab, setSelectedTab] = useState(0);
  const [chapterCompletion, setChapterCompletion] = useState({});
  const [nextTasks, setNextTasks] = useState([]);
  const [notes, setNotes] = useState({});
  const [userId, setUserId] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUserId(user.uid);
      } else {
        // Handle the case where the user is not authenticated
      }
    });

    return () => unsubscribe();
  }, []);

  useEffect(() => {
    if (userId) {
      const fetchData = async () => {
        const userDocRef = doc(db, 'users', userId);
        const userDoc = await getDoc(userDocRef);
        if (userDoc.exists()) {
          setChapterCompletion(userDoc.data().chapterCompletion || {});
        }
      };
      fetchData();
    }
  }, [userId]);

  useEffect(() => {
    setNextTasks(getNextTasks(subjects, chapterCompletion));
  }, [chapterCompletion]);

  const handleTabChange = (event, newValue) => {
    setSelectedTab(newValue);
  };

  const handleCheckboxChange = async (subject, unit, chapter, task) => {
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
      updateFirestore(newCompletion);
      return newCompletion;
    });
  };

  const updateFirestore = async (newCompletion) => {
    if (userId) {
      const userDocRef = doc(db, 'users', userId);
      await updateDoc(userDocRef, { chapterCompletion: newCompletion });
    }
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
      .find((sub) => sub.name === subject)
      .units.find((u) => u.name === unit).chapters.length - totalChapters;

    const totalTasks = (totalChapters + zeroCheckChapters) * 4; // 4 tasks per chapter
    return (completedTasks / totalTasks) * 100;
  };

  const getTotalChaptersCompleted = (subject) => {
    const subjectUnits = subjects.find((sub) => sub.name === subject).units;
    let completedChapters = 0;

    subjectUnits.forEach((unit) => {
      const unitChapters = chapterCompletion[subject]?.[unit.name];
      if (unitChapters) {
        Object.values(unitChapters).forEach((chapter) => {
          if (Object.values(chapter).every((done) => done)) {
            completedChapters++;
          }
        });
      }
    });

    return completedChapters;
  };

  const getTotalTasksCompleted = (subject) => {
    const subjectUnits = subjects.find((sub) => sub.name === subject).units;
    let completedTasks = 0;

    subjectUnits.forEach((unit) => {
      const unitChapters = chapterCompletion[subject]?.[unit.name];
      if (unitChapters) {
        Object.values(unitChapters).forEach((chapter) => {
          completedTasks += Object.values(chapter).filter((done) => done).length;
        });
      }
    });

    return completedTasks;
  };

  return (
    <Box sx={{ width: '100%', paddingTop: '64px' }}> {/* Added padding at the top */}
      <SubjectTabs subjects={subjects} selectedTab={selectedTab} handleTabChange={handleTabChange} />
      <Box sx={{ p: 3 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6} lg={4}>
            <StatsDisplay title="Total Chapters Completed 📘" value={getTotalChaptersCompleted(subjects[selectedTab].name)} />
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <StatsDisplay title="Total Tasks Completed ✅" value={getTotalTasksCompleted(subjects[selectedTab].name)} />
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <StatsDisplay
              title="Total Progress 📊"
              value={`${Math.round(
                (getTotalTasksCompleted(subjects[selectedTab].name) /
                  (subjects[selectedTab].units.reduce((acc, unit) => acc + unit.chapters.length, 0) * 4)) *
                100
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
