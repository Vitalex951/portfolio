import React from 'react';
import s from './Project.module.css'
import SuperButton from "../../orher/buttons/SuperButton";

type ProjectTypeProps = {
    title: string
    description: string
    backgroundImage: string
    urlCode: string
    urlDemo: string
}
export const Project = (props: ProjectTypeProps) => {
    const onClickHeaderDemo = () => {
        window.open(props.urlDemo)
    }
    const onClickHeaderCode = () => {
        window.open(props.urlCode)
    }

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

            <div className={s.btns}>
                <SuperButton className={s.buttonDemo} onClick={onClickHeaderDemo}>Demo</SuperButton>
                <SuperButton className={s.buttonDemo} onClick={onClickHeaderCode}>Code</SuperButton>
            </div>
        </div>
    );
};
