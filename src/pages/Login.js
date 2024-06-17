import React, { useEffect } from 'react';
import { Button, Container, Typography, Box, CircularProgress } from '@mui/material';
import { signInWithPopup, GoogleAuthProvider, onAuthStateChanged } from 'firebase/auth';
import { auth, db, doc, getDoc, setDoc } from '../firebase';
import { useNavigate } from 'react-router-dom';

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

const initializeUserData = async (userId) => {
  const userDocRef = doc(db, 'users', userId);

  // Check if user document already exists
  const userDoc = await getDoc(userDocRef);
  if (!userDoc.exists()) {
    // Initialize user data with default values
    const chapterCompletion = {};
    subjects.forEach(subject => {
      chapterCompletion[subject.name] = {};
      subject.units.forEach(unit => {
        chapterCompletion[subject.name][unit.name] = {};
        unit.chapters.forEach(chapter => {
          chapterCompletion[subject.name][unit.name][chapter] = {
            lecture: false,
            practice: false,
            pyqs: false,
            test: false,
          };
        });
      });
    });

    await setDoc(userDocRef, { chapterCompletion });
  }
};

const Login = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        localStorage.setItem('user', JSON.stringify(user));
        navigate('/dashboard/home');
      } else {
        localStorage.removeItem('user');
      }
    });

    return () => unsubscribe();
  }, [navigate]);

  const handleLogin = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      await initializeUserData(user.uid);
      localStorage.setItem('user', JSON.stringify(user));
      navigate('/dashboard/home');
    } catch (error) {
      console.error('Error signing in with Google', error);
    }
  };

  return (
    <Container maxWidth="sm" sx={{ textAlign: 'center', marginTop: '20vh' }}>
      <Box sx={{ bgcolor: 'background.paper', p: 4, borderRadius: 2, boxShadow: 3 }}>
        <Typography variant="h4" gutterBottom>
          Welcome to JEE Tracker
        </Typography>
        <Typography variant="subtitle1" gutterBottom>
          Please log in to continue
        </Typography>
        <Button
          variant="contained"
          color="primary"
          onClick={handleLogin}
          sx={{
            mt: 2,
            background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
            borderRadius: 3,
            boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
          }}
        >
          Login with Google
        </Button>
      </Box>
    </Container>
  );
};

export default Login;
