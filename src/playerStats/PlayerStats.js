import React from "react";
import "../styles/playerStats.css";
import Linkedicon from "../assets/linkedin.png";
import Instaicon from "../assets/instagram.png";
import Giticon from "../assets/github.png";

const PlayerStats = () => {
  return (
    <div id="playerStats">
      {/* Player's Name */}
      <h1>MITHUN VASANTH</h1>

      {/* Lines below the name */}
      <div id="playerStats__lines">
        <span id="playerStats__lines__thick"></span>
        <span id="playerStats__lines__thin"></span>
      </div>

      {/* Player's Title */}
      <h2>Fullstack Developer / AI Developer</h2>

      {/* Social Media Icons */}
      <div className="social">
        <img src={Linkedicon} alt="LinkedIn Icon" className="social-icon" />
        <img src={Instaicon} alt="Instagram Icon" className="social-icon" />
        <img src={Giticon} alt="GitHub Icon" className="social-icon" />
      </div>
    </div>
  );
};

export default PlayerStats;
