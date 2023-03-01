import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Project from './components/Project'

const App = () => {
  return (
    <>    
      <Routes>
      
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/project" element={<Project/>}/>
      
      </Routes>
    </>
  );
};

export default App;
