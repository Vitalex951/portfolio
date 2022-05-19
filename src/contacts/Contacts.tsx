import React from 'react';
import s from './Contacts.module.css'
import sContainer from '../common/styles/Container.module.css'
import {Title} from "../components/Title";
import {contactType} from "./contact/ShowContacts";
import phone from "../assets/img/phonepng.png";
import gmail from "../assets/img/gmail.png";
import telegram from "../assets/img/Telegram_logo.svg.png";
import github from "../assets/img/github.png";
import linkedID from "../assets/img/link.png";
import codewars from "../assets/img/codewars.svg";
import {SetContacts} from "./contact/SetContacts";

type ContactsProps = {
    componentRef: any
}

export const Contacts = (props: ContactsProps) => {

    const contacts: contactType[] = [
        {title: "Phone", descripton: "+375 (29) 543-36-13", imgSrc: phone, url: ""},
        {title: "Email", descripton: "vitalex951@gmail.com", imgSrc: gmail, url: 'mailto:vitalex951@gmail.com'},
        {title: "Telegram", descripton: "@Vitalex951", imgSrc: telegram, url: "https://t.me/Vitalex951"},
        {title: "Github", descripton: "", imgSrc: github, url: 'https://github.com/Vitalex951'},
        {
            title: "Linkedid",
            descripton: "",
            imgSrc: linkedID,
            url: 'https://www.linkedin.com/in/vitaliy-gushcha-365219231/'
        },
        {title: "CodeWars", descripton: "", imgSrc: codewars, url: 'https://www.codewars.com/users/Vitalex951'},
    ]
    return (
        <div ref={props.componentRef} className={s.block} id={'contacts'}>
            <div className={`${sContainer.container} ${s.container}`}>
                <Title title={'Contacts'}/>
                <SetContacts contacts={contacts}/>
            </div>
        </div>
    );
};