import { actionGeMeSuccess, actionGetMe, actionGetMeFailure, actionGetMeFriends, actionGetMeFriendsFailure, actionGetMeFriendsSuccess, actionSelectFriend, actionGetSelectedFriendContents, actionGetSelectedFriendContentsSuccess, actionGetSelectedFriendContentsFailure, actionToggleContentLike, actionToggleContentLikeSuccess, actionToggleContentLikeFailure } from './app.actions';
import { createReducer, Action, on } from "@ngrx/store"
import { AppState, initialState } from "./app.state"

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
            selectedFriend: action.friend
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
            toggleContentLikeLoadingId: action.content.id
        })
    }),
    on(actionToggleContentLikeSuccess, (state, action) => {
        return ({
            ...state,
            selectedFriendContents: state.selectedFriendContents.map(c => c.id === action.content.id ? action.content : c),
            toggleContentLikeLoadingId: null
        })
    }),
    on(actionToggleContentLikeFailure, (state, action) => {
        return ({
            ...state,
            toggleContentLikeLoadingId: null
        })
    })
)

export const appReducer = (state: AppState | undefined, action: Action) => reducer(state, action)