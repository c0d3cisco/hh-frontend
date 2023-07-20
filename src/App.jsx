import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Layout from './Components/Layout';
import Checkin from './Pages/Checkin';
import SignupPage from './Pages/SignUp';
import DataDashboard from './Pages/DataDashboard';
import Home from './Pages/Home';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" exact component={Home} />
          <Route path="/checkin" component={Checkin} />
          <Route path="/signup" component={SignupPage} />
          <Route path="/datadashboard" component={DataDashboard} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
