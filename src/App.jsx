import React from 'react'
import Header from './components/header/Header';
import Nav from './components/nav/Nav';
import About from './components/about/About';
import Experience from './components/experience/Experience';
import Services from './components/services/Services';
import Certificate from './components/certificate/Certificate';
import Portfolio from './components/portfolio/Portfolio';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import Loader from './components/loader/Loader';

import { useState, useEffect } from 'react';
const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {

    setTimeout(() => {
      setIsLoading(false);
    }, 5000);
  }, []);

  return (
    <>
    {isLoading ? (
      <Loader/>
    ) : (
      <>
        <Nav />
        <Header />
        <About />
        <Experience />
        <Services />
        <Certificate />
        <Portfolio />
        <Contact />
        <Footer />
      </>
    )}
  </>
  )
}

export default App;