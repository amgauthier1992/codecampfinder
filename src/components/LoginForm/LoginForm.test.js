import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import LoginForm from './LoginForm';

describe('LoginForm Component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Router>< LoginForm /></Router>, div);
    ReactDOM.unmountComponentAtNode(div);
  });
})