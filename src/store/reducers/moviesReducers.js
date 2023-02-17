import { actionType } from "../actions/moviesAction";

const initialState = {
    movies: [],
    loading: false,
    err: false,
    info: {},
    load: true,
}

export const moviesReducer = (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
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
            };

        //DDDDDDDDDDDDDDDDDDDDDDDDDDDD

        case actionType.SET_MOVIES_SEARCH:
            return {
                ...state,
                movies: [],
                loading: true,
                err: false,
            };
        case actionType.SET_MOVIES_SUCCESS_SEARCH:
            return {
                ...state,
                movies: payload,
                loading: false,
                err: false,
            };
        case actionType.SET_MOVIES_ERROR_SEARCH:
            return {
                ...state,
                err: true,
            }

        //DDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDD

        case actionType.SET_MOVIES_INFO:
            return {
                ...state,
                info: {},
                loading: true,
                err: false,
            };
        case actionType.SET_MOVIES_INFO_SUCCESS:
            return {
                ...state,
                info: payload,
                loading: false,
                err: false,
                load: false,
            };
        case actionType.SET_MOVIES_INFO_ERROR:
            return {
                ...state,
                err: true,
            }
        default: return state;
    }

}