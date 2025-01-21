import { SET_POKEMONS } from "../components/actions/types";

export const logger = (store) => (next) => (action) => {
    console.log(action);
    next(action)
}

export const feautiring = (store) => (next) => (actionInfo) => {
    const featured = [{ name: 'eddie' }, ...actionInfo.action.payload];
    const updatedActionInfo = {
        ...actionInfo, action: {
            ...actionInfo.action,
            payload: featured
        }
    }
    next(updatedActionInfo);
}

export const addUpper = (store) => (next) => (actionInfo) => {
    if(actionInfo.type=== SET_POKEMONS){
        const featured = actionInfo.payload;

        const newPokemons = featured.map((pokemon,index) => (
            {   
                ...actionInfo.payload[index],
                name: `${pokemon.name.charAt(0).toUpperCase()}${pokemon.name.slice(1).toLowerCase()}`,
            }
        ));
        const updatedActionInfo = {
            ...actionInfo, 
            payload: newPokemons,
        }

        next(updatedActionInfo);
    }else{
        next(actionInfo)
    }
};
