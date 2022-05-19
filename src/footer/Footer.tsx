import React from 'react';
import s from './Footer.module.css'
import sContainer from '../common/styles/Container.module.css'

export const Footer = () => {
    return (
        <div className={s.block}>
            <div className={`${sContainer.container} ${s.container}`}>
                <div  className={s.title}>
                    <div className={s.blockHome}>
                        <div className={s.icon}>
                            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="home"
                                 className="svg-inline--fa fa-home fa-w-18 " role="img" xmlns="http://www.w3.org/2000/svg"
                                 viewBox="0 0 576 512">
                                <path fill="currentColor"
                                      d="M280.37 148.26L96 300.11V464a16 16 0 0 0 16 16l112.06-.29a16 16 0 0 0 15.92-16V368a16 16 0 0 1 16-16h64a16 16 0 0 1 16 16v95.64a16 16 0 0 0 16 16.05L464 480a16 16 0 0 0 16-16V300L295.67 148.26a12.19 12.19 0 0 0-15.3 0zM571.6 251.47L488 182.56V44.05a12 12 0 0 0-12-12h-56a12 12 0 0 0-12 12v72.61L318.47 43a48 48 0 0 0-61 0L4.34 251.47a12 12 0 0 0-1.6 16.9l25.5 31A12 12 0 0 0 45.15 301l235.22-193.74a12.19 12.19 0 0 1 15.3 0L530.9 301a12 12 0 0 0 16.9-1.6l25.5-31a12 12 0 0 0-1.7-16.93z"></path>
                            </svg>
                        </div>
                        <div className="DataBlock_description__2V-EO"><h4>My Location</h4><span>Bobruisk city, Belarus</span></div>
                    </div>

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