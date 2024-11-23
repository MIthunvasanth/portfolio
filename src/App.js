import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./nav/Nav.js";
import About from "./about/About";
import Skills from "./skills/Skills";
import Projects from "./projects/Projects";
import Contact from "./contact/Contact";
import "./styles/app.css";
import Background from "./background/Background.js";
import PlayerStats from "./playerStats/PlayerStats.js";
import MouseFollower from "./mouse/mouse.js";
const App = () => {
  const options = {
    zIndex: 2,
    backgroundColor: 'red',
    radius: 60,
    text: 'Sample Text',
    textColor: 'white',
    textFontFamily: 'sans-serif',
    textFontSize: '25px',
  };
  return (
    
    <Router>
      <MouseFollower/>
      <Nav />
      <Background />

      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <PlayerStats />
    </Router>
  );
};

export default App;
