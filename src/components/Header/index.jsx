import React from 'react';
import './style.css'

function Header(props) {
    return (
        <header class="header">
            <h1>
                KitKatBar's Site
            </h1>
            {props.children}
        </header>
    );
}

export default Header;
