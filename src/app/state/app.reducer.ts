import { Action, createReducer } from "@ngrx/store";
import { AppState, initialState } from "./app.state";

const reducer = createReducer(
    initialState,
)

export const appReducer = (state: AppState | undefined, action: Action) => reducer(state, action)