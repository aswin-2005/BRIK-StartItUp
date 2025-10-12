import React from 'react';
import Nav from './nav';
import Hero from './hero';
import WhatAwaits from './what-awaits';
import WhoFuelsUs from './who-fuels-us';
import Footer from './footer';

function Home() {
  return (
    <div className="App">
      <Nav page="home"/>
      <Hero />
      <WhatAwaits />
      <WhoFuelsUs />
      <Footer />
    </div>
  );
}

export default Home;