import React from 'react';
import s from './Main.module.css'
import sContainer from '../common/styles/Container.module.css'

export const Main = () => {
    return (
        <div className={s.mainBlock}>
            <div className={sContainer.container}>
                <div className={s.text}>
                    <div className={s.textOne}>
                        <span className={s.hello}>HELLO</span>
                    </div>
                    <div className={s.textTwo}>
                        <h1 className={s.deepshadow}>I’m Vitaliy
                            Gushcha</h1></div>
                    {/*<p>I've been doing web design, front-end and back-end development for a year now. Do you need a website design, site layout, or maybe a turnkey website? Then contact me</p>*/}
                    <p className={s.description}>Я начинающий front-end developer. Если Вам нужен позитивный, активный и, жаждующий стать крутым
                        программистом, парень, то СРОЧНО связывайся со мной!</p>

                </div>
                <div className={s.photo}>
                </div>


            </div>
        </div>
    );
};