import { AppState } from './app.state';
import { APP_FEATURE_NAME } from 'src/app/state/app.state';
import { createFeatureSelector, createSelector } from "@ngrx/store";

export const selectAppState = createFeatureSelector<AppState>(APP_FEATURE_NAME)

export const selectMe = createSelector(
    selectAppState,
    state => state.me
)

export const selectFriends = createSelector(
    selectAppState,
    state => state.friends
)

export const selectSelectedFriend = createSelector(
    selectAppState,
    state => state.selectedFriend
)

export const selectSelectedFriendContents = createSelector(
    selectAppState,
    state => state.selectedFriendContents
)

export const selectToggleContentLikePendingId = createSelector(
    selectAppState,
    state => state.toggleContentLikePendingId
)

export const selectSelectedFriendContentsIsLoading = createSelector(
    selectAppState,
    state => state.selectedFriendContentsIsLoading
)

export const selectFriendsIsLoading = createSelector(
    selectAppState,
    state => state.friendsIsLoading
)

export const selectPage = createSelector(
    selectAppState,
    state => state.page
)