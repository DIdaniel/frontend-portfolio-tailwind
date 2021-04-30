import React from 'react'
import { GrFacebook, GrTwitter, GrInstagram, GrPinterest } from 'react-icons/gr'

const footer = () => {
  return (
    <footer className="px-5 py-20 lg:max-w-7xl lg:mx-auto">
      <div className="mb-10 md:flex md:items-center md:justify-between">
        <h2 className="text-4xl mb-2 font-semibold">KIM-DONG-IL</h2>
        <p>Contact Me</p>
      </div>
      <div className="flex flex-col-reverse md:flex-row md:justify-between">
        <p>&copy; Copyright DONG-IL, All Rights Reserved</p>

        <ul className="flex mb-2">
          <li className="mx-2 text-2xl">
            <GrFacebook />
          </li>
          <li className="mx-2 text-2xl">
            <GrTwitter />
          </li>
          <li className="mx-2 text-2xl">
            <GrInstagram />
          </li>
          <li className="mx-2 text-2xl">
            <GrPinterest />
          </li>
        </ul>
      </div>
    </footer>
  )
}

export default footer
