import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Components/Login';
import Home from './Components/Home';
import Sidebar from './Components/Sidebar';

const App = () => {
  return (
    <Router>
         <Sidebar/>
      <Login/>
   

      <Routes>
      <Route exact  path="/Login" element={Login} />
        <Route exact  path="/Home" element={Home} />
      </Routes>
    </Router>
  );
}

export default App;
