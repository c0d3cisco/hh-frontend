import React, { useState, useEffect } from 'react';
import { Typography, Button, CircularProgress, Box, Paper } from '@mui/material';
import logo from '../assets/updated_helen_house_logo_cropped_360.png';
import MoodSlider from '../Components/Checkin/MoodSlider';

export const Checkin = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isCheckedIn, setIsCheckedIn] = useState(false);
  const [moodRating, setMoodRating] = useState(3); // Initial mood rating value
  const [checkInTimestamp, setCheckInTimestamp] = useState(null); // New state for timestamp

  const handleCheckIn = () => {
    setIsLoading(true);

    // Simulate an API call to submit the timestamp
    // Replace this with your actual API logic
    setTimeout(() => {
      setIsLoading(false);
      setIsCheckedIn(true);
      setCheckInTimestamp(Date.now()); // Store the current timestamp
    }, 3000);
  };

  useEffect(() => {
    if (isCheckedIn) {
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
      {/* Wrap the content inside a Paper component */}
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
