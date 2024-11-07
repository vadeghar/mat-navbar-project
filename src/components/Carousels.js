import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

import image1 from '../imgs/carousels/1.png'
import image2 from '../imgs/carousels/2.png'
import image3 from '../imgs/carousels/3.png'

const images = [
  { label: 'Image 1', imgPath: image1 },
  { label: 'Image 2', imgPath: image2 },
  { label: 'Image 3', imgPath: image3 },
];

function Carousels() {
  return (
    <Carousel autoPlay infiniteLoop showThumbs={false} showStatus={false}>
      {images.map((item, index) => (
        <div key={index}>
          <img src={item.imgPath} alt={item.label} />
          {/* <p className="legend">{item.label}</p> */}
        </div>
      ))}
    </Carousel>
  );
}

export default Carousels;
