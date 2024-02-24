import React from 'react';
import shareVideo from '../assets/share.mp4';
import logo from '../assets/logowhite.png';
import { useAuth0 } from "@auth0/auth0-react";

import { useNavigate } from 'react-router-dom';
import Sidebar from './Sidebar';

const Login = () => {
  const { isAuthenticated, loginWithRedirect, logout, user } = useAuth0(); 
  console.log("isAuthenticated:", isAuthenticated);
  const navigate = useNavigate();
  
   
 
  return (
<>
<Sidebar/>
    <div className="flex justify-start items-center flex-col h-screen">
      <div className="relative w-full h-full">
        <video
          src={shareVideo}
          type="vedio/mp4"
          autoPlay
          muted
          loop
          controls={false}

          className="fixed inset-0 w-full h-full object-cover z-0"
        >
        </video>
        <div className="absolute flex flex-col justify-center top-0 right-0 left-0 bottom-0 bg-opacity-50 backdrop-blur-md">
          <div className="p-5 items-screen-center ">
            <img src={logo} width="130px" alt="logo" className="mx-auto" />
          </div>
          <div className=" flex justify-center items-center h-screen text-white">
           
          {isAuthenticated ? (
              <div>
                <p>Welcome, {user.name}</p> 
                <button  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
                 onClick={() => logout({ returnTo: window.location.origin })}>Log Out</button>
              </div>
            ) : (
              <button  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
               onClick={(e) => loginWithRedirect(navigate('/Home'))}>Log In
               </button>
            )}
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default Login
