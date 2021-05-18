import { Id } from "./id.type";

export interface Content {
    id: Id
    title: string
    description: string
    imageUrl: string
    likes: Id[]
}