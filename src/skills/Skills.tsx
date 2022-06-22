import React from 'react';
import s from './Skills.module.css'
import sContainer from '../common/styles/Container.module.css'
import {Skill} from "./skill/Skill";
import {Title} from "../components/Title";
import {Fade, Roll} from "react-awesome-reveal";

type SkillsProps = {
    componentRef: any
}


export const Skills = (props: SkillsProps) => {
    const mySkills: string[] = ['React', 'Redux', 'JS', 'TScript', 'RRD', 'RestAPI', 'HTML5', 'CSS', 'THUNK', 'Formik', 'MUI', 'GIT']
    return (
        <div ref={props.componentRef} className={s.skillsBlock} id={'skills'}>
            <div className={`${sContainer.container} ${s.skillsContainer}`}>
                <Title title={'Skills'}/>

                <div className={s.skills}>
                    {mySkills.map((el, i) =>  <Skill key={i} title={el}/>)}
                </div>

            </div>
        </div>
    );
};