import React, {Component} from 'react';
import style from './App.module.css';
import Header from "./components/Header";
import Nav from "./components/Nav";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Messages/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";

const App = () => {
    return (
        <BrowserRouter>
            <div className={style.appWrapper}>
                <Header/>
                <Nav/>
                <div>
                    <Route path='/messages' render={ () => <Dialogs />}/>
                    <Route path='/profile' render={ () => <Profile />}/>
                    <Route path='/news'/>
                    <Route path='/music'/>
                    <Route path='/settings'/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
