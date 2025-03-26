import React from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import AboutUs from './components/AboutUs';
import AdminDashboard from './components/AdminDashboard';
import SignupPage from './components/signupPage';
import LoginPage from './components/loginPage';
import OtpVerification from './components/otpVerification';
//import './App.css'



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AdminDashboard />} />
        {/* <Route path="/amindashboard" element={<AdminDashboard />} /> */}
        <Route path="/signuppage" element={<SignupPage />} />
        <Route path="/loginpage" element={<LoginPage />} />
        <Route path="/otpverification" element={<OtpVerification />} />
      </Routes>
    </Router>
  );
}

export default App;
