import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Program from './program';
import Mentors from "./mentors"

function App() {
  return (
    <Router>
      <Routes>
        {/* Home page */}
        <Route path="/" element={<Home />} />

        {/* Program page */}
        <Route path="/program" element={<Program />} />

        {/* Mentors Page */}
        <Route path="/mentors" element={<Mentors />} />
      </Routes>
    </Router>
  );
}

export default App;