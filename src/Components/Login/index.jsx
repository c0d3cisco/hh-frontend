import React, { useState } from 'react';
import { Modal, Box, Typography, TextField, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import Auth0LoginButton from '../Auth0Login';


export function LoginModal({ opened, onClose }) {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

    //! Try Catch for logging in to the database
  const handleLoginSubmit = (e) => {
    e.preventDefault();
    console.log('Username:', username);
    console.log('Password:', password);

    setUsername('');
    setPassword('');
    onClose();
  };

  const handleSignup = () => {
    onClose();
    console.log('Signup');
    <Link to="/signup" style={{ textDecoration: 'none' }}></Link>
  };

  return (
    <Modal open={opened} onClose={onClose} aria-labelledby="modal-login-title">
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 300,
          p: 2,
          bgcolor: 'white',
          borderRadius: 4,
        }}
      >
        <Typography variant="h6" id="modal-login-title" sx={{ marginBottom: 2 }}>
          Login
        </Typography>
        <form onSubmit={handleLoginSubmit}>
          <TextField
            label="Username"
            value={username}
            onChange={handleUsernameChange}
            placeholder="Enter your username"
            fullWidth
            margin="dense"
            variant="outlined"
          />
          <TextField
            label="Password"
            value={password}
            onChange={handlePasswordChange}
            placeholder="Enter your password"
            type="password"
            fullWidth
            margin="dense"
            variant="outlined"
          />

          <Box sx={{
            display: 'flex',
            justifyContent: 'space-between',
            width: '100%',
            mt: 2,
          }}>
            <Button type="submit" variant="contained" color="primary" sx={{ mt: 1 }}>
              Submit
            </Button>
            <Link to="/signup" style={{ textDecoration: 'none' }}>
              <Button type="submit" onClick={handleSignup} variant="contained" color="primary" sx={{ mt: 1 }}>
                Signup
              </Button>
            
            </Link>
          </Box>
        </form>
      </Box>
    </Modal>
  );
}
