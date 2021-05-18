import { createAction, props } from "@ngrx/store";
import { Content } from 'src/app/types/content.type';
import { User } from 'src/app/types/user.type';

export const actionGetMe = createAction(
    '[APP] Get Me'
)

export const actionGeMeSuccess = createAction(
    '[APP] Get Me Success',
    props<{ me: User }>()
)

export const actionGetMeFailure = createAction(
    '[APP] Get Me Failure',
    props<{ error: any }>()
)

export const actionGetMeFriends = createAction(
    '[APP] Get Me Friends'
)

export const actionGetMeFriendsSuccess = createAction(
    '[APP] Get Me Friends Success',
    props<{ friends: User[] }>()
)

export const actionGetMeFriendsFailure = createAction(
    '[APP] Get Me Friends Failure',
    props<{ error: any }>()
)

export const actionSelectFriend = createAction(
    '[APP] Select Friend',
    props<{ friend: User }>()
)

export const actionGetSelectedFriendContents = createAction(
    '[APP] Get Selected Friend Contents'
)

export const actionGetSelectedFriendContentsSuccess = createAction(
    '[APP] Get Selected Friend Contents Success',
    props<{ contents: Content[] }>()
)

export const actionGetSelectedFriendContentsFailure = createAction(
    '[APP] Get Selected Friend Contents Failure',
    props<{ error: any }>()
)

export const actionToggleContentLike = createAction(
    '[APP] Toggle Content Like',
    props<{ content: Content }>()
)

export const actionToggleContentLikeSuccess = createAction(
    '[APP] Toggle Content Like Success',
    props<{ content: Content }>()
)

export const actionToggleContentLikeFailure = createAction(
    '[APP] Toggle Content Like Failure',
    props<{ content: Content }>()
)