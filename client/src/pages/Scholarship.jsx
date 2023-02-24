import React from 'react'
import HeroHome from '../partials/HeroHome';
import Footer from '../partials/Footer';
import Navbar from '../partials/Navbar';
import Login from '../partials/Login';
import CarouselScholarship from '../partials/scholarship/CarouselScholarship';
import SearchFilter from '../partials/scholarship/SearchFilter';
import ScholarshipCard from '../partials/scholarship/ScholarshipCard';
const Scholarship = () => {

  const handleSearch = (query) => {
    console.log(`Searching for "${query}"`);
  };

  return (
    <div className="flex flex-col min-h-screen overflow-hidden">

      {/* Navbar */}
      <Navbar/>
      {/* Login */}
      <Login/>

      {/*  Page content */}
      <main className="flex-grow">

        {/*  Page sections */}
        <CarouselScholarship/>

        {/* Search Section */
        <SearchFilter onSearch={handleSearch}/>}

        {/* Scholarship Cards */}
        <ScholarshipCard/>
     
      </main>

      
      {/*  Site footer */}
      <Footer />

    </div>
  );
}

export default Scholarship