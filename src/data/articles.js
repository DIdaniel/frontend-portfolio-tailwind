import { v4 as uuidv4 } from 'uuid';

export const articles = [
  {
    id: uuidv4(),
    title: "HTML5",
    desc: "HTML5를 이해하고, 문법에 맞는 명령어를 사용합니다",
    image: "./assets/html-pr.png",
  },
  {
    id: uuidv4(),
    title: "CSS3",
    desc: "CSS3 특성에 맞는 UI를 제작 할 수 있습니다",
    image: "./assets/css-pr.png",
  },
  {
    id: uuidv4(),
    title: "Javascript",
    desc: "ES6 환경을 사용하며, 개념과 동작을 이해하려고 합니다",
    image: "./assets/js-pr.png",
  },
  {
    id: uuidv4(),
    title: "React",
    desc: "리액트의 기초 개념과 사용법을 이해합니다",
    image: "./assets/react-pr.png",
  },
]