import * as React from 'react';
import { Grid, Paper, Button, TextField } from "@mui/material";
import { LineChart } from '@mui/x-charts';
import { subMonths, subWeeks, subDays, format } from 'date-fns';

const currentDate = new Date();

// Generate random data for the chart
const generateChartData = (numPoints) => {
  const data = [];
  for (let i = 0; i < numPoints; i++) {
    data.push(Math.floor(Math.random() * 1000));
  }
  return data;
};

export default function DashboardData() {
  // State variables for chart data and settings
  const [chartData, setChartData] = React.useState({
    series: [
      { data: generateChartData(7), label: 'Youth Hours' }, // Initial data with 7 points (last 7 days)
      { data: generateChartData(7), label: 'Staff Hours' },
    ],
    xAxis: [{ scaleType: 'point', data: Array.from({ length: 7 }, (_, i) => format(subDays(currentDate, 7 - i), 'MMM dd')) }], // Last 7 days' labels
  });

  const [weeksBack, setWeeksBack] = React.useState(''); // State for weeks back input
  const [monthsBack, setMonthsBack] = React.useState(''); // State for months back input
  const [daysBack, setDaysBack] = React.useState(''); // State for days back input
  const [chartWidth, setChartWidth] = React.useState(window.innerWidth > 800 ? 800 : window.innerWidth); // State for chart width
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
      setChartWidth(newWidth);
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
      setChartWidth(newWidth);
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
      setChartWidth(newWidth);
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
      setChartWidth(newWidth);
    };

    // Add an event listener to update the chart size when the window is resized
    window.addEventListener('resize', updateChartSize);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('resize', updateChartSize);
    };
  }, []);

  return (
    <Grid container spacing={2}>
      {/* Cards with key data metrics */}
      {/* Card 1 - Total Daily Check-ins */}
      <Grid item xs={3}>
        <Paper sx={{ p: 2, height: 100 }}>{`Total Daily Check-ins: ${totalDailyCheckIns}`}</Paper>
      </Grid>
      {/* Card 2 - Weekly Average Check-ins */}
      <Grid item xs={3}>
        <Paper sx={{ p: 2, height: 100 }}>{`Weekly Average Check-ins: ${weeklyAvgCheckIns.toFixed(2)}`}</Paper>
      </Grid>
      {/* Card 3 - YTD Check-ins */}
      <Grid item xs={3}>
        <Paper sx={{ p: 2, height: 100 }}>{`YTD Check-ins: ${ytdCheckIns.toFixed(2)}`}</Paper>
      </Grid>
      {/* Card 4 - Total Hours */}
      <Grid item xs={3}>
        <Paper sx={{ p: 2, height: 100 }}>{`Total Hours: ${totalHours}`}</Paper>
      </Grid>

      {/* Line Chart */}
      <Grid item xs={12}>
        {selectedDuration && <div style={{ textAlign: 'center', marginBottom: 10 }}>{`Showing data for the last ${selectedDuration}`}</div>}
        <Paper sx={{ p: 2 }}>
          {/* LineChart component */}
          <LineChart
            yAxisLabel="Check-ins" 
            xAxisLabel="Dates" 
            sx={{ width: '100%', height: 300, '& .MuiResponsiveChart-container': {} }}
            width={chartWidth}
            height={300}
            {...chartData}
            margin={{ top: 20, right: 20, bottom: 60, left: 60 }} // Modify the margin to adjust the space for x-axis
          />
        </Paper>
      </Grid>

      {/* Input and button for days */}
      <Grid item xs={4}>
        <TextField
          label="Days Back"
          variant="outlined"
          value={daysBack}
          onChange={(e) => setDaysBack(e.target.value)}
        />
        <Button variant="outlined" onClick={handleDaysBackClick}>Let's Go</Button>
      </Grid>

      {/* Input and button for weeks */}
      <Grid item xs={4}>
        <TextField
          label="Weeks Back"
          variant="outlined"
          value={weeksBack}
          onChange={(e) => setWeeksBack(e.target.value)}
        />
        <Button variant="outlined" onClick={handleWeeksBackClick}>Let's Go</Button>
      </Grid>

      {/* Input and button for months */}
      <Grid item xs={4} spacing={2}>
        <TextField
          label="Months Back"
          variant="outlined"
          value={monthsBack}
          onChange={(e) => setMonthsBack(e.target.value)}
        />
        <Button variant="outlined" onClick={handleMonthsBackClick}>Let's Go</Button>
      </Grid>

    </Grid>
  );
}
