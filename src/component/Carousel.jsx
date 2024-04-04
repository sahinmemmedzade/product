import React from 'react';
import './Carousel.css';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import Button from './button';

class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentIndex: 0,
      slides: [
        { backgroundImage: 'url(\'https://preview.colorlib.com/theme/product/images/hero_bg_5.jpg' },
        { backgroundImage: 'url(\'https://preview.colorlib.com/theme/product/images/hero_bg_6.jpg.webp' }
      ]
    };
  }

  nextSlide = () => {
    this.setState(prevState => ({
      currentIndex: (prevState.currentIndex + 1) % prevState.slides.length
    }));
  }

  prevSlide = () => {
    this.setState(prevState => ({
      currentIndex: (prevState.currentIndex - 1 + prevState.slides.length) % prevState.slides.length
    }));
  }

  goToSlide = (index) => {
    this.setState({
      currentIndex: index
    });
  }

  render() {
    const { currentIndex, slides } = this.state;

    return (
      <div className="carousel">
        <div className="slide" style={{ backgroundImage: slides[currentIndex].backgroundImage }}>
          <h1 className='slidein'>
            The New Way To Display Product by <span className='colorlib'>  Colorlib</span>
            <div ><Button /></div>
          </h1>
          
        </div>
        <div className="dots">
          {slides.map((slide, index) => (
            <button
              key={index}
              className={currentIndex === index ? 'dot active' : 'dot'}
              onClick={() => this.goToSlide(index)}
            />
          ))}
        </div>
        <button className="prev" onClick={this.prevSlide}>
          <FaArrowLeft />
        </button>
        <button className="next" onClick={this.nextSlide}>
          <FaArrowRight />
        </button>
      </div>
    );
  }
}

export default Carousel;
