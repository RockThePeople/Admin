import "./App.css";
import React from 'react';
import { Route, Routes } from "react-router-dom"; // Routes 대신 Route를 가져옴
import Topbar from "./components/home/Topbar";
import Login from "./components/home/Login";
import Home from './components/home/Home';
import Morning from './componets/sidebar/Morning';
import Lunch from './componets/sidebar/Lunch';
import Dinner from './componets/sidebar/Dinner';
import Total from './componets/sidebar/Total';
import Year from './componets/sidebar/Year';
import Month from './componets/sidebar/Month';
import Sidebar from './components/home/Sidebar';
import { useState } from "react";
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  return (
    <div className="App">
      <Topbar  />
      <div className="container">
        <Sidebar  />
        <div className="others">
          <Routes> {/* 여기서 Routes 대신 Route를 사용해야 합니다. */}
            <Route path="*" element={<Login />}  />
            <Route path="/home" element={<Home />} />
            <Route path="/morning" element={<Morning />} />
            <Route path="/lunch" element={<Lunch />} />
            <Route path="/dinner" element={<Dinner />} />
            <Route path="/total" element={<Total />} />
            <Route path="/year" element={<Year />} />
            <Route path="/month" element={<Month />} />
            <Route path="*" element={<p>Path not resolved</p>} />
         </Routes>
         </div>
      </div>
    </div>
    
  );
}

export default App;

