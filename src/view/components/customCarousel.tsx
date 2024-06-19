'use client';

import React, { useState, ReactNode } from 'react';
import { Box, Button, Typography } from '@mui/material';

type CustomCarouselProps = {
  items: ReactNode[];
};

const CustomCarousel: React.FC<CustomCarouselProps> = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + items.length) % items.length);
  };

  return (
    <Box sx={{ position: 'relative', width: '100%', overflow: 'hidden' }}>
      <Box sx={{ display: 'flex', transition: 'transform 0.5s ease', transform: `translateX(-${currentIndex * 100}%)` }}>
        {items.map((item, index) => (
          <Box key={index} sx={{ minWidth: '100%' }}>
            {item}
          </Box>
        ))}
      </Box>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 2 }}>
        <Button onClick={prevSlide} sx={{ backgroundColor: 'white' }}>
          Prev
        </Button>
        <Button onClick={nextSlide} sx={{ backgroundColor: 'white' }}>
          Next
        </Button>
      </Box>
    </Box>
  );
};

export default CustomCarousel;
