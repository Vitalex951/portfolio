import React from 'react';
import s from './Main.module.css'
import sContainer from '../common/styles/Container.module.css'
import {Download} from "../orher/downolaod/Download";
import ReactTypingEffect from 'react-typing-effect';
import Tilt from 'react-parallax-tilt';

type ContactsProps = {
    componentRef: any
}

const particlesOptions = {
    particles: {
        number: {
            value: 80,
            density: {
                enable: true,
                value_area: 800
            }
        }
    }
}


export const Main = (props: ContactsProps) => {
    const callback = () => {

    }
    return (
        <div ref={props.componentRef} className={s.mainBlock} id={'main'}>

            <div className={`${sContainer.container} ${s.container}`}>

                <div className={s.text}>
                    <div className={s.textOne}>
                        <span className={s.hello}>HELLO</span>
                    </div>
                    <div className={s.textTwo}>

                        <h1 className={s.deepshadow}>I’m Vitaliy
                            Gushcha</h1></div>

                    {/*<p className={s.description}>I'm frontend developer with experience in creating SPA using React,*/}
                    {/*    Redux, TypeScript, JavaScript, SCSS, HTML. Ready to consider project work and full-time*/}
                    {/*    employment.</p>*/}
                    <div className={s.description}>
                        <ReactTypingEffect typingDelay={1000} speed={100} eraseSpeed={100}
                                           text={"I'm frontend developer"}
                        />
                    </div>
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