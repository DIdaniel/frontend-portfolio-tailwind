import React from "react";
// import { FaSearch } from 'react-icons/fa';

const Header = () => {
  return (
    <header className="sticky w-full flex items-center justify-between px-20 py-8 text-lg">
      <div className="logo">
        <h2>DONG-IL</h2>
      </div>

      <nav>
        <ul className="flex items-center">
          <li className="mx-2 lg:mx-5">
            <a href="#portfolio" className="lg:text-xl">
              PORTFOLIO
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
