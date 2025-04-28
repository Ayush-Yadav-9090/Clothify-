import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Used for redirect after login
import './collections/login.css'
import { toast } from 'react-toastify';

export const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    toast.success('Login successful!'); // Display success message
    navigate('/home');  // Go to the Home page
  };

  
  
  return (
    <div className="login-container">
      <h2><u>Login</u></h2>
      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit" >Login</button>{/* Trigger form submission */}
      </form>
    </div>
  );
};
