import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import Validator from './Validator';

describe('Validator Component', () => {
  it('renders without crashing', () => {
    const message= 'test message'
    const hideValidator = function(){};
    const div = document.createElement('div');
    ReactDOM.render(<Router><Validator message={message} hideValidator={hideValidator} cssClass={'invalid'}/></Router>, div);
    ReactDOM.unmountComponentAtNode(div);
  });
})