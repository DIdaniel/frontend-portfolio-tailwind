import React from "react";
import { FiPlayCircle } from "react-icons/fi";
import { FaArrowRight } from "react-icons/fa";
import ReactTypingEffect from "react-typing-effect";
import grid1 from "../assets/grid-1.gif";
import grid2 from "../assets/grid-2.gif";
import grid3 from "../assets/grid-3.gif";
import grid4 from "../assets/grid-4.gif";

const Grid = () => {
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
      <section className="sm:grid sm:grid-cols-2 sm:gap-3 lg:max-w-7xl lg:mx-auto pb-10">
        <div className="relative">
          <img src={grid1} alt="grid1" />
          <button className="absolute right-12 bottom-3 bg-white py-2 px-4 flex items-center">
            Click Me
            <FaArrowRight className="ml-3" />
          </button>
        </div>
        <div className="relative mt-5 sm:mt-0">
          <img src={grid2} alt="grid2" />
          <FiPlayCircle className="absolute bottom-5 text-7xl text-white left-5" />
        </div>
        <div className="relative mt-5 sm:mt-0">
          <img src={grid3} alt="grid3" />
          <h4 className="absolute top-10 right-12 bg-black text-white py-2 px-3">
            Moving 3D Card
          </h4>
          <FiPlayCircle className="absolute bottom-5 text-7xl text-white left-5" />
        </div>
        <div className="relative">
          <img src={grid4} alt="grid1" />
          <button className="absolute right-12 bottom-5 bg-white py-2 px-4 flex items-center">
            Click Me
            <FaArrowRight className="ml-3" />
          </button>
        </div>
      </section>
    </>
  );
};

export default Grid;

// className="sm:w-full" => 각각 img tag
