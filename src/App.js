import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CssBaseline } from '@mui/material';
import Home from './pages/Home';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import DashboardHome from './pages/DashboardHome';
import Tracker from './pages/Tracker';
import { ThemeContextProvider } from './context/ThemeContext';
import TestsPage from './pages/TestsPage';

function App() {
  return (
    <ThemeContextProvider>
      <Router>
        <CssBaseline />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard/*" element={<Dashboard />}>
            <Route path="home" element={<DashboardHome />} />
            <Route path="tracker" element={<Tracker />} />
            <Route path="tests" element={<TestsPage />} />
          </Route>
        </Routes>
      </Router>
    </ThemeContextProvider>
  );
}

export default App;
