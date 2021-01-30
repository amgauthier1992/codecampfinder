import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import CourseDetail from './CourseDetail';

describe('CourseDetail Component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
    <Router>
      <CourseDetail 
        currentCourse={{
          'Course': {
            'id': 2,
            'name': '24 Week Software Engineering Immersive',
            'is_online': true,
            'solo_instruction': true,
            'pair_programming': true,
            'prior_experience': false
          },
          'Schedule': {
            'id': 3,
            'type': 'full_time',
            'hours': 60,
            'duration': 24
          },
          'PaymentSummary': {
            'up_front': 20000,
            'financing': true,
            'isa': true,
            'placement_based': true,
            'repayment_guarantee': true
          },
          'Languages': [
            'CSS',
            'Javascript',
            'Ruby',
            'SQL']}}
      />
    </Router>, div);
    ReactDOM.unmountComponentAtNode(div);
  });
})