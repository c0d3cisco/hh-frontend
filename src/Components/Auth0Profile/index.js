import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

// Auth0Profile component displays the user profile information using Auth0 hooks
const Auth0Profile = () => {
  // Use the `useAuth0` hook to access the Auth0 authentication state and user information
  const { user, isAuthenticated, isLoading } = useAuth0();

  // If the authentication state is still loading, display a loading message
  if (isLoading) {
    return <div>Loading ...</div>;
  }

  // Render the user profile information if the user is authenticated
  return (
    isAuthenticated && (
      <div>
        {/* Display the user's profile picture */}
        <img src={user.picture} alt={user.name} style={{ height: "50%" }} />
        {/* Uncomment the lines below to display the user's name and email */}
        {/* <h2>{user.name}</h2> */}
        {/* <p>{user.email}</p> */}
      </div>
    )
  );
};

export default Auth0Profile;
