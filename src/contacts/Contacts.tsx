import React from 'react';
import s from './Contacts.module.css'
import sContainer from '../common/styles/Container.module.css'
import {Title} from "../components/Title";
import {ShowContacts} from "./contact/oth";


export const Contacts = () => {
    return (
        <div className={s.block} id={'contacts'}>
            <div className={`${sContainer.container} ${s.container}`}>
                <Title title={'Contacts'}/>

            {/*    <div className={s.dropdown}>*/}
            {/*        <button className={s.dropbtns}>Dropdown</button>*/}
            {/*        <div className={s.content}>*/}
            {/*            123123*/}
            {/*            123*/}
            {/*            123*/}
            {/*        </div>*/}
            {/*    </div>*/}


            {/*    <div className={s.dropdown}>*/}
            {/*        <div className={s.content}>*/}
            {/*            <Contact contacts={contacts}/>*/}
            {/*        </div>*/}
            {/*        <SuperButton className={s.dropbtns} onClick={showContacts}>Contacts</SuperButton>*/}
            {/*    </div>*/}
                <ShowContacts/>
            </div>

        </div>
    );
};