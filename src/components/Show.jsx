import React from 'react'
import ReactTypingEffect from 'react-typing-effect';
import profile from '../assets/logo.png';
import showcase from '../assets/nightocean.jpg';

const Show = () => {
  return (
    <>
      <section id="home" className="pb-20">
        <div className="flex items-center justify-center py-10">
          <div className="mr-1">
          <h4 className="font-bold">KIM DONG IL</h4>
          <p className="text-gray-500 text-sm">lorem, ipsum dolor.</p>
          </div>
          <img src={profile} alt="" className="w-12 rounded-full"/>
        </div>

        <div className="px-5 text-center">
          <h1 className="text-4xl text-gray-900 mb-2">
            <p className="mb-3">예술을 사랑하고,</p>
            <p className="mb-3"> 아름다움을 추구하는</p>
            <ReactTypingEffect
            text={["퍼블리셔!", "프론트엔드 개발자!", "김동일 입니다."]}
            typingDelay={500}
            eraseSpeed={50}
            eraseDelay={1000}
            cursorRenderer={cursor => <h1>{cursor}</h1>}
            displayTextRenderer={(text, i) => {
              return (
                <h1>
                  {text.split('').map((char, i) => {
                    const key = `${i}`;
                    return (
                      <span
                        key={key}
                      >{char}</span>
                    );
                  })}
                </h1>
              );
            }}        
          /></h1>
          <p className="font-bold mt-4 mb-4">Frontend Developer & Web publisher</p>
          <p className="lg:max-w-7xl lg:mx-auto">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium recusandae natus sit? Excepturi repellendus aperiam veniam, ipsa incidunt reprehenderit delectus natus nesciunt similique commodi voluptatum molestias cupiditate nisi repellat? Nobis consequatur doloribus fuga nesciunt molestias placeat laboriosam. Quaerat id, quibusdam obcaecati amet, culpa, soluta dicta sapiente reiciendis sit a sunt.</p>
        </div>

        <div className="showcase-image mt-10">
          <img src={showcase} alt="showcase" className="lg:w-full lg:h-96"/>
        </div>
      </section>      
    </>
  )
}

export default Show
