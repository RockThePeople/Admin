import "./App.css";
import React from 'react';
import MyButton from "./MyButton";
import {View, Text} from "react";
import Topbar from "./components/topbar/Topbar";
import Sidebar from "./components/topbar/Sidebar";
import Home from "./components/topbar/Home";

function App() {
  return (
    <div className="App">
      <Topbar />
      <div className="container">
        <Sidebar />
        <Home />
      </div>
    </div>
  );
}

export default App;