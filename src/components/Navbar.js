// Navbar.js
import React, { useState } from 'react';
import { AppBar, Toolbar, IconButton, Typography, Button, Menu, MenuItem, Box, Grow } from '@mui/material';
import { Search as SearchIcon, ShoppingCart as ShoppingCartIcon, AccountCircle, KeyboardArrowUp, KeyboardArrowDown } from '@mui/icons-material';
import './Navbar.css'; // Import the CSS file
import logo from '../imgs/logo.png';
import image1 from '../imgs/SB-510_04B_1800x1800.jpg';
import image2 from '../imgs/SB-510_04E_1800x1800.jpg';

import eye1 from '../imgs/SB-510_04B_1800x1800.jpg';
import eye2 from '../imgs/SB-510_04E_1800x1800.jpg';

import lips1 from '../imgs/SB-510_04B_1800x1800.jpg';
import lips2 from '../imgs/SB-510_04E_1800x1800.jpg';


import hair1 from '../imgs/SB-510_04B_1800x1800.jpg';
import hair2 from '../imgs/SB-510_04E_1800x1800.jpg';

import makeup1 from '../imgs/SB-510_04B_1800x1800.jpg';
import makeup2 from '../imgs/SB-510_04E_1800x1800.jpg';

const Navbar = () => {
    const [faceMenuAnchorEl, setAnchorEl] = useState(null);
    const [eyeMenuAnchorEl, setEyeAnchorEl] = useState(null);
    const [lipsMenuAnchorEl, setLipsAnchorEl] = useState(null);
    const [accountMenuAnchor, setAccountMenuAnchor] = useState(null);
    const [showSearch, setShowSearch] = useState(false);
    const openFaceSubMenu = Boolean(faceMenuAnchorEl);
    const openEyeSubMenu = Boolean(eyeMenuAnchorEl);
    const openLipsSubMenu = Boolean(lipsMenuAnchorEl);
    const accountMenuOpen = Boolean(accountMenuAnchor);

    


    const handleFaceMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleEyeMenu = (event) => {
        setEyeAnchorEl(event.currentTarget);
    }

    const handleLipsMenu = (event) => {
        setLipsAnchorEl(event.currentTarget);
    }

    const [hairMenuAnchorEl, setHairAnchorEl] = useState(null);
    const openHairSubMenu = Boolean(hairMenuAnchorEl);
    const handleHairMenu = (event) => {
        setHairAnchorEl(event.currentTarget);
    }

    const [makeupToolsMenuAnchorEl, setMakeupToolsAnchorEl] = useState(null);
    const openMakeupToolsSubMenu = Boolean(makeupToolsMenuAnchorEl);
    const handleMakeupToolsMenu = (event) => {
        setMakeupToolsAnchorEl(event.currentTarget);
    }

    const handleAccountMenu = (event) => {
        setAccountMenuAnchor(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
        setEyeAnchorEl(null);
        setAccountMenuAnchor(null);
        setLipsAnchorEl(null);
        setHairAnchorEl(null);
        setMakeupToolsAnchorEl(null)
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

    const eyeSubmenuItems = {
        heading: "EYE",
        options: {
          col1: ["Eyelashes", "Tweezer", "Lash Adhesive", "Brow Kit", "Glitter Glue", "EyePrimer", "Eyeshadow"],
          col2: ["Eye Pencil", "Lenses", "Brow Pomade", "Mascara", "Gel Liner", "Eye Pigments", "Liquid Eyeshadow"],
          col3: ["EyeLiner", "Brow Pencil", "Sketch Liner", "Brow Gel", "Lash Curler", "Kajal", "Pigment Primer"]
        },
        images: [
          { src: eye1, description: "Eye Description 1", link: "/shop1" },
          { src: eye2, description: "Eye Description 2", link: "/shop2" },
        ]
      };

      const lipsSubmenuItems = {
        heading: "LIPS",
        options: {
          col1: ["Lip Palette", "Lipstick", "Lip Gloss", "Lip Tints", "Liquid Lipstick", "Lip Sets"], 
          col2: ["Lip Liner", "Lip Balm", "Lip Crayon", "Lip Primer", "Lip Oil", "Lip Blush"], 
          col3: ["Lip Tattoo", "Lip Plumper", "Lip Crème", "Lip Maximizer", "Lip Pencils", "Lip Stains", "Lip Paint", "Matte Lipstick"]
        },
        images: [
          { src: lips1, description: "Lip Product 1", link: "/lipshop1" },
          { src: lips2, description: "Lip Product 2", link: "/lipshop2" }
        ]
      };

      const hairSubmenuItems = {
        heading: "HAIR",
        options: {
          col1: ["Hair Brushes", "Tools", "Pin Organiser", "Combs", "Hair Accessories", "Hair Extensions", "Clip Extensions"],
          col2: ["Styling", "Hair Pins", "Practise", "Care", "Clips", "Hair Oil"],
          col3: ["Hair Vanity", "Essentials"]
        },
        images: [
          { src: hair1, description: "Hair Description 1", link: "/shop1" },
          { src: hair2, description: "Hair Description 2", link: "/shop2" },
        ]
      };

      const makeupToolsSubmenuItems = {
        heading: "MAKEUP TOOLS",
        options: {
            col1: ["Brushes", "Brush Cleanser", "Brush Set", "Eye Brushes", "Face Brushes", "Lip Brushes", "Brush Holder", "Cleansing Matt"],
            col2: ["Airbrush", "Cleanser", "Foundation", "Primer", "Loose Powder", "Highlighter", "Spaonge Puff", "Wedges"],
            col3: ["Powder Puff", "Sponge Beauty Blender", "Essentials", "Bindi", "Mixing Palette", "Fan", "Mirror", "Mixing Medium"],
            col4: ["Dummy", "Utility", "Cape", "Saftey Pin", "Tapes", "Clips", "Scissors", "Eyebrow Razor", "Sharpner", "Tika Glue", "Face Lifting", "Body Tape", "Makeup Chairs", "Depotting"]            
        },
        images: [
          { src: makeup1, description: "makeup Description 1", link: "/shop1" },
          { src: makeup2, description: "Makeup Description 2", link: "/shop2" },
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
                            onClick={item === 'Face' ? handleFaceMenu : 
                                    item === 'Eye' ? handleEyeMenu : 
                                    item === 'Lips' ? handleLipsMenu : 
                                    item === 'Hair' ? handleHairMenu : 
                                    item === 'Makeup Tools' ? handleMakeupToolsMenu : undefined}
                            className="menuButton"
                        >
                            {item}
                            {item === 'Face' && (
                                openFaceSubMenu ? <KeyboardArrowUp /> : <KeyboardArrowDown />
                            )}
                            {item === 'Eye' && (
                                openEyeSubMenu ? <KeyboardArrowUp /> : <KeyboardArrowDown />
                            )}
                            {item === 'Lips' && (
                                openLipsSubMenu ? <KeyboardArrowUp /> : <KeyboardArrowDown />
                            )}
                            {item === 'Hair' && (
                                openHairSubMenu ? <KeyboardArrowUp /> : <KeyboardArrowDown />
                            )}
                            {item === 'Makeup Tools' && (
                                openMakeupToolsSubMenu ? <KeyboardArrowUp /> : <KeyboardArrowDown />
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
                    <Grow in={openFaceSubMenu} timeout={500}>
                        <Box display="flex" p={1}>
                            {/* Render menu item columns with animation */}
                            {Object.values(faceSubmenuItems.options).map((col, colIndex) => (
                                <Box key={`col-${colIndex}`} width="15%" p={1}>
                                    {col.map((item, index) => (
                                        <Grow
                                            in={openFaceSubMenu} // Controls the animation visibility
                                            style={{ transformOrigin: '0 0 0' }}
                                            {...(openFaceSubMenu ? { timeout: 200 * index } : {})} // Delay each item
                                            key={item}
                                        >
                                            <MenuItem className="faceMenuItem">
                                                {item}
                                            </MenuItem>
                                        </Grow>
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
                    </Grow>
                </Menu>

                <Menu anchorEl={eyeMenuAnchorEl} open={openEyeSubMenu} onClose={handleClose}>
                    <Grow in={openEyeSubMenu} timeout={500}>
                        <Box display="flex" p={1}>
                            {/* Render menu item columns with animation */}
                            {Object.values(eyeSubmenuItems.options).map((col, colIndex) => (
                                <Box key={`col-${colIndex}`} width="15%" p={1}>
                                    {col.map((item, index) => (
                                        <Grow
                                            in={openEyeSubMenu} // Controls the animation visibility
                                            style={{ transformOrigin: '0 0 0' }}
                                            {...(openEyeSubMenu ? { timeout: 200 * index } : {})} // Delay each item
                                            key={item}
                                        >
                                            <MenuItem className="faceMenuItem">
                                                {item}
                                            </MenuItem>
                                        </Grow>
                                    ))}
                                </Box>
                            ))}
                            {/* Render images with descriptions and links */}
                            {eyeSubmenuItems.images.map((img, index) => (
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
                    </Grow>
                </Menu>

                <Menu anchorEl={lipsMenuAnchorEl} open={openLipsSubMenu} onClose={handleClose}>
                    <Grow in={openLipsSubMenu} timeout={500}>
                        <Box display="flex" p={1}>
                            {/* Render menu item columns with animation */}
                            {Object.values(lipsSubmenuItems.options).map((col, colIndex) => (
                                <Box key={`col-${colIndex}`} width="15%" p={1}>
                                    {col.map((item, index) => (
                                        <Grow
                                            in={openLipsSubMenu} // Controls the animation visibility
                                            style={{ transformOrigin: '0 0 0' }}
                                            {...(openLipsSubMenu ? { timeout: 200 * index } : {})} // Delay each item
                                            key={item}
                                        >
                                            <MenuItem className="faceMenuItem">
                                                {item}
                                            </MenuItem>
                                        </Grow>
                                    ))}
                                </Box>
                            ))}
                            {/* Render images with descriptions and links */}
                            {lipsSubmenuItems.images.map((img, index) => (
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
                    </Grow>
                </Menu>

                <Menu anchorEl={hairMenuAnchorEl} open={openHairSubMenu} onClose={handleClose}>
                    <Grow in={openHairSubMenu} timeout={500}>
                        <Box display="flex" p={1}>
                            {/* Render menu item columns with animation */}
                            {Object.values(hairSubmenuItems.options).map((col, colIndex) => (
                                <Box key={`col-${colIndex}`} width="15%" p={1}>
                                    {col.map((item, index) => (
                                        <Grow
                                            in={openHairSubMenu} // Controls the animation visibility
                                            style={{ transformOrigin: '0 0 0' }}
                                            {...(openHairSubMenu ? { timeout: 200 * index } : {})} // Delay each item
                                            key={item}
                                        >
                                            <MenuItem className="faceMenuItem">
                                                {item}
                                            </MenuItem>
                                        </Grow>
                                    ))}
                                </Box>
                            ))}
                            {/* Render images with descriptions and links */}
                            {hairSubmenuItems.images.map((img, index) => (
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
                    </Grow>
                </Menu>

                <Menu anchorEl={makeupToolsMenuAnchorEl} open={openMakeupToolsSubMenu} onClose={handleClose}>
                    <Grow in={openMakeupToolsSubMenu} timeout={500}>
                        <Box display="flex" p={1}>
                            {/* Render menu item columns with animation */}
                            {Object.values(makeupToolsSubmenuItems.options).map((col, colIndex) => (
                                <Box key={`col-${colIndex}`} width="15%" p={1}>
                                    {col.map((item, index) => (
                                        <Grow
                                            in={openMakeupToolsSubMenu} // Controls the animation visibility
                                            style={{ transformOrigin: '0 0 0' }}
                                            {...(openMakeupToolsSubMenu ? { timeout: 200 * index } : {})} // Delay each item
                                            key={item}
                                        >
                                            <MenuItem className="faceMenuItem">
                                                {item}
                                            </MenuItem>
                                        </Grow>
                                    ))}
                                </Box>
                            ))}
                            {/* Render images with descriptions and links */}
                            {makeupToolsSubmenuItems.images.map((img, index) => (
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
                    </Grow>
                </Menu>

            </Toolbar>
        </AppBar>
    );
};

export default Navbar;
