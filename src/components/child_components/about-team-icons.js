import React from 'react';

// media imports
import github from '../../media/icons8-github-48.png';
import dribbble from '../../media/icons8-dribbble-30.png';


function Team_Icon ({
    name,
    notes,
    profile_img,
    github_link,
    dribbble_link
}) {
    return (
        <div className="teamMate">
            <div className="bio">
                <img src={profile_img} alt="" className="teamMemberIcon"/>
                <div className="desc">
                    <h1 className="name">{name}</h1>
                    <p className="notes">{notes}</p>
                </div>
            </div>
            <ul className="socials">
                <li>
                    <img src={github} alt="github icon from icons8"/>
                    <a href={github_link} target="_blank" rel="noopener noreferrer">Github</a>
                </li>
                <li>
                    <img src={dribbble} alt="dribbble icon from icons8"/>
                    <a href={dribbble_link} target="_blank" rel="noopener noreferrer">Dribbble</a>
                </li>
            </ul>
        </div>
    );
}

export default Team_Icon