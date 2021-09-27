import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div className="bg-gray-825 text-white absolute inset-y-0 left-0 transform -translate-x-full md:relative md:translate-x-0 w-full shadow-md flex justify-center">
      <div className="w-3/5 flex flex-row justify-between items-center space-x-5">
        <div className="flex flex-row justify-center space-x-12">
          <Link
            to="/"
            className="p-2 text-lg font-semibold rounded-lg transition duration-200 hover:bg-gray-850 ">
            Home
          </Link>
          <Link
            to="/episodes"
            className="p-2 text-lg font-semibold rounded-lg transition duration-200 hover:bg-gray-850 ">
            Episodes
          </Link>
          <Link
            to="/locations"
            className="p-2 text-lg  font-semibold rounded-lg transition duration-200 hover:bg-gray-850">
            Locations
          </Link>
        </div>
        <div className="w-60 py-2">
          <input
            type="text"
            name="name"
            placeholder="Search by name..."
            className="w-full bg-gray-825 rounded-mg py-2 border-b-2 border-gray-500 text-md font-semibold outline-none focus:border-white pl-2"
          />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
