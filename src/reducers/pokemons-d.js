import { fromJS } from "immutable";
import { SET_POKEMONS, SET_FAVORITE } from "../components/actions/types";

const initialState = fromJS({
    pokemons: [],
});

export const pokemonsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_POKEMONS:

            return state.setIn(['pokemons'], fromJS(action.payload))
        case SET_FAVORITE:
            const currentPokemonIndex = state.get('pokemons').findIndex(
                (pokemon) => {
                    return pokemon.get('id') === action.payload.pokemonId;
                })

            if (currentPokemonIndex < 0) {
                return state;
            }

            const isFavorite = state.get('pokemons').get(currentPokemonIndex).get('favorite');

            return state.setIn(['pokemons', currentPokemonIndex, 'favorite'], !isFavorite);

        default:
            return state;

    }
};