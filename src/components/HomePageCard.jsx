import React from 'react';

function HomePageCard({ text, image }) {
  return (
    <div className="bg-gray-850 w-60 h-36 rounded-md flex justify-center items-center shadow-md cursor-pointer transform transition duration-500 hover:scale-105 filter grayscale hover:grayscale-0 overflow-hidden text-white text-2xl focus:scale-105 focus:grayscale-0 active:scale-105 active:grayscale-0">
      <img
        src={image}
        alt={text}
        className="w-full h-full object-center object-cover filter brightness-50"
      />
      <div className="absolute font-semibold">{text}</div>
    </div>
  );
}

export default HomePageCard;
