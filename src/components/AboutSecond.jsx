import { SiNotion } from "react-icons/si";
import { FaBlogger } from "react-icons/fa";
import { AiOutlineGithub } from "react-icons/ai";

const AboutSecond = () => {
  return (
    <section className="px-5 md:w-1/2 md:ml-auto lg:pr-56">
      <h2 className="text-3xl text-center mb-5 md:text-left  ">
        느리지만 꾸준히 걸어가고 있습니다!
      </h2>
      <div className="bg-blue-900 h-1 w-20 mx-auto mb-5 md:mx-0"></div>
      <div className="grid grid-cols-1 gap-5 text-center md:text-left ">
        <p>
          회사 일을 병행하면서 독학을 하다보니 다소 느리지만, 다양한 경험을
          선택적으로 할 수 있었습니다.
          <br />
          <br />
          유/무료 인터넷 강의들을 선택적으로 듣으며 개인적인 역량을 쌓도록
          노력했으며, 협업을 통해 git, github, trello, notion, slack 등을 활용해
          볼 수 있었습니다.
          <br />
          <br />
          특히 최근에는 1~2년 차 주니어 개발자 팀원들과 함께 진행하고 있는
          Next.js를 활용한 "1일 1냥", 그리고 React와 mobX를 활용한 "훈과일
          블로그" 토이프로젝트를 하고 있습니다
          <br />
          Infinite scroll 구현과 로그인 Authorization 구현에 대한 공부를 하고
          있으며, 이런 것들을 하나하나 익혀나가는 재미를 느끼고 있습니다.
        </p>
        <ul className="flex items-center justify-center pb-20 lg:justify-start -ml-5">
          <li className="mx-5 text-4xl">
            <a
              href="https://www.notion.so/12c37c1f0f4d4a0888820e3eaa8b735c"
              target="_blank"
              rel="noreferrer"
            >
              <SiNotion className="hover:opacity-60" />
            </a>
          </li>
          <li className="mx-5 text-4xl">
            <a href="https://velog.io/@faunus" target="_blank" rel="noreferrer">
              <FaBlogger className="hover:opacity-60" />
            </a>
          </li>
          <li className="mx-5 text-4xl">
            <a
              href="https://github.com/DIdaniel"
              target="_blank"
              rel="noreferrer"
            >
              <AiOutlineGithub className="hover:opacity-60" />
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default AboutSecond;
