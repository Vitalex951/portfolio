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
    return (
        <div ref={props.componentRef} className={s.skillsBlock} id={'skills'}>
            <div className={`${sContainer.container} ${s.skillsContainer}`}>
                    <Title title={'Skills'}/>

                <div className={s.skills}>
                    <Skill title={'HTML'}/>
                    <Skill title={'CSS'}/>
                    <Skill title={'JS'}/>
                    <Skill title={'React'}/>
                    <Skill title={'Redux'}/>
                    <Skill title={'TScript'}/>
                    <Skill title={'RRD'}/>
                    <Skill title={'RestAPI'}/>
                    <Skill title={'THUNK'}/>
                    <Skill title={'Formik'}/>
                    <Skill title={'MUI'}/>
                    <Skill title={'GIT'}/>
                </div>

            </div>
        </div>
    );
};