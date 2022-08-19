import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPokemons } from './store/slices/pokemon';

export const PokemonApp = () => {
  const dispatch = useDispatch();
  const { pokemons, isLoading, page } = useSelector(state => state.pokemons);

  useEffect(() => {
    dispatch(getPokemons());
  }, []);

  return(
    <>
      <h1>My Pokemon app</h1>
      <hr />
      {isLoading && <h1>Cargando...</h1>}
      <ul>
        {pokemons.map(({ name }) => (
          <li key={name}>{name}</li>
        ))}
      </ul>

      <button
        type='button'
        disabled={isLoading}
        onClick={() => dispatch(getPokemons(page))}
      >
        Next
      </button>
    </>
  )
}