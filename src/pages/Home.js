// src/pages/Home.js
import React from 'react';
import { Box } from '@mui/material';
import Header from '../components/Header';
import HeroSection from '../components/Hero';
import AboutUs from '../components/AboutUs';
import OurMentors from '../components/OurMentors';
import PricingCards from '../components/Pricing';
import Testomonial from '../components/Testomonials'
import ContactUs from '../components/ContactUs';
import Footer from '../components/Footer';
import ResultsShowcase from '../components/ResultsShowcase';

const Home = () => {
  return (
    <Box>
      <Header />
      <HeroSection />
      <AboutUs />
      <Testomonial/>
      <ResultsShowcase/>
      <OurMentors />
      <PricingCards />
      <ContactUs />
      <Footer/>
    </Box>
  );
};

export default Home;
