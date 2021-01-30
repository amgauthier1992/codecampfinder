import React from 'react';
import Logo from '../../components/Logo/Logo';
import Nav from '../../components/Nav/Nav';
import ImageSlider from '../../components/ImageSlider/ImageSlider';
import Icons from '../../components/Icons/Icons';
import './HomePage.css';

export default function HomePage(){
  return (
    <div className='home-wrapper'>
      <div className='top-banner'>
        <Logo />
        <header className='app-header hidden'>
          <h1 className='app-h1'>CodeCampFinder</h1>
        </header>
        <Nav />
      </div>
      <div className='slider-container'>
        <ImageSlider 
          images={[
            'https://ubiqum.com/assets/uploads/2019/03/untitled-design-1-1-1.png',
            'https://ubiqum.com/assets/uploads/2019/07/coding-bootcamp-amsterdam.jpg',
            'https://coda.newjobs.com/api/imagesproxy/ms/niche/images/articles/Mack/bootcamp.jpg',
            'https://www.digitalcrafts.com/sites/default/files/Houston%20Programming%20Bootcamp%20Launches%20Second%20Class.jpg'
          ]}
        />
      </div>
      <h2 className='app-sub-header'>Find a coding bootcamp that's right for you.</h2>
      <Icons />
    </div>
  )
}