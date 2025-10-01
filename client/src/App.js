import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';  // Rename your existing App component to AppHome
import Program from './program';

function App() {
  return (
    <Router>
      <Routes>
        {/* Home page */}
        <Route path="/" element={<Home />} />

        {/* Program page */}
        <Route path="/program" element={<Program />} />
      </Routes>
    </Router>
  );
}

export default App;