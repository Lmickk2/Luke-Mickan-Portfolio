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
import KnickKnack from "./Components/Projects/KnickKnack";
import Resume from "./Components/Resume/Resume";
import CodeGenie from "./Components/Projects/CodeGenie";
import TheEgg from "./Components/Projects/TheEgg";
import PlotWeave from "./Components/Projects/PlotWeave";
import NotFound from "./Components/NotFound";


function App() {

return (
  
  <Router>
    <div className="App">
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/skullpatrol" element={<SkullPatrol />} />
        <Route path="/codegenie" element={<CodeGenie />} />
        <Route path="/theegg" element={<TheEgg />} />
        <Route path="/plotweave" element={<PlotWeave />} />
        <Route path="/knickknack" element={<KnickKnack />} />
        <Route path="/404" element={<NotFound />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </div>
  </Router>
);
}

export default App;
