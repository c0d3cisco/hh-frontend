import React, { useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "@mui/material";
import axios from "axios";

const Auth0LoginButton = () => {
  const { user, loginWithRedirect } = useAuth0();

  useEffect(() => {

    const userCreate = {
      "username": user?.sub,
      "password": "void"
    }

    const handleSignUp = async () => {
      console.log(user)
      console.log(userCreate)

      try {
        const response = await axios.post('https://helen-house-backend-v3uq.onrender.com/signup', userCreate)
        console.log('User Created',response.data.user)

        // If the user was successfully created, store the userId in local storage
        if (response.data.user && response.data.user.id) {
          localStorage.setItem('userId', response.data.user.id);
        }
      } catch (error) {
        console.log(error.message);

        // If there was an error, check if the user already exists in the database
        try {
          const checkUserResponse = await axios.get(`https://helen-house-backend-v3uq.onrender.com/checkUser?id=6`);
          console.log('User Exists', checkUserResponse.data);
          // const checkUserResponse = await axios.get(`https://helen-house-backend-v3uq.onrender.com/checkUser?username=${user?.sub}`);
          if (checkUserResponse.data && checkUserResponse.data.userId) {
            localStorage.setItem('userId', checkUserResponse.data.userId);
          } else {
            // If the user doesn't exist in the database, handle the error accordingly
            console.log("User not found in the database.");
          }
        } catch (error) {
          console.log("Error checking user in the database.");
        }
      }
    };

    handleSignUp()
  }, [user]);

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


// const handleSignUp = async () => {
//   console.log(user)
//   console.log(userCreate)

//   try {
//     const response = await axios.post('https://helen-house-backend-v3uq.onrender.com/signup', userCreate)
//     console.log(response.data.user)
    
//     // If the user was successfully created, store the userId in local storage
//     if (response.data.user && response.data.user.id) {
//       localStorage.setItem('userId', response.data.user.id);
//     }
//   } catch (error) {
//     // TODO: Make a call to https://helen-house-backend-v3uq.onrender.com/checkUser
//     console.log(error);
//   }
// }
