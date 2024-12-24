import React, { useState } from 'react';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  
    const handleLogin = () => {
      const visitorData = JSON.parse(localStorage.getItem('visitorData'));
      if (visitorData && visitorData.email === email && visitorData.password === password) {
        alert('Login Successful!');
        localStorage.setItem('isLoggedIn', 'true');
        window.location.href = '/gatepass';
      } else {
        alert('Invalid email or password!');
      }
    };
  
    return (
      <div>
        <h2>Visitor Login</h2>
        <input
          type="email"
          placeholder="Enter your registered email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={handleLogin}>Login</button>
      </div>
    );
  }
  
  export default Login;