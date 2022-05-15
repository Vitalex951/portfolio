import React from 'react';
import s from './Footer.module.css'
import sContainer from '../common/styles/Container.module.css'

export const Footer = () => {
    return (
        <div className={s.block}>
            <div className={`${sContainer.container} ${s.container}`}>
                <div  className={s.title}>
                    Vital
                </div>
                {/*<div className={s.footer}>*/}
                {/*    <div></div>*/}
                {/*    <div></div>*/}
                {/*    <div></div>*/}
                {/*    <div></div>*/}
                {/*</div>*/}
                <span className={s.span}>© 2022 Created under my wife’s strict control (supervision)</span>
            </div>
        </div>
    );
};
