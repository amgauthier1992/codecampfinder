import React from 'react';
import Validator from '../Validator/Validator';
import config from '../../config';
import './ContactForm.css';

class ContactForm extends React.Component {
  state = {
    name: {
      value: '',
      touched: false,
    },
    emailAddress: {
      value: '',
      touched: false,
    },
    subject: {
      value: '',
      touched: false,
    },
    message: {
      value: '',
      touched: false,
    },
    error: null
  }

  onNameChange = (name) => {
    this.setState({
      name: { value: name, touched: true }
    })
  }
  
  onEmailAddressChange = (emailAddress) => {
    this.setState({
      emailAddress: { value: emailAddress, touched: true }
    })
  }

  onSubjectChange = (subject) => {
    this.setState({
      subject: { value: subject, touched: true }
    })
  }

  onMsgChange = (message) => {
    this.setState({
      message: { value: message, touched: true }
    })
  }

  validateName = () => {
    const name = this.state.name.value;
    if (name.trim() === '') {
      return 'Please provide your name';
    }
  }
  
  validateEmailAddress = () => {
    // const emailAddress = this.state.emailAddress.value;
    // let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    // if (!emailAddress.match(regexEmail)) {
    //   return 'Please use a valid email'; 
    // }
  }

  validateSubject = () => {
    const subject = this.state.subject.value;
    if (subject.trim() === '') {
      return 'Subject is required';
    }
  }

  validateMsg = () => {
    const message = this.state.message.value;
    if (message.trim() === '') {
      return 'Message is required';
    }
  }

  resetForm = () => {
    console.log(`resetForm ran!`)
    this.setState({
      name: { value: '', touched: false },
      emailAddress: { value: '', touched: false },
      subject: { value: '', touched: false },
      message: { value: '', touched: false }
    })
  }

  submitEmail = (event) => {
    event.preventDefault();
    const { name, emailAddress, subject, message } = this.state;
    const email = { name, emailAddress, subject, message } 
    console.log(`submitEmail ran!`)

    //POST request here- we will need to `npm i nodemailer` for backend.
    //server sends the email. 
    fetch(`${config.API_ENDPOINT}`, {
      method: 'POST',
      body: JSON.stringify(email),
      headers: {
        'content-type': 'application/json',
      }
    })
      .then(res => {
        if(!res.ok) {
          throw new Error('Message failed to send.');
        }
        return res.json()
      })
      .then(data => {
        this.setState({ 
          name: { value: email.name },
          emailAddress: { value: email.emailAddress },
          subject: { value: email.subject },
          message: { value: email.message }
        })
      })
      .catch((err) => {
        this.setState({
          error: err.message,
        })
      })
  }

  render(){
    return (
      <form id='contact-form' onSubmit={(e) => this.submitEmail(e)}>
        <label id='name' htmlFor='name' className='contact-label'>Name</label>
        <input
          id='name'
          className='contact-input'
          name='name'
          type='text'
          placeholder='John Doe'
          onChange={(e) => this.onNameChange(e.target.value)}
          required
        />
        {this.state.name.touched && (
          <Validator message={this.validateName()} />
        )}
        <label id='email' htmlFor='email' className='contact-label'>Email</label>
        <input
          id='email'
          className='contact-input'
          aria-describedby='emailHelp'
          name='email'
          type='email'
          placeholder='jdoe@gmail.com'
          onChange={(e) => this.onEmailAddressChange(e.target.value)}
          required
        />
        {this.state.emailAddress.touched && (
          <Validator message={this.validateEmailAddress()} />
        )}
        <label id='subject' htmlFor='subject' className='contact-label'>Subject</label>
        <input
          id='subject'
          className='contact-input'
          name='subject'
          type='text'
          placeholder='Subject'
          onChange={(e) => this.onSubjectChange(e.target.value)}
          required
        />
        {this.state.subject.touched && (
          <Validator message={this.validateSubject()} />
        )}
        <label id='message' htmlFor='message' className='contact-label'>Message</label>
        <textarea
          id='message'
          className='contact-input'
          placeholder='Message'
          name='message'
          rows='7'
          cols='55'
          onChange={(e) => this.onMsgChange(e.target.value)}
          required
        />
        {this.state.message.touched && (
          <Validator message={this.validateMsg()} />
        )}
        <div className='contact-btn-controls'>
          <button
            className='contact-reset'
            type='reset'
            onClick={() => this.resetForm()}
          >
            Reset
          </button>
          <button 
            className='contact-submit'
            type='submit'
            // disabled={(this.validateName(), this.validateSubject(), this.validateMsg())}
          >
            Submit
          </button>
        </div>
      </form>
    )
  }
}

export default ContactForm;