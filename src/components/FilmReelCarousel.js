import React, { useState } from 'react';
import { Box, IconButton, Typography } from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const images = [
  'https://picsum.photos/200/301',
  'https://picsum.photos/200/302',
  'https://picsum.photos/200/303',
  'https://picsum.photos/200/304',
  'https://picsum.photos/200/305',
  'https://picsum.photos/200/306',
  'https://picsum.photos/200/307',
  'https://picsum.photos/200/308',
];

function ImageCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const visibleImagesCount = 4;

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + visibleImagesCount >= images.length ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - visibleImagesCount : prevIndex - 1
    );
  };

  // Get the subset of images to display based on the current index
  const visibleImages = images.slice(
    currentIndex,
    currentIndex + visibleImagesCount
  );

  // If we reach the end, show the remaining images from the start to fill the slots
  const imagesToShow =
    visibleImages.length < visibleImagesCount
      ? [...visibleImages, ...images.slice(0, visibleImagesCount - visibleImages.length)]
      : visibleImages;

  return (
    <Box display="flex" alignItems="center" justifyContent="center" flexDirection="column" sx={{ width: '100%', maxWidth: 800, margin: 'auto' }}>
      <Box display="flex" alignItems="center">
        <IconButton onClick={handlePrev} aria-label="previous image">
          <ArrowBackIosIcon />
        </IconButton>

        <Box display="flex" gap={2}>
          {imagesToShow.map((src, index) => (
            <Box
              key={index}
              component="img"
              src={src}
              alt={`Image ${currentIndex + index + 1}`}
              sx={{ width: 250, height: 400, objectFit: 'cover', borderRadius: 2 }}
            />
          ))}
        </Box>

        <IconButton onClick={handleNext} aria-label="next image">
          <ArrowForwardIosIcon />
        </IconButton>
      </Box>

      <Typography variant="caption" display="block" mt={1}>
        {`Showing images ${currentIndex + 1} to ${
          currentIndex + visibleImagesCount > images.length
            ? images.length
            : currentIndex + visibleImagesCount
        } of ${images.length}`}
      </Typography>
    </Box>
  );
}

export default ImageCarousel;
