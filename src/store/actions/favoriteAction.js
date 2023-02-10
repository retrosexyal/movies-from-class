export const actionTypes = {
    ADD_MOVIES: "ADD_MOVIES",
    DELETE_MOVIES: "DELETE_MOVIES",
    DELETE_ALL: "DELETE_ALL",
}

export const actionFavorite = {

    addMovies: (payload) => ({ type: actionTypes.ADD_MOVIES, payload }),
    deleteMovies: (payload) => ({ type: actionTypes.DELETE_MOVIES, payload }),
    deleteAll: (payload) => ({ type: actionTypes.DELETE_ALL, payload }),

}