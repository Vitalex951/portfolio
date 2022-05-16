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
    return (
        <div className="App">
            <ScrollToTop/>
            <Stars/>
            <Header/>
            <Main/>
            <Skills/>
            <Projects/>
            <Contacts/>
            <Footer/>

        </div>
    );
}

export default App;
