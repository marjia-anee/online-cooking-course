import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <div className="header">
            <nav>
                <a href="/home">Home</a>
                <a href="/about">About</a>
                <a href="/food-travel">Food and Travel</a>
            </nav>
        </div>
    );
};

export default Header;