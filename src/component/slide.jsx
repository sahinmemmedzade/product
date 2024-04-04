import React, { useState } from 'react';
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import './slider.css'

const sliderImages = [
  'https://preview.colorlib.com/theme/product/images/cloth_1.jpg.webp',
  'https://preview.colorlib.com/theme/product/images/cloth_2.jpg.webp',
  'https://preview.colorlib.com/theme/product/images/watch_1.jpg.webp',
  'https://preview.colorlib.com/theme/product/images/shoe_2.jpg.webp',
  'https://preview.colorlib.com/theme/product/images/cloth_3.jpg.webp',
  'https://preview.colorlib.com/theme/product/images/shoe_1.jpg.webp'
];

const Slide = () => {
  const [sliderIndex,setSliderIndex] = useState(0);
  const [sliderIndex1,setSliderIndex1] = useState(1);
  const [sliderIndex2,setSliderIndex2] = useState(2);

  const goNext = () => {
    setSliderIndex((currentIndex) =>currentIndex === sliderImages.length - 1 ? 0 : currentIndex + 1)
    setSliderIndex1((currentIndex) =>currentIndex === sliderImages.length - 1 ? 0 : currentIndex + 1)
    setSliderIndex2((currentIndex) =>currentIndex === sliderImages.length - 1 ? 0 : currentIndex + 1)
  }

  const goBack = () => {
    setSliderIndex((currentIndex) =>currentIndex === 0 ? sliderImages.length - 1 : currentIndex - 1)
    setSliderIndex1((currentIndex) =>currentIndex === 0 ? sliderImages.length - 1 : currentIndex - 1)
    setSliderIndex2((currentIndex) =>currentIndex === 0 ? sliderImages.length - 1 : currentIndex - 1)
  }

  const slideStyle1={
    backgroundImage:` url(${sliderImages[sliderIndex]})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '510px',
    width: '370px'
  };
  const slideStyle2={
    backgroundImage: `url(${sliderImages[sliderIndex1]})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '510px',
    width: '370px'
  };
  const slideStyle3={
    backgroundImage:` url(${sliderImages[sliderIndex2]})`,
      backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '510px',
    width: '370px'
  };

  return (
    <>
      <section className='slider-section'>
        <div className='navigation'>
          <h3>Popular Items</h3>
          <div>
            <FaArrowLeft onClick={goBack}></FaArrowLeft>
            <FaArrowRight onClick={goNext}></FaArrowRight>
          </div>
        </div>
        <div className="slider1">
          <div className="slider-items" style={slideStyle1}></div>
          <div className="slider-items" style={slideStyle2}></div>
          <div className="slider-items" style={slideStyle3}></div>
        </div>
      </section>
    </>
  );
};

export default Slide;