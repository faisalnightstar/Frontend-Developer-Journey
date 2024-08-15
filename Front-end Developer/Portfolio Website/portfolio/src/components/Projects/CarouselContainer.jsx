import React, { useState } from "react";
import styles from "./CarouselContainer.module.css";
import ProjectSlide from "./ProjectSlide";
import Modal from "./Modal";
import { projects } from "./projectsData";

function CarouselContainer() {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleSeeMore = (project) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  return (
    <div className={styles.carouselContainer}>
      <div className={styles.slides}>
        {projects.map((project, index) => (
          <ProjectSlide
            key={index}
            project={project}
            onSeeMore={() => handleSeeMore(project)}
          />
        ))}
      </div>
      {selectedProject && (
        <Modal project={selectedProject} onClose={closeModal} />
      )}
    </div>
  );
}

export default CarouselContainer;
