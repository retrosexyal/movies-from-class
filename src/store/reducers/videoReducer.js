import { actionType } from "../actions/moviesAction";


const initialState = {
    movies: {},
    loading: false,
    err: false,
}

export const videosReducer = (state = initialState, action) => {
    const { type, payload } = action;
    switch(type) {
        case actionType.SET_MOVIES:
            return {
                ...state,
                video: {},
                loading: true,
                error: false,
            };
            case actionType.SET_MOVIES_SUCCESS:
                return {
                    ...state,
                    video: payload,
                loading: true,
                error: false,
                };
            case actionType.SET_MOVIES_ERROR:
                return {
                    ...state,
                    err: true,
                }
            default : return state;
    }

}