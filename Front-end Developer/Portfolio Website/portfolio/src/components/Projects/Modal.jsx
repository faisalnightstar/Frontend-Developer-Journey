import React from "react";
import styles from "./Modal.module.css";
import { techIcons } from "./projectsData";

function Modal({ project, onClose }) {
  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContent}>
        <h2 className={styles.modalTitle}>{project.name}</h2>
        <p className={styles.modalDescription}>{project.fullDescription}</p>
        <div className={styles.modalTechnologies}>
          {project.technologies.map((tech, index) => (
            <span key={index} className={styles.techIcon}>
              {techIcons[tech]} {tech}
            </span>
          ))}
        </div>
        <a href={project.url} target="_blank" rel="noopener noreferrer">
          <button className={styles.goToButton}>Go to Project</button>
        </a>
        <button className={styles.closeButton} onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
}

export default Modal;
