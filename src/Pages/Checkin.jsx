import React, { useState, useEffect } from 'react';
import { Typography, Button, CircularProgress, Box, Paper } from '@mui/material';
import logo from '../assets/updated_helen_house_logo_cropped_360.png';
import MoodSlider from '../Components/Checkin/MoodSlider';
import { useAuth0 } from "@auth0/auth0-react";
import axios from 'axios';

export const Checkin = () => {
  const { user, isAuthenticated, getAccessTokenSilently } = useAuth0();

  const userId = localStorage.getItem('userId');
  console.log('userId', userId);

  const [isLoading, setIsLoading] = useState(false);
  const [isCheckedIn, setIsCheckedIn] = useState(
    localStorage.getItem('isCheckedIn') === 'true' // Initialize isCheckedIn from localStorage
  );
  const [moodRating, setMoodRating] = useState(3);
  const [checkInTimestamp, setCheckInTimestamp] = useState(null);
  const [checkOutTimestamp, setCheckOutTimestamp] = useState(null);

  // Function to fetch check-ins for the current user
  const fetchCheckins = async () => {
    try {
      const token = await getAccessTokenSilently({
        authorizationParams: {
          audience: 'https://helen-house-backend-v3uq.onrender.com',
          scope: "read:current_user",
        },
      });

      const headers = {
        Authorization: `Bearer ${token}`,
      };

      const checkinsResponse = await axios.get(`https://helen-house-backend-v3uq.onrender.com/api/checkinData/${userId}`, { headers });
      const checkins = checkinsResponse.data;
      console.log('Checkins', checkins);

      // Check if the user has any open check-ins
      const openCheckin = checkins.find(checkin => !checkin.timeOut);

      // Set the check-in timestamp if the user is checked in
      if (openCheckin) {
        setCheckInTimestamp(openCheckin.timeIn);
      } else {
        setCheckInTimestamp(null);
      }

    } catch (error) {
      console.log('Error fetching check-ins:', error.message);
    }
  };

  const handleCheckIn = async () => {
    setIsLoading(true);

    try {
      const token = await getAccessTokenSilently({
        authorizationParams: {
          audience: 'https://helen-house-backend-v3uq.onrender.com',
          scope: "read:current_user",
        },
      });

      const headers = {
        Authorization: `Bearer ${token}`,
      };

      let response = await axios.post(
        'https://helen-house-backend-v3uq.onrender.com/api/checkin',
        {
          timeIn: new Date().toISOString(),
          moodIn: moodRating,
          userId: userId,
        },
        { headers }
      );

      console.log('User', user);
      console.log('CheckIn Record Created', response);

      setCheckInTimestamp(response.data.timeIn);
      setIsCheckedIn(true);

      setTimeout(() => {
        setIsLoading(false);
      }, 2000);
    } catch (error) {
      console.log('Error message:', error.message);
      console.log('Error response:', error.response);
      setIsLoading(false);
    }
  };

  const handleCheckOut = async () => {
    setIsLoading(true);

    try {
      const token = await getAccessTokenSilently({
        authorizationParams: {
          audience: 'https://helen-house-backend-v3uq.onrender.com',
          scope: "read:current_user",
        },
      });

      const headers = {
        Authorization: `Bearer ${token}`,
      };

      // Fetch the check-ins for the current user
      const checkinsResponse = await axios.get(`https://helen-house-backend-v3uq.onrender.com/api/checkinData/${userId}`, { headers });
      const checkins = checkinsResponse.data;

      // Find the closest check-in timestamp to the current time
      let currentTime = Date.now();
      let closestCheckIn = null;
      let closestTimeDiff = Infinity;

      checkins.forEach(checkin => {
        const checkinTimestamp = new Date(checkin.timeIn).getTime();
        const timeDiff = Math.abs(checkinTimestamp - currentTime);

        if (timeDiff < closestTimeDiff) {
          closestTimeDiff = timeDiff;
          closestCheckIn = checkin;
        }
      });

      // Update the check-in record with the closest check-in ID
      if (closestCheckIn) {
        console.log('Closest Checkin Id', closestCheckIn.id)
        const response = await axios.put(
          `https://helen-house-backend-v3uq.onrender.com/checkinUpdate/${closestCheckIn.id}`,
          {
            timeOut: new Date().toISOString(),
            moodOut: moodRating,
          },
          { headers }
        );

        console.log('CheckOut Record Updated', response);
        setCheckOutTimestamp(response.data.timeOut);
        setIsCheckedIn(false);
      }

      setTimeout(() => {
        setIsLoading(false);
      }, 2000);
    } catch (error) {
      console.log('Error message:', error.message);
      console.log('Error response:', error.response);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    // Read the isCheckedIn value from localStorage when the component mounts
    const isCheckedInValue = localStorage.getItem('isCheckedIn') === 'true';
    setIsCheckedIn(isCheckedInValue);
    // Fetch the check-ins when the component mounts to show the most recent check-in on load
    fetchCheckins();
  }, []);

  // Update the isCheckedIn state and save to localStorage when the component unmounts
  useEffect(() => {
    return () => {
      localStorage.setItem('isCheckedIn', isCheckedIn);
    };
  }, [isCheckedIn]);

  useEffect(() => {
    if (isCheckedIn) {
      console.log('Checked out');
    }
  }, [isCheckedIn]);

  let checkInStatusContent;
  if (isLoading) {
    checkInStatusContent = (
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <CircularProgress color="primary" />
        <Typography variant="body1" sx={{ fontSize: 18, marginTop: 2 }}>
          Loading...
        </Typography>
      </Box>
    );
  } else {
    checkInStatusContent = (
      <Box sx={{}}>
        <Button
          variant="contained"
          onClick={isCheckedIn ? handleCheckOut : handleCheckIn}
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
    );
  }

  useEffect(() => {
    if (isCheckedIn) {
      console.log('Checked in at: ', checkInTimestamp);
    } else if (!isCheckedIn) {
      console.log('Checked out at: ', checkOutTimestamp);
    }
  }, [isCheckedIn, checkOutTimestamp]);

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 2,
      }}
    >
      <Paper elevation={3} sx={{
        padding: 2, maxWidth: 400, backgroundColor: '#CE9EE4', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', width: '100%', height: '100%'
      }}>
        <Typography variant="h5" sx={{ fontWeight: 'bold', marginBottom: 2 }}>
          Check-In Here
        </Typography>
        <img src={logo} alt="Logo" />

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
            {checkInStatusContent}
          </Box>
        )}

        {isCheckedIn && checkInTimestamp && (
          <Typography variant="body1" sx={{ fontSize: 18, marginTop: 2 }}>
            Checked in at: {new Date(checkInTimestamp).toLocaleString()}
          </Typography>
        )}
        {checkOutTimestamp && (
          <Typography variant="body1" sx={{ fontSize: 18, marginTop: 2 }}>
            Checked out at: {new Date(checkOutTimestamp).toLocaleString()}
          </Typography>
        )}
      </Paper>
    </Box>
  );
};
