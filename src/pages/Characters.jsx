import React from 'react';
import axios from 'axios';
import CharacterCardMini from '../components/CharacterCardMini';

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
    <div className="bg-gray-850 min-w-full min-h-screen flex justify-center">
      <div className="w-3/4 mt-5 flex justify-center flex-wrap">
        <CharacterCardMini character={character} />
      </div>
    </div>
  );
}
export default Characters;
