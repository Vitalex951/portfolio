import React, {useState} from 'react';
import s from './BurgerNav.module.css'
import {Link} from "react-scroll";


export const BurgerNav = () => {
    const [isOpen, setisOpen] = useState<boolean>(false)

    const onClickBtnBurger = () => {
        setisOpen(!isOpen)
    }

    return (
        <div className={s.burgerNav}>
            <div className={`${s.burgerNavItems} ${isOpen? s.show: ''}`}>
                <Link
                    activeClass="active"
                    to="main"
                    spy={true}
                    smooth={true}
                    offset={1}
                    duration={200}
                >Home</Link>
                <Link
                    activeClass="active"
                    to="skills"
                    spy={true}
                    smooth={true}
                    offset={1}
                    duration={700}
                >Skills</Link>
                <Link
                    activeClass="active"
                    to="projects"
                    spy={true}
                    smooth={true}
                    offset={1}
                    duration={700}
                >Projects</Link>
                <Link
                    activeClass="active"
                    to="contacts"
                    spy={true}
                    smooth={true}
                    offset={1}
                    duration={800}
                >Contacts</Link>
            </div>

            <div className={s.burgerBtn} onClick={onClickBtnBurger}></div>
        </div>
    );
};