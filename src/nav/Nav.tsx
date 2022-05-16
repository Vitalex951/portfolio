import React from 'react';
import s from './Nav.module.css'

export const Nav = () => {

    const anchors = document.querySelectorAll('a.scroll-to')

    // @ts-ignore
    for (let anchor of anchors) {
        anchor.addEventListener('click', function (e: any) {
            e.preventDefault()

            const blockID = anchor.getAttribute('href')

            document.querySelector(blockID).scrollTo({
                behavior: 'smooth',
                block: 'start'
            })
        })
    }
    return (
        <div className={s.nav}>
            <a href="#main" className="scroll-to">Home</a>
            <a href="#skills" className="scroll-to">Skills</a>
            <a href="#projects" className="scroll-to">Projects</a>
            <a href="#contacts" className="scroll-to">Contacts</a>
        </div>
    );
};