import React from 'react';
import { Link } from 'react-router-dom';

import { HomeIcon, GlobeIcon, FilmIcon, UserGroupIcon } from '@heroicons/react/outline';

function Navbar({ onChangeSearchInput }) {
  return (
    <div className="flex justify-center w-full fixed top-0 z-50">
      <div className="bg-gray-825 text-white transform md:relative md:translate-x-0 w-full shadow-md flex justify-center">
        <div className="w-3/5 flex flex-row justify-between items-center space-x-5">
          {/* Desktop */}
          <div className="hidden md:flex flex-row justify-center space-x-5 lg:space-x-12">
            <Link
              to="/"
              className="p-1 text-md lg:text-lg lg:p-2 font-semibold rounded-lg transition duration-200 hover:bg-gray-850">
              Home
            </Link>
            <Link
              to="/characters"
              className="p-1 text-md lg:text-lg lg:p-2 font-semibold rounded-lg transition duration-200 hover:bg-gray-850">
              Characters
            </Link>
            <Link
              to="/episodes"
              className="p-1 text-md lg:text-lg lg:p-2 font-semibold rounded-lg transition duration-200 hover:bg-gray-850">
              Episodes
            </Link>
            <Link
              to="/locations"
              className="p-1 text-md lg:text-lg lg:p-2  font-semibold rounded-lg transition duration-200 hover:bg-gray-850">
              Locations
            </Link>
          </div>
          {/* Mobile */}
          <div className="flex md:hidden flex-row justify-center space-x-2">
            <Link to="/">
              <HomeIcon className="h-6 w-6 text-white" />
            </Link>
            <Link to="/characters">
              <UserGroupIcon className="h-6 w-6 text-white" />
            </Link>
            <Link to="/episodes">
              <FilmIcon className="h-6 w-6 text-white" />
            </Link>
            <Link to="/locations">
              <GlobeIcon className="h-6 w-6 text-white" />
            </Link>
          </div>
          <div className="p-1 w-28 md:w-52 lg:w-60 lg:py-2">
            <input
              type="text"
              name="name"
              placeholder="Search..."
              className="w-full placeholder-white bg-gray-825 rounded-mg py-2 border-b-2 border-gray-500 text-md lg:text-lg font-semibold outline-none focus:border-white pl-2"
              onChange={onChangeSearchInput}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
