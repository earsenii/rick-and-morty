import React from 'react';
import axios from 'axios';

import CharacterCardMini from '../components/CharacterCardMini';
import Navbar from '../components/Navbar';

function Characters() {
  const [character, setCharacter] = React.useState([]);
  const [filtredCharacter, setFiltredCharacter] = React.useState([]);
  const [currentPage, setCurrentPage] = React.useState(1);
  const [fetching, setFetching] = React.useState(true);
  const [value, setValue] = React.useState('');

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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fetching]);

  React.useEffect(() => {
    async function fetchData() {
      const allCharacters = await axios.get(
        `https://rickandmortyapi.com/api/character/?name=${value}`,
      );
      setFiltredCharacter(allCharacters.data.results);
    }
    fetchData();
  }, [value]);

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

  const onChangeSearchInput = (event) => {
    setValue(event.target.value);
  };

  const filtredCharacters = filtredCharacter.filter((item) =>
    item.name.toLowerCase().includes(value.toLowerCase()),
  );

  return (
    <div className="bg-gray-850 min-w-full min-h-screen flex flex-col justify-center items-center">
      <Navbar onChangeSearchInput={onChangeSearchInput} />
      <div className="w-3/4 lg:mt-20 mt-16 flex flex-col space-y-2 items-center justify-center flex-wrap md:flex-row md:items-start md:space-x-0 md:space-y-0 z-0">
        {value.length > 0 ? (
          <CharacterCardMini key={character.id} character={filtredCharacters} />
        ) : (
          <CharacterCardMini key={character.id} character={character} />
        )}
      </div>
    </div>
  );
}
export default Characters;
