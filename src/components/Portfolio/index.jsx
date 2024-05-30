import React from 'react';
import './style.css'

function Portfolio() {
    return (
        <section className="content">
            <section class="section-content">
                <h2>
                    Projects
                </h2>
                <div>
                    <section class="section-flex">
                        <a id="horiseon" class="project-flex" href="https://kitkatbar.github.io/code-refactor-challenge/">
                            <article>
                                <h3>Horiseon Website</h3>
                                <span>HTML/CSS</span>
                            </article>
                        </a>
                        <a id="horiseon" class="project-flex" href="https://kitkatbar.github.io/code-refactor-challenge/">
                            <article>
                                <h3>Horiseon Website</h3>
                                <span>HTML/CSS</span>
                            </article>
                        </a>
                        <a id="prework" class="project-flex" href="https://kitkatbar.github.io/prework-study-guide/">
                            <article>
                                <h3>Prework Study Guide</h3>
                                <span>HTML/CSS</span>
                            </article>
                        </a>
                        <a id="backend" class="project-flex" href="https://github.com/KitKatBar/TimeManagement-BackEnd">
                            <article>
                                <h3>Timesheet Manager (Backend)</h3>
                                <span>Java/Spring Boot</span>
                            </article>
                        </a>
                        <a id="frontend" class="project-flex" href="https://github.com/KitKatBar/TimeManagement-FrontEnd">
                            <article>
                                <h3>Timesheet Manager (Frontend)</h3>
                                <span>Angular/TypeScript/HTML/CSS</span>
                            </article>
                        </a>
                        <a id="feast" class="project-flex" href="https://github.com/KitKatBar/FeastFreedom-Clean">
                            <article>
                                <h3>Feast Freedom</h3>
                                <span>Java/Spring Boot/HTML/CSS</span>
                            </article>
                        </a>
                    </section>
                </div>
            </section>
        </section>
    );
}

export default Portfolio;
