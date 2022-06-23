import React from 'react';
import s from './Projects.module.css'
import sContainer from '../common/styles/Container.module.css'
import {Project} from "./project/Project";
import {Title} from "../components/Title";
import socialImg from '../assets/img/soc.jpg'
import todolistImg from '../assets/img/todolist.jpg'
import cards from '../assets/img/cards.jpeg'
import counter from '../assets/img/counter.jpg'

type ProjectsTypeProps = {
    componentRef: any
}

type ProjectValueType = {
    title: string,
    backgroundImage: string,
    description: string
    urlCode: string
    urlDemo: string
}


export const Projects = (props: ProjectsTypeProps) => {
    const projectsValue: ProjectValueType[] = [
        {
            title: 'Cards',
            backgroundImage: `url(${cards})`,
            description: "It's team-work project. Our team used Tailwind UI, JavaScript, TypeScript, React, Redux, Redux-toolkit, ESLint, Prettier; Using Typescript for best code control during development, refactoring, bug fixing, deploying.",
            urlCode: 'https://github.com/Vitalex951/Friday_Project',
            urlDemo: 'https://vitalex951.github.io/Friday_Project/'
        },
        {
            title: 'SocialNetwork',
            backgroundImage: `url(${socialImg})`,
            description: "It's my social network project - MOON msg! I use in the this project React, Redux, API requests, css, mui,  axios, thunks, and more.",
            urlCode: 'https://github.com/Vitalex951/it-incubator-samurai',
            urlDemo: 'https://vitalex951.github.io/it-incubator-samurai/'
        },
        {
            title: 'ToDoList',
            backgroundImage: `url(${todolistImg})`,
            description: "It's my ToDo-application - MOON tasks! I use in the this project React, Redux, clean CSS, and more.",
            urlCode: 'https://github.com/Vitalex951/ToDoList',
            urlDemo: 'https://vitalex951.github.io/ToDoList/'
        },
        {
            title: 'Counter',
            backgroundImage: `url(${counter})`,
            description: "This project - just simple counter with settings start value and end value. I used in this project React, Redux, clean CSS. ",
            urlCode: 'https://github.com/Vitalex951/counter',
            urlDemo: 'https://vitalex951.github.io/counter/'
        },

    ]


    return (
        <div ref={props.componentRef} className={s.projectsBlock} id={'projects'}>
            <div className={`${sContainer.container} ${s.projectsContainer}`}>


                <Title title={'Projects'}/>
                <div className={s.projects}>

                    {projectsValue.map((el, i) => <Project key={i}
                                                           title={el.title}
                                                           backgroundImage={el.backgroundImage}
                                                           description={el.description}
                                                           urlCode={el.urlCode}
                                                           urlDemo={el.urlDemo}/>
                    )}
                </div>
            </div>

        </div>
    );
};
