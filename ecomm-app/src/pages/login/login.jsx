// Login.js
import React, { useState } from 'react';
import axios from 'axios';
import './signin.css'
import { useAuth } from './AuthContext';

export const Login = () => {
    const { setUser } = useAuth();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [loginStatus, setLoginStatus] = useState(null);
    

    const handleLogin = async () => {
        try {
            const response = await axios.post('/api/login', { username, password });
            if (response.data.username) {
                setUser({ username: response.data.username }); // Set the user's information in the context
                setLoginStatus('success');
            } else {
                setLoginStatus('error');
                console.log('Login failed:', response.data.message);
            }
          } catch (error) {
                setLoginStatus('error');
                console.error('Login failed:', error);
          }
        };

  return (
    <div>
        
    
        <div className="box">
            <div className="login">
                
                <h1>LOGIN</h1>
                <hr />

                <label className="bar">
                    <span className='label' for="username">Member ID</span>
                    <input className="input" type="text" placeholder="Username" onChange={(e) => setUsername(e.target.value)} />
                </label>
                <label className="bar">
                    <span className="label" for="password">Password</span>
                    <input className="input" type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
                </label>
                <button onClick={handleLogin}>Login</button>
                {loginStatus === 'error' && <p>*Wrong username/ password</p>}
                <br/>
            </div>
        
        </div>
</div>
  );
};

export default Login;
