import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import DashboardHome from './pages/DashboardHome';
import Tracker from './pages/Tracker';
import TestsPage from './pages/TestsPage';
import { ThemeContextProvider } from './context/ThemeContext';
import Test from './pages/Test'; // Ensure this import is correct
import PrivateRoute from './components/PrivateRoute';

function App() {
  return (
    <ThemeContextProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route element={<PrivateRoute />}>
            <Route path="/dashboard" element={<Dashboard />}>
              <Route index element={<Navigate to="home" />} />
              <Route path="home" element={<DashboardHome />} />
              <Route path="tracker" element={<Tracker />} />
              <Route path="tests" element={<TestsPage />} />
            </Route>
            <Route path="/test/:testId" element={<Test />} /> {/* Ensure this route is correct */}
          </Route>
        </Routes>
      </Router>
    </ThemeContextProvider>
  );
}

export default App;
