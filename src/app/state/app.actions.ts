import { createAction, props } from "@ngrx/store";
import { User } from "../types/user.type";

export const actionSetUser = createAction(
    '[APP] Set User',
    props<{ user: User }>()
)