import React from 'react';
import Slider from 'react-slick';
import '../components/Carousels.css'

import image1 from '../imgs/carousels/1.png';
import image2 from '../imgs/carousels/2.png';
import image3 from '../imgs/carousels/3.png';

const images = [
  { label: 'Image 1', imgPath: image1 },
  { label: 'Image 2', imgPath: image2 },
  { label: 'Image 3', imgPath: image3 },
];

function Carousels() {
  const settings = {
    dots: true,           // Show dots for navigation
    infinite: true,       // Infinite loop of slides
    speed: 800,           // Speed of transition
    slidesToShow: 1,      // Number of slides to show at a time
    slidesToScroll: 1,    // Number of slides to scroll at once
    arrows: true,         // Show next/previous arrows
    autoplay: true,       // Enable auto-sliding
    autoplaySpeed: 1800,  // Set the time for each slide to change (in ms)
  };

  return (
    <div style={{ maxWidth: '99%', margin: 'auto' }}>
    <Slider {...settings}>
      {images.map((item, index) => (
        <div key={index}>
          <img
            src={item.imgPath}
            alt={item.label}
            style={{ width: '100%', height: 'auto', borderRadius: '10px' }}
          />
        </div>
      ))}
    </Slider>
  </div>
  );
}

export default Carousels;
