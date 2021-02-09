import React, { useState } from 'react';
import './ImageSlider.css';

const ImageSlider = ({ images }) => { // takes in images as props
  const [index] = useState(0); // create state to keep track of images index, set the default index to 0
  //include setIndex above inside brackets [index, setIndex]

  // const exampleSetTimeOut = () => {
  //   let index = 0;
  //   let numImages = images.length;
    
  //   let image = images[index];
  //   index++;

  //   //set image
  //   if (index > numImages){
  //     index = 0
  //   }

  //   //use setTimeOut to change image
  // }

  // const slideRight = () => {
  //   setIndex((index + 1) % images.length); // increases index by 1
  // };

  // const slideLeft = () => {
  //   const nextIndex = index - 1;
  //   if (nextIndex < 0) {
  //     setIndex(images.length - 1); // returns last index of images array if index is less than 0
  //   } else {
  //     setIndex(nextIndex);
  //   }
  // };

  return (
    images.length > 0 && (
        <img className='hero-img' src={images[index]} alt={index} />
        // <button onClick={slideLeft}>{'<'}</button>
        // <button onClick={slideRight}>{'>'}</button>
    )
  );
};

export default ImageSlider;

