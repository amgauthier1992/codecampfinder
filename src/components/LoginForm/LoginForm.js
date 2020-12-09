import React from "react"
import { Link } from "react-router-dom"
import AuthContext from '../../contexts/AuthContext'
import { withAppContext } from '../../contexts/AppContext';
import AuthApiService from '../../services/auth-api-service'

class LoginForm extends React.Component {
  static contextType = AuthContext

  state = { 
    error: null,
    user_name: '',
    password: ''
  }

  handleSubmitJwtAuth = async (e) => {
    e.preventDefault();
    this.setState({ error: null })
    const { setLoading } = this.props.appContext

    try {
      setLoading(true)
      const { user_name, password} = this.state;
      const response = await AuthApiService.login(user_name, password)
      setLoading(false)

      this.context.login(response.authToken)
      this.context.setCurrentUser(response.user)
    } catch(err) {
      this.setState({ error: err.message }, setLoading(false))
    }
  }

  handleChange = ({ target: { name, value } }) => {
    this.setState({
      [name]: value
    })
  }

  componentWillUnmount(){
    this.setState({ error: null })
  }

  render(){
    return (
      <form id="login-form" action='#' onSubmit={(e) => this.handleSubmitJwtAuth(e)}>
        <div className='error-msg'>{this.state.error}</div>
        <label id="user_name" htmlFor="user_name">Username</label>
        <input id='user_name' type="text" name='user_name' value={this.state.user_name} onChange={this.handleChange} required></input>
        <label id="password" htmlFor="password"> Password</label>
        <input id='password' type="password" name='password' value={this.state.password} onChange={this.handleChange} required></input>
        <button id="login-btn" type="submit">Sign In</button>
        <Link to="/register">
          <span>Don't have an account?</span>
        </Link>
      </form>
    )
  }
}

export default withAppContext(LoginForm);