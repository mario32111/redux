import {  SET_LOADING } from "../components/actions/types";
import { fromJS } from "immutable";

const initialState = fromJS({
    loading: false,
});

export const uiReducer = (state = initialState, action) => {
    switch (action.type) {
         case SET_LOADING:
            return state.setIn(['loading'],  action.payload)
/*             return {
                ...state,
                loading: action.payload,
            }  */
        default:
            return state;

    }
};