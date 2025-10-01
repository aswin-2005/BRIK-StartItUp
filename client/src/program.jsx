import React from 'react';
import Nav from './nav';
import HowItWorks from './howItWorks';
import Program from './Progrsm';
import Footer from './footer';

function Programs() {
  return (
    <div className="program" id="program">
      <Nav />
      <Program />
      <HowItWorks />
      <Footer />
    </div>
  );
}

export default Programs;
