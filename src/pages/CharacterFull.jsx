import React from 'react';
import axios from 'axios';
import CharacterCardFull from '../components/CharacterCardFull';

function CharacterFull({ match }) {
  const {
    params: { id },
  } = match;

  const [character, setCharacter] = React.useState([]);

  React.useEffect(() => {
    async function getCharacter() {
      const result = await axios.get(`https://rickandmortyapi.com/api/character/${id}`);
      setCharacter(result.data);
    }
    getCharacter();
  }, [id]);

  return (
    <div className="bg-gray-850 min-w-full min-h-screen flex justify-center">
      <div className="w-3/4 mt-5 flex justify-center flex-wrap">
        <CharacterCardFull character={character} />
      </div>
    </div>
  );
}
export default CharacterFull;
