import React, { useState, useEffect } from 'react';
import { Typography, Button, CircularProgress, Box } from '@mui/material';
import logo from '../assets/updated_helen_house_logo_cropped_360.png';
import MoodSlider from '../Components/Checkin/MoodSlider';

const Checkin = () => {
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
        backgroundColor: '#c6a2eb',
        minHeight: '100vh',
        position: 'relative',
        paddingBottom: 40,
      }}
    >
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
        <Box sx={{ position: 'absolute', bottom: 40 }}>
          <Button
            variant="contained"
            onClick={handleCheckIn}
            sx={{
              marginTop: 2,
              height: 50,
              width: 200,
              borderRadius: 10,
              // Increase paddingVertical and paddingHorizontal values to resize the button
              // padding: '20px 40px',
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
    </Box>
  );
};

export default Checkin;
