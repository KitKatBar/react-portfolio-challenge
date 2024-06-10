import React from "react";

function Project(props) {
    return (
        <>
            {/* Flex display container to hold different elements for each project */}
            <a id={props.project.image} class="project-flex" href={props.project.deployedLink}>
                <article>
                    <h3>{props.project.title}</h3>
                    <span>{props.project.tech}</span>
                    <a id="github-link" href={props.project.githubLink}> </a>
                </article>
            </a>
        </>
    )
}

export default Project;
