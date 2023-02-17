import axios from "axios";

export const actionType = {
    SET_MOVIES: "SET_MOVIES",
    SET_MOVIES_SUCCESS: "SET_MOVIES_SUCCESS",
    SET_MOVIES_ERROR: "SET_MOVIES_ERROR",

    SET_MOVIES_SEARCH: "SET_MOVIES_SEARCH",
    SET_MOVIES_SUCCESS_SEARCH: "SET_MOVIES_SUCCESS_SEARCH",
    SET_MOVIES_ERROR_SEARCH: "SET_MOVIES_ERROR_SEARCH",

    SET_MOVIES_INFO: "SET_MOVIES_INFO",
    SET_MOVIES_INFO_SUCCESS: "SET_MOVIES_INFO_SUCCESS",
    SET_MOVIES_INFO_ERROR: "SET_MOVIES_INFO_ERROR",
}

export const actionMovies = {
    getMovies: (page = 1, id, sort = "popularity.desc") => {
        return (dispatch) => {
            dispatch({ type: actionType.SET_MOVIES })
            /*  https://api.themoviedb.org/3/movie/{movie_id}/images?api_key=<<api_key>>&language=en-US */
            axios.get(`http://api.themoviedb.org/3/discover/movie?api_key=d94c83bdcb8a6a3850d8063489961b1f&page=${page}&with_genres=${id}&sort_by=${sort}`)
                .then(res => {
                    dispatch({ type: actionType.SET_MOVIES_SUCCESS, payload: res.data.results })
                })
                .catch(err => {
                    dispatch({ type: actionType.SET_MOVIES_ERROR, payload: err })
                })
        }
    },

    getMoviesSearch: (search = "") => {
        return (dispatch) => {
            dispatch({ type: actionType.SET_MOVIES_SEARCH })
            /*  https://api.themoviedb.org/3/movie/{movie_id}/images?api_key=<<api_key>>&language=en-US */
            axios.get(`https://api.themoviedb.org/3/search/movie?api_key=d94c83bdcb8a6a3850d8063489961b1f&query=${search}`)
                .then(res => {
                    dispatch({ type: actionType.SET_MOVIES_SUCCESS_SEARCH, payload: res.data.results })
                })
                .catch(err => {
                    dispatch({ type: actionType.SET_MOVIES_ERROR_SEARCH, payload: err })
                })
        }
    },

    getMoviesInfo: (id) => {
        return (dispatch) => {
            dispatch({ type: actionType.SET_MOVIES_INFO })
            
            axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=d94c83bdcb8a6a3850d8063489961b1f&language=en-US`)
                .then(res => {
                    dispatch({ type: actionType.SET_MOVIES_INFO_SUCCESS, payload: res.data })
                })
                .catch(err => {
                    dispatch({ type: actionType.SET_MOVIES_INFO_ERROR, payload: err })
                })
        }
    },
}



//https://api.themoviedb.org/3/movie/12454?api_key=d94c83bdcb8a6a3850d8063489961b1f&language=en-US