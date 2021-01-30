import React from 'react';
import ReactDOM from 'react-dom';
import Icons from './Icons';

describe('Icons Component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(< Icons />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
})