import React from 'react';
import { CssBaseline, Container, Box } from '@mui/material';
import Header from './Header';
import Footer from './Footer';

export default function Layout({ children }) {
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
