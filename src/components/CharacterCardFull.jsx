import React from 'react';

function CharacterCardFull({ character }) {
  const { name, status, species, gender, image, origin, location } = character;

  return (
    <div className="overflow-hidden absolute flex flex-col rounded-md w-64 h-245 text-white bg-gray-800 cursor-default shadow-md">
      <div className="w-full p-2">
        <img src={image} alt={name} className="object-center object-cover rounded-xl" />
      </div>
      <div className="flex flex-col pl-2 w-full">
        <div className="font-bold text-2xl">{name}</div>
        <div className="flex space-x-4 mt-4">
          <div className="flex flex-col -space-y-1.5">
            <div className="text-gray-300 text-sm">Status</div>
            <div className="font-semibold text-lg">{status}</div>
          </div>
          <div className="flex flex-col -space-y-1.5">
            <div className="text-gray-300 text-sm">Species</div>
            <div className="font-semibold text-lg">{species}</div>
          </div>
          <div className="flex flex-col -space-y-1.5">
            <div className="text-gray-300 text-sm">Gender</div>
            <div className="font-semibold text-lg">{gender}</div>
          </div>
        </div>
        <div className="flex flex-col -space-y-1.5 mt-4">
          <div className="text-gray-300 text-sm">Origin</div>
          <div className="font-bold text-lg">{origin.name}</div>
        </div>
        <div className="flex flex-col -space-y-1.5 mt-4">
          <div className="text-gray-300 text-sm">Loaction</div>
          <div className="font-bold text-lg">{location.name}</div>
        </div>
      </div>
    </div>
  );
}

export default CharacterCardFull;
