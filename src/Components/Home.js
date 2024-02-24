
import React from 'react';



const Home = ({ user, onLogout }) => {
  return (
    <div className="flex justify-center items-center h-screen text-white">
      <p>Welcome, {user.name}</p>
      <button
        className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 rounded-full"
        onClick={onLogout}
      >
        Log Out
      </button>
    <div>
      
    </div>
    </div>
    
  );
};

export default Home;
