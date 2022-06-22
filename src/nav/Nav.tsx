import React from 'react';
import s from './Nav.module.css'
import {Link} from "react-scroll";

type NavPropsType = {
    callback: (ref: any) => void
    main: any
    skills: any
    contacts: any
    projects: any
}

export const Nav = (props: NavPropsType) => {


    // const anchors = document.querySelectorAll('a.scroll-to')
    // for (let anchor of anchors) {
    //     anchor.addEventListener('click', function (e) {
    //         e.preventDefault()
    //
    //         const blockID = anchor.getAttribute('href')
    //
    //         document.querySelector(blockID).scrollTo({
    //             behavior: 'smooth',
    //             block: 'start'
    //         })
    //     })
    // }

    // const scroll = () => {
    //     const blockID = anchor.getAttribute('href')
    //     document.querySelector(blockID).scrollTo({
    //         behavior: 'smooth',
    //         block: 'start'
    //     })
    // }
    return (
        <div className={s.nav}>
            <span onClick={() => props.callback(props.main)} className="scroll-to">Home</span>
            <span onClick={() => props.callback(props.skills)} className="scroll-to">Skills</span>
            {/*<span onClick={() => props.callback(props.projects)} className="scroll-to">Projects</span>*/}
            <Link
                activeClass="active"
                to="projects"
                spy={true}
                smooth={true}
                offset={1}
                duration={700}
            >Projects</Link>
            <span onClick={() => props.callback(props.contacts)} className="scroll-to">Contacts</span>
        </div>
    );
};