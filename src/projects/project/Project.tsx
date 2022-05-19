import React from 'react';
import s from './Project.module.css'
import SuperButton from "../../orher/buttons/SuperButton";

type ProjectTypeProps = {
    title: string
    description: string
    backgroundImage: string
}
export const Project = (props: ProjectTypeProps) => {
    return (
        <div className={s.project}>
            <div style={{backgroundImage: props.backgroundImage}} className={s.imgProject}
                 onClick={() => alert(props.title)}>
                {/*<button className={s.button}>Look</button>*/}
            </div>
            <div className={s.projectTitle}>
                <h3>{props.title}</h3>
            </div>

            <div className={s.projectDescription}>
                <span>{props.description}</span>
            </div>
            <SuperButton className={s.buttonDemo} >Demo</SuperButton>
        </div>
    );
};
