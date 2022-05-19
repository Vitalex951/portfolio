import s from "./contact.module.css";
import React from "react";
import {contactPropsType} from "./Contact";

export const NewContact = (props: contactPropsType) => {
    return (
        <div className={s.contactData}>
            <div className={s.newBlock}>
                {props.contacts.map(el => el.url ? <div className={s.contactContainer}>
                        <a href={el.url} target={"_blank"} className={s.urlImg}>
                            <div className={s.newBlockImg}>
                                <img src={el.imgSrc}/>
                            </div>
                            <div className={s.dataBlock_description}>
                                <h4>{el.title}</h4>
                                <span>{el.descripton}</span>
                            </div>
                        </a>
                    </div>
                    : <div className={s.contactContainer}>
                        <div className={s.newBlockImg}>
                            <img src={el.imgSrc}/>
                        </div>
                        <div className={s.dataBlock_description}>
                            <h4>{el.title}</h4>
                            <span>{el.descripton}</span>
                        </div>
                    </div>)}

            </div>
        </div>
    )
}