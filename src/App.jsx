import React from 'react';
import './App.css';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { FeaturesSection } from './components/FeaturesSection';
import { AdvantagesSection } from './components/AdvantagesSection';
import { TestimonialSection } from './components/TestimonialSection';
import { FAQSection } from './components/FAQSection';
import { DownloadSection } from './components/DownloadSection';
import { Footer } from './components/Footer';

function App() {
  return (
    <>
    <Header/>
    <HeroSection/>
    <FeaturesSection/>
    <AdvantagesSection/>
    <TestimonialSection/>
    <FAQSection/>
    <DownloadSection/>
    <Footer/>
    </>



  );
}

export default App;
