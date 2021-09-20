import React from 'react';
import axios from 'axios';

function Characters() {
  const [character, setCharacter] = React.useState([]);

  React.useEffect(() => {
    async function fetchData() {
      const characters = await axios.get('https://rickandmortyapi.com/api/character/1,2');
      setCharacter(characters.data);
    }
    fetchData();
  }, []);

  return (
    <div className="bg-gray-850 min-w-full min-h-screen flex justify-center items-start space-x-5">
      {character.map((item) => {
        return (
          <div class="overflow-hidden relative justify-end  cursor-pointer flex flex-col rounded-md bg-gray-850 w-64 h-52 z-50 object-cover text-white transform transition duration-500 hover:scale-105">
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-full object-center object-cover filter brightness-50"
            />
            <div class="absolute p-3 flex flex-col">
              <div className="font-semibold text-xl">{item.name}</div>
              <div className="text-gray-300 text-sm">Episodes: 41 (2013-2020)</div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Characters;
