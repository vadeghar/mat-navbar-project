// Navbar.js
import React, { useState } from 'react';
import { AppBar, Toolbar, IconButton, Typography, Button, Menu, MenuItem, Box } from '@mui/material';
import { Search as SearchIcon, ShoppingCart as ShoppingCartIcon, AccountCircle, KeyboardArrowUp, KeyboardArrowDown } from '@mui/icons-material';
import './Navbar.css'; // Import the CSS file
import logo from '../imgs/logo.png';
import image1 from '../imgs/SB-510_04B_1800x1800.jpg';
import image2 from '../imgs/SB-510_04E_1800x1800.jpg';

const Navbar = () => {
    const [faceMenuAnchorEl, setAnchorEl] = useState(null);
    const [accountMenuAnchor, setAccountMenuAnchor] = useState(null);
    const [showSearch, setShowSearch] = useState(false);
    const openFaceSubMenu = Boolean(faceMenuAnchorEl);
    const accountMenuOpen = Boolean(accountMenuAnchor);

    const handleFaceMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleAccountMenu = (event) => {
        setAccountMenuAnchor(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
        setAccountMenuAnchor(null);
    };

    const toggleSearch = () => {
        setShowSearch(!showSearch);
    };

    const faceSubmenuItems = {
        heading: "FACE",
        options: {
            col1: ["Fixing Spray", "Highlighter", "Liquid Blush", "Blush Palette", "Contour", "Body Paints", "Primer", "Concealer Palette", "Foundation", "Loose Powder"],
            col2: ["Liquid Highlighter", "Blush", "Compact", "Cream Blush", "Cream Concealer", "Balm Foundation", "Liquid Concealer", "Bronzer", "Makeup Fixer", "Setting Spray"],
            col3: ["Foundation Stick", "Corrector", "Cream Contour", "Mixing Pigment", "Blotting Powder", "Baking Powder", "Face Primer", "Loose Highlighter", "Banana Powder", "Strobe Cream", "SFX"]
        },
        images: [
            { src: image1, description: "Best-selling makeup palette 1", link: "/shop1" },
            { src: image2, description: "Best-selling makeup palette 2", link: "/shop2" }
        ]
    };
    return (
        <AppBar position="sticky" sx={{ backgroundColor: '#440025' }}>
            <Toolbar>
                <img src={logo} alt="Shop Logo" className="logo" /> {/* Logo image */}

                <Box display="flex" flexGrow={1} justifyContent="center">
                    {['Face', 'Eye', 'Lips', 'Hair', 'Makeup Tools', 'Skin', 'Vanity', 'Lights', 'Services'].map((item) => (
                        <Button
                            key={item}
                            onClick={item === 'Face' ? handleFaceMenu : undefined}
                            className="menuButton"
                        >
                            {item}
                            {item === 'Face' && (
                                openFaceSubMenu ? <KeyboardArrowUp /> : <KeyboardArrowDown />
                            )}
                        </Button>
                    ))}
                </Box>

                <IconButton color="inherit" onClick={toggleSearch}>
                    <SearchIcon />
                </IconButton>

                <div className={`searchWrapper ${showSearch ? 'show' : ''}`}>
                    <SearchIcon className="searchIconWrapper" />
                    <input className="input" placeholder="Search…" />
                </div>

                <IconButton color="inherit">
                    <ShoppingCartIcon />
                </IconButton>

                <IconButton edge="end" color="inherit" onClick={handleAccountMenu}>
                    <AccountCircle />
                </IconButton>

                <Menu anchorEl={accountMenuAnchor} open={accountMenuOpen} onClose={handleClose}>
                    <MenuItem className="faceMenuItem">Orders</MenuItem>
                    <MenuItem className="faceMenuItem">Profile</MenuItem>
                    <MenuItem className="faceMenuItem">Change Password</MenuItem>
                </Menu>

                <Menu anchorEl={faceMenuAnchorEl} open={openFaceSubMenu} onClose={handleClose}>
                    <Box display="flex" p={1}>
                        {/* Render menu item columns */}
                        {Object.values(faceSubmenuItems.options).map((col, index) => (
                            <Box key={`col-${index}`} width="15%" p={1}>
                                {col.map((item) => (
                                    <MenuItem key={item} className="faceMenuItem">
                                        {item}
                                    </MenuItem>
                                ))}
                            </Box>
                        ))}

                        {/* Render images with descriptions and links */}
                        {faceSubmenuItems.images.map((img, index) => (
                            <Box key={`img-${index}`} width="25%" p={1} sx={{ textAlign: 'center' }}>
                                <img src={img.src} alt={img.description} width="400" height="250" />
                                <Typography variant="body2" sx={{ mt: 1, textAlign: 'center' }}>
                                    {img.description}
                                </Typography>
                                <Button variant="contained" size="small" href={img.link} sx={{ mt: 1 }}>
                                    Shop
                                </Button>
                            </Box>
                        ))}
                    </Box>
                </Menu>

            </Toolbar>
        </AppBar>
    );
};

export default Navbar;
