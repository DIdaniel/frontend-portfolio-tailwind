import React, { useState } from "react";
import styles from "./Modal.module.css";
// import TestImg from "../assets/grid-1.gif";

const Modal = ({ isOpen, closeModal, portfolio }) => {
  const [data, setData] = useState(portfolio);
  console.log(data);
  return (
    <div
      className={styles.container}
      style={{
        transform: isOpen ? "translateY(0vh)" : "translateY(-100vh)",
        opacity: isOpen ? "1" : "0",
        transition: "all 1.3s ease",
      }}
    >
      {data.map((item) => {
        console.log(item.image);
        return (
          <div className={styles.imgWrapper}>
            <div className={styles.modalHeader} id={item.id}>
              <p>🔴🟡🟢</p>
              <button className={styles.close} onClick={closeModal}>
                X
              </button>
            </div>
            <img className={item.image} src={item.desc} alt="pictures" />
          </div>
        );
      })}
    </div>
  );
};

export default Modal;

{
  /* <div className={styles.imgWrapper}>
<div className={styles.modalHeader}>
  <p>🔴🟡🟢</p>
  <button className={styles.close} onClick={closeModal}>
    X
  </button>
</div>
<img className="modalImg" src={TestImg} alt="test" />
</div> */
}
