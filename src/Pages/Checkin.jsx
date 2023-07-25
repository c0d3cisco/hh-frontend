import React, { useState, useEffect } from 'react';
import { Typography, Button, CircularProgress, Box, Paper } from '@mui/material';
import logo from '../assets/updated_helen_house_logo_cropped_360.png';
import MoodSlider from '../Components/Checkin/MoodSlider';
import { useAuth0 } from "@auth0/auth0-react";
import axios from 'axios';

export const Checkin = () => {
  const { user, isAuthenticated, getAccessTokenSilently } = useAuth0(); // Get the isAuthenticated status from Auth0
  const [isLoading, setIsLoading] = useState(false);
  const [isCheckedIn, setIsCheckedIn] = useState(false);
  const [moodRating, setMoodRating] = useState(3); // Initial mood rating value
  const [checkInTimestamp, setCheckInTimestamp] = useState(null); // New state for timestamp

  const handleCheckIn = async () => {
    setIsLoading(true);

    try {

      // Get the access token using the useAuth0 hook
      const accessToken = await getAccessTokenSilently({
        authorizationParams: {
          "client_id": "IHAQfPbTBLKqyCKcXlMC2la3MDlVRt9Y",
          "client_secret": "uUrj8KtKMZZYtgbCt-T3VpUUvndB8X_gBqSd5oR0nROGgpxss7T-SaWRJBeXBakU",
          "audience": "https://helen-house-backend-v3uq.onrender.com",
          "grant_type": "client_credentials"
        }
      });

      const headers = {
        Authorization: `Bearer ${accessToken}`,
      };
      console.log('Bearer Access Token', headers);

      const response = await axios.post('https://helen-house-backend-v3uq.onrender.com/api/checkin', {
        "timeIn": "2023-06-13T22:06:09.649Z",
        "timeOut": "2023-06-13T22:07:09.649Z",
        "moodIn": "1",
        "moodOut": "5",
        "userId": 1
        // username: user.name,
        // moodRating: moodRating,
        // checkInTimestamp: checkInTimestamp,
      },
        { headers });
      console.log('Checkin Record Created', response);

      setTimeout(() => {
        setIsLoading(false);
        setIsCheckedIn(true);
        // setCheckInTimestamp(Date.now()); // Store the current timestamp
      }, 3000);
    } catch (error) {
      console.log(user);
      console.log(error.message);
    }
  };

  useEffect(() => {
    if (isCheckedIn) {
      //! Need to add update checkout timestamp in the Checkin database Table
      // Perform any checkout-related logic here
      console.log('Checked out');
    }
  }, [isCheckedIn]);

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 2,
        backgroundImage: 'url(https://images.unsplash.com/photo-1612837017391-5b7b7b0b0b0b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2hlY2t8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80)',

      }}
    >
      <Paper elevation={3} sx={{
        padding: 2, maxWidth: 400, backgroundColor: '#CE9EE4', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', width: '100%', height: '100%'
      }}>
        <Typography variant="h5" sx={{ fontWeight: 'bold', marginBottom: 2 }}>
          Check-In Here
        </Typography>
        <img src={logo} alt="Logo" />

        {/* MoodSlider component */}
        <Typography variant="body1" sx={{ fontSize: 16, marginBottom: 2 }}>
          How are you feeling today?
        </Typography>
        <MoodSlider rating={moodRating} onRatingChange={setMoodRating} />

        {isLoading ? (
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <CircularProgress color="primary" />
            <Typography variant="body1" sx={{ fontSize: 18, marginTop: 2 }}>
              Loading...
            </Typography>
          </Box>
        ) : (
          <Box sx={{}}>
            <Button
              variant="contained"
              onClick={handleCheckIn}
              sx={{
                marginTop: 5,
                marginBottom: 2,
                height: 50,
                width: 200,
                borderRadius: 10,
              }}
            >
              {isCheckedIn ? 'Checkout' : 'Check-In'}
            </Button>
          </Box>
        )}

        {/* Display timestamp if the user has checked in */}
        {isCheckedIn && checkInTimestamp && (
          <Typography variant="body1" sx={{ fontSize: 18, marginTop: 2 }}>
            Checked in at: {new Date(checkInTimestamp).toLocaleString()}
          </Typography>
        )}
      </Paper>
    </Box>
  );
};
