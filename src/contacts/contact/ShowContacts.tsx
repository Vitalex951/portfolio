import React, {useState} from 'react';
import s from './ShowContacts.module.css'
import {Contact} from "./Contact";
import SuperButton from "../../orher/buttons/SuperButton";
import phone from "../../assets/img/phonepng.png";
import telegram from "../../assets/img/Telegram_logo.svg.png";
import github from "../../assets/img/github.png";
import linkedID from "../../assets/img/link.png";
import gmail from "../../assets/img/gmail.png";
import codewars from "../../assets/img/codewars.svg";
import './Contact.css'
export type contactType = {
    title: string
    imgSrc: string
    url: string
}

export const ShowContacts = () => {
    const contacts: contactType[] = [
        {title: "+375(29) 543-36-13", imgSrc: phone, url: ""},
        {title: "vitalex951@gmail.com", imgSrc: gmail, url: 'mailto:vitalex951@gmail.com'},
        {title: "@Vitalex951", imgSrc: telegram, url: "https://t.me/Vitalex951"},
        {title: "Go to github   ", imgSrc: github, url: 'https://github.com/Vitalex951'},
        {title: "Linkedid", imgSrc: linkedID, url: 'https://www.linkedin.com/in/vitaliy-gushcha-365219231/'},
        {title: "CodeWars", imgSrc: codewars, url: 'https://www.codewars.com/users/Vitalex951'},
    ]
    const [classContact, setclassContact] = useState(`exampleBlock`)
    const showCont = () => {
        setclassContact( classContact === 'exampleBlock' ? `exampleBlock hide` : 'exampleBlock')
    }
    return (
        <div className={s.dropdown}>
            <div className={classContact}>
                <Contact contacts={contacts}/>
            </div>
            {/*<SuperButton className={s.dropbtns} onClick={showCont}>Contacts</SuperButton>*/}
        </div>
    );
};