import React from 'react';
import './Validator.css';
  
export default function Validator(props) {
  if (!props.isValid) {
    return (
      <div className='form-validation-error'>
        {props.message}
      </div>
    )
  }
  return null
}