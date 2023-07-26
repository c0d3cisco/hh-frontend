import { withAuthenticationRequired } from "@auth0/auth0-react";
import React from "react";
import { PageLoader } from "./page-loader";

// AuthenticationGuard component takes a component as a prop and wraps it with authentication required logic
export const AuthenticationGuard = ({ component }) => {
  // Wrap the provided component with the `withAuthenticationRequired` higher-order component (HOC)
  const Component = withAuthenticationRequired(component, {
    // Options for the `withAuthenticationRequired` HOC
    // This function is called when the user is redirected to the Auth0 login page for authentication
    onRedirecting: () => (
      // Display a loading spinner or page loader during the redirection process
      <div>
        <PageLoader />
      </div>
    ),
  });

  // Return the wrapped component with authentication required
  return <Component />;
};
