import React from 'react'
import HeroHome from '../partials/HeroHome';
import Footer from '../partials/Footer';
import Navbar from '../partials/Navbar';
import Login from '../partials/Login';
import Search from '../partials/Components/SearchDiv/Search'
import Jobs from '../partials/Components/JobDiv/Jobs'
const Job = () => {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">

      {/* Navbar */}
      <Navbar/>
      {/* Login */}
      <Login/>

      {/*  Page content */}
      <main class="p-20">

        {/*  Page sections */}
        <Search />

        <Jobs />

     
      </main>

      
      {/*  Site footer */}
      <Footer />

    </div>
  )
}

export default Job