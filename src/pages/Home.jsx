import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="bg-gray-850">
      <div className="min-w-full min-h-screen flex justify-center items-center space-x-7">
        <Link to="/characters">
          <div className="bg-white w-60 h-36 rounded-md flex justify-center items-center shadow-md cursor-pointer transform transition duration-500 hover:scale-110 filter grayscale hover:grayscale-0 overflow-hidden text-white text-2xl ">
            <img
              src="/img/characters.jpg"
              alt="characters"
              className="w-full h-full object-center object-cover filter brightness-50"
            />
            <div className="absolute font-semibold">Characters</div>
          </div>
        </Link>
        <Link to="/episodes">
          <div className="bg-white w-60 h-36 rounded-md flex justify-center items-center shadow-md cursor-pointer transform transition duration-500 hover:scale-110 filter grayscale hover:grayscale-0 overflow-hidden text-white text-2xl ">
            <img
              src="/img/episodes.jpg"
              alt="episodes"
              className="w-full h-full object-center object-cover filter brightness-50"
            />
            <div className="absolute font-semibold">Episodes</div>
          </div>
        </Link>
        <Link to="/locations">
          <div className="bg-white w-60 h-36 rounded-md flex justify-center items-center shadow-md cursor-pointer transform transition duration-500 hover:scale-110 filter grayscale hover:grayscale-0 overflow-hidden text-white text-2xl ">
            <img
              src="/img/locations.jpg"
              alt="locations"
              className="w-full h-full object-center object-cover filter brightness-50"
            />
            <div className="absolute font-semibold">Locations</div>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Home;
