import React, { useState, useEffect } from 'react';
import { Typography, Button, CircularProgress, Box, Paper } from '@mui/material';
import logo from '../assets/updated_helen_house_logo_cropped_360.png';
import MoodSlider from '../Components/Checkin/MoodSlider';
import { useAuth0 } from "@auth0/auth0-react";
import axios from 'axios';

export const Checkin = () => {
  const { user, isAuthenticated, getAccessTokenSilently } = useAuth0();
  const userId = 6;

  const [isLoading, setIsLoading] = useState(false);
  const [isCheckedIn, setIsCheckedIn] = useState(false);
  const [moodRating, setMoodRating] = useState(3);
  const [checkInTimestamp, setCheckInTimestamp] = useState(null);
  const [checkOutTimestamp, setCheckOutTimestamp] = useState(null);

  // Function to fetch the user's check-ins from the backend and find the most recent check-in
  const fetchCheckins = async () => {
    try {
      // Get an access token to authenticate API requests
      const token = await getAccessTokenSilently({
        authorizationParams: {
          audience: 'https://helen-house-backend-v3uq.onrender.com',
          scope: "read:current_user",
        },
      });

      // Set the authorization header with the access token
      const headers = {
        Authorization: `Bearer ${token}`,
      }

      // Fetch the check-ins for the user from the backend
      const checkinsResponse = await axios.get(`https://helen-house-backend-v3uq.onrender.com/api/checkin/${userId}`, { headers });
      const checkins = checkinsResponse.data;

      // Find the most recent check-in timestamp from the fetched check-ins
      let mostRecentCheckIn = null;
      checkins.forEach(checkin => {
        if (!mostRecentCheckIn || new Date(checkin.timeIn) > new Date(mostRecentCheckIn.timeIn)) {
          mostRecentCheckIn = checkin;
        }
      });

      // If there's a most recent check-in, update the state with its details
      if (mostRecentCheckIn) {
        console.log("Most Recent Check-in:", mostRecentCheckIn);
        setIsCheckedIn(true);
        setCheckInTimestamp(mostRecentCheckIn.timeIn);
        setCheckOutTimestamp(mostRecentCheckIn.timeOut); // Show the check-out timestamp if available
      } else {
        // If there are no previous check-ins, reset the check-out timestamp to null
        setCheckOutTimestamp(null);
      }
    } catch (error) {
      console.log('Error fetching check-ins:', error.message);
    }
  };

  // Call the fetchCheckins function only when someone goes to check out
  const handleCheckOut = () => {
    if (isCheckedIn) {
      fetchCheckins();
    }
  };

  // Fetch the check-ins when the component mounts to show the most recent check-in on load
  useEffect(() => {
    fetchCheckins();
  }, []);

  const handleCheckIn = async () => {
    setIsLoading(true);

    try {
      // Get an access token to authenticate API requests
      const token = await getAccessTokenSilently({
        authorizationParams: {
          audience: 'https://helen-house-backend-v3uq.onrender.com',
          scope: "read:current_user",
        },
      });

      // Set the authorization header with the access token
      const headers = {
        Authorization: `Bearer ${token}`,
      }

      let response;

      if (!isCheckedIn) {
        // Check-in the user by sending a POST request to the backend
        response = await axios.post(
          'https://helen-house-backend-v3uq.onrender.com/api/checkin',
          {
            timeIn: new Date().toISOString(),
            moodIn: moodRating,
            userId: userId,
          },
          { headers }
        );

        console.log('CheckIn Record Created', response);
        setCheckInTimestamp(response.data.timeIn);
        setIsCheckedIn(true);
      } else {
        // Check-out the user by sending a PUT request to update the most recent check-in
        response = await axios.put(
          `https://helen-house-backend-v3uq.onrender.com/api/checkin/${checkInTimestamp.id}`,
          {
            timeOut: new Date().toISOString(),
            moodOut: moodRating,
            userId: userId,
          },
          { headers }
        );

        console.log('CheckOut Record Updated', response);
        setCheckOutTimestamp(response.data.timeOut);
        setIsCheckedIn(false);
      }

      // Simulate a loading state for 3 seconds before re-enabling the button
      setTimeout(() => {
        setIsLoading(false);
      }, 3000);
    } catch (error) {
      console.log('Error message:', error.message);
      console.log('Error response:', error.response);
    }
  };

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
              onClick={!isCheckedIn ? handleCheckIn : handleCheckOut}
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

        {/* Display timestamps if the user has checked in */}
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


// export const Checkin = () => {
//   const { user, isAuthenticated, getAccessTokenSilently } = useAuth0(); // Get the isAuthenticated status from Auth0

//   const userId = 6;
//   // const userId = localStorage.getItem('userId');
//   console.log('userId', userId);

//   const [isLoading, setIsLoading] = useState(false);
//   const [isCheckedIn, setIsCheckedIn] = useState(false);
//   const [moodRating, setMoodRating] = useState(3);
//   const [checkInTimestamp, setCheckInTimestamp] = useState(null);
//   const [checkOutTimestamp, setCheckOutTimestamp] = useState(null);

//   const handleCheckIn = async () => {
//     setIsLoading(true);

//     try {
//       //TODO Maybe make this a useEffect hook
//       const token = await getAccessTokenSilently({
//         authorizationParams: {
//           audience: 'https://helen-house-backend-v3uq.onrender.com',
//           scope: "read:current_user",
//         },
//       });

//       const headers = {
//         Authorization: `Bearer ${token}`,
//       }
//       console.log('Bearer Access Token', headers);

//       let response;

//       if (!isCheckedIn) {
//         response = await axios.post(
//           'https://helen-house-backend-v3uq.onrender.com/api/checkin',
//           // !! Convert into actual data from website
//           {
//             timeIn: new Date().toISOString(),
//             //  timeOut: "2023-06-13T22:07:09.649Z",
//             moodIn: moodRating,
//             //  moodOut: "5",
//             userId: userId,
//           },
//           { headers }
//         );
//         console.log('User', user)
//         console.log('CheckIn Record Created', response);
//         setCheckInTimestamp(response.data.timeIn);
//         setIsCheckedIn(true);
//       } else {
//         console.log('Made it to the checkout logic')
//         // Fetch the check-ins for user ID 6
//         const checkinsResponse = await axios.get(`https://helen-house-backend-v3uq.onrender.com/api/checkin/6`, { headers });
//         console.log('These are Checkins', checkinsResponse);
//         const checkins = checkinsResponse.data;
  
//         // Find the closest check-in timestamp to the current time
//         let currentTime = Date.now();
//         let closestCheckIn = null;
//         let closestTimeDiff = Infinity;
//         console.log('Current time',currentTime)
  
//         checkins.forEach(checkin => {
//           const checkinTimestamp = new Date(checkin.timeIn).getTime();
//           const timeDiff = Math.abs(checkinTimestamp - currentTime);
  
//           if (timeDiff < closestTimeDiff) {
//             closestTimeDiff = timeDiff;
//             closestCheckIn = checkin;
//           }
//         });
  
//         console.log("Closest Check-in:", closestCheckIn);
  
//         // Update the check-in record with the closest check-in ID
//         if (closestCheckIn) {
//           response = await axios.put(
//             `https://helen-house-backend-v3uq.onrender.com/api/checkin/${closestCheckIn.id}`,
//             {
//               timeOut: new Date().toISOString(),
//               moodOut: moodRating,
//               userId: userId,
//             },
//             { headers }
//           );
  
//           console.log('CheckOut Record Updated', response);
//           setCheckOutTimestamp(response.data.timeOut);
//           setIsCheckedIn(false);
//         }
//       }  

//       setTimeout(() => {
//         setIsLoading(false);
//       }, 3000);
//     } catch (error) {
//       console.log('Error message:', error.message);
//       console.log('Error response:', error.response);
//     }
//   };


//   useEffect(() => {
//     if (isCheckedIn) {
//       //! Need to add update checkout timestamp in the Checkin database Table
//       console.log('Checked in at: ', checkInTimestamp);
//     } else if (!isCheckedIn) {
//       console.log('Checked out at: ', checkOutTimestamp);
//     }
//   }, [isCheckedIn, checkOutTimestamp]);