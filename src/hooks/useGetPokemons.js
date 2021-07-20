import { useEffect, useState } from 'react';
import axios from 'axios';

export default function useGetPokemon(pageNumber) {
  const [loading, setLoading] = useState(true);
  const [pokemons, setPokemons] = useState([]);
  const [hasMore, setHasMore] = useState(false);

  useEffect(() => {
    setLoading(true);

    async function getPokemonData(results) {
      const pokeList = [];

      for (let i = 0; i < results.length; i++) {
        const response = await axios.get(results[i].url);

        pokeList.push(response.data);
      }

      return pokeList;
    }

    async function getPokemonList() {
      const response = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/?limit=30&offset=${pageNumber}`
      );

      setHasMore(response.data.results.length > 0);

      const pokemonData = await getPokemonData(response.data.results);

      setPokemons((prevPokemons) => [...prevPokemons, ...pokemonData]);
      setLoading(false);
    }

    getPokemonList();
  }, [pageNumber]);

  return {
    loading,
    pokemons,
    hasMore,
  };
}
