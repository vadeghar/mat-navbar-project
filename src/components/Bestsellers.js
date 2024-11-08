import React, { useState } from 'react';
import { Box, IconButton } from '@mui/material';
import ProductBox from './ProductBox';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const Bestsellers = () => {

    const sampleProducts = [
        {
            title: 'Ikonic Curling Tong Emerald',
            images: ['https://cdn.tirabeauty.com/v2/billowing-snowflake-434234/tira-p/wrkr/products/pictures/item/free/resize-w:1080/957968/5ECPdS0A9z-957968_1.jpg',
                'https://cdn.tirabeauty.com/v2/billowing-snowflake-434234/tira-p/wrkr/products/pictures/item/free/resize-w:1080/957968/Csi4LIG_uT-957968_2.jpg',
                'https://cdn.tirabeauty.com/v2/billowing-snowflake-434234/tira-p/wrkr/products/pictures/item/free/resize-w:1080/957968/klAALFuX1N-957968_3.jpg'],
            shortDescription: 'IKONIC Curling Tong EMERALD',
            rating: '4.5',
            reviews: 435,
            regularPrice: '2372.00',
        },
        {
            title: 'Precision Lip Liner',
            images: ['https://ssbimages.ssbeauty.in/pub/media/catalog/product/images/A23NARS45090915/A23NARS45090915_base.jpg',
                'https://ssbimages.ssbeauty.in/pub/media/catalog/product/images/A23NARS45090915/A23NARS45090915_A23NARS45090915_2.jpg',
                'https://ssbimages.ssbeauty.in/pub/media/catalog/product/images/A23NARS45090915/A23NARS45090915_A23NARS45090915_3.jpg',
            ],
            shortDescription: 'A Precise Lip Lining Pencil In 26 Highly Pigmented Matte Shades.',
            rating: '4.2',
            reviews: 145,
            shades: [
                { name: 'Classic Red', hex: '#B22222' },
                { name: 'Deep Pink', hex: '#C71585' },
                { name: 'Bright Pink', hex: '#FF69B4' },
                { name: 'Crimson', hex: '#DC143C' },
                { name: 'Dark Wine', hex: '#8B0000' },
                { name: 'Berry', hex: '#8A2BE2' },
                { name: 'Plum', hex: '#DDA0DD' },
                { name: 'Soft Peach', hex: '#FFC0CB' },
                { name: 'Coral', hex: '#FF7F50' },
                { name: 'Nude', hex: '#D2B48C' },
            ],
            salePrice: '430.00',
            regularPrice: '480.00',
        },
        {
            title: 'Ikonic Curling Tong Emerald',
            images: ['https://cdn.tirabeauty.com/v2/billowing-snowflake-434234/tira-p/wrkr/products/pictures/item/free/resize-w:1080/957968/5ECPdS0A9z-957968_1.jpg',
                'https://cdn.tirabeauty.com/v2/billowing-snowflake-434234/tira-p/wrkr/products/pictures/item/free/resize-w:1080/957968/Csi4LIG_uT-957968_2.jpg',
                'https://cdn.tirabeauty.com/v2/billowing-snowflake-434234/tira-p/wrkr/products/pictures/item/free/resize-w:1080/957968/klAALFuX1N-957968_3.jpg'],
            shortDescription: 'IKONIC Curling Tong EMERALD',
            rating: '4.5',
            reviews: 87,
            regularPrice: '2372.00',
        },
        {
            title: 'Precision Lip Liner',
            images: ['https://ssbimages.ssbeauty.in/pub/media/catalog/product/images/A23NARS45090915/A23NARS45090915_base.jpg',
                'https://ssbimages.ssbeauty.in/pub/media/catalog/product/images/A23NARS45090915/A23NARS45090915_A23NARS45090915_2.jpg',
                'https://ssbimages.ssbeauty.in/pub/media/catalog/product/images/A23NARS45090915/A23NARS45090915_A23NARS45090915_3.jpg',
            ],
            shortDescription: 'A Precise Lip Lining Pencil In 26 Highly Pigmented Matte Shades.',
            rating: '4.2',
            reviews: 456,
            shades: [
                { name: 'Classic Red', hex: '#B22222' },
                { name: 'Deep Pink', hex: '#C71585' },
                { name: 'Bright Pink', hex: '#FF69B4' },
                { name: 'Crimson', hex: '#DC143C' },
                { name: 'Dark Wine', hex: '#8B0000' },
                { name: 'Berry', hex: '#8A2BE2' },
                { name: 'Plum', hex: '#DDA0DD' },
                { name: 'Soft Peach', hex: '#FFC0CB' },
                { name: 'Coral', hex: '#FF7F50' },
                { name: 'Nude', hex: '#D2B48C' },
            ],
            salePrice: '430.00',
            regularPrice: '480.00',
        },
        {
            title: 'Ikonic Curling Tong Emerald',
            images: ['https://cdn.tirabeauty.com/v2/billowing-snowflake-434234/tira-p/wrkr/products/pictures/item/free/resize-w:1080/957968/5ECPdS0A9z-957968_1.jpg',
                'https://cdn.tirabeauty.com/v2/billowing-snowflake-434234/tira-p/wrkr/products/pictures/item/free/resize-w:1080/957968/Csi4LIG_uT-957968_2.jpg',
                'https://cdn.tirabeauty.com/v2/billowing-snowflake-434234/tira-p/wrkr/products/pictures/item/free/resize-w:1080/957968/klAALFuX1N-957968_3.jpg'],
            shortDescription: 'IKONIC Curling Tong EMERALD',
            rating: '4.5',
            reviews: 1009,
            regularPrice: '2372.00',
        },
        {
            title: 'Precision Lip Liner',
            images: ['https://ssbimages.ssbeauty.in/pub/media/catalog/product/images/A23NARS45090915/A23NARS45090915_base.jpg',
                'https://ssbimages.ssbeauty.in/pub/media/catalog/product/images/A23NARS45090915/A23NARS45090915_A23NARS45090915_2.jpg',
                'https://ssbimages.ssbeauty.in/pub/media/catalog/product/images/A23NARS45090915/A23NARS45090915_A23NARS45090915_3.jpg',
            ],
            shortDescription: 'A Precise Lip Lining Pencil In 26 Highly Pigmented Matte Shades.',
            rating: '4.2',
            reviews: 10,
            shades: [
                { name: 'Classic Red', hex: '#B22222' },
                { name: 'Deep Pink', hex: '#C71585' },
                { name: 'Bright Pink', hex: '#FF69B4' },
                { name: 'Crimson', hex: '#DC143C' },
                { name: 'Dark Wine', hex: '#8B0000' },
                { name: 'Berry', hex: '#8A2BE2' },
                { name: 'Plum', hex: '#DDA0DD' },
                { name: 'Soft Peach', hex: '#FFC0CB' },
                { name: 'Coral', hex: '#FF7F50' },
                { name: 'Nude', hex: '#D2B48C' },
            ],
            salePrice: '430.00',
            regularPrice: '480.00',
        },
        {
            title: 'Ikonic Curling Tong Emerald',
            images: ['https://cdn.tirabeauty.com/v2/billowing-snowflake-434234/tira-p/wrkr/products/pictures/item/free/resize-w:1080/957968/5ECPdS0A9z-957968_1.jpg',
                'https://cdn.tirabeauty.com/v2/billowing-snowflake-434234/tira-p/wrkr/products/pictures/item/free/resize-w:1080/957968/Csi4LIG_uT-957968_2.jpg',
                'https://cdn.tirabeauty.com/v2/billowing-snowflake-434234/tira-p/wrkr/products/pictures/item/free/resize-w:1080/957968/klAALFuX1N-957968_3.jpg'],
            shortDescription: 'IKONIC Curling Tong EMERALD',
            rating: '4.5',
            reviews: 145,
            regularPrice: '2372.00',
        },
        {
            title: 'Precision Lip Liner',
            images: ['https://ssbimages.ssbeauty.in/pub/media/catalog/product/images/A23NARS45090915/A23NARS45090915_base.jpg',
                'https://ssbimages.ssbeauty.in/pub/media/catalog/product/images/A23NARS45090915/A23NARS45090915_A23NARS45090915_2.jpg',
                'https://ssbimages.ssbeauty.in/pub/media/catalog/product/images/A23NARS45090915/A23NARS45090915_A23NARS45090915_3.jpg',
            ],
            shortDescription: 'A Precise Lip Lining Pencil In 26 Highly Pigmented Matte Shades.',
            rating: '4.2',
            reviews: 100,
            shades: [
                { name: 'Classic Red', hex: '#B22222' },
                { name: 'Deep Pink', hex: '#C71585' },
                { name: 'Bright Pink', hex: '#FF69B4' },
                { name: 'Crimson', hex: '#DC143C' },
                { name: 'Dark Wine', hex: '#8B0000' },
                { name: 'Berry', hex: '#8A2BE2' },
                { name: 'Plum', hex: '#DDA0DD' },
                { name: 'Soft Peach', hex: '#FFC0CB' },
                { name: 'Coral', hex: '#FF7F50' },
                { name: 'Nude', hex: '#D2B48C' },
            ],
            salePrice: '430.00',
            regularPrice: '480.00',
        }
    ];
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
                <Box display="flex" alignItems="center" width='100%'>
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
                            marginTop: '16px'
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
        </Box>
    );

}
export default Bestsellers;
