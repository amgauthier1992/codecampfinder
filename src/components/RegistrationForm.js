import React from 'react';
import { withRouter } from 'react-router-dom'
import config from '../config';
// import UsersContext from "../contexts/users-context";
import Context from "../contexts/Context"
import ValidationError from '../components/ValidationError';

class RegistrationForm extends React.Component {
  static contextType = Context;
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

  directToLogin = () => {
    setTimeout(this.props.history.push('/auth/login'), 5000)
    return (
      <div className="success-reg">
        <span>Success! Redirecting to the login page</span>
      </div>
    )
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
  }
  
  //add a legend for password requirements? so that the user knows them upon getting to registration section. 
  validatePassword = () => {
    const password = this.state.password.value;
    if (password.trim() == "") {
      return "Please create a password"
    }
    if (!password.match(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?([^\w\s]|[_])).{8,}$/)) {
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
  }

  validateLastName = () => {
    const last_name = this.state.last_name.value;
    if (last_name.trim() == "") {
      return "Please supply your last name";
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

  handleRegistration = (event) => {
    event.preventDefault();
    const { user_name, password, first_name, last_name } = this.state
    const user = { 
      user_name: user_name.value, 
      password: password.value,
      first_name: first_name.value,
      last_name: last_name.value
    }
    fetch(`${config.API_ENDPOINT}/users`, {
      method: "POST",
      body: JSON.stringify(user),
      headers: {
        "content-type": "application/json",
        "Authorization": `Bearer ${config.API_KEY}`
      }
    })
      .then(res => {
        if(!res.ok) {
          throw new Error("Something went wrong, please try again later");
        }
        return res.json()
      })
      .then(() => {
        this.directToLogin()
      })
      .catch((err) => {
        this.setState({
          error: err.message,
        })
      })
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
        <ValidationError message={this.validateFirstName()} />
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
        <ValidationError message={this.validateLastName()} />
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
        <ValidationError message={this.validateUsername()} />
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
        <ValidationError message={this.validatePassword()} />
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
        <ValidationError message={this.validateRepeatPassword()} />
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

export default withRouter(RegistrationForm);