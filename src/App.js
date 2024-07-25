import React from 'react'
import Brand from './components/brand/Brand';
import CTA from './components/cta/CTA';
import Navbar from './components/navbar/Navbar';
import "./App.css";
import { Footer, Blog, Possibility, Features, WhatGPT3, Header } from './containers';

const App = () => (
  <div className="App">
    <div className="gradient__bg">
      <Navbar />
      <Header />
    </div>
    <Brand />
    <WhatGPT3 />
    <Features />
    <Possibility />
    <CTA />
    <Blog />
    <Footer />
  </div>
);

export default App;