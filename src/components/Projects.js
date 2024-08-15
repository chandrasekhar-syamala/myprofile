import React from 'react';
import '../CSS/Projects.css';

const projects = [
    {
        title: "AI-Powered Content Generator",
        description: "An AI tool integrating GPT models using React, Node.js with Express, and MongoDB.",
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
    {
        title: "AI-Powered Story Teller",
        description: "",
        link: "#"
    }
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
