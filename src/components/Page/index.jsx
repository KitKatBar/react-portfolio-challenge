import React from 'react';
import AboutMe from '../AboutMe/index'
import Portfolio from '../Portfolio/index'
import Contact from '../Contact/index'
import Resume from '../Resume/index'

function Page({current}, props) {
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
        <section>
            {render()}
        </section>
    );
}

export default Page;
