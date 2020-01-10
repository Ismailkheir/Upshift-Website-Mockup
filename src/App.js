import React from 'react';
import './App.css';
import Nav from './components/Nav'
import Header from './components/Header'
import Logos from './components/Logos'
import AboutUs from './components/AboutUs'
import How from './components/How'
import Process from './components/Process'
import ServiceZone from './components/ServiceZone'
import Pricing from './components/Pricing'
import TheCar from './components/TheCar'
import Footer from './components/Footer'

function App() {
  return( 
    <>
    <Nav />
    <Header />
    <Logos />
    <AboutUs />
    <How />
    <Process />
    <ServiceZone />
    <Pricing />
    <TheCar />
    <Footer />
    </>
  );
}

export default App;
