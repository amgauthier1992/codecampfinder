import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import SearchForm from './SearchForm';

describe('SearchForm Component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Router>< SearchForm /></Router>, div);
    ReactDOM.unmountComponentAtNode(div);
  });
})