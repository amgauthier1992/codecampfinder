import React from "react"
import { Link } from "react-router-dom"
import TokenService from "../services/token-service"
import AuthApiService from '../services/auth-api-service'

class LoginForm extends React.Component {
  static defaultProps = {
    onLoginSuccess: () => {}
  }

  state = { error: null }

  handleSubmitJwtAuth = (e) => {
    e.preventDefault();
    this.setState({ error: null })
    const { user_name, password } = e.target

    AuthApiService.postLogin({
      user_name: user_name.value,
      password: password.value
    })
      .then(res => {
        user_name.value = ''
        password.value = ''
        TokenService.saveAuthToken(res.authToken)
        this.props.onLoginSuccess() //go to the user dashboard?
      })
      .catch(res => {
        this.setState({ error: res.error })
      })
  }

  render(){
    // const { error } = this.state
    return (
      <form id="login-form" onSubmit={(e) => this.handleSubmitJwtAuth(e)}>
        {/* <div role='alert'>
          {error && <p className='red'>{error}</p>}
        </div> */}
        <label id="user_name" htmlFor="user_name">Username</label>
        <input type="text" required></input>
        <label id="password" htmlFor="password"> Password</label>
        <input type="password" required></input>
        <button id="login-btn" type="submit">Sign In</button>
        <Link to="/register">
          <span>Don't have an account?</span>
        </Link>
      </form>
    )
  }
}

export default LoginForm;