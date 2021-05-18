import { Id } from './../types/id.type';
import { Content } from "../types/content.type";
import { Feed } from "../types/feed.type";
import { User } from "../types/user.type";

export const APP_FEATURE_NAME = 'app';

export interface AppState {
    me: Partial<User>
    friends: Partial<User>[]
    feeds: Partial<Feed>[]
    selectedFriend: User
    selectedFriendContents: Partial<Content>[]
    meIsLoading: boolean
    friendsIsLoading: boolean
    selectedFriendContentsIsLoading: boolean
    toggleContentLikeLoadingId: Id | null
}

export const initialState: AppState = {
    me: null,
    friends: [],
    feeds: [],
    selectedFriend: null,
    selectedFriendContents: [],
    meIsLoading: false,
    friendsIsLoading: false,
    selectedFriendContentsIsLoading: false,
    toggleContentLikeLoadingId: null
}