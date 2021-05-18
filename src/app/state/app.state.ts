import { Feed } from "../types/feed.type";
import { User } from "../types/user.type";

export const APP_FEATURE_NAME = 'app';

export interface AppState {
    user: Partial<User>
    friends: Partial<User>[]
    feeds: Partial<Feed>[]
}

export const initialState: AppState = {
    user: null,
    friends: [
        {
            id: 1,
            name: 'Pooria',
            imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTY9PV2aJYIlDrKugo5ytCvB_HrS0GK8uPgtQKji694wM_WxpNolSoTk-1vI3_KAatPH-0&usqp=CAU'
        },
        {
            id: 2,
            name: 'Reza',
            imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTY9PV2aJYIlDrKugo5ytCvB_HrS0GK8uPgtQKji694wM_WxpNolSoTk-1vI3_KAatPH-0&usqp=CAU'
        },
    ],
    feeds: []
}