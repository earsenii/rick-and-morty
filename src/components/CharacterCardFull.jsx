import React from 'react';

function CharacterCardMini({ character, loading }) {
  return (
    <>
      {character.map((item, index) => (
        <div
          key={index}
          className="overflow-hidden relative justify-end  cursor-pointer flex flex-col rounded-md bg-gray-850 w-60 h-48 z-50 object-cover text-white transform transition duration-500 hover:scale-105 ml-3">
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
      ))}
    </>
  );
}

export default CharacterCardMini;
