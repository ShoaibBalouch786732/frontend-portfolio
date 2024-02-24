import React, { useState } from 'react';
import logo from '../assets/logowhite.png';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      className={`fixed h-screen w-1/4 bg-gray-800 text-white p-4 ${
        isOpen ? 'left-0' : '-left-300'
      } transition-transform duration-300 ease-in-out`}
    >
      <div className="mb-8">
        <img src={logo} alt="Logo" className="w-16 h-16 mx-auto" />
      </div>
      <ul>
        <li className="mb-4">
          <a href="/">Home</a>
        </li>
        <li className="mb-4">
          <a href="/discover">Discover Categories</a>
        </li>
      </ul>
      <button
        className="absolute top-4 right-4 text-white text-2xl cursor-pointer"
        onClick={toggleSidebar}
      >
        {isOpen ? 'X' : '☰'}
      </button>
    </div>
  );
};

export default Sidebar;
