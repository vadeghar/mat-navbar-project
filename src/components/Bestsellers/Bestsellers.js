import React from 'react';
import { Box } from '@mui/material';
import Slider from 'react-slick';
import ProductBox from '../Product/ProductBox';
import sampleProducts from '../../testDataComp/BestsellersData';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../Bestsellers/Bestsellers.css';

const Bestsellers = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: true,
    };

    return (
        <Box sx={{ width: '95%', margin: '0 auto' }}>
            {/* Bestsellers Ribbon Heading */}
            <Box sx={{
                display: 'flex',
                alignItems: 'end',
                backgroundColor: '#faf2f5',
                color: '#261e21',
                padding: '8px',
                borderRadius: '0px',
                fontWeight: 'bold',
                position: 'relative',
                width: '98%',
                height: '2vw',
                borderBottom: '1px #261e21 solid'
            }}>
                Bestsellers
            </Box>

            <Box display="flex" alignItems="center" justifyContent="center" flexDirection="column" sx={{ width: '100%', margin: 'auto' }}>
                <Box sx={{ width: '80%', margin: 'auto', paddingTop: '20px' }}>
                    <Slider {...settings}>
                        {sampleProducts.map((product, index) => (
                            <Box key={index} sx={{ padding: '0 10px' }}>
                                <ProductBox product={product} />
                            </Box>
                        ))}
                    </Slider>
                </Box>
            </Box>
        </Box>
    );

}
export default Bestsellers;
