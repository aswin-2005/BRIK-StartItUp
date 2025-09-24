import React from 'react';
import './App.css';
import Nav from './nav';
import Hero from './hero';
import WhatAwaits from './what-awaits';
import WhoFuelsUs from './who-fuels-us';
import Footer from './footer';

function App() {
  return (
    <div className="App">
      <Nav />
      <Hero />
      <WhatAwaits />
      <WhoFuelsUs />
      <Footer />
    </div>
  );
}

export default App;
