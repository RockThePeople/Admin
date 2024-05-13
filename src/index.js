import React from 'react';
import { createRoot } from 'react-dom/client'; // react-dom/client에서 createRoot 가져오기
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from "react-router-dom";

const root = createRoot(document.getElementById('root')); // createRoot를 사용하여 root 생성

root.render(
  <React.StrictMode>
    <BrowserRouter>
      
        <App />
      
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
