import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Clock from './Clock'
import Toggler from './Toggler'
import { browserHistory } from 'react-router';
import {Link} from "react-router-dom";

class Home extends Component {

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1 className="App-title">Welcome to React</h1>
                </header>
                <p className="App-intro">
                    To get started, edit <code>src/App.js</code> and save to reload.
                </p>
                <h1>Hello, world!</h1>

                <Clock >
                    <p>qwerty</p>
                </Clock>
                <Toggler />
                <Link to='/contact'>Contact</Link>
            </div>
        );
    }
}


export default Home;

