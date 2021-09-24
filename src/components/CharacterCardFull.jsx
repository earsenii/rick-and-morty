import React from 'react';

function CharacterCardFull({ character, loading }) {
  return (
    <div className="overflow-hidden absolute flex rounded-md w-2/5 h-1/4 z-50 object-cover text-white bg-gray-600 cursor-default shadow-md">
      <div className="w-60 h-full object-center object-cover">
        <img src={character.image} alt={character.name} />
      </div>
      <div className="pl-2 flex flex-col">
        <div className="font-bold text-3xl">{character.name}</div>
        <div className="flex space-x-4 mt-4">
          <div className="flex flex-col -space-y-1.5">
            <div className="text-gray-300 text-md">Status</div>
            <div className="font-semibold text-xl">{character.status}</div>
          </div>
          <div className="flex flex-col -space-y-1.5">
            <div className="text-gray-300 text-md">Species</div>
            <div className="font-semibold text-xl">{character.species}</div>
          </div>
          <div className="flex flex-col -space-y-1.5">
            <div className="text-gray-300 text-md">Gender</div>
            <div className="font-semibold text-xl">{character.gender}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CharacterCardFull;
