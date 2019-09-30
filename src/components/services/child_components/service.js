import React from 'react';

import style from '../services.module.css';

function Service({
    dynamicImage,
    serviceTitle,
    serviceNotes
}) {
    return (
        <div className={style.service}>
            <img src={dynamicImage} alt="strategy illistartion" width="128px"/>
            <h1>{serviceTitle}</h1>
            <p>{serviceNotes}</p>
        </div>
    );
}

export default Service