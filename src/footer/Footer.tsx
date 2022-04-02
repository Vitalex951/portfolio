import React from 'react';
import s from './Footer.module.css'
import sContainer from '../common/styles/Container.module.css'

export const Footer = () => {
    return (
        <div className={s.block}>
            <div className={`${sContainer.container} ${s.container}`}>
                <h5 className={s.title}>Vital</h5>
                    <div className={s.footer}>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                <span className={s.span}>© 2022 Все права защищены  </span>
            </div>
        </div>
    );
};
