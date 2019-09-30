import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

// imports for components
import Home from './components/home/index';
import Services from './components/services/index';
import Store from './components/store/index';  
import Work from './components/work/index';
import About from './components/about/index';
import Useragreement from './components/useragreement/index';

import "./app.css";

function App() {
  
/*

This component shouldn't have to be edited unless you are adding a new page.js
and you need to add a new <Route/> to allow a use to view that page.

  - candypheonixIO

*/

  return (
    <Router>
      <div className="appHeader">
        <nav>
          <ul>
            <li>
              <Link to="/">HOME</Link>
            </li>
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
