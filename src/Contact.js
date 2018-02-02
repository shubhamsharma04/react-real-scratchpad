import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Toggler from './Toggler'
import {Link} from "react-router-dom";

class Contact extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1 className="App-title">Welcome to React</h1>
                </header>
                <h1>Hello, world!</h1>
                <Link to='/'>Home</Link>

                <Toggler />
            </div>
        );
    }
}


export default Contact;

