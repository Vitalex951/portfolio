import React from 'react';
import s from './Header.module.css'
import {Nav} from "../nav/Nav";
import {BurgerNav} from "../burgerNav/BurgerNav";
type HeaderPropsType = {
    callback: (ref: any) => void
    main: any
    skills: any
    contacts: any
    projects: any
}

export const Header = (props: HeaderPropsType) => {
    return (
        <div className={s.header}>
            <Nav callback={props.callback}
                 main={props.main}
                 skills={props.skills}
                 projects={props.projects}
                 contacts={props.contacts}/>
            {/*<BurgerNav/>*/}
        </div>
    );
};