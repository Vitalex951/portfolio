import React from 'react';
import s from './Main.module.css'
import sContainer from '../common/styles/Container.module.css'
import {Download} from "../orher/downolaod/Download";

export const Main = () => {
    const callback = () => {
        
    }
    return (
        <div className={s.mainBlock} id={'main'}>
            <div className={`${sContainer.container} ${s.container}`}>
                <div className={s.text}>
                    <div className={s.textOne}>
                        <span className={s.hello}>HELLO</span>
                    </div>
                    <div className={s.textTwo}>
                        <h1 className={s.deepshadow}>I’m Vitaliy
                            Gushcha</h1></div>
                    {/*<p>I've been doing web design, front-end and back-end development for a year now. Do you need a website design, site layout, or maybe a turnkey website? Then contact me</p>*/}
                    <p className={s.description}>Я фронтенд-разработчик.
                        Имею опыт создания SPA используя React, Redux,
                        TypeScript, JavaScript. Готов рассмотреть проектную работу и полную занятость</p>
                    <div>
                        <Download callback={callback}/>
                    </div>

                </div>
                <div className={s.photo}>
                </div>


            </div>
        </div>
    );
};