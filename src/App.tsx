import React from 'react';
import './App.css';
import {Header} from "./header/Header";
import {Contacts} from "./contacts/Contacts";
import {Skills} from "./skills/Skills";
import {Footer} from "./footer/Footer";
import {Projects} from "./projects/Projects";
import {Main} from "./main/Main";
import Stars from "./orher/stars";
import {ScrollToTop} from "./nav/ScrollToTop";


function App() {
    const main = React.useRef(null);
    const skills = React.useRef(null);
    const projects = React.useRef(null);
    const contacts = React.useRef(null);
    const buttonHandler = (ref: any) => {
        ref.current.scrollIntoView({behavior: 'smooth'});
    };

    return (
        <div className="App">
            <ScrollToTop/>
            <Stars/>
            <Header
                callback={buttonHandler}
                main={main}
                skills={skills}
                projects={projects}
                contacts={contacts}
            />
            <Main componentRef={main}/>
            <Skills componentRef={skills}/>
            <Projects componentRef={projects}/>
            <Contacts componentRef={contacts}/>
            <Footer/>

        </div>
    );
}

export default App;
