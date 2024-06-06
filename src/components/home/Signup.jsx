// src/SignupForm.js

import { useNavigate } from 'react-router-dom';
import React, { useEffect, useState } from 'react';

const SignupForm = () => {
  const [acc, setAcc] = useState(null);
  const navigate = useNavigate();

  const getRequestAccounts = async () => {
    try {
      const account = await window.ethereum.request({
        method: 'eth_requestAccounts',
      });
      setAcc(account[0]);
    } catch (error) {
      console.error('계정 요청 오류:', error);
    }
  };

  const [formData, setFormData] = useState({
    username: '',
    password: '',
    name: 'admin',
    company: '',
  });

  useEffect(() => {
    getRequestAccounts();
  }, []);

  useEffect(() => {
    if (acc) {
      setFormData((prevData) => ({
        ...prevData,
        username: acc,
      }));
    }
  }, [acc]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async () => {
    console.log(formData);
    try {
      const response = await fetch(`http://52.79.126.94:8082/api/users/join`, {
        method: 'POST',
        headers: {
          'accept': '*/*',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        alert('Signup successful');
      } else {
        alert('Signup failed');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const [activateSignup, initialSignupState] = useState(false);

  const handleLogin = async () => {
    navigate("/home"); // 로그인에 성공하면 "/home" 페이지로 이동
    //localStorage.setItem('jwtToken', 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJjYXRlZ29yeSI6ImFjY2VzcyIsInVzZXJuYW1lIjoiMHg5ZTU2YTc0OWVkYTEwYmU3MzNmZjhmMTNiMzY1ZGFlYTIzNTc0NDhkIiwicm9sZSI6IlJPTEVfQURNSU4iLCJpYXQiOjE3MTc2NzYxNDAsImV4cCI6MTcxNzY3Njc0MH0.H3vBLZBtlz8CphQJqvZAj9W8U9ZVhJabCYrE30bSd6s');
    // const response = await fetch(`http://52.79.126.94:8082/api/users/login?username=${formData.username}&password=${formData.password}`, {
    //   method: 'POST',
    //   headers: {
    //     'Accept': '*/*',
    //   },
    // });
    // if (response.ok) {
    //   console.log("success");
    //   const data = await response.json();
    //   const token = data.accessToken;
    //   localStorage.setItem('jwtToken', token);
    // } else {
    //   alert('Login failed');
    // }
  };

  return (
    <>
      <form>
        <div>
          <label>Username:</label>
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <div style={{ display: "flex", gap: "10px" }}>
          <button onClick={handleLogin}>Login</button>
          <button onClick={() => initialSignupState(true)}>Try Sign Up</button>
        </div>
      </form>
      {activateSignup && (
        <>
          <div>
            <label>Name:</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label>Company:</label>
            <input
              type="text"
              name="company"
              value={formData.company}
              onChange={handleChange}
              required
            />
          </div>
          <div style={{ display: "flex", gap: "10px" }}>
            <button onClick={() => initialSignupState(false)}>Cancel</button>
            <button onClick={handleSubmit}>Sign Up</button>
          </div>
        </>
      )}
    </>
  );
};

export default SignupForm;
