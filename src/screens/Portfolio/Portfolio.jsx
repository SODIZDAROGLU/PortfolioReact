import { useState } from "react";
import "./Portfolio.css";
import { project } from "./project";
import { Modal } from "../components/index";

function Portfolio() {
  const [currentIdx, setCurrentIdx] = useState(null);

  const handleClick = (idx) => setCurrentIdx(idx);
  const clearCurrent = () => setCurrentIdx(null);

  const projectList = project.map((project, idx) => {
    return (
      <div
        key={idx}
        onClick={() => handleClick(idx)}
        className="profolio-project-frame"
      >
        <img src={project.image} alt={project.title} />
      </div>
    );
  });

  let currentProject = currentIdx >= 0 && project[currentIdx];

  return (
    <div id="portfolio" className="portfolio-container">
      <h1>Portfolio</h1>
      <p>
        This is my github page{" "}
        <a href="https://github.com/SODIZDAROGLU" target="_blank" rel="noreferrer">
        https://github.com/SODIZDAROGLU
        </a>
      </p>
      <div className="portfolio-grid">
        {currentProject && (
          <Modal
            onClick={clearCurrent}
            title={currentProject.title}
            description={currentProject.description}
            image={currentProject.image}
            url={currentProject.url}
          />
        )}
        {projectList}
      </div>
    </div>
  );
}

export default Portfolio;
