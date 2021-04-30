import React from 'react'
import {SiNotion} from 'react-icons/si';
import {FaBlogger} from 'react-icons/fa';
import {AiOutlineGithub} from 'react-icons/ai';

const AboutSecond = () => {
  return (
    <section className="px-5 md:w-1/2 md:ml-auto lg:pr-56">
      <h2 className="text-3xl text-center mb-5 md:text-left  ">
        Know yourself know your power
      </h2>
      <div className="bg-blue-900 h-1 w-20 mx-auto mb-5 md:mx-0"></div>
      <div className="grid grid-cols-1 gap-5 text-center md:text-left ">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis eos alias odit fugiat sunt in dolores pariatur vero aperiam officia ducimus eaque, tempore similique a error suscipit eveniet non consectetur expedita, repudiandae saepe accusamus. Minima natus quibusdam, beatae, nihil, maiores distinctio at alias similique ex asperiores numquam deserunt ipsa ipsum.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum quia nihil qui illo soluta facilis?</p>
        <ul className="flex items-center justify-center pb-10 lg:justify-start -ml-5">
          <li className="mx-5 text-4xl">
            <a href="https://www.notion.so/12c37c1f0f4d4a0888820e3eaa8b735c" target="_blank"><SiNotion className="hover:opacity-60"/></a>            
          </li>
          <li className="mx-5 text-4xl">
            <a href="https://velog.io/@faunus" target="_blank"><FaBlogger className="hover:opacity-60"/></a>
          </li>
          <li className="mx-5 text-4xl">
            <a href="https://github.com/DIdaniel" target="_blank"><AiOutlineGithub className="hover:opacity-60"/></a>
          </li>
        </ul>
      </div>
    </section>
  )
}

export default AboutSecond
