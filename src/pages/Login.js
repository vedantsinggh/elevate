import React, { useEffect } from 'react';
import { Button, Container, Typography, Box } from '@mui/material';
import { signInWithPopup, GoogleAuthProvider, onAuthStateChanged } from 'firebase/auth';
import { auth, db, doc, getDoc, setDoc } from '../firebase';
import { useNavigate } from 'react-router-dom';
import { useTheme, createTheme, ThemeProvider } from '@mui/material/styles';
import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';

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
  const theme = useTheme();

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

  const lightModeTheme = createTheme({
    palette: {
      mode: 'light',
    },
  });

  // Animation keyframes
  const fadeIn = keyframes`
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  `;

  const slideIn = keyframes`
    from {
      transform: translateY(-20px);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  `;

  const StyledBox = styled(Box)`
    animation: ${slideIn} 1s ease-out;
  `;

  const StyledTypography = styled(Typography)`
    animation: ${fadeIn} 1.5s ease-in;
  `;

  const StyledButton = styled(Button)`
    animation: ${fadeIn} 2s ease-in;
    &:hover {
      transform: scale(1.05);
      transition: transform 0.3s ease-in-out;
    }
  `;

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        backgroundImage: `linear-gradient(to right, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
      }}
    >
      <Container maxWidth="sm" sx={{ textAlign: 'center' }}>
        <ThemeProvider theme={lightModeTheme}>
          <StyledBox
            sx={{
              bgcolor: 'background.paper',
              p: 4,
              borderRadius: 2,
              boxShadow: 3,
            }}
          >
            <StyledTypography variant="h4" gutterBottom>
              Welcome to JEE Tracker
            </StyledTypography>
            <StyledTypography variant="subtitle1" gutterBottom>
              Please log in to continue
            </StyledTypography>
            <StyledButton
              variant="contained"
              onClick={handleLogin}
              sx={{
                mt: 2,
                background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
                borderRadius: 3,
                boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
                '&:hover': {
                  background: 'linear-gradient(45deg, #FF8E53 30%, #FE6B8B 90%)',
                },
              }}
            >
              Login with Google
            </StyledButton>
          </StyledBox>
        </ThemeProvider>
      </Container>
    </Box>
  );
};

export default Login;
