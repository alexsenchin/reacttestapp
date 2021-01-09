import React, { Component } from 'react';
import './App.css';
import Header from "./components/basic/Header/Header";
import Main from "./components/basic/Main/Main";
import Footer from "./components/basic/Footer/Footer";

const App = () => {
  return (
    <div className="App">
      <div className="grid-container">
        <Header />
        <Main />
        <Footer />
      </div>
    </div>
  );
}

export default App;
