import React, { useState } from "react";
import { FiPlayCircle } from "react-icons/fi";
import { FaArrowRight } from "react-icons/fa";
import ReactTypingEffect from "react-typing-effect";
import { grids } from "../data/grids";
import Modal from "../store/Modal";

const Grid = () => {
  const [portfolio, setPortpolio] = useState(grids);
  const [isOpen, setIsOpen] = useState(false);

  const closeModal = () => setIsOpen(false);

  console.log(portfolio);

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
      <div className="bg-blue-900 h-1 w-20 mx-auto mb-10"></div>

      {isOpen ? (
        <div
          style={{
            backgroundColor: "black",
            opacity: "0.8",
            height: "100vh",
            width: "100vh",
            position: "fixed",
            transition: "all 1.3s ease",
            zIndex: "50",
          }}
          onClick={closeModal}
        ></div>
      ) : null}
      <section className="sm:grid sm:grid-cols-2 sm:gap-3 lg:max-w-7xl lg:mx-auto pb-10">
        <div className="relative">
          <img src={portfolio[0].image} alt="grid1" />
          <button
            className="absolute right-12 bottom-3 bg-white py-2 px-4 flex items-center"
            onClick={() => setIsOpen(true)}
          >
            Click Me
            <FaArrowRight className="ml-3" />
          </button>
        </div>

        <div className="relative mt-5 sm:mt-0">
          <img src={portfolio[1].image} alt="grid2" />
          <button className="absolute right-12 bottom-5 bg-white py-2 px-4 flex items-center">
            Click Me
            <FaArrowRight className="ml-3" />
          </button>
        </div>

        <div className="relative mt-5 sm:mt-0">
          <img src={portfolio[2].image} alt="grid3" />
          <button className="absolute right-12 bottom-5 bg-white py-2 px-4 flex items-center">
            Click Me
            <FaArrowRight className="ml-3" />
          </button>
        </div>
        <div className="relative">
          <img src={portfolio[3].image} alt="grid4" />
          <button className="absolute right-12 bottom-5 bg-white py-2 px-4 flex items-center">
            Click Me
            <FaArrowRight className="ml-3" />
          </button>
        </div>
        <div className="relative">
          <img src={portfolio[4].image} alt="grid5" />
          <button className="absolute right-12 bottom-5 bg-white py-2 px-4 flex items-center">
            Click Me
            <FaArrowRight className="ml-3" />
          </button>
        </div>
        <div className="relative">
          <img src={portfolio[5].image} alt="grid6" />
          <button className="absolute right-12 bottom-5 bg-white py-2 px-4 flex items-center">
            Click Me
            <FaArrowRight className="ml-3" />
          </button>
        </div>
        <Modal isOpen={isOpen} closeModal={closeModal} />
      </section>
    </>
  );
};

export default Grid;

// {portfolio.map((grid) => {
//   const { id, desc, image } = grid;
//   return (
//     <div className="relative" key={id}>
//       <img className="mb-3" src={image} alt={desc} />
//       <button
//         className="absolute right-12 bottom-20 bg-white py-2 px-4 flex items-center"
//         onClick={() => closeModal}
//       >
//         Click Me
//         <FaArrowRight className="ml-3" />
//       </button>
//       <h4 className="mb-8">{desc}</h4>
//     </div>
//   );
// })}
