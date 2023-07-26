import React, { useState } from "react";
import { TextField, Button, Stack, Typography, Box } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { LoginModal } from "../Login";
import CheckIcon from "@mui/icons-material/Check";
import ClearIcon from "@mui/icons-material/Clear";

export default function SignUpForm() {
  // State variables for username, password, confirm password, and login modal
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false); // Add state for login modal
  const navigate = useNavigate(); // Use useNavigate hook to access navigation function

  // Function to validate password complexity
  const checkPasswordValidity = () => {
    // Password validation for at least one capital letter, one special character, and one number
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return password.match(passwordRegex);
  };

  // Event handlers for password and confirm password changes
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
  };

  // Function to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('handleSubmit');
    console.log(username, password);

    // Check if passwords match
    if (password !== confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

    // Check if password is valid
    if (!checkPasswordValidity()) {
      alert(
        "Password must be at least 8 characters long and include at least one capital letter, one special character, and one number."
      );
      return;
    }

    // Perform form submission logic here (e.g., create the user)

    // Navigate to the "IntakeForm" page after successful signup
    navigate("/intakeform");
  };

  // Validate password complexity
  const passwordIsValid = checkPasswordValidity();

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        marginTop: 10,
        padding: 2,
      }}
    >
      <Typography variant="h4" gutterBottom>
        Sign Up Here
      </Typography>
      <form onSubmit={handleSubmit}>
        <Box width={400}>
          <TextField
            type="text"
            variant="outlined"
            color="secondary"
            label="Username"
            onChange={(e) => setUsername(e.target.value)}
            value={username}
            fullWidth
            required
          />
          <TextField
            type="password"
            variant="outlined"
            color="secondary"
            label="Password"
            onChange={handlePasswordChange}
            value={password}
            required
            fullWidth
            sx={{ mt: 2 }}
            // Show password validity icon
            InputProps={{
              endAdornment: password ? (
                passwordIsValid ? (
                  <CheckIcon sx={{ color: "green" }} />
                ) : (
                  <ClearIcon sx={{ color: "red" }} />
                )
              ) : null,
            }}
          />
          {/* Password requirements subtext */}
          <Typography variant="body2" color={passwordIsValid ? "green" : "red"} sx={{ mt: 1 }}>
            Password must be at least 8 characters long and include at least one capital letter, one special character, and one number.
          </Typography>
          <TextField
            type="password"
            variant="outlined"
            color="secondary"
            label="Confirm Password"
            onChange={handleConfirmPasswordChange}
            value={confirmPassword}
            required
            fullWidth
            sx={{ mt: 2 }}
            // Show password match icon
            InputProps={{
              endAdornment: confirmPassword ? (
                password === confirmPassword ? (
                  <CheckIcon sx={{ color: "green" }} />
                ) : (
                  <ClearIcon sx={{ color: "red" }} />
                )
              ) : null,
            }}
          />
        </Box>
        <Button variant="outlined" color="secondary" type="submit" sx={{ mt: 3 }}>
          Register
        </Button>
      </form>
      <small sx={{marginTop:10}}>
        Already have an account?{" "}
        <Link to="#" onClick={() => setIsLoginModalOpen(true)}>
          Login Here
        </Link>
      </small>

      {/* Login Modal */}
      <LoginModal opened={isLoginModalOpen} onClose={() => setIsLoginModalOpen(false)} />
    </Box>
  );
}
