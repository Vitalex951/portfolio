import React from 'react';
import s from './Project.module.css'

type ProjectTypeProps = {
    title: string
    description: string
    styleIMG: {
        backgroundImage: string
    }

}
export const Project = (props: ProjectTypeProps) => {
    return (
        <div className={s.project}>
                <div style={props.styleIMG} className={s.imgProject} onClick={() => alert(props.title)}>
                    {/*<button className={s.button}>Look</button>*/}
                </div>
            <div className={s.projectTitle}>
                <h3>{props.title}</h3>
            </div>

            <span className={s.projectDescription}>{props.description}</span>
        </div>
    );
};
