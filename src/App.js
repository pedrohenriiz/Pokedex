import { useCallback, useRef, useState } from 'react';

import useGetPokemon from './hooks/useGetPokemons';
import getPokemonTypeColor from './functions/getPokemonTypeColor';

import './App.css';

function App() {
  const [pageNumber, setPageNumber] = useState(0);

  const { pokemons, hasMore, loading } = useGetPokemon(pageNumber);
  const observer = useRef();

  const lastPokemonElementRef = useCallback(
    (node) => {
      if (loading) {
        return;
      }

      if (observer.current) {
        observer.current.disconnect();
      }
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          setPageNumber((previousPageNumber) => {
            const increasePageNumber = previousPageNumber + 30;

            return increasePageNumber;
          });
        }
      });

      if (node) {
        observer.current.observe(node);
      }
    },
    [loading, hasMore]
  );

  return (
    <div className='bg-gray-100 min-h-screen h-full'>
      <div className='container mx-auto px-4 flex flex-col '>
        <header className='text-center flex-1 mt-12'>
          <h1 className='text-4xl text-body font-bold '>
            <span className='text-red-400 '>Poke</span>dex
          </h1>
        </header>

        <div className='mt-12 place-items-center grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3'>
          {pokemons.map((poke, index) => {
            const data = poke.sprites.other;

            delete data.dream_world;
            const objectKey = Object.keys(data);

            if (pokemons.length === index + 1) {
              return (
                <div
                  ref={lastPokemonElementRef}
                  key={poke.name}
                  className={`flex flex-col items-center justify-center mt-16 bg-white shadow rounded w-11/12 sm:min-w-0 sm:w-4/5 `}
                >
                  <img
                    className='transform -translate-y-14  w-40'
                    src={poke.sprites.other[objectKey].front_default}
                    alt={poke.name}
                  />
                  <h2 className='text-2xl text-center transform -translate-y-14 uppercase font-bold text-gray-700'>
                    {poke.name}
                  </h2>

                  <div>
                    {poke.types.map((type) => {
                      const { type: pokeType } = type;
                      return (
                        <span
                          key={pokeType.name}
                          className={`${getPokemonTypeColor(
                            pokeType.name
                          )} mr-2 transform -translate-y-14 inline-block uppercase font-bold text-sm`}
                        >
                          {pokeType.name}
                        </span>
                      );
                    })}
                  </div>

                  <span className='text-gray-600 font-bold uppercase no-underline inline-block transform -translate-y-6'>
                    Details
                  </span>
                </div>
              );
            }

            return (
              <div
                key={poke.name}
                className={`flex flex-col items-center justify-center mt-16 bg-white shadow rounded w-11/12 sm:min-w-0 sm:w-4/5 `}
              >
                <img
                  className='transform -translate-y-14  w-40'
                  src={poke.sprites.other[objectKey].front_default}
                  alt={poke.name}
                />
                <h2 className='text-2xl text-center transform -translate-y-14 uppercase font-bold text-gray-700'>
                  {poke.name}
                </h2>

                <div>
                  {poke.types.map((type) => {
                    const { type: pokeType } = type;
                    return (
                      <span
                        key={pokeType.name}
                        className={`${getPokemonTypeColor(
                          pokeType.name
                        )} mr-2 transform -translate-y-14 inline-block uppercase font-bold text-sm`}
                      >
                        {pokeType.name}
                      </span>
                    );
                  })}
                </div>

                <span className='text-gray-600 font-bold uppercase no-underline inline-block transform -translate-y-6'>
                  Details
                </span>
              </div>
            );
          })}
        </div>
        {loading && (
          <div className='pokeball mx-auto mt-10 mb-10 items-center'></div>
        )}
      </div>
    </div>
  );
}

export default App;
