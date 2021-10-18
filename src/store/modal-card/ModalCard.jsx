import React from "react";
import {
  ModalCardWrapper,
  HeaderBtns,
  CloseBtn,
  ModalImg,
  ModalDesc,
} from "./modalCardStyle.js";

const ModalCard = ({ selectedProject, closeModal }) => {
  return (
    <ModalCardWrapper>
      <HeaderBtns>
        <p>🔴 🟡 🟢</p>
        <ModalDesc>- {selectedProject.desc} -</ModalDesc>
        <CloseBtn onClick={closeModal}>X</CloseBtn>
      </HeaderBtns>
      <ModalImg src={selectedProject.image} alt={selectedProject.desc} />
    </ModalCardWrapper>
  );
};

export default ModalCard;
