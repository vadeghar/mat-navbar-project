import React from 'react';
import { Box } from '@mui/material';
import ProductBox from './ProductBox';

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
return (
    <Box sx={{ display: 'flex', 
    flexWrap: 'wrap', 
    flexDirection: 'row', 
    gap: '10px',
    width: '95%' }}>
        {sampleProducts.map((product, index) => (
            <ProductBox key={index} product={product} />
        ))}
    </Box>
);

}
export default Bestsellers;
