import React from 'react';

// media imports
import github from '../../../media/icons8-github-48.png';
import dribbble from '../../../media/icons8-dribbble-30.png';
import behance from '../../../media/icons8-behance-48.png';

import style from '../about.module.css';


function Team_Icon ({
    name,
    notes,
    profile_img,
    github_link,
    dribbble_link,
    behance_link
}) {
    return (
        <div className={style.teamMate}>
            <div className={style.bio}>
                <img src={profile_img} alt="" className={style.teamIcon}/>
                <div className={style.desc}>
                    <h1 className={style.name}>{name}</h1>
                    <p className={style.notes}>{notes}</p>
                </div>
            </div>
            <ul className={style.socials}>
                <li>
                    <img src={github} alt="github icon from icons8.com"/>
                    <a href={github_link} target="_blank" rel="noopener noreferrer">Github</a>
                </li>
                <li>
                    <img src={dribbble} alt="dribbble icon from icons8.com"/>
                    <a href={dribbble_link} target="_blank" rel="noopener noreferrer">Dribbble</a>
                </li>
                <li>
                    <img src={behance} alt="behance icon from icons8.com"/>
                    <a href={behance_link} target="_blank" rel="noopener nereferrer">Behance</a>
                </li>
            </ul>
        </div>
    );
}

export default Team_Icon