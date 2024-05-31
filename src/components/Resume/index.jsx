import React from 'react';
import './style.css'

function Resume() {
    return (
        <section class="resume-content">
            <h2>
                Resume
            </h2>
            {/* This is an icon for the page and you click it to download my resume */}
            <section className="download-resume">
                <a id="download-icon" href="katriel-chiu-resume.pdf" download> </a>
            </section>
            <h3>
                Click me to download!
            </h3>
            <h2>
                Skills & Proficiencies
            </h2>
            <section class="skills-flex">
                {/* Each of my skillset sectioned into different categories */}
                <section class="skills-card">
                    <h3>
                        Front-End
                    </h3>
                    <ul>
                        <li>HTML5</li>
                        <li>CSS</li>
                        <li>JavaScript</li>
                        <li>Local Storage</li>
                        <li>Bootstrap</li>
                        <li>React</li>
                        <li>Angular</li>
                        <li>TypeScript</li>
                    </ul>
                </section>
                <section class="skills-card">
                    <h3>
                        Back-End
                    </h3>
                    <ul>
                        <li>Node.js</li>
                        <li>Express.js</li>
                        <li>SQL/PostgreSQL</li>
                        <li>ORM/MVC</li>
                        <li>CRUD Operations</li>
                        <li>RESTful APIs</li>
                        <li>Insomnia</li>
                        <li>NoSQL/MongoDB</li>
                    </ul>
                </section>
                <section class="skills-card">
                    <h3>
                        Other Technologies
                    </h3>
                    <ul>
                        <li>Java 8</li>
                        <li>Operating Systems</li>
                        <li>Testing/Debugging</li>
                        <li>Postman</li>
                        <li>Git Commands</li>
                        <li>Version Control</li>
                        <li>Jenkins/Render</li>
                        <li>JIRA</li>
                    </ul>
                </section>
            </section>
        </section>
    );
}

export default Resume;
