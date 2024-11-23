import React from "react";
import "../styles/playerStats.css";
import Linkedicon from "../assets/linkedin.png"
import Instaicon from "../assets/instagram.png"
import Giticon from "../assets/github.png"
const PlayerStats = () => {
  return (
    <div id="playerStats">
      <h1>MTHUN VASANTH</h1>
      <div id="playerStats__lines">
        <span id="playerStats__lines__thick"></span>
        <span id="playerStats__lines__thin"></span>
      </div>
      <h2>Fullstack Developer / AI Developer</h2>
      <div className="social">    
        <img src={Linkedicon}/>
        <img src={Instaicon}/>
        <img src={Giticon}/>
      </div>
    </div>
  );
};

export default PlayerStats;
