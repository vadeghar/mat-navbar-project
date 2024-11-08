import React from 'react';
import { Box } from '@mui/material';
import Slider from 'react-slick';
import ProductBox from '../Product/ProductBox';
import sampleProducts from '../../testDataComp/BestsellersData';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function ProductCarousel() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
  };

  return (
    <Box sx={{ width: '80%', margin: 'auto', paddingTop: '20px' }}>
      <Slider {...settings}>
        {sampleProducts.map((product, index) => (
          <Box key={index} sx={{ padding: '0 10px' }}>
            <ProductBox product={product} />
          </Box>
        ))}
      </Slider>
    </Box>
  );
}

export default ProductCarousel;
