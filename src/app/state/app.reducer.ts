import { Action, createReducer, on } from "@ngrx/store";
import { actionGeMeSuccess, actionGetMe, actionGetMeFailure, actionGetMeFriends, actionGetMeFriendsFailure, actionGetMeFriendsSuccess, actionGetSelectedFriendContents, actionGetSelectedFriendContentsFailure, actionGetSelectedFriendContentsSuccess, actionSelectFriend, actionToggleContentLike, actionToggleContentLikeFailure, actionToggleContentLikeSuccess, actionGetFeeds, actionGetFeedsSuccess } from './app.actions';
import { AppState, initialState } from "./app.state";

const reducer = createReducer<AppState, Action>(
    initialState,
    on(actionGetMe, (state, action) => {
        return ({
            ...state,
            meIsLoading: true
        })
    }),
    on(actionGeMeSuccess, (state, action) => {
        return ({
            ...state,
            me: action.me,
            meIsLoading: false
        })
    }),
    on(actionGetMeFailure, (state, action) => {
        return ({
            ...state,
            meIsLoading: false
        })
    }),
    on(actionGetMeFriends, (state, action) => {
        return ({
            ...state,
            friendsIsLoading: true
        })
    }),
    on(actionGetMeFriendsSuccess, (state, action) => {
        return ({
            ...state,
            friends: action.friends,
            friendsIsLoading: false
        })
    }),
    on(actionGetMeFriendsFailure, (state, action) => {
        return ({
            ...state,
            friendsIsLoading: false
        })
    }),
    on(actionSelectFriend, (state, action) => {
        return ({
            ...state,
            selectedFriend: state.friends.find(f => f.name === action.friendName),
            page: 'contents'
        })
    }),
    on(actionGetSelectedFriendContents, (state, action) => {
        return ({
            ...state,
            selectedFriendContentsIsLoading: true
        })
    }),
    on(actionGetSelectedFriendContentsSuccess, (state, action) => {
        return ({
            ...state,
            selectedFriendContents: action.contents,
            selectedFriendContentsIsLoading: false
        })
    }),
    on(actionGetSelectedFriendContentsFailure, (state, action) => {
        return ({
            ...state,
            selectedFriendContents: [],
            selectedFriendContentsIsLoading: false
        })
    }),
    on(actionToggleContentLike, (state, action) => {
        return ({
            ...state,
            toggleContentLikePendingId: action.content.id
        })
    }),
    on(actionToggleContentLikeSuccess, (state, action) => {
        return ({
            ...state,
            selectedFriendContents: state.selectedFriendContents.map(c => c.id === action.content.id ? action.content : c),
            toggleContentLikePendingId: null
        })
    }),
    on(actionToggleContentLikeFailure, (state, action) => {
        return ({
            ...state,
            toggleContentLikePendingId: null
        })
    }),
    on(actionGetFeeds, (state, action) => {
        return ({
            ...state,
            page: 'feeds',
            feedsIsLoading: true,
            selectedFriend: null,
        })
    }),
    on(actionGetFeedsSuccess, (state, action) => {
        return ({
            ...state,
            feeds: action.feeds,
            feedsIsLoading: false
        })
    })
)

export const appReducer = (state: AppState | undefined, action: Action) => reducer(state, action)