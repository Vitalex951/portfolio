import React from 'react';
import s from './Contacts.module.css'
import sContainer from '../common/styles/Container.module.css'
import {Title} from "../components/Title";

export const Contacts = () => {
    return (
        <div className={s.block}>
            <div className={`${sContainer.container} ${s.container}`}>
               <Title title={'Contacts'}/>
                <form action="url" className={s.form}>
                    <input/>
                    <input/>
                    <textarea>
                    Hi
                </textarea>
                </form>
                <button type='submit' className={s.button}>Отправить</button>
            </div>
        </div>
    );
};