import React from 'react';
import s from './Contacts.module.css'
import sContainer from '../common/styles/Container.module.css'

export const Contacts = () => {
    return (
        <div className={s.block}>
            <div className={`${sContainer.container} ${s.container}`}>
                <h4>Contacts</h4>
                <form action="url" className={s.form}>
                    <input/>
                    <input/>
                    <textarea>
                    Hi
                </textarea>
                </form>
                <button className={s.button}>Отправить</button>
            </div>
        </div>
    );
};