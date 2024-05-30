import React from 'react';
import './style.css'

function Header(props) {
    return (
        <header class="header">
            <h1>
                KitKatBar's Site
            </h1>
            <section id="logo"></section>
            {props.children}
        </header>
    );
}

export default Header;
