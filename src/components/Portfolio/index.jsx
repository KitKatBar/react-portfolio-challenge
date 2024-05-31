import React from 'react';
import './style.css'

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
                    {/* Flex display container to hold different elements for each project */}
                    <a id="data-rebels" class="project-flex" href="https://datarebels.onrender.com/">
                        <article>
                            <h3>Data Rebels</h3>
                            <span>Handlebars/CSS/JavaScript</span>
                            <a id="github-link" href="https://github.com/Odesii/dataRebels"> </a>
                        </article>
                    </a>
                    <a id="tech-blog" class="project-flex" href="https://github.com/KitKatBar/tech-blog-challenge">
                        <article>
                            <h3>Tech Blog</h3>
                            <span>Handlebars/CSS/JavaScript</span>
                            <a id="github-link" href="https://tech-blog-challenge.onrender.com"> </a>
                        </article>
                    </a>
                    <a id="soccer-info" class="project-flex" href="https://moe1362.github.io/soccer-info/">
                        <article>
                            <h3>Soccer Info</h3>
                            <span>HTML/CSS/JavaScript</span>
                            <a id="github-link" href="https://github.com/Moe1362/soccer-info"> </a>
                        </article>
                    </a>
                    <a id="weather-dashboard" class="project-flex" href="https://kitkatbar.github.io/weather-dashboard-challenge/">
                        <article>
                            <h3>Weather Dashboard</h3>
                            <span>HTML/CSS/JavaScript</span>
                            <a id="github-link" href="https://github.com/KitKatBar/weather-dashboard-challenge"> </a>
                        </article>
                    </a>
                    <a id="text-editor" class="project-flex" href="https://text-editor-challenge-c0we.onrender.com/">
                        <article>
                            <h3>Text Editor</h3>
                            <span>HTML/CSS/Javascript</span>
                            <a id="github-link" href="https://github.com/KitKatBar/text-editor-challenge"> </a>
                        </article>
                    </a>
                    <a id="blog" class="project-flex" href="https://kitkatbar.github.io/personal-blog-challenge/">
                        <article>
                            <h3>Personal Blog</h3>
                            <span>HTML/CSS/JavaScript</span>
                            <a id="github-link" href="https://github.com/KitKatBar/personal-blog-challenge"> </a>
                        </article>
                    </a>
                </section>
            </div>
        </section>
    );
}

export default Portfolio;
