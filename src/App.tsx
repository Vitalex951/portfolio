import React from 'react';
import './App.css';
import {Telework} from "./telework/Telework";
import {Header} from "./header/Header";
import {Contacts} from "./contacts/Contacts";
import {Skills} from "./skills/Skills";
import {Footer} from "./footer/Footer";
import {Projects} from "./projects/Projects";
import {Main} from "./main/Main";
import Other from "./orher/other";

function App() {
    return (
        <div className="App">
            <Other/>
            <Header/>
            <Main/>
            <Skills/>
            <Projects/>
            <Telework/>
            <Contacts/>
            <Footer/>
        </div>
    );
}

export default App;
