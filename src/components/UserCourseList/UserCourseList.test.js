import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import UserCourseList from './UserCourseList';

describe('UserCourseList Component', () => {
  const userCourses = [
    {
      'Bootcamp': 'App Academy',
      'Course': '24 Week Software Engineering Immersive',
      'CourseId': 2
    },
    {
      'Bootcamp': 'Code Fellows',
      'Course': 'Code 201: Foundations of Software Development',
      'CourseId': 5
    },
    {
      'Bootcamp': 'Code Fellows',
      'Course': 'Code 301: Intermediate Software Development',
      'CourseId': 6
    }
  ]
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Router>< UserCourseList userCourses={userCourses}/></Router>, div);
    ReactDOM.unmountComponentAtNode(div);
  });
})