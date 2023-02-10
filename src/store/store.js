import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from "redux-thunk";
import { countReducer } from "./reducer";
import { favoriteReducer } from "./reducers/favoritReducer";
import { moviesReducer } from "./reducers/moviesReducers";
import { setTodoReducer } from "./reducers/todoReducers";
import { videosReducer } from "./reducers/videoReducer";


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
    count: countReducer,
    movies: moviesReducer,
    toDo: setTodoReducer,
    video: videosReducer,
    favorite: favoriteReducer,
});

export const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunk))
);