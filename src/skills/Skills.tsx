import React from 'react';
import s from './Skills.module.css'
import sContainer from '../common/styles/Container.module.css'
import {Skill} from "./skill/Skill";

export const Skills = () => {
    return (
        <div className={s.skillsBlock}>
            <div className={`${sContainer.container} ${s.skillsContainer}`}>
                <h2 className={s.title}>Скилы</h2>
                <div className={s.skills}>
                    <Skill title={'JS'}
                           description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem cum dolor ea eligendi excepturi illo, i'}/>
                    <Skill title={'React'}
                           description={'llum impedit ipsum iure iusto nemo nobis odit, pariatur provident soluta, voluptas voluptatum! Error, sunt!'}/>
                    <Skill title={'HTML'}
                           description={'llum impedit ipsum iure iusto nemo nobis odit, pariatur provident soluta, voluptas voluptatum! Error, sunt!'}/>
                </div>
            </div>
        </div>
    );
};