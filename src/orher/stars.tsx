import React from 'react';
import s from './stars.module.css'

const Stars = () => {
    return (
        <div style={{
            height: "0px"
        }}>
            <div id={s.stars}></div>
            <div id={s.stars2}></div>
            <div id={s.stars3}></div>
            <div id={s.title}></div>
        </div>
    );
};

export default Stars;