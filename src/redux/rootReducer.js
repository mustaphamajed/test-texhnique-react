import { combineReducers } from "redux";

import petReducer from './reducer'
const rootReducer = combineReducers({
    pet: petReducer
});

export default rootReducer;