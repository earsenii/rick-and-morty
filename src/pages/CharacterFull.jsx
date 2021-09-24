import React from 'react';
import axios from 'axios';

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
        <div className="overflow-hidden relative justify-end  cursor-pointer flex flex-col rounded-md bg-gray-850 w-60 h-48 z-50 object-cover text-white transform transition duration-500 hover:scale-105 ml-3">
          <img
            src={character.image}
            alt={character.name}
            className="w-full h-full object-center object-cover filter brightness-50"
          />
          <div className="absolute p-3 flex flex-col">
            <div className="font-semibold text-xl">{character.name}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default CharacterFull;
