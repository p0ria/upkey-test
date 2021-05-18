import { AppState } from './app.state';
import { APP_FEATURE_NAME } from 'src/app/state/app.state';
import { createFeatureSelector, createSelector } from "@ngrx/store";

export const selectAppState = createFeatureSelector<AppState>(APP_FEATURE_NAME)

export const selectFriends = createSelector(
    selectAppState,
    state => state.friends
)