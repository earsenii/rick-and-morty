import React from 'react';
import { Link } from 'react-router-dom';

import HomePageCard from '../components/HomePageCard';

function Home() {
  return (
    <div className="bg-gray-850">
      <div className="min-w-full min-h-screen flex flex-col space-y-3 justify-center items-center lg:justify-center lg:flex-row lg:space-x-5 lg:space-y-0 md:space-y-5 sm:flex-col">
        <Link to="/characters">
          <HomePageCard text="Characters" image="/img/characters.jpg" />
        </Link>
        <Link to="/episodes">
          <HomePageCard text="Episodes" image="/img/episodes.jpg" />
        </Link>
        <Link to="/locations">
          <HomePageCard text="Locations" image="/img/locations.jpg" />
        </Link>
      </div>
    </div>
  );
}

export default Home;
