
import { actionType } from "../actions/todoAction";

const initialState = {
    toDo: []
}

export const setTodoReducer = (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
        case actionType.SET_TO_DO:
            console.log('state', state.toDo)
            console.log('payload', payload)
            return /* state: payload выфвф */
        default: return state;
    }
}