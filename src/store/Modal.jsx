import React from "react";
import styles from "./Modal.module.css";
import TestImg from "../assets/grid-1.gif";

const Modal = ({ isOpen, closeModal }) => {
  return (
    <div
      className={styles.container}
      style={{
        transform: isOpen ? "translateY(0vh)" : "translateY(-200vh)",
        opacity: isOpen ? "1" : "0",
        transition: "all 1.3s ease",
      }}
    >
      <div className={styles.imgWrapper}>
        <div className={styles.modalHeader}>
          <p>🔴🟡🟢</p>
          <button className={styles.close} onClick={closeModal}>
            X
          </button>
        </div>
        <img src={TestImg} alt="test" width="150%" />
      </div>
    </div>
  );
};

export default Modal;
