import React, { Component } from 'react';
import logo from '../logo.svg';
import '../css/Header.css';

class Header extends Component {
    render() {
        return (
            <header className="Header">
                <img src={logo} className="Header-logo" alt="logo" />
                <nav>
                    <a href="/">Home</a>
                </nav>
            </header>
        );
    }
}

export default Header;
