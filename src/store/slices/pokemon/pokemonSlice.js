import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  page: 0,
  pokemons: [],
  isLoading: false,
}

export const pokemonSlice = createSlice({
  name: 'pokemon',
  initialState,
  reducers: {
    startLoadingPokemons: (state) => {
      state.isLoading = true;
    },
    setPokemons: (state, { payload }) => {
      state.pokemons = payload.pokemons,
      state.page = payload.page,
      state.isLoading = false
    },
  }
});

export const { startLoadingPokemons, setPokemons } = pokemonSlice.actions;

