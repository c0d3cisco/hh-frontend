import React from 'react';
import RandomQuote from '../Components/RandomQuote';
import logo from '../assets/updated_helen_house_logo_cropped_360.png';
import { Button, Typography } from '@mui/material';
import axios from 'axios';

const Home = () => {

  // Function to handle the GET API call
  const handleGetCall = async () => {
    try {
      // Make the GET request to your API endpoint
      const response = await axios.get('https://helen-house-backend-v3uq.onrender.com/');

      // Do something with the response data if needed
      console.log('Get Call Response:', response.data);

    } catch (error) {
      // Handle errors that may occur during the API call
      console.log(error.message);
    }
  };

  return (
    // Main container with flex layout and center alignment
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop:5}}>

      {/* Header text */}
      <Typography variant="h3" className="header-text" sx={{ fontWeight: 'bold', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)' }} >
        Welcome to Helen House
      </Typography>

      {/* Uncomment the Button component below to enable the Get Call functionality */}
      {/* <Button
        variant="contained"
        sx={{ marginTop: 5, marginBottom: 5, backgroundColor: '#a37ccf', color: 'white', fontWeight: 'bold' }}
        onClick={handleGetCall} // Add the click handler for the button
      >      
        Get Call
      </Button> */}

      {/* Helen House Logo */}
      <img src={logo} alt="Helen House Logo" className='logo' style={{ width: '15%', maxWidth: '400px', }} sx={{marginBottom:20}} />

      {/* Random Quote Component */}
      <RandomQuote sx={{marginTop:10}}/>
    </div>
  );
};

export default Home;
