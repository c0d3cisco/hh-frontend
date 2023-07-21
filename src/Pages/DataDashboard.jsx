import React, { useState } from "react";
import { Container, Grid, Paper, Typography, List, ListItem, ListItemText, ListItemButton } from "@mui/material";

const DataDashboard = () => {
  const [selectedOption, setSelectedOption] = useState("option1"); // State to track selected option

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  return (
    <Container>
      <Grid container spacing={3}>
        {/* Left Side Nav Bar */}
        <Grid item xs={3}>
          <List>
            <ListItemButton selected={selectedOption === "option1"} onClick={() => handleOptionClick("option1")}>
              <ListItemText primary="Option 1" />
            </ListItemButton>
            <ListItemButton selected={selectedOption === "option2"} onClick={() => handleOptionClick("option2")}>
              <ListItemText primary="Option 2" />
            </ListItemButton>
            <ListItemButton selected={selectedOption === "option3"} onClick={() => handleOptionClick("option3")}>
              <ListItemText primary="Option 3" />
            </ListItemButton>
            <ListItemButton selected={selectedOption === "option4"} onClick={() => handleOptionClick("option4")}>
              <ListItemText primary="Option 4" />
            </ListItemButton>
          </List>
        </Grid>

        {/* Hero Section */}
        <Grid item xs={9}>
          <Paper sx={{ p: 2, height: "100%" }}>
            <Typography variant="h4" sx={{ mb: 2 }}>
              {selectedOption === "option1" && "Option 1 Content"}
              {selectedOption === "option2" && "Option 2 Content"}
              {selectedOption === "option3" && "Option 3 Content"}
              {selectedOption === "option4" && "Option 4 Content"}
            </Typography>
            {selectedOption === "option1" && <Grid container spacing={2}>
              {/* Cards with key data metrics */}
              {/* Card 1 */}
              <Grid item xs={3}>
                <Paper sx={{ p: 2, height: 100 }}>Card 1</Paper>
              </Grid>
              {/* Card 2 */}
              <Grid item xs={3}>
                <Paper sx={{ p: 2, height: 100 }}>Card 2</Paper>
              </Grid>
              {/* Card 3 */}
              <Grid item xs={3}>
                <Paper sx={{ p: 2, height: 100 }}>Card 3</Paper>
              </Grid>
              {/* Card 4 */}
              <Grid item xs={3}>
                <Paper sx={{ p: 2, height: 100 }}>Card 4</Paper>
              </Grid>
            </Grid>}
            {selectedOption === "option2" && <p>Option 2 Content</p>}
            {selectedOption === "option3" && <p>Option 3 Content</p>}
            {selectedOption === "option4" && <p>Option 4 Content</p>}
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default DataDashboard;
