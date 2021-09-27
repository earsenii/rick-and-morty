import React from 'react';
import axios from 'axios';

import CharacterCardMini from '../components/CharacterCardMini';
import Navbar from '../components/Navbar';

function Characters() {
  const [character, setCharacter] = React.useState([]);

  React.useEffect(() => {
    async function getCharacter() {
      const characters = await axios.get('https://rickandmortyapi.com/api/character');
      setCharacter(characters.data.results);
    }
    getCharacter();
  }, []);

  return (
    <div className="bg-gray-850 min-w-full min-h-screen flex flex-col justify-center items-center">
      <div className="flex justify-center w-full">
        <Navbar />
      </div>

      <div className="w-3/4 mt-5 flex flex-col space-y-2  items-center justify-center flex-wrap md:flex-row md:items-start md:space-x-0 md:space-y-0">
        <CharacterCardMini character={character} />
      </div>
    </div>
  );
}
export default Characters;
