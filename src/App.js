import React, {useState, component} from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './css/app.min.css';
/*
please make sure you use a minified version of the app.css file...
PLEASE CHECK THE "app.scss" FILE FOR INSTRUCTIONS ON HOW TO CONFIG YOUR VSCODE TO SAVE A PROPER MINIFIED CSS FILE...
*/

import logo from './media/logo.png';
import teamworkImage from './media/teamwork.png';
import strategyImage from './media/strategy.png';
import sourceCodeImage from './media/source-code.png';
import paperPlaneImage from './media/paper-plane.png';
import monitorImage from './media/monitor.png';
import linkIcon from './media/link.png';
import storeImage from './media/online-store.png'

import Projects from './assets/projects';
import LogIn from './assets/login';  

function Index() { // this is the home page
  return (
  <section className="home-container">
    <div className="motd">
      <h1>For Modern Startups</h1>
      <span className="largeText">
        Webio Coop
      </span>
      <p>
        One thing that every startup needs now in a modern day seciety is a website so they can build their precense in the online market, so let <em>Webio Coop</em> help you along the way from start to finish.
      </p>
      <Link to="/services/" className="ctaButton">Get Started</Link>
    </div>
    <img src={teamworkImage} alt="illistration of teamwork"/>
  </section>
  );
}

function services() { // services page
  return (
    <section className="container">
      <h1>services</h1>
    </section>
  );
}

function store() { // store page
  return (
    // only edit the "./assets/login.js" file, nothing inside here
      <LogIn />
  );
}

function useragreement() {
  return (
    <h1>User Privacy Agreement</h1>
  );
}

function work() {
  return (
    <section className="container">
      <h1>Work</h1>
    </section>
  );
}

function about() {
  return (
    <section className="container">
      <h1>About</h1>
    </section>
  );
}

function AppRouter() {
  /*
  "AppRouter()" is NOT to be edited unless you have to add a new link/route to a new page.
  This component is also a default display for all pages in this react app
  */
  return (
    <Router>
      <div className="AppHeader">
      <Link to="/"><img src={logo} alt="wbeio coop logo."/></Link>
        <nav>
          <ul>
            <li>
              <Link to="/work/">WORK</Link>
            </li>
            <li>
              <Link to="/about/">ABOUT</Link>
            </li>
            <li>
              <Link to="/services/">SERVICES</Link>
            </li>
            <li>
              <Link to="/store/" className="storeButton">SHOP</Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className="container">
        <Route path="/" exact component={Index} />
        <Route path ="/work/" component={work} />
        <Route path ="/about/" component={about} />
        <Route path="/services/" component={services} />
        <Route path="/store/" component={store} />
        <Route path="/useragreement/" component={useragreement} />
      </div>
    </Router>
  );
}

export default AppRouter;
