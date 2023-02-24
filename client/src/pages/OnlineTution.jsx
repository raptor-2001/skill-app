import React from 'react'

import Footer from '../partials/Footer';
import Navbar from '../partials/Navbar';
import Login from '../partials/Login';

import Testimonials from '../partials/online-tution/Testimonials';
import Showcase from '../partials/online-tution/Showcase';
import HowDoesItWork from '../partials/online-tution/HowDoesItWork';


const OnlineTution = () => {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">

      {/* Navbar */}
      <Navbar/>
      {/* Login */}
      <Login/>

      

      {/*  Page content */}
      <main className="flex-grow">

        {/*  Page sections */}
       
        <Showcase />
        <HowDoesItWork />

        <Testimonials />
     
      </main>

      
      {/*  Site footer */}
      <Footer />

    </div>
  )
}

export default OnlineTution