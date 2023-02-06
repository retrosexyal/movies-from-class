import { actionType } from "../actions/moviesAction";

const initialState = {
    movies: [],
    loading: false,
    err: false,
}

export const moviesReducer = (state = initialState, action) => {
    const { type, payload } = action;
    switch(type) {
        case actionType.SET_MOVIES:
            return {
                ...state,
                movies: [],
                loading: true,
                err: false,
            };
            case actionType.SET_MOVIES_SUCCESS:
                return {
                    ...state,
                    movies: payload,
                    loading: false,
                    err: false,
                };
            case actionType.SET_MOVIES_ERROR:
                return {
                    ...state,
                    err: true,
                }
            default : return state;
    }

}