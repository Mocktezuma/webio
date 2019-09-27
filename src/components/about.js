import React from 'react';

// component imports
import Team_Icon from './child_components/about-team-icons';

// media imports

function About() {
    return (
      <section className="about-container">
        <div className="motd">
          <h1>ABOUT US</h1>
          <span className="largeText">Get to know our team</span>
        </div>
        <section className="aboutBody">
          <section className="theTeam">
            <h1 className="teamHeader">THE TEAM</h1>
            <section className="teamMembers">
              <Team_Icon 
                name="placeholder"
                notes="Lorem ipsum, dolor sit amet consectetur adipisicing elit."
                profile_img="https://via.placeholder.com/256"
                github_link="https://github.com"
                dribbble_link="https://dribbble.com"
                behance_link="https://behance.com"
              />

              <Team_Icon 
                name="placeholder"
                notes="Lorem ipsum, dolor sit amet consectetur adipisicing elit."
                profile_img="https://via.placeholder.com/256"
                github_link="https://github.com"
                dribbble_link="https://dribbble.com"
                behance_link="https://behance.com"
              />

              <Team_Icon 
                name="placeholder"
                notes="Lorem ipsum, dolor sit amet consectetur adipisicing elit."
                profile_img="https://via.placeholder.com/256"
                github_link="https://github.com"
                dribbble_link="https://dribbble.com"
                behance_link="https://behance.com"
              />
            </section>
          </section>
        </section>
      </section>
    );
  }

  export default About