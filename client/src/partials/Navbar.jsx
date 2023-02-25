import React from 'react'
import {Link } from 'react-router-dom'


const Navbar = () => {
  return (
    <header aria-label="Site Header" class="bg-white">
      <div class="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div class="flex h-16 items-center justify-between">
          <div class="flex-1 md:flex md:items-center md:gap-12">
            <a class="block text-teal-600" href="/">
              <span class="sr-only">Home</span>
              
            </a>
          </div>

          <div class="md:flex md:items-center md:gap-12">
            <nav aria-label="Site Nav" class="hidden md:block">
              <ul class="flex items-center gap-6 text-sm">

                  <li>  
                      <Link
                        className="text-gray-500 transition hover:text-gray-500/75"
                        exact
                        to="/">
                        Home
                      </Link>
                  </li>
                  <li>  
                      <Link
                        className="text-gray-500 transition hover:text-gray-500/75"
                        to="/jobs">
                        Jobs
                      </Link>
                  </li>
                <li>  
                      <Link
                        className="text-gray-500 transition hover:text-gray-500/75"
                        to="/scholarship">
                        Scholarship
                      </Link>
                </li>
                <li>  
                      <Link
                        className="text-gray-500 transition hover:text-gray-500/75"
                        to="/courses">
                        Courses
                      </Link>
                </li>
                <li>  
                      <Link
                        className="text-gray-500 transition hover:text-gray-500/75"
                        to="/online-tution">
                        Online Tution
                      </Link>
                </li>
                <li>  
                      <Link
                        className="text-gray-500 transition hover:text-gray-500/75"
                        to="/mentors">
                        Mentors
                      </Link>
                </li>

               

                
              </ul>
            </nav>
          </div>
        </div>
      </div>
</header>

  )
}

export default Navbar