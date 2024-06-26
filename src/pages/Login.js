import React, { useState, useEffect } from 'react';
import { Box, Container, Typography, Button, TextField, MenuItem, FormControl, InputLabel, Select, CircularProgress } from '@mui/material';
import { auth, db, doc, getDoc, setDoc } from '../firebase';
import { onAuthStateChanged, signInWithPopup, GoogleAuthProvider, getAuth} from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import styled from 'styled-components';

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

const initializeUserData = async (userId, userData) => {
  const userDocRef = doc(db, 'users', userId);
  const userDoc = await getDoc(userDocRef);
  if (!userDoc.exists()) {
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

    await setDoc(userDocRef, { chapterCompletion, ...userData });
  }
};

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#bb86fc',
    },
    secondary: {
      main: '#03dac6',
    },
    background: {
      paper: '#121212',
      default: '#121212',
    },
  },
});

const StyledContainer = styled(Container)`
  text-align: center;
  background-color: ${(props) => props.theme.palette.background.paper};
  border-radius: 16px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
  padding: 2rem;
  max-width: 400px;
`;

const StyledTextField = styled(TextField)`
  & label.Mui-focused {
    color: white;
  }
  & .MuiInput-underline:after {
    border-bottom-color: white;
  }
  & .MuiOutlinedInput-root {
    & fieldset {
      border-color: white;
    }
    &:hover fieldset {
      border-color: white;
    }
    &.Mui-focused fieldset {
      border-color: white;
    }
  }
`;

const Login = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [selectedClass, setSelectedClass] = useState('');
  const [loading, setLoading] = useState(false);
  const [isNewUser, setIsNewUser] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        localStorage.setItem('user', JSON.stringify(user));
        const userDocRef = doc(db, 'users', user.uid);
        const userDoc = await getDoc(userDocRef);
        if (userDoc.exists()) {
          navigate('/dashboard/home');
        } else {
          setIsNewUser(true);
        }
      } else {
        localStorage.removeItem('user');
      }
    });
    return () => unsubscribe();
  }, [navigate]);

  const handleLogin = async () => {
    setLoading(true);
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      const userDocRef = doc(db, 'users', user.uid);
      const userDoc = await getDoc(userDocRef);
      if (!userDoc.exists()) {
        setIsNewUser(true);
      } else {
        localStorage.setItem('user', JSON.stringify(user));
        navigate('/dashboard/home');
      }
    } catch (error) {
      console.error('Error signing in with Google:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleSaveDetails = async () => {
    if (!phoneNumber || !selectedClass) {
      alert('Please fill in all required fields.');
      return;
    }

    setLoading(true);
    const auth = getAuth();
    const user = auth.currentUser;
    const userData = {
      name: user.displayName || '',
      email: user.email || '',
      phoneNumber: phoneNumber,
      class: selectedClass,
    };
    await initializeUserData(user.uid, userData);
    localStorage.setItem('user', JSON.stringify(user));
    navigate('/dashboard/home');
    setLoading(false);
  };

  return (
    <ThemeProvider theme={darkTheme}>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: '100vh',
          backgroundImage: 'linear-gradient(to right, #5b2c91, #9c27b0)',
        }}
      >
        <StyledContainer theme={darkTheme}>
          <Typography variant="h4" gutterBottom color="primary">
            Welcome to JEE Elevate
          </Typography>
          <Typography variant="subtitle1" gutterBottom color="textSecondary">
            Please log in to continue
          </Typography>
          {loading && <CircularProgress />}
          {!isNewUser ? (
            <Button
              id="sign-in-button"
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
              Sign In with Google
            </Button>
          ) : (
            <>
              <StyledTextField
                fullWidth
                label="Phone Number"
                variant="outlined"
                margin="normal"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                InputLabelProps={{ style: { color: 'white' } }}
                InputProps={{ style: { color: 'white' } }}
              />
              <FormControl fullWidth margin="normal">
                <InputLabel sx={{ color: 'white' }}>Class</InputLabel>
                <Select
                  value={selectedClass}
                  onChange={(e) => setSelectedClass(e.target.value)}
                  label="Class"
                  sx={{ color: 'white', '& .MuiOutlinedInput-root': { '& fieldset': { borderColor: 'white' }, '&:hover fieldset': { borderColor: 'white' }, '&.Mui-focused fieldset': { borderColor: 'white' } } }}
                >
                  <MenuItem value={'11th'}>11th</MenuItem>
                  <MenuItem value={'12th'}>12th</MenuItem>
                  <MenuItem value={'dropper'}>Dropper</MenuItem>
                </Select>
              </FormControl>
              <Button
                variant="contained"
                onClick={handleSaveDetails}
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
                Save Details
              </Button>
            </>
          )}
        </StyledContainer>
      </Box>
    </ThemeProvider>
  );
};

export default Login;
