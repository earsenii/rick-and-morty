import React from 'react';
import { Link } from 'react-router-dom';

import HomePageCard from '../components/HomePageCard';

function Home() {
  return (
    <div className="bg-gray-850">
      <div className="min-w-full min-h-screen flex justify-center items-center space-x-7">
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
