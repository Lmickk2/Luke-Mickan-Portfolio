import React, { useState, useEffect } from "react";
import './App.css';
import './Style.css'
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import Projects from "./Components/Projects/Projects";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from "react-router-dom";
import SkullPatrol from "./Components/Projects/SkullPatrol";
import IndividualProj from "./Components/Projects/IndividualProj";
import ExploreMiami from "./Components/Projects/ExploreMiami";
import KnickKnack from "./Components/Projects/KnickKnack";
import Resume from "./Components/Resume/Resume";


function App() {

return (
  
  <Router>
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/skullpatrol" element={<SkullPatrol />} />
        <Route path="/exploremiami" element={<ExploreMiami />} />
        <Route path="/knickknack" element={<KnickKnack />} />
      </Routes>
    </div>
  </Router>
);
}

export default App;
