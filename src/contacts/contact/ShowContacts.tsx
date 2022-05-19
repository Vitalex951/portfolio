import React, {useState} from 'react';
import s from './ShowContacts.module.css'
import {SetContacts} from "./SetContacts";
import phone from "../../assets/img/phonepng.png";
import telegram from "../../assets/img/Telegram_logo.svg.png";
import github from "../../assets/img/github.png";
import linkedID from "../../assets/img/link.png";
import gmail from "../../assets/img/gmail.png";
import codewars from "../../assets/img/codewars.svg";
import './Contact.css'

export type contactType = {
    title: string
    descripton: string
    imgSrc: string
    url: string
}

export const ShowContacts = () => {

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
    const [classContact, setclassContact] = useState(`exampleBlock`)
    const showCont = () => {
        setclassContact(classContact === 'exampleBlock' ? `exampleBlock hide` : 'exampleBlock')
    }
    return (
        <SetContacts contacts={contacts}/>
    );
};