import React, { useEffect } from 'react';
import {
  Routes,
  Route,
  useLocation
} from 'react-router-dom';

import 'aos/dist/aos.css';
import './css/style.css';

import AOS from 'aos';

import Home from './pages/Home';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import ResetPassword from './pages/ResetPassword';
import Job from './pages/Job';
import Courses from './pages/Courses';
import Scholarship from './pages/Scholarship';
import OnlineTution from './pages/OnlineTution'
import Navbar from './partials/Navbar';

function App() {

  const location = useLocation();

  useEffect(() => {
    AOS.init({
      once: true,
      disable: 'phone',
      duration: 700,
      easing: 'ease-out-cubic',
    });
  });

  useEffect(() => {
    document.querySelector('html').style.scrollBehavior = 'auto'
    window.scroll({ top: 0 })
    document.querySelector('html').style.scrollBehavior = ''
  }, [location.pathname]); // triggered on route change

  return (
    <>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/jobs" element={<Job/>}/>
          <Route path="/scholarship" element={<Scholarship/>}/>
          <Route path="/courses" element={<Courses/>}/>
          <Route path="/online-tution" element={<OnlineTution/>}/>
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/reset-password" element={<ResetPassword />} />
        </Routes>
      
    </>
  );
}

export default App;
