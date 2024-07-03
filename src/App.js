import React from "react";
import Sidebar from "./components/Sidebar";
import Dashboard from "./components/Dashboard";
import Graph from "./components/Graph";
import Home from "./components/Home";
import './App.css'


const App = () => {
  return (
    <div className="app-container" > 
      <Sidebar />
      <Home />
    </div>
  );
};

export default App;
