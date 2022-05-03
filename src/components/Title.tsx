import React from 'react';
import s from './Titles.module.css'

type titleProps = {
    title: string
}

export const Title = (props : titleProps) => {
    return (
        <div className={s.title}>
            <h2>{props.title}</h2>
        </div>
    );
};
