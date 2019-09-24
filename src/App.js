import React, {useState, component} from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import logo from './media/logo.png';
import './css/app.min.css';

import Projects from './assets/projects';

function Index() { // this is the home page

  const [projects, setProjects] = useState ([ // use this for easier method of adding projects
    {
      name: "Placeholder", 
      motd: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    {
      name: "Placeholder", 
      motd: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    {
      name: "Placeholder", 
      motd: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    {
      name: "Placeholder", 
      motd: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    {
      name: "Placeholder", 
      motd: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    {
      name: "Placeholder", 
      motd: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    }
  ])

  return (
  <section className="container">
    <div className="motd">
      <h1>For the modern startup's</h1>
      <span>We strive to help other startups build their brand.</span>
    </div>
    <section className="about">
      <div className="blockItem">
        <h2>Concept & Planning</h2>
        <p>We will help you build on your concept to push you towards the planning phase so you can get the ball rolling.</p>
      </div>
      <div className="blockItem">
        <h2>UI/UX</h2>
        <p>Our creative minds will work with you and each other to build a UI specificly built in your image and for your userbase.</p>
      </div>
      <div className="blockItem">
        <h2>Deploy</h2>
        <p>Once everything is ready and made, we will help provide ways to host your website that best fits your budget and what will be user friendly for you and your team once we hand the keys over to you.</p>
      </div>
    </section>
    <section className="projects">
      <h1>Previous Client Projects</h1>
      <section className="projectContainer">
        {projects.map(project => (
          <Projects prjName={project.name} prjMessage={project.motd}/>
        ))}
      </section>
    </section>
  </section>
  );
}

function services() { // services page
  return (
    <section className="container">
      <div className="servicesDisplay">
        <ul className="services">
          <li>
            <h1>ReBranding</h1>
            <p>There is nothing more difficult that having to re-brand in such a saturated market, so why not let our creative thinkers help your brainstorm the best <em>new</em> aproach to making your brand stand out.</p>
          </li>
          <li>
            <h1>UI/UX assistance</h1>
            <p>You're not liking your website's landing page or overall user interface/experience, so let our talented Designers and Developers give your site a facelift to help benefit your overall user experience.</p>
          </li>
          <li>
            <h1>Website Development</h1>
            <p>You have your brand, and you know what your want everything to look like, but you don't know how to get it out in the public, that is were we can come in. Our team is diverce in Frontend, Backend, and UI developers that are eager to get there hands dirty in the nitty & gritty programming to get you up and running on the online marketplace.</p>
          </li>
        </ul>
        <div className="aboutServices">
          <h1>Our Services</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium vitae dolor voluptatem soluta. Iste, eveniet est cum aliquid velit suscipit natus debitis error voluptatem, unde nisi beatae quaerat rem quae?</p>
          <form method="POST" className="getQuote">
            <input type="email" name="userEmail" id="" placeholder="Business Email" required/>
            <button type="submit">Get Started</button>
          </form>
        </div>
      </div>
    </section>
  );
}

function store() { // store page
  return (
    <section className="container">
      <h1>Store</h1>
    </section>
  );
}

function AppRouter() { // this is a default element, there is no need to edit this unless you need to update information in the header or footer...
  return (
    <Router>
      <div className="AppHeader">
      <Link to="/"><img src={logo} alt="wbeio coop logo."/></Link>
        <nav>
          <ul>
            <li>
              <Link to="/services/">services</Link>
            </li>
            <li>
              <Link to="/store/">store</Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className="container">
      <Route path="/" exact component={Index} />
        <Route path="/services/" component={services} />
        <Route path="/store/" component={store} />

        <footer>
          <span>copyright &copy; 2019 webiocoop</span>
        </footer>
      </div>
    </Router>
  );
}

export default AppRouter;
