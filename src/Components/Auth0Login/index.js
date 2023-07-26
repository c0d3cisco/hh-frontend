import React, { useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "@mui/material";
import axios from "axios";

// Auth0LoginButton component provides a button to log in the user using Auth0
const Auth0LoginButton = () => {
  // Use the `useAuth0` hook to access the `user` object and the `loginWithRedirect` function provided by Auth0
  const { user, loginWithRedirect } = useAuth0();

  // useEffect hook is used to handle the user sign-up process on initial render
  useEffect(() => {
    // userCreate object with username and password for user sign-up
    const userCreate = {
      "username": user?.sub,
      "password": "void"
    }

    // Function to handle the sign-up process
    const handleSignUp = async () => {
      try {
        // Send a POST request to the backend API to sign up the user
        const response = await axios.post('https://helen-house-backend-v3uq.onrender.com/signup', userCreate);
        
        // If the user was successfully created, store the userId in local storage
        if (response.data.id) {
          localStorage.setItem('userId', response.data.id);
        }
      } catch (error) {
        // If there was an error creating the user, check if the user already exists in the database
        try {
          const response = await axios.post('https://helen-house-backend-v3uq.onrender.com/checkUser', userCreate);
          if (response.data[0].id) {
            localStorage.setItem('userId', response.data[0].id);
          } else {
            // If the user doesn't exist in the database, handle the error accordingly
            console.log("User not found in the database.");
          }
        } catch (error) {
          console.log("Error checking user in the database.", error);
        }
      }
    };

    // Call the handleSignUp function to handle user sign-up or checking if the user exists
    handleSignUp();
  }, [user]);

  // Render a button that triggers the login process when clicked
  return (
    <Button
      type="submit"
      variant="inherit"
      color="inherit"
      onClick={() => loginWithRedirect()}
    >
      Log In
    </Button>
  );
};

export default Auth0LoginButton;
