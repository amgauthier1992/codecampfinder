import React from 'react';
import { Link } from 'react-router-dom';
import './NotFoundPage.css';

export default function NotFoundPage(props) {
  return (
    <div className='null-wrapper'>
      <div className='null-container'>
        <span className='null-results-msg'>Sorry, no results found matching your criteria.</span>
        <Link to={'/search'}>
          <button className='search-return-btn'>Return to Search</button>
        </Link>
      </div>
    </div>
  )
}