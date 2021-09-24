import React from 'react';

function CharacterCardFull({ character }) {
  const { name, status, species, gender, image, origin, location } = character;

  return (
    <div className="overflow-hidden flex rounded-md w-6/12 h-1/4 z-50 text-white bg-gray-700 cursor-default shadow-md object-none">
      <div className="w-2/4 h-1/4 object-center object-none">
        <img src={image} alt={name} />
      </div>
      <div className=" flex flex-col w-3/4 h-1/4 ">
        <div className="font-bold text-3xl">{name}</div>
        <div className="flex space-x-4 mt-4">
          <div className="flex flex-col -space-y-1.5">
            <div className="text-gray-300 text-md">Status</div>
            <div className="font-semibold text-xl">{status}</div>
          </div>
          <div className="flex flex-col -space-y-1.5">
            <div className="text-gray-300 text-md">Species</div>
            <div className="font-semibold text-xl">{species}</div>
          </div>
          <div className="flex flex-col -space-y-1.5">
            <div className="text-gray-300 text-md">Gender</div>
            <div className="font-semibold text-xl">{gender}</div>
          </div>
        </div>
        <div className="flex flex-col -space-y-1.5 mt-4">
          <div className="text-gray-300 text-md">Origin</div>
          <div className="font-bold text-xl">{origin.name}</div>
        </div>
        <div className="flex flex-col -space-y-1.5 mt-4">
          <div className="text-gray-300 text-md">Loaction</div>
          <div className="font-bold text-xl">{location.name}</div>
        </div>
      </div>
    </div>
  );
}

export default CharacterCardFull;
