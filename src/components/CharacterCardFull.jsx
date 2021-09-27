import React from 'react';

function CharacterCardFull({ character }) {
  const { name, status, species, gender, image, origin, location } = character;

  return (
    <div className="overflow-hidden absolute flex flex-col rounded-md w-64 h-auto text-white bg-gray-825 cursor-default shadow-md ">
      <div className="w-full p-2">
        <img src={image} alt={name} className="object-center object-cover rounded-md" />
      </div>
      <div className="flex flex-col p-2 w-full">
        <div className="font-bold text-2xl sm:text-3xl">{name}</div>
        <div className="flex flex-col mt-4 space-y-2">
          <div className="flex flex-col -space-y-1.5">
            <div className="text-gray-300 text-sm sm:text-md">Status</div>
            <div className="font-semibold text-lg sm:text-xl">{status}</div>
          </div>
          <div className="flex flex-col -space-y-1.5">
            <div className="text-gray-300 text-sm sm:text-md">Species</div>
            <div className="font-semibold text-lg sm:text-xl">{species}</div>
          </div>
          <div className="flex flex-col -space-y-1.5">
            <div className="text-gray-300 text-sm sm:text-md">Gender</div>
            <div className="font-semibold text-lg sm:text-xl">{gender}</div>
          </div>

          <div className="flex flex-col -space-y-1.5">
            <div className="text-gray-300 text-sm sm:text-md">Origin</div>
            <div className="font-bold text-lg sm:text-xl">{origin.name}</div>
          </div>
          <div className="flex flex-col -space-y-1.5">
            <div className="text-gray-300 text-sm sm:text-md">Loaction</div>
            <div className="font-bold text-lg sm:text-xl">{location.name}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CharacterCardFull;
