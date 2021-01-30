import React from 'react';
import config from '../../config';
import TokenService from '../../services/token-service';
// import Spinner from '../Spinner/Spinner'
import Validator from '../Validator/Validator';
import './SearchForm.css';

class SearchForm extends React.Component {

  state = {
    error: null,
    // spinner: null,
    message: '',
    stateCode: '',
    is_online: true,
    prior_experience: false,
    schedule: 'full_time',
    fin_assist: true
  }

  onStateCodeChange = (stateCode) => {
    this.setState({
      stateCode: stateCode.toUpperCase()
    })
  }

  onIsOnlineChange = (input) => {
    this.setState({
      is_online: Boolean(JSON.parse(input))
    })
  }

  onPriorExperienceChange = (input) => {
    this.setState({
      prior_experience: Boolean(JSON.parse(input))
    })
  }

  onScheduleChange = (schedule) => {
    this.setState({
      schedule: schedule 
    })
  }
  
  onFinAssistChange = (input) => {

    //if true, leave as it is. User needs to only see courses that offer financing
    if (input == 'true') {
      this.setState({
        fin_assist: Boolean(JSON.parse(input))
      })
    } else { //if false, we need to show all courses, regardless if they offer financing, so we coerce the value to true.
      this.setState({
        fin_assist: true
      })
    }
  } 

  validateStateCode = () => {
    const stateCode = this.state.stateCode;

    if(stateCode == null || typeof(stateCode) == undefined){
      this.setState({ message: 'Please enter a valid 2 letter state code' })
      return false;
    }

    if (stateCode.length != 2 || !stateCode.match('^(?:(A[KLRZ]|C[AOT]|D[CE]|FL|GA|HI|I[ADLN]|K[SY]|LA|M[ADEINOST]|N[CDEHJMVY]|O[HKR]|P[AR]|RI|S[CD]|T[NX]|UT|V[AIT]|W[AIVY]))$')) {
      this.setState({ message: 'Please enter a valid 2 letter state code' })
      return false;
    } 

    this.setState({ message: '' })
    return true;
  }

  //conditionally displays Validator UI on a timer
  hideValidator = () => {
    this.setState({
      message: '',
      error: null
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { stateCode, prior_experience, is_online, schedule, fin_assist } = this.state;
    const searchQuery = { stateCode, is_online, prior_experience, schedule, fin_assist };

    // this.setState({
    //   spinner: true
    // }) 
    
    if (this.validateStateCode()) {
      fetch(`${config.API_ENDPOINT}/search`, {
        method: 'POST',
        body: JSON.stringify(searchQuery),
        headers: {
          'content-type': 'application/json',
          'session_token': TokenService.getAuthToken()
        }
      })
        .then(res => {
          if (!res.ok) {
            throw new Error('Something went wrong, please try again later');
          }
          return res.json();
        })
        .then(searchResults => {
          // this.setState({
          //   spinner: false //set to true for spinner testing
          // })
          sessionStorage.setItem('searchResults', JSON.stringify(searchResults))
          this.props.history.push('/results') //comment out for spinner testing
        })
        .catch((err) => {
          this.setState({
            error: err.message,
            // spinner: false
          })
        })
    }
  }

  render() {
    // let spinner;
    let validator;

    if(this.state.message){
      validator = <Validator hideValidator={this.hideValidator} message={this.state.message} cssClass={'invalid'}/>
    }

    // if(this.state.spinner){
    //   spinner = <Spinner/>
    // }

    return (
      <>
        <form id='search-form' onSubmit={(e) => this.handleSubmit(e)}>
          <div id='state-wrapper' className='form-wrapper'>
            <label id='state-label' className='search-label' htmlFor='states-input'>Please select a state:</label>
            <input id='states-input' list='states' name='states-input' maxLength='2' required onChange={(e) => this.onStateCodeChange(e.target.value)}></input>
            <datalist id='states' type='text'>
              <option value='AL'>Alabama</option>
              <option value='AK'>Alaska</option>
              <option value='AZ'>Arizona</option>
              <option value='AR'>Arkansas</option>
              <option value='CA'>California</option>
              <option value='CO'>Colorado</option>
              <option value='CT'>Connecticut</option>
              <option value='DE'>Delaware</option>
              <option value='FL'>Florida</option>
              <option value='GA'>Georgia</option>
              <option value='HI'>Hawaii</option>
              <option value='ID'>Idaho</option>
              <option value='IL'>Illinois</option>
              <option value='IN'>Indiana</option>
              <option value='IA'>Iowa</option>
              <option value='KS'>Kansas</option>
              <option value='KY'>Kentucky</option>
              <option value='LA'>Louisiana</option>
              <option value='ME'>Maine</option>
              <option value='MD'>Maryland</option>
              <option value='MA'>Massachusetts</option>
              <option value='MI'>Michigan</option>
              <option value='MN'>Minnesota</option>
              <option value='MS'>Mississippi</option>
              <option value='MO'>Missouri</option>
              <option value='MT'>Montana</option>
              <option value='NE'>Nebraska</option>
              <option value='NV'>Nevada</option>
              <option value='NH'>New Hampshire</option>
              <option value='NJ'>New Jersey</option>
              <option value='NM'>New Mexico</option>
              <option value='NY'>New York</option>
              <option value='NC'>North Carolina</option>
              <option value='ND'>North Dakota</option>
              <option value='OH'>Ohio</option>
              <option value='OK'>Oklahoma</option>
              <option value='OR'>Oregon</option>
              <option value='PA'>Pennslyvania</option>
              <option value='RI'>Rhode Island</option>
              <option value='SC'>South Carolina</option>
              <option value='SD'>South Dakota</option>
              <option value='TN'>Tennessee</option>
              <option value='TX'>Texas</option>
              <option value='UT'>Utah</option>
              <option value='VT'>Vermont</option>
              <option value='VA'>Virginia</option>
              <option value='WA'>Washington</option>
              <option value='WV'>West Virginia</option>
              <option value='WI'>Wisconsin</option>
              <option value='WY'>Wyoming</option>
            </datalist>
          </div>
          <div className='form-wrapper'>
            <label id='online-label' className='search-label' htmlFor='online'>1. Do you prefer a course that is offered online?</label>
            <select id='online' onChange={(e) => this.onIsOnlineChange(e.target.value)} required>
              <option value='true'>Yes</option>
              <option value='false'>No</option>
            </select>
          </div>
          <div className='form-wrapper'>
            <label id='experience-label' className='search-label' htmlFor='experience'>2. Do you want to view courses that require prior programming experience?</label>
            <select id='experience' onChange={(e) => this.onPriorExperienceChange(e.target.value)} required>
              <option value='false'>No</option>
              <option value='true'>Yes</option>
            </select>
          </div>
          <div className='form-wrapper'>
            <label id='schedules-label' className='search-label' htmlFor='schedules'>3. What course schedule can you commit to?</label>
            <select id='schedules' onChange={(e) => this.onScheduleChange(e.target.value)} required>
              <option value='full_time'>Full-time (40+ hrs/wk)</option>
              <option value='part_time'>Part-time (~25 hrs/wk)</option>
            </select>
          </div>
          <div className='form-wrapper'>
            <label id='fin-assist-label' className='search-label' htmlFor='financial-assistance'>4. Do you require a course that offers financial assistance?</label>
            <select id='financial-assistance' onChange={(e) => this.onFinAssistChange(e.target.value)} required>
              <option value='true'>Yes</option>
              <option value='false'>No</option>
            </select> 
          </div>
          <div className='search-form-controls'>
            <button id='search-submit' type='submit'>Search</button>
          </div>
          <div className='error-msg'>{this.state.error}</div>
        </form>
        {validator}
        {/* {spinner} */}
      </>
    )
  }
}

export default SearchForm;
