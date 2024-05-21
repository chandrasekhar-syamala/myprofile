import React from 'react';
import '../CSS/Projects.css';

const projects = [
    {
        title: "Project Management Tool",
        description: "A project management tool using React, Node.js with Express, and MongoDB.",
        link: "#"
    },
    {
        title: "Subtitle Generation App",
        description: "A subtitle generation application using Next.js, Node.js, and MongoDB.",
        link: "#"
    },
    {
        title: "AI-powered LMS",
        description: "An AI-empowered Learning Management System.",
        link: "#"
    },
];

const Projects = () => {
    return (
        <section className="projects" id="projects">
            <h2>Projects</h2>
            <div className="projectList">
                {projects.map((project, index) => (
                    <div key={index} className="project">
                        <h3>{project.title}</h3>
                        <p>{project.description}</p>
                        <a href={project.link} target="_blank" rel="noopener noreferrer">View Project</a>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Projects;
