import React from 'react';
import ReactDOM from 'react-dom';
import Spinner from './Spinner';

describe('Spinner Component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(< Spinner />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
})