import React, { useState } from 'react';
import './signin.css'
import axios from 'axios';

export const Registration = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleRegistration = async () => {
    try {
      const response = await axios.post('/api/register', { username, password });
      console.log(response.data.message); // Success message
    } catch (error) {
      console.error('Registration failed:', error);
    }
  };

  return (
    <div>      
        <div className="box2">
            <div className="login">
                <p>Create Account</p>
                <hr/>
                <label className="bar">
                    <span className='label' for="username">Username</span>
                    <input className="input" type="text" placeholder="Username" onChange={(e) => setUsername(e.target.value)} />
                </label>
                <label className="bar">
                    <span className="label" for="password">Password</span>
                    <input className="input" type="password" placeholder="Password"  onChange={(e) => setPassword(e.target.value)} />
                </label>
                <button onClick={handleRegistration}>Register</button>
            </div>
        </div>
    </div>
  );
};

export default Registration;