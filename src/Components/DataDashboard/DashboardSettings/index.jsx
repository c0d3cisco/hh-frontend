import React, { useState } from 'react';
import { Typography, Card, CardContent, CardHeader, Switch, FormControlLabel, Button } from '@mui/material';

export default function DashboardSettings() {
  // State variables for controlling different settings
  const [notificationToggle, setNotificationToggle] = useState(false); // State for notification toggle
  const [darkModeToggle, setDarkModeToggle] = useState(false); // State for dark mode toggle
  const [accountSettingOption, setAccountSettingOption] = useState(''); // State for tracking selected account setting option

  // Function to handle changes in the notification toggle
  const handleNotificationToggleChange = (event) => {
    setNotificationToggle(event.target.checked);
  };

  // Function to handle changes in the dark mode toggle
  const handleDarkModeToggleChange = (event) => {
    setDarkModeToggle(event.target.checked);
  };

  // Function to handle changes in the selected account setting option
  const handleAccountSettingOptionChange = (option) => {
    setAccountSettingOption(option);
  };

  return (
    <div>
      {/* Typography component to display the title */}
      <Typography variant="h4" sx={{ mb: 2 }}>
        Settings
      </Typography>
      {/* Card component for General Settings */}
      <Card sx={{ maxWidth: 400 }}>
        <CardHeader title="General Settings" />
        <CardContent>
          {/* General settings content */}
          {/* Switch component for enabling/disabling notifications */}
          <FormControlLabel
            control={<Switch checked={notificationToggle} onChange={handleNotificationToggleChange} />}
            label="Enable Notifications"
          />
          {/* Switch component for enabling/disabling dark mode */}
          <FormControlLabel
            control={<Switch checked={darkModeToggle} onChange={handleDarkModeToggleChange} />}
            label="Dark Mode"
          />
          {/* Button to save general settings */}
          <Button variant="contained" color="primary" onClick={() => alert('Save general settings')}>
            Save
          </Button>
        </CardContent>
      </Card>
      {/* Card component for Account Settings */}
      <Card sx={{ maxWidth: 400, mt: 2 }}>
        <CardHeader title="Account Settings" />
        <CardContent>
          {/* Account settings content */}
          {/* Buttons for selecting different account setting options */}
          <Button
            variant={accountSettingOption === 'profile' ? 'contained' : 'outlined'}
            color="primary"
            onClick={() => handleAccountSettingOptionChange('profile')}
          >
            Profile Settings
          </Button>
          <Button
            variant={accountSettingOption === 'security' ? 'contained' : 'outlined'}
            color="primary"
            onClick={() => handleAccountSettingOptionChange('security')}
          >
            Security Settings
          </Button>
          <Button
            variant={accountSettingOption === 'privacy' ? 'contained' : 'outlined'}
            color="primary"
            onClick={() => handleAccountSettingOptionChange('privacy')}
          >
            Privacy Settings
          </Button>
          {/* Button to save the selected account setting option */}
          {accountSettingOption && (
            <Button variant="contained" color="primary" onClick={() => alert(`Save ${accountSettingOption} settings`)}>
              Save
            </Button>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
