import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../components/Logo/Logo';
import LoginForm from '../../components/LoginForm/LoginForm';
import './LoginPage.css';

export default function LoginPage(){
  return (
    <div className='login-container'>
      <Link to='/'>
        <Logo style={'absolute'}/>
      </Link>
      <LoginForm />
      <div className='sliding-background'></div>
    </div>
  )
}
