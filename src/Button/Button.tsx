import React from 'react';
import s from './Button.module.css'

const Button = () => {
    return (
        <div className={s.button}>
            <button  className={s.button}>Add me</button>
        </div>
    );
};

export default Button;