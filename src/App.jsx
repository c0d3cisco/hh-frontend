import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './Components/Layout';
import Home from './Pages/Home';
import SignUp from './Pages/SignUp';
import SignUpApproval from './Pages/SignUpApproval';
import UserSettings from './Pages/UserSettings';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout>
          <Route index element={<Home />} />
          <Route path="signup" element={<SignUp />} />
          <Route path="signupapproval" element={<SignUpApproval />} />
          <Route path="usersettings" element={<UserSettings />} />
        </Layout>} />
      </Routes>
    </Router>
  );
}

export default App;

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
