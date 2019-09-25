import React, {useState, component} from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

// import stylesheets
import './css/app.min.css';
import './css/store.min.css';
import './css/home.min.css';
import './css/about.min.css';
import './css/services.min.css';

/*
please make sure you use a minified version of the app.css file...
PLEASE CHECK THE "app.scss" FILE FOR INSTRUCTIONS ON HOW TO CONFIG YOUR VSCODE TO SAVE A PROPER MINIFIED CSS FILE...
*/

// imports for all media assets
import logo from './media/logo.png';
import teamworkImage from './media/teamwork.png';
import strategyImage from './media/strategy.png';
import sourceCodeImage from './media/source-code.png';
import paperPlaneImage from './media/paper-plane.png';
import monitorImage from './media/monitor.png';
import linkIcon from './media/link.png';
import storeImage from './media/online-store.png';

// imports for components
import Home from './components/home';
import Services from './components/services';
import Store from './components/store';  
import Work from './components/work';
import About from './components/about';
import Useragreement from './components/useragreement';

function App() {
  /*
  "App()" is NOT to be edited unless you have to add a new link/route to a new page.
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
        <Route path="/" exact component={Home} />
        <Route path ="/work/" component={Work} />
        <Route path ="/about/" component={About} />
        <Route path="/services/" component={Services} />
        <Route path="/store/" component={Store} />
        <Route path="/useragreement/" component={Useragreement} />
      </div>
    </Router>
  );
}

export default App;
