import React from 'react';
import './style.css'

function Nav(props) {
    return (
        <nav>
        <ul>
            <li>
                <a href="#about-me">About Me</a>
            </li>
            <li>
                <a href="#projects">Projects</a>
            </li>
            <li>
                <a href="#contact">Contact</a>
            </li>
            <li>
                <a href="#resume">Resume</a>
            </li>
        </ul>
        </nav>
    );
}

export default Nav;
