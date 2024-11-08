import React, { useState } from 'react';
import { Box, IconButton } from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ProductBox from './ProductBox';
import sampleProducts from '../testDataComp/BestsellersData';


function ProductCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const visibleProductsCount = 4;

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + visibleProductsCount >= sampleProducts.length ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? sampleProducts.length - visibleProductsCount : prevIndex - 1
    );
  };

  // Get the subset of products to display based on the current index
  const visibleProducts = sampleProducts.slice(
    currentIndex,
    currentIndex + visibleProductsCount
  );

  // Handle looping for the last items in the list
  const productsToShow =
    visibleProducts.length < visibleProductsCount
      ? [...visibleProducts, ...sampleProducts.slice(0, visibleProductsCount - visibleProducts.length)]
      : visibleProducts;

  return (
    <Box display="flex" alignItems="center" justifyContent="center" flexDirection="column" sx={{ width: '100%', margin: 'auto' }}>
      <Box display="flex" alignItems="center">
        <IconButton onClick={handlePrev} aria-label="previous product">
          <ArrowBackIosIcon />
        </IconButton>

        <Box
          sx={{
            display: 'flex', 
                flexWrap: 'wrap', 
                flexDirection: 'row', 
                justifyContent: 'center',
                gap: '10px',
                width: '100%',
                marginTop: '10px'
          }}
        >
          {productsToShow.map((product, index) => (
            <ProductBox key={index} product={product} />
          ))}
        </Box>

        <IconButton onClick={handleNext} aria-label="next product">
          <ArrowForwardIosIcon />
        </IconButton>
      </Box>
    </Box>
  );
}

export default ProductCarousel;
