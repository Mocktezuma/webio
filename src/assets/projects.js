import React, {useState} from 'react';
import "../css/app.min.css";

function Project({projectName, projectMessage, projectImage}) {
    return (
        <div className="projectItem">
            <h1>{projectName}</h1>
                <img src={projectImage} alt={projectName} />
            <p>{projectMessage}</p>
        </div>
    );
}

export default Project;