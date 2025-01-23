import { combineReducers } from "redux";
import DataSlice from "../slices/dataSlice";
import uiReducer from "../slices/uiSlice";


const rootReducer = combineReducers({
    data: DataSlice,
    ui: uiReducer,
});

export default rootReducer;