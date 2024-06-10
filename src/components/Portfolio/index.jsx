import React from 'react';
import './style.css'
import Projects from './Projects';

function Portfolio() {
    return (
        <section class="portfolio-content">
            {/* This is an icon for the page */}
            <section className="center-icon">
                <section id="portfolio-icon"></section>
            </section>
            <h2>
                Projects
            </h2>
            <div>
                {/* Flex display section for the projects */}
                <section class="section-flex">
                    <Projects />
                </section>
            </div>
        </section>
    );
}

export default Portfolio;
