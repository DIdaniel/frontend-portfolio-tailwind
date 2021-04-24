import React from 'react'
import profile from '../assets/logo.png';

const About = () => {
  return (
    <section className="px-5 pb-10 md:grid md:grid-cols-2 md:gap-5 lg:grid-cols-3 lg:max-w-7xl lg:mx-auto ">
      <div className="flex items-center justify-center md:items-start">
        <div className="mr-1">
        <h4 className="font-bold">KIM DONG IL</h4>
        <p className="text-gray-500 text-sm">lorem, ipsum dolor.</p>
        </div>
        <img src={profile} alt="" className="w-12 rounded-full md:h-10"/>
      </div>

      <div>
        <q className="text-4xl text-center block mt-5 md:mt-0">
          Whatever a man can imaine, he can invent.
        </q>
      </div>

      <div className="grid grid-cols-1 gap-5 mt-5 md:mt-0">
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo hic modi rerum recusandae dolor deserunt vitae minima praesentium iure sed? Corporis harum illum voluptatem minus sit sint in blanditiis est nostrum quibusdam accusantium rerum magnam quod porro quisquam minima reprehenderit sequi, ipsa optio amet exercitationem sapiente praesentium dicta? Dolores, tempore.</p>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam repudiandae omnis earum corrupti, aliquam architecto adipisci quod consequatur sequi. Molestiae blanditiis quis officia cum. Nemo autem ipsa ab vero obcaecati.</p>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum est ab cum sed esse corporis numquam accusamus obcaecati, architecto adipisci.</p>
      </div>
    </section>    
  )
}

export default About
