import React from 'react';
import sContainer from '../common/styles/Container.module.css'
import s from './Telework.module.css'

export const Telework = () => {
    return (
        <div className={s.teleworkBlock}>
            <div className={`${sContainer.container} ${s.teleworkContainer}`}>
                <span className={s.title}>Рассматриваю варианты удаленной работы
                </span>
                <button className={s.button}>Нанять меня</button>
            </div>
        </div>
    );
};