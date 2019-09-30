import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

//styles
import style from "./home.module.css"

// midea imports
import logo from '../../media/logo.png';

function Home() {
  return (
  <section className="container">
    <div className={style.motd}>
      <div className={style.body}>
        <h1>For Modern Startups</h1>
        <span className={style.largeText}>
          Webio Coop
        </span>
        <p>
          One thing that every startup needs now in a modern day seciety is a website so they can build their precense in the online market, so let <em>Webio Coop</em> help you along the way from start to finish.
        </p>
        <Link to="/services/">Get Started</Link>
      </div>
      <img src={logo} alt="illistration of teamwork" id={style.homeLogo}/>
    </div>
  </section>
  );
}

export default Home