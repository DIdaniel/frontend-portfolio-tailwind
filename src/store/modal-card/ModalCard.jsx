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

{
  /* <div
className={styles.container}
style={{
  transform: isOpen ? "translateY(0vh)" : "translateY(-200vh)",
  opacity: isOpen ? "1" : "0",
  transition: "all 1.3s ease",
}}
</div>
> */
}
