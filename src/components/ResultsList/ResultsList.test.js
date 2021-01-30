import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import ResultsList from './ResultsList';

describe('ResultsList Component', () => {
  const bootcamps = [{
    'Name': 'Actualize',
    'Website': 'http://anyonecanlearntocode.com/',
    'Locations': [
        {
          'city': 'Chicago',
          'state': 'IL'
        }
    ],
    'Courses': [
        {
          'Name': 'Full-stack Web Development',
          'Is_online': true,
          'Solo_instruction': true,
          'Pair_programming': true,
          'Prior_experience': false,
          'Schedule': {
            'Type': 'full_time',
            'Hours': 40,
            'Duration': 17
          },
          'PaymentSummary': {
            'Up_front': 13900,
            'Financing': true,
            'Isa': false,
            'Placement_based': false,
            'Repayment_guarantee': false
          },
          'Languages': [
            'CSS',
            'Javascript',
            'Ruby',
            'SQL'
          ]
        }
    ]
  }];
  
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Router>< ResultsList bootcamps={bootcamps}/></Router>, div);
    ReactDOM.unmountComponentAtNode(div);
  });
})