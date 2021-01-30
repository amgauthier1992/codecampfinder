import React from 'react';
import SpinnerImg from '../../img/spinner.gif';
import './Spinner.css';

export default function Spinner() {
  return (
  <div className='spinner-container'>
    <span className='spinner-span'>Loading...</span>
    <img className='spinner' src={SpinnerImg} alt='loading-spinner'/>
  </div>
  )
}

