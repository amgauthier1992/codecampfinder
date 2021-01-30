import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import RegistrationForm from './RegistrationForm';

describe('RegistrationForm Component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Router>< RegistrationForm /></Router>, div);
    ReactDOM.unmountComponentAtNode(div);
  });
})