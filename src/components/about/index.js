import React from 'react';

// component imports
import Team_Icon from './child_components/about-team-icons';
import style from './about.module.css';

function About() {
    return (
      <section className="container">
        <div className={style.motd}>
          <h1>ABOUT US</h1>
          <span className={style.largeText}>Get to know our team</span>
        </div>
        <section className={style.wrapper}>
          <section className={style.team}>
            <h1 className={style.teamHeader}>THE TEAM</h1>
            <section className={style.teamMembers}>
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