import React, { useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import ReactTypingEffect from "react-typing-effect";
import { projectList } from "../data/projectList";
import Modal from "../store/Modal";
import ProjectItem from "./ProjectItem";

const Grid = () => {
  const [projects, setProejcts] = useState(projectList);
  const [selectedProject, setSelectedProject] = useState(null);

  const handleOpenModal = (project) => setSelectedProject(project);

  const closeModal = () => {
    setSelectedProject(null);
  };

  const renderProjects = projects.map((project) => (
    <ProjectItem project={project} handleOpenModal={handleOpenModal} />
  ));

  return (
    <>
      <div className="text-4xl text-center mb-5">
        <ReactTypingEffect
          id="portfolio"
          text={["P O R T F O L I O", "MY  WORK"]}
          typingDelay={300}
          eraseSpeed={50}
          eraseDelay={1000}
          cursorRenderer={(cursor) => <h1>{cursor}</h1>}
          displayTextRenderer={(text, i) => {
            return (
              <h1>
                {text.split("").map((char, i) => {
                  const key = `${i}`;
                  return <span key={key}>{char}</span>;
                })}
              </h1>
            );
          }}
        />
      </div>
      <div
        style={{
          position: "relative",
        }}
        className="bg-blue-900 h-1 w-20 mx-auto mb-10"
      ></div>

      <section className="sm:grid sm:grid-cols-2 sm:gap-3 lg:max-w-7xl lg:mx-auto pb-10">
        {renderProjects}
        {selectedProject && (
          <Modal closeModal={closeModal}>
            {/* 여기에 모달 안에 들어갈 콤포넌트를 넣으면 돼요 */}
            <h1>{selectedProject.desc}</h1>
          </Modal>
        )}
      </section>
    </>
  );
};

export default Grid;
