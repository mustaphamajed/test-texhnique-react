import { LOADING_PET, PUSH_PET, SET_ALL_PETS } from "./types";


const initialState = {
    loading: false,
    pets: [],
    error: false, // TODO: Refactor this with server errors validation
};
export default function reducer(state = initialState, action) {
    switch (action.type) {
        case LOADING_PET:
            return {
                ...state,
                loading: true,
            };
        case SET_ALL_PETS:
            return {
                ...state,
                pets: action.payload,
                loading: false,
                error: false,
            };
        case PUSH_PET:
            return {
                ...state,
                pets: state.pets.concat(action.payload),
                loading: false,
                error: false,
            };

        default:
            return state;
    }
}