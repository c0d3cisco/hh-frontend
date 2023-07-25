import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {AppBar, Box, Toolbar, IconButton, Typography, Container, Avatar, Button, MenuItem, Menu,} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import HHLogo from '../../assets/updated_helen_house_logo_cropped_360.png';
import { LoginModal } from '../Login'; // Import the ModalLogin component
import Auth0LoginButton from '../Auth0Login';
import Auth0LogoutButton from '../Auth0Logout';
import Auth0Profile from '../Auth0Profile';
import { useAuth0 } from "@auth0/auth0-react";

const pages = [
  { name: 'Home', path: '/' },
  { name: 'Checkin', path: '/checkin' },
  { name: 'Signup', path: '/signup' },
  { name: 'Data Dashboard', path: '/datadashboard' },
  { name: 'Intake Form', path: '/intakeform' },
];

export default function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [userRole, setUserRole] = useState('guest'); // 'guest', 'user', 'admin', 'staff', 'volunteer'
  const [activePage, setActivePage] = useState('/');
  const location = useLocation();
  const { isAuthenticated } = useAuth0(); // Get the isAuthenticated status from Auth0

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleLoginClick = () => {
    setIsLoginModalOpen(true); // Open the login modal
  };

  const handleLoginModalClose = () => {
    setIsLoginModalOpen(false); // Close the login modal
  };

  //! Replace with getting user role from the user table
  useEffect(() => {
    // Replace this with your actual authentication logic
    // Set the user role based on authentication state
    const isAdmin = false; // Replace this with the actual admin role check
    const isStaff = false; // Replace this with the actual staff role check
    const isVolunteer = false; // Replace this with the actual volunteer role check

    console.log('User is authenticated', isAuthenticated)
    if (isAuthenticated) {
      if (isAdmin) {
        setUserRole('admin');
      } else if (isStaff) {
        setUserRole('staff');
      } else if (isVolunteer) {
        setUserRole('volunteer');
      } else {
        setUserRole('user');
      }
    } else {
      setUserRole('guest');
    }
  }, [isAuthenticated]);

  useEffect(() => {
    // Update the active page state whenever the location pathname changes
    setActivePage(location.pathname);
  }, [location.pathname]);

  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: '#a37ccf',
        paddingY: 1,
        paddingX: 2,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <img
            src={HHLogo}
            alt="Helen House logo"
            sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }}
          />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            {/* Add your website name here */}
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page.name} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page.name}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            {/* Add your website name here */}
          </Typography>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: 'none', md: 'flex' },
              justifyContent: 'flex-end', // Move buttons to the right
              alignItems: 'center',
            }}
          >
            {pages.map((page) => {
              // Display the button based on user role
              if (
                (userRole === 'guest' && page.name === 'Home') ||
                //TODO Update User Logic to only see Intake Form if not "approved"
                (userRole === 'user' && ['Home', 'Checkin', 'Intake Form'].includes(page.name)) ||
                (userRole === 'admin') || // Include all pages for admins
                (userRole === 'staff' && page.name !== 'Data Dashboard') ||
                (userRole === 'volunteer' && ['Home', 'Checkin', 'Logout'].includes(page.name))
              ) {
                return (
                  <Button
                    component={Link}
                    to={page.path}
                    key={page.name}
                    onClick={() => setActivePage(page.path)}
                    sx={{
                      my: 2,
                      color: activePage === page.path ? 'secondary.main' : 'white',
                      display: 'block',
                    }}
                  >
                    {page.name}
                  </Button>
                );
              }
              return null; // Hide the button if not allowed for the user role
            })}

            {userRole === 'guest' ? (
              <Auth0LoginButton />
            ) : (
              <Auth0LogoutButton />
            )}

            {/* {userRole === 'guest' ? (
              <Button color="inherit" onClick={loginWithRedirect()}>
                Login
              </Button>
            ) : (
              <Button color="inherit" onClick={logout({ logoutParams: { returnTo: window.location.origin } })}>Logout</Button>
            )} */}

            {/* <Auth0Profile /> */}

          </Box>
          <Box sx={{ flexGrow: 0 }}>
            <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >

            </Menu>
          </Box>
        </Toolbar>
      </Container>
      {/* Login Modal */}
      <LoginModal opened={isLoginModalOpen} onClose={handleLoginModalClose} />
    </AppBar>
  );
}

