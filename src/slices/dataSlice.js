import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { getPokemon, getPokemonsDetails } from "../api";
import { setLoading } from "./uiSlice";
const initialState = {
    pokemons: [],
}

export const fetchPokemonsWithDetails = createAsyncThunk(
    'data/fetchPokemonsWithDetails',
    async (_, { dispatch }) => {
        //dispatch loader
        //fetch 
        //dispatch loader
        dispatch(setLoading(true));
        const pokemonsRes = await getPokemon();
        const pokemonsDetails = await Promise.all(
            pokemonsRes.map(pokemon =>
                getPokemonsDetails(pokemon))
        );
        dispatch(setPokemons(pokemonsDetails));
        dispatch(setLoading(false));
    }
);

export const DataSlice = createSlice(
    {
        name: 'data',
        initialState,
        reducers: {
            setPokemons: (state, action) => {
                state.pokemons = action.payload;
            },
            setFavorite: (state, action) => {
                const currentPokemonIndex = state.pokemons.findIndex(
                    (pokemon) => {
                        return pokemon.id === action.payload.pokemonId;
                    })

                if (currentPokemonIndex >= 0) {
                    const isFavorite = state.pokemons[currentPokemonIndex].favorite;
                    state.pokemons[currentPokemonIndex].favorite = !isFavorite;
                }
            }
        }
    }
)

export const { setFavorite, setPokemons } = DataSlice.actions;

export default DataSlice.reducer;