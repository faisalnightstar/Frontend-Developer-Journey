import React from "react";
import styles from "./ProjectSlide.module.css";
import { techIcons } from "./projectsData";

function ProjectSlide({ project, onSeeMore }) {
  return (
    <div className={styles.projectSlide}>
      <h2 className={styles.projectName}>{project.name}</h2>
      <p className={styles.projectDescription}>{project.description}</p>
      <div className={styles.technologies}>
        {project.technologies.map((tech, index) => (
          <span key={index} className={styles.techIcon}>
            {techIcons[tech]}
          </span>
        ))}
      </div>
      <button className={styles.seeMoreButton} onClick={onSeeMore}>
        See more...
      </button>
    </div>
  );
}

export default ProjectSlide;
