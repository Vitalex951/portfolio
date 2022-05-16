import React from 'react';
import s from './contact.module.css'
import {contactType} from "./ShowContacts";


type contactPropsType = {
    contacts: contactType[]
}

export const Contact = (props: contactPropsType) => {
    return (
        <div className={s.block}>
            {props.contacts.map(el => el.url
                ? <div className={s.contact}>
                    <a href={el.url}  target={"_blank"}> <img src={el.imgSrc}/>
                    {el.title}</a>
                </div>
                : <div className={s.contact}>
                 <img src={el.imgSrc}/> {el.title}
                </div>)
            }
        </div>
    )
};
