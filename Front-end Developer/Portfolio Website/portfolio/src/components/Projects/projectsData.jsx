// src/components/Projects/projectsData.js

import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaAngular,
  FaVuejs,
} from "react-icons/fa";

const techIcons = {
  FaReact: <FaReact />,
  FaNodeJs: <FaNodeJs />,
  FaHtml5: <FaHtml5 />,
  FaCss3Alt: <FaCss3Alt />,
  FaJsSquare: <FaJsSquare />,
  FaAngular: <FaAngular />,
  FaVuejs: <FaVuejs />,
};

const projects = [
  {
    name: "Project One",
    description: "Short description of Project One...",
    fullDescription: "This is the full detailed description of Project One.",
    url: "https://example.com/project-one",
    path: "/project-one",
    technologies: ["FaReact", "FaCss3Alt", "FaNodeJs"],
  },
  {
    name: "Project Two",
    description: "Short description of Project Two...",
    fullDescription: "This is the full detailed description of Project Two.",
    url: "https://example.com/project-two",
    path: "/project-two",
    technologies: ["FaHtml5", "FaJsSquare", "FaNodeJs"],
  },
  // Add more projects as needed
];

export { projects, techIcons };
