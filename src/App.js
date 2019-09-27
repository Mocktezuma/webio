import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

// import stylesheets
import './css/app.min.css';
import './css/store.min.css';
import './css/home.min.css';
import './css/about.min.css';
import './css/services.min.css';
import './css/work.min.css';

// imports for all media assets
import logo from './media/logo.png';

// imports for components
import Home from './components/home';
import Services from './components/services';
import Store from './components/store';  
import Work from './components/work';
import About from './components/about';
import Useragreement from './components/useragreement';

function App() {
  
/*

This component shouldn't have to be edited unless you are adding a new page.js
and you need to add a new <Route/> to allow a use to view that page.

  - candypheonixIO

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
        <Route path="/" exact component={Home} />
        <Route path ="/work/" component={Work} />
        <Route path ="/about/" component={About} />
        <Route path="/services/" component={Services} />
        <Route path="/store/" component={Store} />
        <Route path="/useragreement/" component={Useragreement} />
    </Router>
  );
}

export default App;
