import React from 'react';
import RandomQuote from '../Components/RandomQuote';
import logo from '../assets/updated_helen_house_logo_cropped_360.png';
import { Typography } from '@mui/material';

const Home = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop:5}}>
      <Typography variant="h3" className="header-text" sx={{ fontWeight: 'bold', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)' }} >
        Welcome to Helen House
      </Typography>
      <img src={logo} alt="Helen House Logo" className='logo' style={{ width: '20%', maxWidth: '400px', }} />
      <RandomQuote />
    </div>
  );
};

export default Home;
