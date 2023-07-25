import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Auth0Provider } from '@auth0/auth0-react'; // Import Auth0Provider

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Auth0Provider
      domain="dev-3c6lxg8hjpdu1ria.us.auth0.com"
      clientId="zgrnMqG55q7J9nykGtYgG8n17B8aDYu2"
      authorizationParams={{
        redirect_uri: window.location.origin,
        audience: "https://helen-house-backend-v3uq.onrender.com",
        scope: "read:current_user update:current_user_metadata"
      }}>
      <App />
    </Auth0Provider>
  </React.StrictMode >
);


