import React, { useEffect, useState } from 'react';
import { Typography, Box } from '@mui/material';

const Footer = () => {
  const [currentDateTime, setCurrentDateTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const formatDate = (date) => {
    const options = { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' };
    return date.toLocaleDateString(undefined, options);
  };

  const formatTime = (date) => {
    const options = { hour: 'numeric', minute: 'numeric', second: 'numeric' };
    return date.toLocaleTimeString(undefined, options);
  };

  const currentYear = new Date().getFullYear(); // Get the current year

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
      <Typography variant="subtitle1" sx={{ fontWeight: 'bold', fontSize: 16 }}>
        &copy; {currentYear} Helen House
      </Typography>
      <Typography variant="subtitle1" sx={{ fontSize: 16 }}>
        {formatDate(currentDateTime)}
      </Typography>
      <Typography variant="subtitle1" sx={{ fontSize: 16 }}>
        {formatTime(currentDateTime)}
      </Typography>
    </Box>
  );
};

export default Footer;
