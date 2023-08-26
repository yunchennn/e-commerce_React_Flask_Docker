import React from 'react';
import Login from './login';
import Registration from './newuser';
import logo from '../../images/logo5.png'
import './signin.css'

export const Signin = () => {
  

  return (
    <div>
        <div className='login'>
            <img src={logo} alt="login page"/>
        </div>
        <div>
            <Login/>
            <Registration/>
        </div>
    </div>
  );
};

export default Registration;