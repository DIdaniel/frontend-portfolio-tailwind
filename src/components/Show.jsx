import React, { useEffect } from "react";
import ReactTypingEffect from "react-typing-effect";
import profile from "../assets/main.jpg";
import showcase from "../assets/subway.jpg";

const Show = ({ pos, setPos }) => {
  const onScroll = () => {
    setPos(window.pageYOffset);
  };

  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, [onScroll]);

  return (
    <>
      <section className="pb-10 my-8">
        <div className="flex items-center justify-center">
          <div className="mr-1">
            <h4 className="font-bold text-2xl">KIM DONG IL</h4>
            <p className="text-gray-500 text-sm mt-3 ">Frontend Developer</p>
          </div>
          <img
            src={profile}
            alt="profile-pic"
            className="ml-3 w-20 h-20 object-cover rounded-full"
          />
        </div>

        <div className="px-5 text-center mt-10">
          <h1 className="text-3xl lg:text-5xl md:text-4xl sm:4xl font-semibold text-gray-900 mb-2 ">
            <p className="mb-5 lg:text-5xl">"PASSIONATE, CARE ABOUT UI/UX"</p>
            <span>공부하는 </span>
            <ReactTypingEffect
              text={[
                "퍼블리셔!",
                "프론트엔드 개발자!",
                "개발자 김동일 입니다.",
              ]}
              typingDelay={700}
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
          </h1>
          <p className="font-bold mt-10 lg:text-4xl md:text-2xl sm:text-1xl">
            Frontend Developer & Web publisher
          </p>
          <p className="lg:px-36 py-7 text-xl">
            <br />
            <br />
            <b>
              [ 끝은 아무도 모른다. 그 시간이 아쉽지 않으려면 우선 최선을
              다해보자 ]
            </b>
            <br />
            <br />- 열정맨 <b>김동일</b> -
          </p>
        </div>
      </section>

      <div className="relative showcase-image pb-28 ">
        <img
          src={showcase}
          alt="showcase"
          id="showImg"
          className="lg:w-full lg:h-96 "
        />
        <p className="absolute bottom-1/4 ">
          <img
            className="w-1/2"
            src="https://media.giphy.com/media/giuuIJG8msg7zzvTTE/giphy.gif"
            alt="heros"
            style={{ transform: `translateX(${pos + 100}px)` }}
          />
        </p>
      </div>
    </>
  );
};

export default Show;
