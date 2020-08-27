import React from 'react';
import './Header.css'
import logo from '../../images/logo.png'

const Header = () => {
    return (
        <div className="header">
            <img src={logo} alt=""/>
            <nav>
                <a href="/home">Home</a>
                <a href="/about">About</a>
                <a href="/food-travel">Food and Travel</a>
            </nav>
        </div>
    );
};

export default Header;