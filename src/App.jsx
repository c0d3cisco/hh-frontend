// Import necessary modules and components from React and React Router
import React from 'react';
import './App.scss';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// Import custom components
import Layout from './Components/Layout';
import Home from './Pages/Home';
import SignUp from './Pages/SignUp';
import UserSettings from './Pages/UserSettings';
import { Checkin } from './Pages/Checkin';
import Dashboard from './Pages/DataDashboard';
import IntakeForm from './Pages/IntakeForm';

export default function App() {
  return (
    // Wrap the application with the Router component for routing functionality
    <Router>
      {/* Use the Layout component as the main layout for all pages */}
      <Layout >
        {/* Define the application's routes */}
        <Routes>
          {/* Route for the Home page */}
          <Route path="/" element={<Home />} />

          {/* Route for the Checkin page */}
          <Route path="/checkin" element={<Checkin />} />

          {/* Route for the SignUp page */}
          <Route path="/signup" element={<SignUp />} />

          {/* Route for the IntakeForm page */}
          <Route path="/intakeform" element={<IntakeForm />} />

          {/* Route for the UserSettings page */}
          <Route path="/usersettings" element={<UserSettings />} />

          {/* Route for the DataDashboard page */}
          <Route path="/datadashboard" element={<Dashboard />} />
        </Routes>
      </Layout>
    </Router>
  );
}
