import React from 'react';
import { Link } from 'react-router-dom';

function CharacterCardMini({ character }) {
  return (
    <>
      {character.map((item) => (
        <Link to={`/characters/${item.id}`}>
          <div className="overflow-hidden relative justify-end  cursor-pointer flex flex-col rounded-md bg-gray-850 w-56 h-40 z-50 object-cover text-white transform transition duration-500 hover:scale-105 md:ml-3 md:mb-3 lg:w-56 lg:h-52 xl:w-60 xl:h-56">
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-full object-center object-cover filter brightness-50"
            />
            <div className="absolute p-3 flex flex-col">
              <div className="font-semibold text-xl">{item.name}</div>
              <div className="text-gray-300 text-sm">Episodes: {item.episode.length}</div>
            </div>
          </div>
        </Link>
      ))}
    </>
  );
}

export default CharacterCardMini;
