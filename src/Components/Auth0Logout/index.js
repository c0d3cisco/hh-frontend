import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "@mui/material";


const Auth0LogoutButton = () => {
  const { logout } = useAuth0();

  return (
    <Button
    type="submit"
    variant="contained"
    color="inherit"
    sx={{ mt: 1 }}
    onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}
  >
    Log Out
  </Button>
  );
};

export default Auth0LogoutButton;