import React from 'react';
import Logo from "../../components/Logo/Logo";
import { Link } from "react-router-dom";
import RegistrationForm from '../../components/RegistrationForm/RegistrationForm';

export default function RegisterPage() {
  return (
    <div className="registration-container">
      <div className="registration-top">
        <Logo />
        <Link to="/">
          <button className="registration-home-btn" type="button">Home
            <i className="fas fa-home"></i>
          </button>
        </Link>
        <h2 className="registration-title">Sign up</h2>
        <Link to="/login">
          Already have an account?
        </Link>
        <hr/>
      </div>
      <RegistrationForm />
    </div>
  )
}
