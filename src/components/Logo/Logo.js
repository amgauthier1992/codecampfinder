import React from 'react';
import './Logo.css';

export default function Logo(props){
  if (props.extraClass){
    return <img className='logo absolute hidden' src='https://icon-library.net//images/icon-developer/icon-developer-19.jpg' alt='Logo' width='75' height='75' />
  }
  return <img className='logo' src='https://icon-library.net//images/icon-developer/icon-developer-19.jpg' alt='Logo' width='75' height='75' />
}
