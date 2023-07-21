import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './Components/Layout';
import Home from './Pages/Home';
import SignUp from './Pages/SignUp';
import UserSettings from './Pages/UserSettings';
import { Checkin } from './Pages/Checkin';
import DataDashboard from './Pages/DataDashboard';
import IntakeForm from './Pages/IntakeForm';
import Header from './Components/Layout/Header';
import Footer from './Components/Layout/Footer';
import { Auth0Provider } from '@auth0/auth0-react'; // Import Auth0Provider


export default function App() {
  return (
    // <Auth0Provider
    //   domain="dev-asdaiq2qzmt7fozh.us.auth0.com"
    //   clientId="cfleISlyWfWRhhx6cGjVqryrGFKeCq4V"
    //   redirectUri={window.location.origin} // Set the redirect URI after login
    // >
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/" element={<Layout />}> */}
          {/* <Route index element={<Home />} /> */}
          <Route path="/checkin" element={<Checkin />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/intakeform" element={<IntakeForm />} />
          <Route path="/usersettings" element={<UserSettings />} />
          <Route path="/datadashboard" element={<DataDashboard />} />

        </Routes>
      </Layout >
    </Router>
  // {/* // </Auth0Provider> */ }

  );
}



// import React from 'react';
// import './App.css';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// // import Checkin from './Pages/Checkin'
// import Layout from './Components/Layout';
// import Home from './Pages/Home';
// import SignUp from './Pages/SignUp';
// import SignUpApproval from './Pages/SignUpApproval';
// import UserSettings from './Pages/UserSettings';

// function App() {
//   return (
//     <Router>
//       <Layout>
//         <Routes>
//           {/* <Route path='/' page={Checkin} /> */}
//           <Route path='/' page={Home} />
//           <Route path='/' page={SignUp} />
//           <Route path='/' page={SignUpApproval} />
//           <Route path='/' page={UserSettings} />
//         </Routes>
//       </Layout>
//     </Router>
//   );
// }

// export default App;
