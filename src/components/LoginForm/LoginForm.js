import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import config from '../../config';
import TokenService from '../../services/token-service';
// import Spinner from '../Spinner/Spinner';
import Validator from '../Validator/Validator';
import './LoginForm.css';

class LoginForm extends React.Component {
  state = { 
    error: null,
    // spinner: null,
    user_name: '',
    password: '',
  }

  hideValidator = () => {
    this.setState({
      message: '',
      error: null
    })
  }

  handleLogin = (e) => {
    e.preventDefault();
    const { user_name, password } = this.state
    const currentUser = { user_name, password }

    // this.setState({
    //   spinner: true
    // })

    fetch(`${config.API_ENDPOINT}/users/login`, {
      method: 'POST',
      body: JSON.stringify(currentUser),
      headers: {
        'content-type': 'application/json',
      }
    })
      .then(res => {
        if(!res.ok){
          throw new Error('Login Failed - Invalid credentials');
        }
        return res.json()
      })
      .then(responseJson => {
        // this.setState({
        //   spinner: false //set to true for testing
        // })
        TokenService.saveAuthToken(responseJson.token)
        this.props.history.push('/dashboard'); //comment out for spinner test
      })
      .catch(err => {
        this.setState({
          error: err.message,
          // spinner: false
        })
      })
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
    // let spinner;
    let validator;

    // if(this.state.spinner){
    //   spinner = <Spinner/>;
    // }

    if(this.state.error){
      validator = <Validator hideValidator={this.hideValidator} message={this.state.error} cssClass={'invalid'}/>;
    }
    
    return (
      <form id='login-form' action='#' onSubmit={(e) => this.handleLogin(e)}>
        <h1 id='login-header'>CodeCampFinder</h1>
        <label id='user_name-label' htmlFor='user_name'>Username</label>
        <input id='user_name' className='login-input' type='text' name='user_name' value={this.state.user_name} placeholder='testUser123' onChange={this.handleChange} required></input>
        <label id='password-label' htmlFor='password'> Password</label>
        <input id='password' className='login-input' type='password' name='password' value={this.state.password} placeholder='Abcd123!' onChange={this.handleChange} required></input>
        <button id='login-btn' type='submit'>Sign In</button>
        <Link to='/register'>
          <span className='redirect-register'>Don't have an account?</span>
        </Link>
        {validator}
        {/* {spinner} */}
      </form>
    )
  }
}

export default withRouter(LoginForm);