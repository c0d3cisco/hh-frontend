import React, { useEffect } from 'react';
import { CssBaseline, Container, Box } from '@mui/material';
import Header from './Header';
import Footer from './Footer';
import { useAuth0 } from "@auth0/auth0-react";

export default function Layout({ children }) {
  const { isLoading } = useAuth0();
  useEffect(() => {
    if (isLoading) {
      // console.log('Auth0 is loaded', isLoading);
    }
    else{
      // console.log('Auth0 is logged out', isLoading);
    }
  }, [isLoading]);

  return (
    <Box display="flex" flexDirection="column" minHeight="100vh">
      <CssBaseline />
      <Header />
      <Box component="main" flexGrow={1} style={{ backgroundColor: '#e3e1e1' }}>
        <Container maxWidth="xl">
          {/* Render the child components directly */}
          {children}
        </Container>
      </Box>
      <Footer />
    </Box>
  );
}
