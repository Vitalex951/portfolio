import React from 'react';
import s from './Titles.module.css'
import {Fade} from "react-awesome-reveal";

type titleProps = {
    title: string
}

export const Title = (props: titleProps) => {
    return (
        <div className={s.title}>
            <Fade direction={'top-left'}>
                <h2>{props.title}</h2>
            </Fade>
        </div>
    );
};
