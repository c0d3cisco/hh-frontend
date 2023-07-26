import React, { useState } from 'react';
import {
  Typography,
  Card,
  CardContent,
  CardHeader,
  Switch,
  FormControlLabel,
  Button,
  TextField,
  FormControl,
  FormLabel,
  Paper,
  Select,
  MenuItem,
  Autocomplete,
} from '@mui/material';

export default function DashboardSettings() {
  // State variables for controlling different settings
  const [notificationToggle, setNotificationToggle] = useState(false); // State for notification toggle
  const [darkModeToggle, setDarkModeToggle] = useState(false); // State for dark mode toggle
  const [accountSettingOption, setAccountSettingOption] = useState(''); // State for tracking selected account setting option

  // Additional state variables for form open/close status
  const [profileFormOpen, setProfileFormOpen] = useState(false);
  const [securityFormOpen, setSecurityFormOpen] = useState(false);
  const [privacyFormOpen, setPrivacyFormOpen] = useState(false);

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
    setProfileFormOpen(false); // Close profile form
    setSecurityFormOpen(false); // Close security form
    setPrivacyFormOpen(false); // Close privacy form

    // If the selected option is already open, close the form
    if (option === accountSettingOption) {
      setAccountSettingOption('');
    } else {
      setAccountSettingOption(option);
    }
  };

  // Function to render the form for updating username and password
  const renderProfileSettingsForm = () => {
    return (
      <form>
        {/* Include the form fields for Profile settings */}
        <div>
          <FormLabel>Edit Username</FormLabel>
          <TextField />
        </div>
        <div>
          <FormLabel>Edit Password</FormLabel>
          <TextField />
        </div>
        {/* Add more form fields for Profile settings */}
        <Button variant="contained" color="primary" onClick={() => alert('Save Profile Settings')}>
          Save Profile Settings
        </Button>
      </form>
    );
  };

  // Function to handle saving security settings
  const handleSaveSecuritySettings = () => {
    alert('Save Security Settings');
    setSecurityFormOpen(false);
  };

  // Function to handle saving privacy settings
  const handleSavePrivacySettings = () => {
    alert('Save Privacy Settings');
    setPrivacyFormOpen(false);
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
          <Button variant="contained" color="primary" onClick={() => alert('Save General Settings')}>
            Save
          </Button>
        </CardContent>
      </Card>
      {/* Paper component for Account Settings */}
      <Paper sx={{ maxWidth: 400, mt: 2, p: 2 }}>
        <Typography variant="h6" sx={{ mb: 2 }}>
          Account Settings
        </Typography>
        {/* Search bar for user search */}
        <Autocomplete
          freeSolo
          options={['User 1', 'User 2', 'User 3', 'User 4']} // Replace with actual user data or fetch from the backend
          renderInput={(params) => <TextField {...params} label="Search for a user" />}
        />
        {/* Account settings content */}
        <div>
          {/* Buttons for selecting different account setting options */}
          <Button
            variant={accountSettingOption === 'profile' ? 'contained' : 'outlined'}
            color="primary"
            onClick={() => handleAccountSettingOptionChange('profile')}
            sx={{ mt: 2 }}
          >
            Profile Settings
          </Button>
          {accountSettingOption === 'profile' && (
            <div sx={{ mt: 2 }}>{renderProfileSettingsForm()}</div>
          )}
        </div>
        <div>
          <Button
            variant={accountSettingOption === 'security' ? 'contained' : 'outlined'}
            color="primary"
            onClick={() => handleAccountSettingOptionChange('security')}
            sx={{ mt: 2 }}
          >
            Security Settings
          </Button>
          {accountSettingOption === 'security' && (
            <div sx={{ mt: 2 }}>
              <form>
                {/* Include the form fields for Security settings */}
                <div>
                  <FormLabel>Role</FormLabel>
                  <FormControl fullWidth>
                    <Select defaultValue="" onChange={(e) => console.log(e.target.value)}>
                      <MenuItem value="">Select Role</MenuItem>
                      <MenuItem value="Admin">Admin</MenuItem>
                      <MenuItem value="Member">User</MenuItem>
                      <MenuItem value="Volunteer">Volunteer</MenuItem>
                    </Select>
                  </FormControl>
                </div>
                {/* Add more form fields for Security settings */}
                <Button variant="contained" color="primary" onClick={handleSaveSecuritySettings}>
                  Save Security Settings
                </Button>
              </form>
            </div>
          )}
        </div>
        <div>
          <Button
            variant={accountSettingOption === 'privacy' ? 'contained' : 'outlined'}
            color="primary"
            onClick={() => handleAccountSettingOptionChange('privacy')}
            sx={{ mt: 2 }}
          >
            Privacy Settings
          </Button>
          {accountSettingOption === 'privacy' && (
            <div sx={{ mt: 2 }}>
              <form>
                {/* Include the form fields for Privacy settings */}
                <div>
                  <FormLabel>Data Dashboard Access</FormLabel>
                  <FormControl fullWidth>
                    <Select defaultValue="" onChange={(e) => console.log(e.target.value)}>
                      <MenuItem value="">Select Data Dashboard Access</MenuItem>
                      <MenuItem value="Yes">Yes</MenuItem>
                      <MenuItem value="No">No</MenuItem>
                    </Select>
                  </FormControl>
                </div>
                {/* Add more form fields for Privacy settings */}
                <Button variant="contained" color="primary" onClick={handleSavePrivacySettings}>
                  Save Privacy Settings
                </Button>
              </form>
            </div>
          )}
        </div>
      </Paper>
    </div>
  );
}
