import { Feed } from './feed.type';
import { Content } from "./content.type";

export type UserId = string | number

export interface User {
    id: UserId
    name: string
    imageUrl: string
    contents: Content[]
    firends: User[]
    feeds: Feed[]
}