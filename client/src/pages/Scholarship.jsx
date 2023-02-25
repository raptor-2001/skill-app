import React from 'react'
import Footer from '../partials/Footer';
import Navbar from '../partials/Navbar';
import Login from '../partials/Login';
import CarouselScholarship from '../partials/scholarship/CarouselScholarship';
import SearchFilter from '../partials/scholarship/SearchFilter';
import ScholarshipCard from '../partials/scholarship/ScholarshipCard';
import { scholarshipDetails } from '../data';

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
        <main>
          <ul className='container flex flex-wrap justify-center'>
            {scholarshipDetails.map(scholarship => (

              <li className='m-4' key={scholarship.id}>
              <ScholarshipCard 
                id = {scholarship.id}
                title = {scholarship.title}
                overview = {scholarship.overview}
                detail = {scholarship}
              />
            </li>
              
            ))}
          </ul>
        </main>
        <ScholarshipCard/>
     
      </main>

      
      {/*  Site footer */}
      <Footer />

    </div>
  );
}

export default Scholarship