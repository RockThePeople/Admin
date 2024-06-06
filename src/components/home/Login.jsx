import React, { useState, useEffect } from 'react';
import './login.css';

import SignupForm from './Signup';

const App = () => {
  const [account, setAccount] = useState(null); // Ethereum 계정 상태
  

  const getTokenFromlocalStorage = () => {
    const token = localStorage.getItem("jwtToken");
    if (!token) {
      return false;
    }
    return true;
  }

  useEffect(()=>{
    getRequestAccounts();
  },[])
  // Ethereum 계정 요청 함수
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

  

  return (
    <div className='login_home'>
      <div className='login-container'>
        {account && getTokenFromlocalStorage() ? (
          <p>Welcome To CryptoCoffee Admin</p> // 여기서 아무것도 렌더링하지 않습니다.
        ) : (
          <>
            <button onClick={getRequestAccounts}>Login with Metamask</button>
            <SignupForm />
          </>
        )}
      </div>
    </div>
  );
};

export default App;
