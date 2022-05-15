import React from 'react';
import s from './Projects.module.css'
import sContainer from '../common/styles/Container.module.css'
import {Project} from "./project/Project";
import {Title} from "../components/Title";
import socialImg from '../assets/img/soc.jpg'
import todolistImg from '../assets/img/todolist.jpg'


export const Projects = () => {
    const socialNetwork = {
        backgroundImage: `url(${socialImg})`,
    };

    const todolist = {
        backgroundImage: `url(${todolistImg})`,
    };


    return (
        <div className={s.projectsBlock} id={'projects'}>
            <div className={`${sContainer.container} ${s.projectsContainer}`}>
                <Title title={'Projects'}/>

                <div className={s.projects}>
                    <Project title={"SocialNetwork"}
                             styleIMG={socialNetwork}
                             description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus delectus minus nesciunt pariatur, quasi ratione tempora veritatis. Animi, atque eos et facere magnam praesentium quam quas quibusdam vel voluptas voluptates?"}/>
                    <Project title={"ToDoList"}
                             styleIMG={todolist}
                             description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus delectus minus nesciunt pariatur, quasi ratione tempora veritatis. Animi, atque eos et facere magnam praesentium quam quas quibusdam vel voluptas voluptates?"}/>
                </div>
            </div>

        </div>
    );
};
