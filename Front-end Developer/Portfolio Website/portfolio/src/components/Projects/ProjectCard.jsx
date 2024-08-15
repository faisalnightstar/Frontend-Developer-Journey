import React from "react";
import styles from "./ProjectCard.module.css";
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
  FaReact: <FaReact key="react" />,
  FaNodeJs: <FaNodeJs key="nodejs" />,
  FaHtml5: <FaHtml5 key="html5" />,
  FaCss3Alt: <FaCss3Alt key="css3" />,
  FaJsSquare: <FaJsSquare key="js" />,
  FaAngular: <FaAngular key="angular" />,
  FaVuejs: <FaVuejs key="vue" />,
};

function ProjectCard({ project, onSeeMore }) {
  return (
    <div className={styles.projectCard}>
      <h2 className={styles.projectName}>{project.name}</h2>
      <p className={styles.projectDescription}>{project.description}</p>
      <div className={styles.technologies}>
        {project.technologies.map((tech, index) => (
          <span key={index} className={styles.techIcon}>
            {techIcons[tech]}
          </span>
        ))}
      </div>
      <button
        className={styles.seeMoreButton}
        onClick={() => onSeeMore(project)}
      >
        See more...
      </button>
    </div>
  );
}

export default ProjectCard;
