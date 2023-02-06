import { actionType } from "../actions/moviesAction";
import axios from "axios";

const initialState = {
    movies: {},
    loading: false,
    err: false,
}

export const actionMovies = {
    getMovies: (page = 1) => {
        return (dispatch) => {
            dispatch({ type: actionType.SET_MOVIES })
                    /*  https://api.themoviedb.org/3/movie/{movie_id}/images?api_key=<<api_key>>&language=en-US */
             axios.get(`http://api.themoviedb.org/3/discover/movie?api_key=d94c83bdcb8a6a3850d8063489961b1f&page=${page}`)
                .then(res => {
                    dispatch({ type: actionType.SET_MOVIES_SUCCESS, payload: res.data.results })
                })
                .catch(err => {
                    dispatch({ type: actionType.SET_MOVIES_ERROR, payload: err })
                })
        }
    }
}