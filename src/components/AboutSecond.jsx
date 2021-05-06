import { SiNotion } from "react-icons/si";
import { FaBlogger } from "react-icons/fa";
import { AiOutlineGithub } from "react-icons/ai";

const AboutSecond = () => {
  return (
    <section className="px-5 mt-10 md:w-1/2 md:ml-auto lg:pr-56">
      <h2 className="text-3xl text-center mb-5 md:text-left  ">
        느리지만 꾸준히 걸어가고 있습니다!
      </h2>
      <div className="bg-blue-900 h-1 w-20 mx-auto mb-5 md:mx-0"></div>
      <div className="grid grid-cols-1 gap-5 text-center md:text-left ">
        <p>
          회사 일을 병행하면서 독학을 하다보니 다소 느릴 수 있겠지만, 어제보다
          발전 된 저를 보기 위해 성실하게 익히고 있습니다.
          <br />
          <br />
          유/무료 인터넷 강의들을 선택적으로 들으며 역량을 쌓을 수 있도록 노력
          하고 있고, 팀원들과의 토이프로젝트를 통해 git, github, trello, notion,
          slack 등을 활용해 볼 수 있었습니다.
          <br />
          <br />
          특히 최근에는 1~2년 차 프론트엔드, 백엔드 주니어 개발자 팀원들과 함께
          진행하고 있는 Next.js와 mobX를 활용한 "1일 1냥", 그리고 React와 mobX를
          활용한 "훈과일의 기술 블로그" 토이프로젝트를 진행하면서 문제 해결하는
          방법에 대한 것들을 배우고 있습니다.
          <br />
          <br />
          토이프로젝트를 위한 Infinite scroll 구현과 Login Authorization 구현에
          대한 공부를 하고 있으며, Interactive 웹/앱 구현에 관심이 있습니다.
        </p>
        <ul className="flex items-center justify-center pb-20 lg:justify-start -ml-5">
          <li className="mx-5 cursor-pointer">
            <a
              href="https://www.notion.so/12c37c1f0f4d4a0888820e3eaa8b735c"
              target="_blank"
              rel="noreferrer"
            >
              <SiNotion className="text-4xl hover:opacity-60" />
              <p className="text-1xl hover:opacity-60 animate-bounce w-12 h-6 mt-3 ">
                이력서
              </p>
            </a>
          </li>

          <li className="mx-5 cursor-pointer">
            <a href="https://velog.io/@faunus" target="_blank" rel="noreferrer">
              <FaBlogger className="text-4xl hover:opacity-60" />
              <p className="text-1xl hover:opacity-60 animate-bounce w-12 h-6 mt-3 ">
                블로그
              </p>
            </a>
          </li>
          <li className="mx-5 cursor-pointer">
            <a
              href="https://github.com/DIdaniel"
              target="_blank"
              rel="noreferrer"
            >
              <AiOutlineGithub className=" text-4xl hover:opacity-60" />
              <p className="text-1xl hover:opacity-60 animate-bounce w-12 h-6 mt-3 cursor-pointer">
                깃허브
              </p>
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default AboutSecond;
