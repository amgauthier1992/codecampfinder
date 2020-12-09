import React from "react"
import { Link } from "react-router-dom"
import Logo from "../../components/Logo/Logo"
import LoginForm from "../../components/LoginForm/LoginForm"

export default function LoginPage(){
  return (
    <div className="login-container">
      <div className="sliding-background"></div>
      <Logo />
      <Link to="/">
        {/* <label className="button-label" htmlFor="home">Home */}
        <button className="login-home-btn" type="button">Home
          <i className="fas fa-home"></i>
        </button>
        {/* </label> */}
      </Link>
      <h1 id="login-header">CodeCampFinder</h1>
      <LoginForm />
    </div>
  )
}
