import React from 'react';
import './style.css'

function Footer() {
    return (
        <footer className="footer">
            <h3>
                Website created and designed by © KitKatBar 2024
            </h3>
            <address className="contact">
                <ul>
                    {/* Each contact option with an icon and link */}
                    <li>
                        <a id="phone" href="tel:my-number-here"> </a>
                    </li>
                    <li>
                        <a id="e-mail" href="mailto:katriel_chiu@msn.com"> </a>
                    </li>
                    <li>
                        <a id="github" href="https://github.com/KitKatBar/"> </a>
                    </li>
                    <li>
                        <a id="linkedin" href="https://www.linkedin.com/in/katriel-chiu-a8592aa8/"> </a>
                    </li>
                    <li>
                        <a id="discord" href="https://discord.com/users/117181812450525190"> </a>
                    </li>
                    <li>
                        <a id="youtube" href="https://www.youtube.com/channel/UCgPOWio1gCV7e5ohrsP-Qgw"> </a>
                    </li>
                </ul>
            </address>
        </footer>
    );
}

export default Footer;
