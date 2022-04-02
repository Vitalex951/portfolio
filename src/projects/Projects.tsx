import React from 'react';
import s from './Projects.module.css'
import sContainer from '../common/styles/Container.module.css'
import {Project} from "./project/Project";


export const Projects = () => {
    return (
        <div className={s.projectsBlock}>
            <div className={`${sContainer.container} ${s.projectsContainer}`}>
                <h3 className={s.title}>Projects</h3>
                <div className={s.projects}>
                    <Project title={"Name"}
                             description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus delectus minus nesciunt pariatur, quasi ratione tempora veritatis. Animi, atque eos et facere magnam praesentium quam quas quibusdam vel voluptas voluptates?"}/>
                    <Project title={"Name"}
                             description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus delectus minus nesciunt pariatur, quasi ratione tempora veritatis. Animi, atque eos et facere magnam praesentium quam quas quibusdam vel voluptas voluptates?"}/>
                    <Project title={"Name"}
                             description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus delectus minus nesciunt pariatur, quasi ratione tempora veritatis. Animi, atque eos et facere magnam praesentium quam quas quibusdam vel voluptas voluptates?"}/>
                </div>
            </div>

        </div>
    );
};
