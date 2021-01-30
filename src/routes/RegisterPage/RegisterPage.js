import React from 'react';
import Logo from '../../components/Logo/Logo';
import { Link } from 'react-router-dom';
import RegistrationForm from '../../components/RegistrationForm/RegistrationForm';
import './RegisterPage.css';

export default function RegisterPage(props) {
  return (
    <div className='registration-wrapper'>
      <Link className='home-link' to='/'>
        <Logo style={'absolute'}/>
      </Link>
      <RegistrationForm history={props.history}/>
    </div>
  )
}

