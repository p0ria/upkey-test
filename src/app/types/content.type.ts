import { UserId } from './user.type';

export interface Content {
    id: string
    text: string
    likes: UserId[]
}