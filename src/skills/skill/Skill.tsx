import s from './Skill.module.css'
import React from 'react';

type SkillPropsType = {
    title: string
    // description: string

}
export const Skill = (props: SkillPropsType) => {
    return (
        <div className={s.skill}>
            <div className={s.icon} >
                <div className={s.text}>
                    <h3>{props.title}</h3>
                </div>
            </div>
            {/*<span className={s.description}>*/}
            {/*    {props.description}*/}
            {/*</span>*/}
        </div>
    );
};