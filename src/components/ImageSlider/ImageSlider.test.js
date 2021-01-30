import React from 'react';
import ReactDOM from 'react-dom';
import ImageSlider from './ImageSlider';

describe('ImageSlider Component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(< ImageSlider images={[
      'https://ubiqum.com/assets/uploads/2019/03/untitled-design-1-1-1.png',
      'https://ubiqum.com/assets/uploads/2019/07/coding-bootcamp-amsterdam.jpg',
      'https://coda.newjobs.com/api/imagesproxy/ms/niche/images/articles/Mack/bootcamp.jpg',
      'https://www.digitalcrafts.com/sites/default/files/Houston%20Programming%20Bootcamp%20Launches%20Second%20Class.jpg'
    ]}/>, div);
    ReactDOM.unmountComponentAtNode(div);
  });
})