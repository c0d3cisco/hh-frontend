import React from 'react';
import './App.scss';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './Components/Layout';
import Home from './Pages/Home';
import SignUp from './Pages/SignUp';
import UserSettings from './Pages/UserSettings';
import { Checkin } from './Pages/Checkin';
import Dashboard from './Pages/DataDashboard';
import IntakeForm from './Pages/IntakeForm';

export default function App() {
  return (
    <Router>
      <Layout >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/checkin" element={<Checkin />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/intakeform" element={<IntakeForm />} />
          <Route path="/usersettings" element={<UserSettings />} />
          <Route path="/datadashboard" element={<Dashboard />} />
        </Routes>
      </Layout>
    </Router>
  );
}
