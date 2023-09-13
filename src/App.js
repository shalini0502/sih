import React from 'react';
import './Components/LoginSignup.css';
import user_icon from './Assets/person.png';
import email_icon from '../Assets/email.png';
import password_icon from '../Assets/password.png';

const LoginSignup = () => {
  return (
    <div className='container'>
      <div className='header'>
        <div className='text'>Sign up</div>
        <div className='underline'></div>
      </div>
      <div className="inputs">
        <img src={user_icon} alt="" />
        <input type="text" />
      </div>
      <div className="inputs">
        <img src={email_icon} alt="" />
        <input type="email" />
      </div>
      <div className="inputs">
        <img src={password_icon} alt="" />
        <input type="password" />
      </div>
      <div className="submit-conatainer">
        <div className="submit">Sign Up</div>
        <div className="submit">Login</div>
      </div>
    </div>
  );
}

export default LoginSignup;
