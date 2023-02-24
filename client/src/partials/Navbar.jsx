import React from 'react'
import { Link, NavLink } from 'react-router-dom'


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
                      <NavLink
                        className="text-gray-500 transition hover:text-gray-500/75"
                        activeClassName="text-teal-600"
                        exact
                        to="/">
                        Home
                      </NavLink>
                  </li>
                  <li>  
                      <NavLink
                        className="text-gray-500 transition hover:text-gray-500/75"
                        activeClassName="text-teal-600"
                        exact
                        to="/jobs">
                        Jobs
                      </NavLink>
                  </li>
                <li>  
                      <NavLink
                        className="text-gray-500 transition hover:text-gray-500/75"
                        activeClassName="text-teal-600"
                        exact
                        to="/scholarship">
                        Scholarship
                      </NavLink>
                </li>
                <li>  
                      <NavLink
                        className="text-gray-500 transition hover:text-gray-500/75"
                        activeClassName="text-teal-600"
                        exact
                        to="/courses">
                        Courses
                      </NavLink>
                </li>
                <li>  
                      <NavLink
                        className="text-gray-500 transition hover:text-gray-500/75"
                        activeClassName="text-teal-600"
                        exact
                        to="/online-tution">
                        Online Tution
                      </NavLink>
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