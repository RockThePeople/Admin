import React, { useState, useEffect } from 'react';
import './login.css';
import { useNavigate } from 'react-router-dom';

const App = () => {
  const [account, setAccount] = useState(null); // Ethereum 계정 상태
  const navigate = useNavigate();

  // Ethereum 계정 요청 함수
  const getRequestAccounts = async () => {
    try {
      const [account] = await window.ethereum.request({
        method: 'eth_requestAccounts',
      });
      setAccount(account); // Ethereum 계정 상태 업데이트
      console.log('현재 계정:', account);
      navigate("/home"); // 로그인에 성공하면 "/home" 페이지로 이동
    } catch (error) {
      console.error('계정 요청 오류:', error);
    }
  };

  return (
    <div className='login_home'>
      <div className='login-container'>
        {account ? (
          <p>Welcome To CryptoCoffee Admin</p> // 여기서 아무것도 렌더링하지 않습니다.
        ) : (
          <button onClick={getRequestAccounts}>Login with Metamask</button>
        )}
      </div>
      </div>
  );
};

export default App;
