import React from "react";
import { createPortal } from "react-dom";

const overlay = document.querySelector("#overlay");

const Backdrop = ({ closeModal }) => (
  <div
    onClick={closeModal}
    style={{
      position: "fixed",
      top: "0",
      left: "0",
      width: "100%",
      height: "100vh",
      zIndex: "40",
      backgroundColor: "rgba(0, 0, 0, 0.25)",
    }}
  ></div>
);

const ModalOverlay = (props) => (
  <div
    style={{
      position: "fixed",
      top: "20vh",
      left: "5%",
      width: "90%",
      backgroundColor: "white",
      padding: "1rem",
      borderRadius: "14px",
      zIndex: "50",
    }}
  >
    <div>{props.children}</div>
  </div>
);

const Modal = ({ children, closeModal }) => {
  return (
    <>
      {createPortal(<Backdrop closeModal={closeModal} />, overlay)}
      {createPortal(<ModalOverlay>{children}</ModalOverlay>, overlay)}
    </>
  );
};

export default Modal;
