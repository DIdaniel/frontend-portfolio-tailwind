import React from "react";
import { FaArrowRight } from "react-icons/fa";

const ProjectItem = ({ project, handleOpenModal }) => {
  return (
    <div className="relative">
      <img src={project.image} alt="grid1" />
      <button
        className="absolute right-12 bottom-3 bg-white py-2 px-4 flex items-center"
        onClick={() => handleOpenModal(project)}
      >
        Click Me
        <FaArrowRight className="ml-3" />
      </button>
    </div>
  );
};

export default ProjectItem;
