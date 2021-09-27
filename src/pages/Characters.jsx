import React from 'react';
import axios from 'axios';

import CharacterCardMini from '../components/CharacterCardMini';
import Navbar from '../components/Navbar';

function Characters() {
  const [character, setCharacter] = React.useState([]);
  const [currentPage, setCurrentPage] = React.useState(1);
  const [fetching, setFetching] = React.useState(true);

  React.useEffect(() => {
    async function getCharacter() {
      if (fetching) {
        const characters = await axios.get(
          `https://rickandmortyapi.com/api/character/?page=${currentPage}`,
        );
        setCharacter([...character, ...characters.data.results]);
        setCurrentPage((prevState) => prevState + 1);
        setFetching(false);
      }
    }
    getCharacter();
  }, [character, currentPage, fetching]);

  React.useEffect(() => {
    document.addEventListener('scroll', scrollHandler);
    return function () {
      document.removeEventListener('scroll', scrollHandler);
    };
  }, []);

  const scrollHandler = (e) => {
    if (
      e.target.documentElement.scrollHeight -
        (e.target.documentElement.scrollTop + window.innerHeight) <
      100
    ) {
      setFetching(true);
    }
  };

  return (
    <div className="bg-gray-850 min-w-full min-h-screen flex flex-col justify-center items-center">
      <div className="flex justify-center w-full">
        <Navbar />
      </div>

      <div className="w-3/4 mt-5 flex flex-col space-y-2  items-center justify-center flex-wrap md:flex-row md:items-start md:space-x-0 md:space-y-0">
        <CharacterCardMini key={character.id} character={character} />
      </div>
    </div>
  );
}
export default Characters;
