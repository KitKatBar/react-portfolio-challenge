import React from "react";

function Projects() {
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
        <>
            {/* Flex display container to hold different elements for each project */}
            {projects.map((project) => (
                <a id={project.image} class="project-flex" href={project.deployedLink}>
                    <article>
                        <h3>{project.title}</h3>
                        <span>{project.tech}</span>
                        <a id="github-link" href={project.githubLink}> </a>
                    </article>
                </a>
            ))}
        </>
    )
}

export default Projects;
