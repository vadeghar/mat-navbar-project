import React, { useState, useEffect } from 'react';
import { Box, Typography, Button } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import StarHalfIcon from '@mui/icons-material/StarHalf';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ViewComfyIcon from '@mui/icons-material/ViewComfy';
import { styled } from '@mui/system';

const ProductBoxContainer = styled(Box)(({ theme }) => ({
    borderRadius: '8px',
    padding: '0px',
    width: '22%', // Adjusted width to fit 5 products in a line
    textAlign: 'center',
    position: 'relative',
    backgroundColor: '#ffffff',
    boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: '450px', // Adjusted height
    overflow: 'hidden',
    '&:hover': {
        transform: 'scale(1.03)',
        boxShadow: '0px 6px 15px rgba(0, 0, 0, 0.15)',
        backgroundColor: '#f7e6ea',
    },
}));

const ImageContainer = styled(Box)({
    position: 'relative',
    overflow: 'hidden',
    height: '50%', // Adjusted image height
    backgroundColor: '#ffffff', // White background
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
});

const ProductDetailContainer = styled(Box)({
    position: 'relative',
    overflow: 'hidden',
    height: '50%', // Adjusted image height
    borderRadius: '8px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap',
    width: '100%',
    paddingBottom: '10px',
    flexFlow: 'column'
});

const ProductBox = ({ product }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [isHovered, setIsHovered] = useState(false);
    const { title, images, shortDescription, rating, reviews, shades, salePrice, regularPrice } = product;

    useEffect(() => {
        let interval;
        if (isHovered && images.length > 1) {
            interval = setInterval(() => {
                setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
            }, 1000);
        } else {
            setCurrentImageIndex(0);
            clearInterval(interval);
        }

        return () => clearInterval(interval);
    }, [isHovered, images]);

    const renderRatingStars = (rating) => {
        const fullStars = Math.floor(rating);
        const halfStar = rating % 1 >= 0.5;
        return (
            <>
                {[...Array(fullStars)].map((_, i) => (
                    <StarIcon key={`star-${i}`} fontSize="8px" />
                ))}
                {halfStar && <StarHalfIcon fontSize="8px" />}
                {[...Array(5 - fullStars - (halfStar ? 1 : 0))].map((_, i) => (
                    <StarBorderIcon key={`empty-star-${i}`} fontSize="8px" />
                ))}
            </>
        );
    };

    return (
        <ProductBoxContainer>
            <ImageContainer
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                <Box
                    component="img"
                    src={images[currentImageIndex]}
                    alt={title}
                    sx={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'contain', // Contain image within container
                        transition: 'transform 0.3s ease',
                    }}
                />
            </ImageContainer>
            <ProductDetailContainer>
                
                <Typography variant="h6" sx={{ marginTop: '5px', fontWeight: 'bold', fontSize: '14px' }}>
                    {title}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ marginBottom: '5px', fontSize: '12px', fontWeight: '600' }}>
                    {shortDescription}
                </Typography>
                <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '4px', marginBottom: '8px' }}>
                    {renderRatingStars(rating)}
                    <Typography variant="body2" sx={{ fontSize: '8px' }}>
                        ({reviews} Reviews)
                    </Typography>
                </Box>

                {shades && (
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: '4px', marginBottom: '8px' }}>
                        {shades.slice(0, 3).map((shade, index) => (
                            <Box key={index} sx={{ width: '16px', height: '16px', borderRadius: '50%', backgroundColor: shade.hex }} />
                        ))}
                        {shades.length > 3 && (
                            <Typography variant="body2" color="text.secondary" sx={{ fontSize: '14px' }}>
                                +{shades.length - 3}
                            </Typography>
                        )}
                    </Box>
                )}

                <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'baseline', gap: '8px', marginBottom: '8px' }}>
                    {salePrice ? (
                        <>
                            <Typography variant="body1" sx={{ fontWeight: 'bold', fontSize: '16px', color: '#E74C3C' }}>
                                ₹{salePrice}
                            </Typography>
                            <Typography variant="body2" color="text.secondary" sx={{ textDecoration: 'line-through', fontSize: '14px' }}>
                                ₹{regularPrice}
                            </Typography>
                        </>
                    ) : (
                        <Typography variant="body1" sx={{ fontWeight: 'bold', fontSize: '16px', color: '#7F8C8D' }}>
                            ₹{regularPrice}
                        </Typography>
                    )}
                </Box>

                {shades?.length > 1 ? (
                    <Button
                        variant="outlined"
                        startIcon={<ViewComfyIcon />}
                        size="small"
                        sx={{ alignSelf: 'center', marginTop: 'auto', minWidth: '150px', backgroundColor: '#f772a1', color: '#261e21' }}
                    >
                        View
                    </Button>
                ) : (
                    <Button
                        variant="contained"
                        startIcon={<ShoppingCartIcon />}
                        size="small"
                        sx={{ alignSelf: 'center', marginTop: 'auto', minWidth: '150px', backgroundColor: '#f772a1', color: '#261e21'}}
                    >
                        Add to Cart
                    </Button>
                )}
            </ProductDetailContainer>
        </ProductBoxContainer>
    );
};

export default ProductBox;