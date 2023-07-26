import React, { useEffect, useState } from 'react';
import { Typography, Box } from '@mui/material';

const Footer = () => {
  // State variable to store the current date and time
  const [currentDateTime, setCurrentDateTime] = useState(new Date());

  useEffect(() => {
    // Use setInterval to update the currentDateTime every second
    const interval = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 1000);

    // Clear the interval on component unmount to avoid memory leaks
    return () => clearInterval(interval);
  }, []);

  // Function to format the date as a string
  const formatDate = (date) => {
    const options = { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' };
    return date.toLocaleDateString(undefined, options);
  };

  // Function to format the time as a string
  const formatTime = (date) => {
    const options = { hour: 'numeric', minute: 'numeric', second: 'numeric' };
    return date.toLocaleTimeString(undefined, options);
  };

  // Get the current year
  const currentYear = new Date().getFullYear();

  return (
    <Box
      sx={{
        backgroundColor: '#a37ccf',
        paddingY: 2,
        paddingX: 4,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
    >
      {/* Display the copyright information */}
      <Typography variant="subtitle1" sx={{ fontWeight: 'bold', fontSize: 16 }}>
        &copy; {currentYear} Helen House
      </Typography>

      {/* Display the formatted current date */}
      <Typography variant="subtitle1" sx={{ fontSize: 16 }}>
        {formatDate(currentDateTime)}
      </Typography>

      {/* Display the formatted current time */}
      <Typography variant="subtitle1" sx={{ fontSize: 16 }}>
        {formatTime(currentDateTime)}
      </Typography>
    </Box>
  );
};

export default Footer;
