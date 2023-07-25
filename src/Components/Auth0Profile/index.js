import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const Auth0Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return (
    isAuthenticated && (
      <div>
        <img src={user.picture} alt={user.name} style={{ height: "50%" }} />
        {/* <h2>{user.name}</h2> */}
        {/* <p>{user.email}</p> */}
      </div>
    )
  );
};

export default Auth0Profile;