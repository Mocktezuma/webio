import React, {useState} from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "../css/app.min.css";

function Project({prjName, prjMessage, prjRedirection}) {
    return (
        <div className="projectItem">
            <h1>{prjName}</h1>
            <p>{prjMessage}</p>
        </div>
    );
}

export default Project;