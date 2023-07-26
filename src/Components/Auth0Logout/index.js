import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "@mui/material";

// Auth0LogoutButton component provides a button to log out the authenticated user using Auth0
const Auth0LogoutButton = () => {
  // Use the `useAuth0` hook to access the `logout` function provided by Auth0
  const { logout } = useAuth0();

  // Render a button that triggers the logout process when clicked
  return (
    <Button
      type="submit"
      variant="inherit"
      color="inherit"
      onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}
    >
      Log Out
    </Button>
  );
};

export default Auth0LogoutButton;
