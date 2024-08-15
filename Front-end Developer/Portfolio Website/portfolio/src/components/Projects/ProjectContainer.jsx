import React from "react";
import ProjectCard from "./ProjectCard'";

import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaAngular,
  FaVuejs,
} from "react-icons/fa";

function ProjectContainer() {
  const projects = [
    {
      name: "Project One",
      description: "This is a description of project one.",
      url: "https://example.com/project-one",
      technologies: [
        <FaReact key="react" />,
        <FaCss3Alt key="css3" />,
        <FaNodeJs key="nodejs" />,
      ],
      date: "January 2024",
    },
    {
      name: "Project Two",
      description: "This is a description of project two.",
      url: "https://example.com/project-two",
      technologies: [
        <FaHtml5 key="html5" />,
        <FaJsSquare key="js" />,
        <FaNodeJs key="nodejs" />,
      ],
      date: "February 2024",
    },
    {
      name: "Project Three",
      description: "This is a description of project three.",
      url: "https://example.com/project-three",
      technologies: [
        <FaAngular key="angular" />,
        <FaJsSquare key="js" />,
        <FaCss3Alt key="css3" />,
      ],
      date: "March 2024",
    },
    {
      name: "Project Four",
      description: "This is a description of project four.",
      url: "https://example.com/project-four",
      technologies: [
        <FaVuejs key="vue" />,
        <FaJsSquare key="js" />,
        <FaNodeJs key="nodejs" />,
      ],
      date: "April 2024",
    },
    {
      name: "Project Five",
      description: "This is a description of project five.",
      url: "https://example.com/project-five",
      technologies: [
        <FaReact key="react" />,
        <FaNodeJs key="nodejs" />,
        <FaCss3Alt key="css3" />,
      ],
      date: "May 2024",
    },
  ];

  return (
    <div className="project-container">
      {projects.map((project, index) => (
        <ProjectCard
          key={index}
          name={project.name}
          description={project.description}
          url={project.url}
          technologies={project.technologies}
          date={project.date}
        />
      ))}
    </div>
  );
}

export default ProjectContainer;
