// Navbar.js
import React, { useState } from 'react';
import { AppBar, Toolbar, IconButton, Button, Menu, MenuItem, Box } from '@mui/material';
import { Search as SearchIcon, ShoppingCart as ShoppingCartIcon, AccountCircle, KeyboardArrowUp, KeyboardArrowDown } from '@mui/icons-material';
import '../Navbar/Navbar.css'; // Import the CSS file
import DropdownMenu from '../DropdownMenu';
import logo from '../../imgs/logo.png';
import menuData from '../../testDataComp/NavbarData';
import theme from '../../themes/NavbarTheme';

const Navbar = () => {
    const [accountMenuAnchor, setAccountMenuAnchor] = useState(null);
    const [showSearch, setShowSearch] = useState(false);
    const accountMenuOpen = Boolean(accountMenuAnchor);

    const [anchorEl, setMainAnchorEl] = useState(null);
    const [openMenu, setOpenMenu] = useState('');

    const handleMenuOpen = (event, menu) => {
        setMainAnchorEl(event.currentTarget);
        setOpenMenu(menu);
    };

    const handleMenuClose = () => {
        setOpenMenu('');
    };
    const handleAccountMenu = (event) => {
        setAccountMenuAnchor(event.currentTarget);
    };
    const handleClose = () => {
        setAccountMenuAnchor(null)
        setOpenMenu('');

    };
    const toggleSearch = () => {
        setShowSearch(!showSearch);
    };

    return (
        <AppBar position="sticky">
            <Toolbar sx={{
                backgroundColor: theme.navbar.backgroundColor
            }}>
                <img src={logo} alt="Shop Logo" className="logo" /> {/* Logo image */}

                <Box display="flex" flexGrow={1} justifyContent="center">
                    {menuData.mainMenu.map((item) => (
                        <Button
                            key={item}
                            onClick={(e) => handleMenuOpen(e, item)}
                            className="menuButton"
                            sx={{
                                color: theme.navbarMenu.textColor,
                                textTransform: 'none',
                                fontSize: '16px',
                                lineHeight: '1.5',
                                margin: '0 10px',
                                ':hover': { backgroundColor: theme.navbar.menuItemHoverColor },
                              }}
                        >
                            {item}
                            {menuData[item] && menuData[item].options && Object.keys(menuData[item].options).length > 0 && (
                                openMenu === item ? <KeyboardArrowUp /> : <KeyboardArrowDown />
                            )}
                        </Button>
                    ))}
                </Box>

                <IconButton color="inherit" onClick={toggleSearch} sx={{
                                color: theme.navbarMenu.textColor}}>
                    <SearchIcon />
                </IconButton>

                <div className={`searchWrapper ${showSearch ? 'show' : ''}`}>
                    <SearchIcon className="searchIconWrapper" />
                    <input className="input" placeholder="Search…" />
                </div>

                <IconButton color="inherit" sx={{
                                color: theme.navbarMenu.textColor}}>
                    <ShoppingCartIcon />
                </IconButton>

                <IconButton edge="end" color="inherit" onClick={handleAccountMenu} sx={{
                                color: theme.navbarMenu.textColor}}>
                    <AccountCircle />
                </IconButton>

                <Menu anchorEl={accountMenuAnchor} open={accountMenuOpen} onClose={handleClose}
                sx={{
                    '& .MuiPaper-root': {
                      backgroundColor: theme.cards.backgroundColor,
                      borderColor: theme.cards.borderColor,
                    },
                  }}>
                    <MenuItem className="faceMenuItem" >Orders</MenuItem>
                    <MenuItem className="faceMenuItem">Profile</MenuItem>
                    <MenuItem className="faceMenuItem">Change Password</MenuItem>
                    <MenuItem className="faceMenuItem">Logout</MenuItem>
                </Menu>

                {/* Conditionally render DropdownMenu for the active menu */}
                {openMenu && menuData[openMenu] && (
                    <DropdownMenu
                        anchorEl={anchorEl}
                        open={Boolean(anchorEl && openMenu)}
                        handleClose={handleMenuClose}
                        items={menuData[openMenu].options}
                        images={menuData[openMenu].images}
                    />
                )}
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;
