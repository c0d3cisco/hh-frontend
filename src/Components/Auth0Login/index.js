import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Button } from '@mui/material';

const Auth0LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <Button
      type="submit"
      variant="contained"
      color="inherit"
      sx={{ mt: 1 }}
      onClick={() => loginWithRedirect()}
      backgroundColor="none"
    >
      Log In
    </Button>
  );
};

export default Auth0LoginButton;
