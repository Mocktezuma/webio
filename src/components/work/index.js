import React from 'react';

// media imports

import style from './work.module.css';

function Work() {
    return (
      <section className="container">
        <div className={style.motd}>
          <h1>OUR WORK</h1>
          <span className={style.largeText}>Look at what we've made</span>
        </div>
      </section>
    );
  }

  export default Work