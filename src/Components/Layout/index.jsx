import React from 'react';
import { CssBaseline, Container, Box } from '@mui/material';
import Header from './Header';
import Footer from './Footer';
import { Outlet } from 'react-router-dom'; // Import Outlet from react-router-dom

export default function Layout() {
  return (
    <Box display="flex" flexDirection="column" minHeight="100vh">
      <CssBaseline />
      <Header />
      <Box component="main" flexGrow={1}>
        <Container maxWidth="lg">
          {/* Render the nested routes here using Outlet */}
          <Outlet />
        </Container>
      </Box>
      <Footer />
    </Box>
  );
};















// import { CssBaseline, Container, Box } from '@mui/material';
// import Header from './Header';
// import Footer from './Footer';


// export default function Layout({ children }) {
//   return (
//     <Box display="flex" flexDirection="column" minHeight="100vh">
//       <CssBaseline />
//       <Header />
//       <Box component="main" flexGrow={1}>
//         <Container maxWidth="lg">
//           {/* {children} */}
//         </Container>
//       </Box>
//       <Footer />
//     </Box>
//   );
// };

