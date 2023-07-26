import * as React from 'react';
import { useState, useEffect } from 'react';
import { Grid, Paper, Button, TextField, Box, Container } from "@mui/material";
import { LineChart } from '@mui/x-charts';
import { subMonths, subWeeks, subDays, format } from 'date-fns';
import { useAuth0 } from "@auth0/auth0-react";
import axios from 'axios';
import dayjs from 'dayjs';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

// import { DateRangePicker } from '@mui/x-date-pickers-pro/DateRangePicker';



const currentDate = new Date();
const today = dayjs();
const yesterday = dayjs().subtract(1, 'day');
const todayStartOfTheDay = today.startOf('day');

// Generate random data for the chart
const generateChartData = (numPoints) => {
  const data = [];
  for (let i = 0; i < numPoints; i++) {
    data.push(Math.floor(Math.random() * 1000));
  }
  return data;

};

export default function DashboardData() {
  const { user, isAuthenticated, getAccessTokenSilently } = useAuth0();

  const [totalCheckIns, setTotalCheckIns] = useState(0);
  const [selectedStartDate, setSelectedStartDate] = useState(null);
  const [selectedEndDate, setSelectedEndDate] = useState(null);


  const [, updateState] = React.useState();
  const forceUpdate = React.useCallback(() => updateState({}), []);

  const getTotalDailyCheckins = async () => {
    if (!isAuthenticated) {
      console.log('User not authenticated');
      return;
    }

    try {
      const accessToken = await getAccessTokenSilently({
        authorizationParams: {
          audience: "https://helen-house-backend-v3uq.onrender.com",
          scope: "read:current_user",
        },
      });

      const headers = {
        Authorization: `Bearer ${accessToken}`,
      }

      const currentDate = new Date(); // Get current date
      const formattedDate = format(currentDate, 'yyyy-MM-dd'); // Format current date

      const response = await axios.get(
        `https://helen-house-backend-v3uq.onrender.com/totalDailyCheckins?date_start=${formattedDate}`,

        { headers }
      );

      setTotalCheckIns(response.data.uniqueCheckinUsers);

      console.log('Total Daily Checkin Query', response);
    } catch (error) {
      console.log('Error message:', error.message);
      console.log('Error response:', error.response);
    }
  };

  const getWeeklyAverageCheckIns = async () => {
    if (!isAuthenticated) {
      console.log('User not authenticated');
      return;
    }

    try {
      const accessToken = await getAccessTokenSilently({
        authorizationParams: {
          audience: "https://helen-house-backend-v3uq.onrender.com",
          scope: "read:current_user",
        },
      });

      const headers = {
        Authorization: `Bearer ${accessToken}`,
      }

      const response = await axios.get(
        `https://helen-house-backend-v3uq.onrender.com/weeklyAverage?date_start=${format(subDays(new Date(), 7), 'yyyy-MM-dd')}`,
        { headers }
      );

      console.log('Weekly Average Check-in Query', response);
      setWeeklyAvgCheckIns(response.data.reduce((prev, curr) => prev + curr.averageTimeInHours + curr.averageTimeInMinutes / 60, 0) / response.data.length);

    } catch (error) {
      console.log('Error message:', error.message);
      console.log('Error response:', error.response);
    }
  };

  const getTotalYTDCheckins = async () => {
    if (!isAuthenticated) {
      console.log('User not authenticated');
      return;
    }

    try {
      const accessToken = await getAccessTokenSilently({
        authorizationParams: {
          audience: "https://helen-house-backend-v3uq.onrender.com",
          scope: "read:current_user",
        },
      });

      const headers = {
        Authorization: `Bearer ${accessToken}`,
      };

      const response = await axios.get(
        `https://helen-house-backend-v3uq.onrender.com/totalYearlyCheckins`,
        { headers }
      );

      setYtdCheckIns(response.data.totalCheckinsYearToDate);

      console.log('YTD Check-in Query', response);
    } catch (error) {
      console.log('Error message:', error.message);
      console.log('Error response:', error.response);
    }
  };

  const getTotalCheckinHours = async () => {
    if (!isAuthenticated) {
      console.log('User not authenticated');
      return;
    }

    try {
      const accessToken = await getAccessTokenSilently({
        authorizationParams: {
          audience: "https://helen-house-backend-v3uq.onrender.com",
          scope: "read:current_user",
        },
      });

      const headers = {
        Authorization: `Bearer ${accessToken}`,
      };

      const response = await axios.get(
        `https://helen-house-backend-v3uq.onrender.com/totalCheckinHours`,
        { headers }
      );

      setTotalHours(response.data.totalHours);

      console.log('Total Check-in Hours Query', response);
    } catch (error) {
      console.log('Error message:', error.message);
      console.log('Error response:', error.response);
    }
  };

  const getUniqueUsersPerWeek = async () => {
    if (!isAuthenticated) {
      console.log('User not authenticated');
      return [];
    }

    try {
      const accessToken = await getAccessTokenSilently({
        authorizationParams: {
          audience: "https://helen-house-backend-v3uq.onrender.com",
          scope: "read:current_user",
        },
      });

      const headers = {
        Authorization: `Bearer ${accessToken}`,
      }

      const response = await axios.get(
        `https://helen-house-backend-v3uq.onrender.com/uniqueUsersPerWeek`,
        { headers }
      );

      return response.data.uniqueCheckinUsers;
    } catch (error) {
      console.log('Error message:', error.message);
      console.log('Error response:', error.response);
      return [];
    }
  };

  const getTotalHoursPerWeek = async () => {
    if (!isAuthenticated) {
      console.log('User not authenticated');
      return [];
    }

    try {
      const accessToken = await getAccessTokenSilently({
        authorizationParams: {
          audience: "https://helen-house-backend-v3uq.onrender.com",
          scope: "read:current_user",
        },
      });

      const headers = {
        Authorization: `Bearer ${accessToken}`,
      }

      const response = await axios.get(
        `https://helen-house-backend-v3uq.onrender.com/totalHoursPerWeek`,
        { headers }
      );

      return response.data.totalHours;
    } catch (error) {
      console.log('Error message:', error.message);
      console.log('Error response:', error.response);
      return [];
    }
  };

  const handleStartDateChange = (date) => {
    setSelectedStartDate(date);
  };

  const handleEndDateChange = (date) => {
    setSelectedEndDate(date);
  };

  const handleDateRangeSelection = async (e) => {
    e.preventDefault();

    console.log('Start Date From Selector', selectedStartDate);
    console.log('End Date From Selector', selectedEndDate);

    const startMonthValue = selectedStartDate?.$M + 1;
    const endMonthValue = selectedEndDate?.$M + 1;

    const startYear = selectedStartDate?.$y.toString();
    const startMonth = startMonthValue.toString().length === 1 ? ('0' + startMonthValue.toString()) : startMonthValue.toString();
    const startDay = selectedStartDate?.$D.toString().length === 1 ? ('0' + selectedStartDate?.$D.toString()) : selectedStartDate?.$D.toString();

    const endYear = selectedEndDate?.$y.toString();
    const endMonth = endMonthValue.toString().length === 1 ? ('0' + endMonthValue.toString()) : endMonthValue.toString();
    const endDay = selectedEndDate?.$D.toString().length === 1 ? ('0' + selectedEndDate?.$D.toString()) : selectedEndDate?.$D.toString();

    const startDate = `${startYear}-${(startMonth)}-${startDay}`;
    const endDate = `${endYear}-${endMonth}-${endDay}`;

    console.log('Start Date', startDate);
    console.log('End Date', endDate);
    
  };

  useEffect(() => {
    const fetchData = async () => {
      getTotalDailyCheckins();
      getWeeklyAverageCheckIns();
      getTotalYTDCheckins();
      getTotalCheckinHours();
    };

    fetchData();
    forceUpdate();

  }, []); // Add the functions that fetch data from the server to the dependency array
  // }, [getTotalDailyCheckins, getWeeklyAverageCheckIns, getTotalYTDCheckins, getTotalCheckinHours]); // Add the functions that fetch data from the server to the dependency array


  // State variables for chart data and settings
  const [chartData, setChartData] = React.useState({
    series: [
      { data: generateChartData(7), label: 'Youth Hours' }, // Initial data with 7 points (last 7 days)
      // { data: generateChartData(7), label: 'Staff Hours' },
    ],
    xAxis: [{ scaleType: 'point', data: Array.from({ length: 7 }, (_, i) => format(subDays(currentDate, 7 - i), 'MMM dd')) }], // Last 7 days' labels
  });

  const [weeksBack, setWeeksBack] = React.useState(''); // State for weeks back input
  const [monthsBack, setMonthsBack] = React.useState(''); // State for months back input
  const [daysBack, setDaysBack] = React.useState(''); // State for days back input
  // const [chartWidth, setChartWidth] = React.useState(window.innerWidth > 800 ? 800 : window.innerWidth); // State for chart width
  const [selectedDuration, setSelectedDuration] = React.useState(''); // State for selected duration

  // New state variables for the data in the cards
  const [totalDailyCheckIns, setTotalDailyCheckIns] = React.useState(0);
  const [weeklyAvgCheckIns, setWeeklyAvgCheckIns] = React.useState(0);
  const [ytdCheckIns, setYtdCheckIns] = React.useState(0);
  const [totalHours, setTotalHours] = React.useState(0);

  // Function to generate X-axis labels based on the selected duration
  const generateXAxisLabels = (numPoints, interval) => {
    const labels = [];
    for (let i = 0; i < numPoints; i++) {
      const date = interval === 'days' ? subDays(currentDate, numPoints - 1 - i) :
        interval === 'weeks' ? subWeeks(currentDate, numPoints - 1 - i) :
          subMonths(currentDate, numPoints - 1 - i);
      labels.push(format(date, 'MMM dd'));
    }
    return labels;
  };

  // Function to handle the "Days Back" button click
  const handleDaysBackClick = () => {
    const numDays = parseInt(daysBack, 10);
    if (!isNaN(numDays) && numDays > 0) {
      const data = {
        series: [
          { data: generateChartData(numDays), label: 'Youth Hours' },
          { data: generateChartData(numDays), label: 'Staff Hours' },
        ],
        xAxis: [{ scaleType: 'point', data: generateXAxisLabels(numDays, 'days') }],
      };
      // Update the data in the cards
      setTotalDailyCheckIns(generateTotalDailyCheckIns(data.series[0].data));
      setWeeklyAvgCheckIns(generateWeeklyAvgCheckIns(data.series[0].data));
      setYtdCheckIns(generateYtdCheckIns(data.series[0].data));
      setTotalHours(generateTotalHours(data.series[0].data));

      const newWidth = Math.max(300, numDays * 100); // Adjust the factor (100) as needed
      setChartData(data);
      // setChartWidth(newWidth);
      setSelectedDuration(`${numDays} days`);
      setDaysBack('');
    }
  };

  // Function to handle the "Weeks Back" button click
  const handleWeeksBackClick = () => {
    const numWeeks = parseInt(weeksBack, 10);
    if (!isNaN(numWeeks) && numWeeks > 0) {
      const data = {
        series: [
          { data: generateChartData(numWeeks), label: 'Youth Hours' },
          { data: generateChartData(numWeeks), label: 'Staff Hours' },
        ],
        xAxis: [{ scaleType: 'point', data: generateXAxisLabels(numWeeks, 'weeks') }],
      };
      const newWidth = Math.max(300, numWeeks * 100); // Adjust the factor (100) as needed
      setChartData(data);
      // setChartWidth(newWidth);
      setSelectedDuration(`${numWeeks} weeks`);
      setWeeksBack('');
    }
  };

  // Function to handle the "Months Back" button click
  const handleMonthsBackClick = () => {
    const numMonths = parseInt(monthsBack, 10);
    if (!isNaN(numMonths) && numMonths > 0) {
      const data = {
        series: [
          { data: generateChartData(numMonths), label: 'Youth Hours' },
          { data: generateChartData(numMonths), label: 'Staff Hours' },
        ],
        xAxis: [{ scaleType: 'point', data: generateXAxisLabels(numMonths, 'months') }],
      };
      const newWidth = Math.max(300, numMonths * 100); // Adjust the factor (100) as needed
      setChartData(data);
      // setChartWidth(newWidth);
      setSelectedDuration(`${numMonths} months`);
      setMonthsBack('');
    }
  };

  // Function to calculate the total daily check-ins from the data
  const generateTotalDailyCheckIns = (data) => {
    return data.reduce((total, value) => total + value, 0);
  };

  // Function to calculate the weekly average check-ins from the data
  const generateWeeklyAvgCheckIns = (data) => {
    const totalCheckIns = data.reduce((total, value) => total + value, 0);
    const numDays = data.length;
    return totalCheckIns / numDays;
  };

  // Function to calculate the year-to-date check-ins from the data
  const generateYtdCheckIns = (data) => {
    const totalCheckIns = data.reduce((total, value) => total + value, 0);
    const numDays = data.length;
    const avgCheckInsPerDay = totalCheckIns / numDays;
    return avgCheckInsPerDay * 365; // Assuming 365 days in a year
  };

  // Function to calculate the total hours from the data
  const generateTotalHours = (data) => {
    const totalHours = data.reduce((total, value) => total + value, 0);
    return totalHours;
  };

  React.useEffect(() => {
    // Function to update chart size based on screen size
    const updateChartSize = () => {
      const newWidth = window.innerWidth > 800 ? 800 : window.innerWidth;
      // setChartWidth(newWidth);
    };

    // Add an event listener to update the chart size when the window is resized
    window.addEventListener('resize', updateChartSize);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('resize', updateChartSize);
    };
  }, []);

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Grid container spacing={2}>
        {/* Cards with key data metrics */}
        {/* Card 1 - Total Daily Check-ins */}
        <Grid item xs={3}>
          <Paper sx={{ p: 2, height: 100 }}>{`Total Daily Check-ins: ${totalCheckIns}`}</Paper>
        </Grid>
        {/* Card 2 - Weekly Average Check-ins */}
        <Grid item xs={3}>
          <Paper sx={{ p: 2, height: 100 }}>{`Wkly Avg Check-ins: ${weeklyAvgCheckIns.toFixed(2)}`}</Paper>
        </Grid>
        {/* Card 3 - YTD Check-ins */}
        <Grid item xs={3}>
          <Paper sx={{ p: 2, height: 100 }}>{`YTD Check-ins: ${ytdCheckIns.toFixed(2)}`}</Paper>
        </Grid>
        {/* Card 4 - Total Hours */}
        <Grid item xs={3}>
          <Paper sx={{ p: 2, height: 100 }}>{`Total Hours: ${totalHours.toFixed(2)}`}</Paper>
        </Grid>

        {/* Line Chart */}
        <Grid item xs={12}>
          {selectedDuration && <div style={{ textAlign: 'center', marginBottom: 10 }}>{`Showing data for the last ${selectedDuration}`}</div>}
          <Paper sx={{ p: 2, height: "40vw" }}>
            {/* LineChart component */}

            <LineChart
              yAxisLabel="Check-ins"
              xAxisLabel="Dates"
              legend={{
                directon: "row",
                position: {
                  vertical: "top",
                  horizontal: "middle"
                }
              }}
              sx={{
                '--ChartsLegend-itemWidth': "150px",
                '--ChartsLegend-itemMarkSize': "14px",
                '--ChartsLegend-labelSpacing': "7px",
                '--ChartsLegend-rootSpacing': "-4px",
                "--ChartsLegend-rootOffsetX": "10px",
                "--ChartsLegend-rootOffsetY": "-7px",
                width: '100%', '& .MuiResponsiveChart-container': {}
              }}
              // width={chartWidth}
              // height={300}
              {...chartData}
              margin={{ top: 20, right: 20, bottom: 30, left: 40 }} // Modify the margin to adjust the space for x-axis
            />
          </Paper>
        </Grid>
        <form>
          <Container sx={{ display: 'flex', alignItems: 'space-evenly', justifyContent: 'space-between', marginTop: '12px' }}>
            <DatePicker
              label="Start Date"
              value={selectedStartDate}
              onChange={handleStartDateChange}
            />
            <DatePicker
              label="End Date"
              value={selectedStartDate}
              onChange={handleEndDateChange}
            />
            <Button variant="outlined" type='submit' onClick={handleDateRangeSelection}>Go</Button>
          </Container>
        </form>

        {/* Input and button for days */}
        {/* <Grid item xs={4}>
        <TextField
          label="Days Back"
          variant="outlined"
          value={daysBack}
          onChange={(e) => setDaysBack(e.target.value)}
        />
        <Button variant="outlined" onClick={handleDaysBackClick}>Let's Go</Button>
      </Grid> */}

        {/* Input and button for weeks */}

        {/* <Grid item xs={4}>
        <TextField
          label="Weeks Back"
          variant="outlined"
          value={weeksBack}
          onChange={(e) => setWeeksBack(e.target.value)}
        />
        <Button variant="outlined" onClick={handleWeeksBackClick}>Let's Go</Button>
      </Grid> */}

        {/* Input and button for months */}
        {/* <Grid item xs={4} spacing={2}>
        <TextField
          label="Months Back"
          variant="outlined"
          value={monthsBack}
          onChange={(e) => setMonthsBack(e.target.value)}
        />
        <Button variant="outlined" onClick={handleMonthsBackClick}>Let's Go</Button>
      </Grid> */}

      </Grid>
    </LocalizationProvider>
  );
}