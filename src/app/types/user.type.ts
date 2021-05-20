import { Feed } from './feed.type';
import { Id } from "./id.type";

export interface User {
    id: Id
    name: string
    imageUrl: string
    contents: Id[]
    friends: Id[]
    feeds: Id[]
}