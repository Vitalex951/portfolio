import React from 'react';
import s from './Project.module.css'

type ProjectTypeProps = {
    title: string
    description: string
}
export const Project = (props: ProjectTypeProps) => {
    return (
        <div className={s.project}>
            <div className={s.imgProject}>
                <button className={s.button}>Look</button>
            </div>
            <div className={s.projectTitle}>{props.title}</div>
            <span className={s.projectDescription}>{props.description}</span>
        </div>
    );
};
