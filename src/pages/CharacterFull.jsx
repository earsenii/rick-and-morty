import React from 'react';
import axios from 'axios';
import CharacterCardFull from '../components/CharacterCardFull';

function CharacterFull({ match }) {
  const {
    params: { id },
  } = match;
  const [character, setCharacter] = React.useState();
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState();

  const getCharacter = async () => {
    try {
      const result = await axios.get(`https://rickandmortyapi.com/api/character/${id}`);
      setCharacter(result.data);
    } catch (error) {
      setError(error);
    }
  };

  React.useEffect(() => {
    if (id) {
      setLoading(false);
      getCharacter();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  if (loading === true || !character) {
    return (
      <div className="bg-gray-850 min-w-full min-h-screen flex justify-center items-center">
        <h1 className="text-center text-white text-3xl">Loading</h1>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-gray-850 min-w-full min-h-screen flex justify-center items-center space-x-7">
        <h1 className="text-center text-white text-3xl">{error.message}</h1>
      </div>
    );
  }

  return (
    <div className="bg-gray-850 min-w-full min-h-screen flex justify-center">
      <div className="w-3/4 mt-5 flex justify-center">
        <CharacterCardFull character={character} />
      </div>
    </div>
  );
}
export default CharacterFull;
