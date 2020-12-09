import React from 'react';
import AuthContext from '../../contexts/AuthContext'
import AuthApiService from '../../services/auth-api-service'
import { withAppContext } from '../../contexts/AppContext';
import Validator from '../Validator/Validator';

class RegistrationForm extends React.Component {
  static contextType = AuthContext

  state = {
    user_name: {
      value: '',
      touched: false,
    },
    password: {
      value: '',
      touched: false,
    },
    repeatPassword: {
      value: '',
      touched: false,
    },
    first_name: {
      value: '',
      touched: false,
    },
    last_name: {
      value: '',
      touched: false,
    },
    error: null
  }

  onUsernameChange = (user_name) => {
    this.setState({
      user_name: { value: user_name, touched: true }
    })
  }

  onPasswordChange = (password) => {
    this.setState({
      password: { value: password, touched: true }
    })
  }

  onRepeatPasswordChange = (repeatPassword) => {
    this.setState({
      repeatPassword: { value: repeatPassword, touched: true }
    })
  }

  onFirstNameChange = (first_name) => {
    this.setState({
      first_name: { value: first_name, touched: true }
    })
  }

  onLastNameChange = (last_name) => {
    this.setState({
      last_name: { value: last_name, touched: true }
    })
  }

  validateUsername = () => {
    const user_name = this.state.user_name.value;
    if (user_name.trim() == "") {
      return "Please create a username";
    }
    else if (user_name.startsWith(' ') || user_name.endsWith(' ')) {
      return "Username cannot start or end with empty spaces"
    }
  }
  
  //add a legend for password requirements? so that the user knows them upon getting to registration section. 
  validatePassword = () => {
    const password = this.state.password.value;
    if (password.trim() == "") {
      return "Please create a password"
    }
    else if (password.startsWith(' ') || password.endsWith(' ')) {
      return "Password cannot start or end with empty spaces"
    }
    else if (!password.match(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?([^\w\s]|[_])).{8,}$/)) {
      return "Password must contain at least 8 characters including: at least 1 number, 1 lowercase letter, 1 uppercase letter and 1 special character"
    }
  }

  validateRepeatPassword = () => {
    const password = this.state.password.value;
    const repeatPassword = this.state.repeatPassword.value;
    if (repeatPassword !== password) {
      return "The password and confirmation password must match";
    }
  }

  validateFirstName = () => {
    const first_name = this.state.first_name.value;
    if (first_name.trim() == "") {
      return "Please supply your first name";
    }
    else if (first_name.startsWith(' ') || first_name.endsWith(' ')) {
      return "First name cannot start or end with empty spaces"
    }
  }

  validateLastName = () => {
    const last_name = this.state.last_name.value;
    if (last_name.trim() == "") {
      return "Please supply your last name";
    }
    else if (last_name.startsWith(' ') || last_name.endsWith(' ')) {
      return "Last name cannot start or end with empty spaces"
    }
  }

  resetForm = () => {
    console.log(`resetForm ran!`)
    this.setState({
      user_name: { value: '', touched: false },
      password: { value: '', touched: false },
      repeatPassword: { value: '', touched: false },
      first_name: { value: '', touched: false },
      last_name: { value: '', touched: false }
    })
  }

  handleRegistration = async (e) => {
    e.preventDefault();
    this.setState({ error: null })
    const { first_name, last_name, user_name, password } = this.state
    const newUser = { first_name, last_name, user_name, password }
    const { setLoading } = this.props.appContext

    try {
      setLoading(true)
      const savedUser = await AuthApiService.createUser(newUser)
      this.context.login(savedUser.authToken)
      delete savedUser.authToken
      this.context.setCurrentUser(savedUser)
      setLoading(true)
      // this should load /dashboard
    } catch(err) {
      this.setState({ error: err.message }, setLoading(false))
    }
  }

  render(){
    return (
      <form id="registration-form" onSubmit={(e) => this.handleRegistration(e)}>
        <label id="first_name" htmlFor="first_name" className="registration-label">First Name</label>
        <input
          id="first_name"
          className="registration-input"
          name="first_name"
          type="text"
          onChange={(e) => this.onFirstNameChange(e.target.value)}
          required
        />
        {this.state.first_name.touched && (
        <Validator message={this.validateFirstName()} />
        )}
        <label id="last_name" htmlFor="last_name" className="registration-label">Last Name</label>
        <input
          id="last_name"
          className="registration-input"
          name="last_name"
          type="text"
          onChange={(e) => this.onLastNameChange(e.target.value)}
          required
        />
        {this.state.last_name.touched && (
        <Validator message={this.validateLastName()} />
        )}
        <label id="user_name" htmlFor="user_name" className="registration-label">Username</label>
        <input
          id="user_name"
          className="registration-input"
          name="user_name"
          type="text"
          onChange={(e) => this.onUsernameChange(e.target.value)}
          required
        />
        {this.state.user_name.touched && (
        <Validator message={this.validateUsername()} />
        )}
        <label id="password" htmlFor="password" className="registration-label">Password</label>
        <input
          id="password"
          type="password"
          className="registration-input"
          name="password"
          onChange={(e) => this.onPasswordChange(e.target.value)}
          required
        />
        {this.state.password.touched && (
        <Validator message={this.validatePassword()} />
        )}
        <label id="repeatPassword" htmlFor="repeatPassword" className="registration-label">Confirm Password</label>
        <input
          id="repeatPassword"
          type="password"
          className="registration-input"
          name="repeatPassword"
          onChange={(e) => this.onRepeatPasswordChange(e.target.value)}
          required
        />
        {this.state.repeatPassword.touched && (
        <Validator message={this.validateRepeatPassword()} />
        )}
        <div className="registration-btn-controls">
          <button
            className="registration-reset"
            type="reset"
            onClick={() => this.resetForm()}
          >
            Reset
          </button>
          <button 
            className="registration-submit"
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>
    )
  }
}

export default withAppContext(RegistrationForm);