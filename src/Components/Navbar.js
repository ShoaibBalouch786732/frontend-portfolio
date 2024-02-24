// Navbar.js
import React from 'react';

const Navbar = ({ user, onLogout }) => {
  return (
    <nav className="bg-blue-500 p-4 text-white">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <span className="text-2xl mr-4">Logo</span>
          <div className="relative">
            <input
              type="text"
              placeholder="Search..."
              className="border border-gray-300 rounded-full pl-8 pr-4 py-2 focus:outline-none focus:ring focus:border-blue-300"
            />
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-4.35-4.35M15 10a5 5 0 11-10 0 5 5 0 0110 0z"
                />
              </svg>
            </div>
          </div>
        </div>
        <div className="flex items-center">
          <img
            src={user.image}
            alt="User"
            className="w-8 h-8 rounded-full mr-2"
          />
          <span className="mr-4">{user.name}</span>
          <button
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full"
            onClick={onLogout}
          >
            Logout
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
