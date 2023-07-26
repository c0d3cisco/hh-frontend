import React from 'react';
import RandomQuote from '../Components/RandomQuote';
import logo from '../assets/updated_helen_house_logo_cropped_360.png';
import { Button, Typography } from '@mui/material';
import axios from 'axios';

const Home = () => {

  const handleGetCall = async () => {
    try {
      // Make the GET request to your API endpoint
      const response = await axios.get('https://helen-house-backend-v3uq.onrender.com/');

      // Do something with the response data if needed
      console.log('Get Call Response:', response.data);

    } catch (error) {
      console.log(error.message);
      
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop:5}}>
      <Typography variant="h3" className="header-text" sx={{ fontWeight: 'bold', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)' }} >
        Welcome to Helen House
      </Typography>

       {/* <Button
        variant="contained"
        sx={{ marginTop: 5, marginBottom: 5, backgroundColor: '#a37ccf', color: 'white', fontWeight: 'bold' }}
        onClick={handleGetCall} // Add the click handler for the button>
        >      
        Get Call
      </Button> */}
      <img src={logo} alt="Helen House Logo" className='logo' style={{ width: '20%', maxWidth: '400px', }} sx={{marginBottom:20}} />
      <RandomQuote sx={{marginTop:10}}/>
    </div>
  );
};

export default Home;
