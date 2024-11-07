// components/DropdownMenu.js
import React from 'react';
import { Box, Menu, MenuItem, Typography, Button, Grow } from '@mui/material';

const DropdownMenu = ({ anchorEl, open, handleClose, items, images }) => (
    <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
        <Grow in={open} timeout={500}>
            <Box display="flex" p={1}>
                {Object.values(items).map((col, colIndex) => (
                    <Box key={`col-${colIndex}`} p={1}>
                        {col.map((item, index) => (
                            <Grow in={open} key={item} timeout={200 * index}>
                                <MenuItem className='faceMenuItem'>{item}</MenuItem>
                            </Grow>
                        ))}
                    </Box>
                ))}
                {images.map((img, index) => (
                    <Box key={`img-${index}`}  p={1} sx={{ textAlign: 'center' }}>
                        <img src={img.src} alt={img.description} width="400" height="250" />
                        <Typography variant="body2">{img.description}</Typography>
                        <Button variant="contained" size="small" href={img.link}>Shop</Button>
                    </Box>
                ))}
            </Box>
        </Grow>
    </Menu>
);

export default DropdownMenu;
