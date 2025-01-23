import { SET_FAVORITE, SET_LOADING, SET_POKEMONS } from "./types";
import { getPokemonsDetails } from "../../api";
export const setPokemons = (payload) => ({
    type: SET_POKEMONS,
    payload
})

//asi funcionan los action creators en redux thunk
export const getPokemonsWithDetails =
(pokemons = []) =>
        async (dispatch) => {
            const pokemonsDetails = await Promise.all(
                pokemons.map(pokemon =>
                getPokemonsDetails(pokemon))
            );

            dispatch(setPokemons(pokemonsDetails));
        }


export const setLoading = (payload) => ({
    type: SET_LOADING,
    payload,
});

export const setFavorite = (payload) => ({
    type: SET_FAVORITE,
    payload,
});