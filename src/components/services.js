import React from 'react';

// media imports
import logo from '../media/logo.png';
import teamworkImage from '../media/teamwork.png';
import strategyImage from '../media/strategy.png';
import sourceCodeImage from '../media/source-code.png';
import paperPlaneImage from '../media/paper-plane.png';
import monitorImage from '../media/monitor.png';
import linkIcon from '../media/link.png';
import storeImage from '../media/online-store.png';

function Services() { // services page
    return (
      <section className="services-container">
        <div className="motd">
          <h1>OUR SERVICES</h1>
          <span className="largeText">Let's Get to Work</span>
        </div>

        <section className="services">
          <div className="service">
            <img src={strategyImage} alt="strategy illistartion" width="10%"/>
            <h1>Strategy and Planning</h1>
            <p>
              One of the most important steps in creating your brand or startup is making a planned out strategy for it, And It's very helpful to have more on your team to help take some of the load off, and create a stress free game plan.
            </p>
          </div>

          <div className="service">
            <img src={monitorImage} alt="monitor illistration" width="10%"/>
            <h1>Build your UI and UX</h1>
            <p>
              Somethings are tougher than others, and trying to build a fluid UI design that performs the best when it comes to user experience is that something. But we love to brainstorm and throw out <em>inevative</em> ideas that will come together, and pave the way for something beutiful.
            </p>
          </div>

          <div className="service">
            <img src={sourceCodeImage} alt="source code illistration" width="10%"/>
            <h1>Develop</h1>
            <p>
              Developing your webapp or website can sometimes seem overwhelimg, but we have a team of eager learners ready to develop untill everyone is happy.
            </p>
          </div>

          <div className="service">
            <img src={paperPlaneImage} alt="paper plan flying illistration" width="10%"/>
            <h1>Build and Publish</h1>
            <p>
              Take your idea, and develop to perfection before finally Publishing it to the world and get your brand catching eyes all over the world.
            </p>
          </div>
        </section>
        <section className="getStarted">
          <p>If you have plans for your startup or you just need a quick rebranding, feel free to get in contact with us and we will ask you some fun questions so we can get to know the plan and get the ball rolling!</p>
          <form action="" method="post">
            <input type="email" name="uEmail" id="userEmail" placeholder="Business Email" required/>
            <button type="submit">Get in Contact</button>
          </form>
          <h1 id="splitter">-or-</h1>
          <span>email us directly: email@webiocoop.com</span>
        </section>
      </section>
    );
  }

export default Services