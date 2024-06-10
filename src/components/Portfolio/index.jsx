import React from 'react';
import './style.css'
import Project from './Project';

function Portfolio() {
    const projects = [
        {
            title: "Data Rebels",
            tech: "Handlebars/CSS/JavaScript",
            image: "data-rebels",
            githubLink: "https://github.com/Odesii/dataRebels",
            deployedLink: "https://datarebels.onrender.com/"
        },
        {
            title: "Tech Blog",
            tech: "Handlebars/CSS/JavaScript",
            image: "tech-blog",
            githubLink: "https://github.com/KitKatBar/tech-blog-challenge",
            deployedLink: "https://tech-blog-challenge.onrender.com"
        },
        {
            title: "Soccer Info",
            tech: "HTML/CSS/JavaScript",
            image: "soccer-info",
            githubLink: "https://github.com/Moe1362/soccer-info",
            deployedLink: "https://moe1362.github.io/soccer-info/"
        },
        {
            title: "Weather Dashboard",
            tech: "HTML/CSS/JavaScript",
            image: "weather-dashboard",
            githubLink: "https://github.com/KitKatBar/weather-dashboard-challenge",
            deployedLink: "https://kitkatbar.github.io/weather-dashboard-challenge/"
        },
        {
            title: "Text Editor",
            tech: "HTML/CSS/JavaScript",
            image: "text-editor",
            githubLink: "https://github.com/KitKatBar/text-editor-challenge",
            deployedLink: "https://text-editor-challenge-c0we.onrender.com/"
        },
        {
            title: "Personal Blog",
            tech: "HTML/CSS/JavaScript",
            image: "blog",
            githubLink: "https://github.com/KitKatBar/personal-blog-challenge",
            deployedLink: "https://kitkatbar.github.io/personal-blog-challenge/"
        }
    ];
    
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
                    {/* Map thru each project */}
                    {projects.map((project) => (
                        <Project project={project} />
                    ))}
                </section>
            </div>
        </section>
    );
}

export default Portfolio;
