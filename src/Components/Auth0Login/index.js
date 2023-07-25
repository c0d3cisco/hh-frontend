import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "@mui/material";

const Auth0LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

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

// import React from "react";
// import axios from "axios";
// import { useAuth0 } from "@auth0/auth0-react";
// import { Button } from "@mui/material";

// const Auth0LoginButton = () => {
//   const { loginWithRedirect, user } = useAuth0();

//   // Function to check if the user exists in your API
//   const checkUserExists = async () => {
//     try {
//       // Make a GET request to your API to check if the user exists
//       const response = await axios.get(`http://localhost:3001/api/users/${user.name}`);

//       // If the user exists in your API, perform the login
//       loginWithRedirect();
//     } catch (error) {
//       // If the user doesn't exist, create a new user with their username as their name
//       createUser();
//     }
//   };

//   // Function to create a new user in your API
//   const createUser = async () => {
//     try {
//       // Make a POST request to your API to create a new user
//       await axios.post("http://localhost:3001/api/users", {
//         username: user.name,
//         // Include any other user data you want to save in your database
//       });

//       // Perform the login after creating the user
//       loginWithRedirect();
//     } catch (error) {
//       console.error("Error creating user:", error);
//     }
//   };

//   return (
//     <Button
//       type="submit"
//       variant="inherit"
//       color="inherit"
//       onClick={() => checkUserExists()}
//     >
//       Log In
//     </Button>
//   );
// };

// export default Auth0LoginButton;
