import React from 'react';
import config from '../../config';
import { Link } from 'react-router-dom';
import Validator from '../Validator/Validator';
// import Spinner from '../Spinner/Spinner';
import './RegistrationForm.css';

class RegistrationForm extends React.Component {

  state = {
    user_name: {
      value: '',
      touched: false,
      valid: null,
      message: ''
    },
    password: {
      value: '',
      touched: false,
      valid: null,
      message: ''
    },
    repeatPassword: {
      value: '',
      touched: false,
      valid: null,
      message: ''
    },
    first_name: {
      value: '',
      touched: false,
      valid: null,
      message: ''
    },
    last_name: {
      value: '',
      touched: false,
      valid: null,
      message: ''
    },
    error: null,
    // spinner: null,
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

  //Take in a string value and return T/F if I have a value.
  haveDataFor = (value) => {
    if(value === null || typeof(value) === undefined || value === undefined || value === ''){
      return false;
    }
    return true;
  }

  validateFirstName = () => {
    const first_name = this.state.first_name?.value?.trim();

    if(this.haveDataFor(first_name) && first_name.indexOf(' ') > -1){
      this.setState({ first_name: { value: first_name, valid: false, message: 'No spaces' } });
      return false;
    }

    if(!this.haveDataFor(first_name)){
      this.setState({ first_name: { value: first_name, valid: false, message: 'Please supply your first name' } });
      return false;
    }
    
    this.setState({ first_name: { value: first_name.trim(), valid: true , message: '' } });
    return true;
  }

  validateLastName = () => {
    const last_name = this.state.last_name?.value?.trim();

    if (!this.haveDataFor(last_name)) {
      this.setState({ last_name: { value: last_name, valid: false, message: 'Please supply your last name' } })
      return false;
    }
   
    this.setState({ last_name: { value: last_name.trim(), valid: true, message: '' } })
    return true;
  }

  validateUsername = () => {
    const user_name = this.state.user_name?.value?.trim();

    if (!this.haveDataFor(user_name)) {
      this.setState({ user_name: { value: user_name, valid: false, message: 'Please create a username' } })
      return false;
    }
    
    this.setState({ user_name: { value: user_name.trim(), valid: true, message: '' } })
    return true;
  }

  validatePassword = () => {
    const password = this.state.password?.value?.trim();
    const isPasswordValid = password?.match(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?([^\w\s]|[_])).{8,}$/);

    if(!this.haveDataFor(password)){
      this.setState({ password: { value: password, valid: false, message: 'Please create a password' } })
      return false;
    }

    if(!isPasswordValid){
      this.setState({ password: { value: password, valid: false, message: 'Password must contain at least 8 characters including: at least 1 number, 1 lowercase letter, 1 uppercase letter and 1 special character' } })
      return false;
    }
    
    this.setState({ password: { value: password.trim(), valid: true, message: ''} })
    return true;
  }

  validateRepeatPassword = () => {
    const password = this.state.password?.value?.trim();
    const repeatPassword = this.state.repeatPassword?.value?.trim();
    const passwordsMatch = password === repeatPassword;

    if(!this.haveDataFor(password) || !this.haveDataFor(repeatPassword)){
      this.setState({ repeatPassword: { value: repeatPassword, valid: false , message: 'Must enter a matching password and confirmation password' } })
      return false;
    }

    if(!passwordsMatch){
      this.setState({ repeatPassword: { value: repeatPassword, valid: false , message: 'The password and confirmation password must match' } })
      return false;
    }

    this.setState({ repeatPassword: { value: repeatPassword, valid: true , message: '' } })
    return true;
  }

  validateInputs = () => {

    const isFirstNameValid = this.validateFirstName();
    const isLastNameValid = this.validateLastName();
    const isUsernameValid = this.validateUsername();
    const isPasswordValid = this.validatePassword();
    const isRepeatPasswordValid = this.validateRepeatPassword();
    
    if(!isFirstNameValid || !isLastNameValid || !isUsernameValid || !isPasswordValid || !isRepeatPasswordValid){
      return false;
    }

    return true;
  }

  hideValidator = () => {
    const { user_name, password, first_name, last_name, repeatPassword } = this.state
    
    this.setState({
      user_name: { value: user_name.value, valid: user_name.valid, message: '' }, 
      password: { value: password.value, valid: password.valid, message: '' },
      repeatPassword: { value: repeatPassword.value, valid: repeatPassword.valid, message: '' },
      first_name: { value: first_name.value, valid: first_name.valid, message: '' },
      last_name: { value: last_name.value, valid: last_name.valid, message: '' },
      error: null
    })
  }

  resetForm = () => {
    document.getElementById('first_name').value=''
    document.getElementById('last_name').value=''
    document.getElementById('user_name').value=''
    document.getElementById('password').value=''
    document.getElementById('repeatPassword').value=''
    this.setState({
      user_name: { value: '', touched: false, valid: null, message: '' },
      password: { value: '', touched: false, valid: null, message: '' },
      repeatPassword: { value: '', touched: false, valid: null, message: '' },
      first_name: { value: '', touched: false, valid: null, message: '' },
      last_name: { value: '', touched: false, valid: null, message: '' },
      error: null,
      // spinner: false
    })
  }

  handleRegistration = (e) => {
    e.preventDefault();
    const { first_name, last_name, user_name, password } = this.state;
    const newUser = { first_name: first_name.value, last_name: last_name.value, user_name: user_name.value, password: password.value };

    if (this.validateInputs()){

      fetch(`${process.env.REACT_APP_API_ENDPOINT}/users/register`, {
        method: 'POST',
        body: JSON.stringify(newUser),
        headers: {
          'content-type': 'application/json',
        }
      })
        .then(res => {
          if(!res.ok) {
            throw new Error('Registration failed. Please try again later.');
          }
          return res.json()
        })
        .then(success => {
          // this.setState({
          //   spinner: false,
          // })
          this.props.history.push('/login')
        })
        .catch((err) => {
          this.setState({
            error: err.message,
            // spinner: false,
          })
        })
    }
  }

  render(){
    // let spinner;

    let validator;

    let errorMessage = this.state.first_name.message || this.state.last_name.message || this.state.user_name.message || this.state.password.message || this.state.repeatPassword.message;

    if (errorMessage){
      validator = <Validator hideValidator={this.hideValidator} message={errorMessage} cssClass={'invalid'}/>
    }

    // if(this.state.spinner){
    //   spinner = <Spinner/>
    // }

    return (
      <form id='registration-form' onSubmit={(e) => this.handleRegistration(e)}>
        <h2 className='registration-h2'>Register</h2>
        <label id='first_name_label' htmlFor='first_name' className='registration-label'>First Name</label>
        <input
          id='first_name'
          className='registration-input'
          name='first_name'
          type='text'
          onChange={(e) => this.onFirstNameChange(e.target.value)}
          required
        />
        <label id='last_name_label' htmlFor='last_name' className='registration-label'>Last Name</label>
        <input
          id='last_name'
          className='registration-input'
          name='last_name'
          type='text'
          onChange={(e) => this.onLastNameChange(e.target.value)}
          required
        />
        <label id='user_name_label' htmlFor='user_name' className='registration-label'>Username</label>
        <input
          id='user_name'
          className='registration-input'
          name='user_name'
          type='text'
          onChange={(e) => this.onUsernameChange(e.target.value)}
          required
        />
        <label id='password_label' htmlFor='password' className='registration-label'>Password</label>
        <input
          id='password'
          type='password'
          className='registration-input'
          name='password'
          onChange={(e) => this.onPasswordChange(e.target.value)}
          required
        />
        <label id='repeatPassword_label' htmlFor='repeatPassword' className='registration-label'>Confirm Password</label>
        <input
          id='repeatPassword'
          type='password'
          className='registration-input'
          name='repeatPassword'
          onChange={(e) => this.onRepeatPasswordChange(e.target.value)}
          required
        />
        <div className='registration-btn-controls'>
          <button
            className='registration-reset'
            type='reset'
            onClick={() => this.resetForm()}
          >
            Reset
          </button>
          <button 
            className='registration-submit'
            type='submit'
          >
            Submit
          </button>
        </div>
        <Link to='/login'>
          <span className='redirect-login'>Already have an account?</span>
        </Link>
        {/* {spinner} */}
        {validator}
      </form>
    )
  }
}

export default RegistrationForm;