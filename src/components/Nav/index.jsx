import React from 'react';
import './style.css'

function Nav(props) {
    // For tracking each of the pages and setting the current page
    const {
        pages = [],
        current,
        setCurrent
    } = props;

    return (
        <nav>
            <ul>
                {/* Set the current page to whichever nav link is clicked */}
                <li className={current.page === pages[0].page && 'active'} key={pages[0].page}>
                    <span onClick={() => setCurrent(pages[0])}>About Me</span>
                </li>
                <li className={current.page === pages[1].page && 'active'} key={pages[1].page}>
                    <span onClick={() => setCurrent(pages[1])}>Portfolio</span>
                </li>
                <li className={current.page === pages[2].page && 'active'} key={pages[2].page}>
                    <span onClick={() => setCurrent(pages[2])}>Contact</span>
                </li>
                <li className={current.page === pages[3].page && 'active'} key={pages[3].page}>
                    <span onClick={() => setCurrent(pages[3])}>Resume</span>
                </li>
            </ul>
        </nav>
    );
}

export default Nav;
