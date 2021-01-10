import React, {Component} from 'react';
import style from './App.module.css';
import Header from "./components/Header";
import Nav from "./components/Nav";
import Profile from "./components/Profile/Profile";

const App = () => {
    return (
        <div className={style.appWrapper}>
            <Header/>
            <Nav/>
            <Profile/>
        </div>
    );
}

export default App;
