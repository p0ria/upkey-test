import { PageType } from './../types/page.type';
import { Id } from './../types/id.type';
import { Content } from "../types/content.type";
import { Feed } from "../types/feed.type";
import { User } from "../types/user.type";

export const APP_FEATURE_NAME = 'app';

export interface AppState {
    page: PageType | null
    me: Partial<User>
    friends: Partial<User>[]
    feeds: Partial<Feed>[]
    selectedFriend: Partial<User>
    selectedFriendContents: Partial<Content>[]
    meIsLoading: boolean
    friendsIsLoading: boolean
    selectedFriendContentsIsLoading: boolean
    toggleContentLikePendingId: Id | null
    feedsIsLoading: boolean
}

export const initialState: AppState = {
    page: null,
    me: null,
    friends: [],
    feeds: [],
    selectedFriend: null,
    selectedFriendContents: [],
    meIsLoading: false,
    friendsIsLoading: false,
    selectedFriendContentsIsLoading: false,
    toggleContentLikePendingId: null,
    feedsIsLoading: false
}