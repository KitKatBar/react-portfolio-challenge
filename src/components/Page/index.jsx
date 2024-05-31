import React from 'react';
import AboutMe from '../AboutMe/index';
import Portfolio from '../Portfolio/index';
import Contact from '../Contact/index';
import Resume from '../Resume/index';
import './style.css';

function Page({current}) {
    // Return the element of the current page for rendering
    function render() {
        if (current.page === "AboutMe") {
            return <AboutMe />
        }

        else if (current.page === "Portfolio") {
            return <Portfolio />
        }

        else if (current.page === "Contact") {
            return <Contact />
        }

        else if (current.page === "Resume") {
            return <Resume />
        }
    }

    return (
        <section className="content">
            {/* Render the current page */}
            {render()}
        </section>
    );
}

export default Page;
