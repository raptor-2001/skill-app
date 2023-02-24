import React from 'react'
import HeroHome from '../partials/HeroHome';
import Footer from '../partials/Footer';
import Navbar from '../partials/Navbar';
import Login from '../partials/Login';
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
        <HeroHome />
     
      </main>

      
      {/*  Site footer */}
      <Footer />

    </div>
  )
}

export default OnlineTution