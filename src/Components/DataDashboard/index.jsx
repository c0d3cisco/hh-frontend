import React, { useState } from "react";
import { Container, Grid, Paper, Typography, List, ListItemText, ListItemButton, Box } from "@mui/material";
import DashboardData from "./DashboardData";
import CustomReports from "./CustomReports";
import Approvals from "./Approvals";
import DashboardSettings from "./DashboardSettings";
import "./dashboard.scss"; // Import the SCSS file for styling

export default function DataDashboard({ chartData }) {
  // State to track the currently selected option in the left sidebar
  const [selectedOption, setSelectedOption] = useState("DashboardData");

  // Function to handle the click event of the left sidebar options
  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  return (
    // Main container for the dashboard
    <Container className="dashboard">
      {/* Grid layout with spacing between elements */}
      {/* <Grid container spacing={3}> */}
        <Box sx={{ display: 'flex' }}>
        {/* Left Side Nav Bar */}
        {/* Grid item for the left sidebar */}
        {/* <Grid item xs={4} md={4} className="left-sidebar"> Add className for styling */}
        <Box sx={{ width: '20%' }} className="left-sidebar">
          {/* List to display the left sidebar options */}
          <List className="left-sidebar-list">
            {/* Each ListItemButton represents an option in the left sidebar */}
            <ListItemButton selected={selectedOption === "DashboardData"} onClick={() => handleOptionClick("DashboardData")}>
              <ListItemText primary="Data Dashboard" />
            </ListItemButton>
            <ListItemButton selected={selectedOption === "CustomReports"} onClick={() => handleOptionClick("CustomReports")}>
              <ListItemText primary="Custom Reports" />
            </ListItemButton>
            <ListItemButton selected={selectedOption === "Approvals"} onClick={() => handleOptionClick("Approvals")}>
              <ListItemText primary="Approvals" />
            </ListItemButton>
            <ListItemButton selected={selectedOption === "Settings"} onClick={() => handleOptionClick("Settings")}>
              <ListItemText primary="Settings" />
            </ListItemButton>
          </List>
        {/* </Grid> */}
        </Box>

        {/* Hero Section */}
        {/* Grid item for the main content area */}
        <Box sx={{ width: '80%' }}>
        {/* <Grid item xs={8} md={8} className="dashboard-hero"> Add className for styling */}
          {/* Paper component for the main content */}
          <Paper sx={{ p: 2, height: "100%" }}>
            {/* Typography component to display the title of the selected option */}
            <Typography variant="h4" sx={{ mb: 2 }}>
              {/* Conditional rendering of the title based on the selected option */}
              {selectedOption === "DashboardData" && "Data Dashboard"}
              {selectedOption === "CustomReports" && "Custom Reports"}
              {selectedOption === "Approvals" && "Approvals"}
              {selectedOption === "Settings" && "Dashboard Settings"}
            </Typography>
            {/* Conditional rendering of the components based on the selected option */}
            {selectedOption === "DashboardData" && <DashboardData chartData={chartData} />} {/* Render DashboardData component */}
            {selectedOption === "CustomReports" && <CustomReports />} {/* Render CustomReports component */}
            {selectedOption === "Approvals" && <Approvals />} {/* Render Approvals component */}
            {selectedOption === "Settings" && <DashboardSettings />} {/* Render Settings component */}
          </Paper>
        {/* </Grid> */}
        </Box>
      {/* </Grid> */}
      </Box>
    </Container>
  );
}
