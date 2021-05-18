import { actionSetUser } from './app.actions';
import { createReducer, Action, on } from "@ngrx/store"
import { AppState, initialState } from "./app.state"

const reducer = createReducer<AppState, Action>(
    initialState,
    on(actionSetUser, (state, action) => {
        console.log(state, action)
        return ({
            ...state,
            user: action.user
        })
    }),
)

export const appReducer = (state: AppState | undefined, action: Action) => reducer(state, action)