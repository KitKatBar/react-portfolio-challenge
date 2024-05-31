import React from 'react';
import './style.css'

function Header(props) {
    return (
        <header className="header">
            <h1>
                KitKatBar's Site
            </h1>
            {/* This is an logo for the header */}
            <section id="logo"></section>
            {/* This is the navbar since it is a child element of the header */}
            {props.children}
        </header>
    );
}

export default Header;
