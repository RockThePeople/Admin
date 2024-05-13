import "./App.css";
import React, { useEffect } from 'react';
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

  const [account, setAccount] = useState(null); // Ethereum 계정 상태
  const getRequestAccounts = async () => {
    try {
      const [account] = await window.ethereum.request({
        method: 'eth_requestAccounts',
      });
      setAccount(account); // Ethereum 계정 상태 업데이트
      console.log('현재 계정:', account);
    } catch (error) {
      console.error('계정 요청 오류:', error);
    }
  };

  const [renderSidebar, setRenderSidebar] = useState(false);
  useEffect(()=>{
    getRequestAccounts();
    if(account !== null) {
      setRenderSidebar(true);
      console.log("rendering");
    }
  },[account])
  
  return (
    <div className="App">
      <Topbar  />
      <div className="container">
        {renderSidebar && <Sidebar  />}
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

