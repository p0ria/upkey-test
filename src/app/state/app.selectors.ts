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

export const selectMeIsLoading = createSelector(
    selectAppState,
    state => state.meIsLoading
)

export const selectFriendsIsLoading = createSelector(
    selectAppState,
    state => state.friendsIsLoading
)

export const selectPage = createSelector(
    selectAppState,
    state => state.page
)

export const selectFeeds = createSelector(
    selectAppState,
    state => state.feeds
)

export const selectFeedsIsLoading = createSelector(
    selectAppState,
    state => state.feedsIsLoading
)