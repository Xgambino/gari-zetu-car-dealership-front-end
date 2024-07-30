import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import pause_icon from '../assets/pause_icon.png';
import play_icon from '../assets/play_icon.png';
import "../index.css";

const Hero = ({ heroData, setHeroCount, heroCount, setPlayStatus, playStatus }) => {
  return (
    <div className="hero fade-in">
      <div className="hero-text">
        <p>{heroData.text1}</p>
        <p>{heroData.text2}</p>
      </div>
      <div className="hero-explore">
        <p>Explore the features</p>
        <a href="/catalogue">
        <img
          width="64"
          height="64"
          src="https://img.icons8.com/nolan/64/circled-right-2.png"
          alt="Explore features"
          className="fade-in"
        />
        </a>
      </div>
      <div className="hero-dot-play">
        <ul className="hero-dots">
          {[0, 1, 2].map((index) => (
            <li
              key={index}
              onClick={() => setHeroCount(index)}
              className={`hero-dot ${heroCount === index ? 'orange' : ''} fade-in`}
            ></li>
          ))}
        </ul>
        <div className="hero-play fade-in">
          <img
            onClick={() => setPlayStatus(!playStatus)}
            src={playStatus ? pause_icon : play_icon}
            alt={playStatus ? 'Pause' : 'Play'}
            className="fade-in"
          />
          <p>See The Video</p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
