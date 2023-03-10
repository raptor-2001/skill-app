import React from 'react';
import HeroHome from '../partials/HeroHome';
import Footer from '../partials/Footer';
import Navbar from '../partials/Navbar';
// import Banner from '../partials/Banner';

function Home() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">

      {/* Navbar */}
      <Navbar/>

      {/*  Site header */}
      {/* <Header /> */}

      {/*  Page content */}
      <main className="flex-grow">

        {/*  Page sections */}
        <HeroHome />
     
      </main>

      {/* <Banner /> */}

      {/*  Site footer */}
      <Footer />

    </div>
  );
}

export default Home;