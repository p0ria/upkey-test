import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { select, Store } from "@ngrx/store";
import { forkJoin, of } from 'rxjs';
import { catchError, map, mergeMap, withLatestFrom } from 'rxjs/operators';
import { selectMe } from 'src/app/state/app.selectors';
import { UserService } from '../services/user.service';
import { ContentService } from './../services/content.service';
import { actionGeMeSuccess, actionGetMe, actionGetMeFailure, actionGetMeFriends, actionGetMeFriendsFailure, actionGetMeFriendsSuccess, actionGetSelectedFriendContents, actionGetSelectedFriendContentsSuccess, actionSelectFriend, actionToggleContentLike, actionToggleContentLikeSuccess } from './app.actions';
import { selectSelectedFriend } from './app.selectors';

@Injectable()
export class AppEffects {
    constructor(
        private actions$: Actions,
        private store: Store,
        private userService: UserService,
        private contentService: ContentService
    ) { }

    getMe$ = createEffect(
        () => this.actions$.pipe(
            ofType(actionGetMe),
            mergeMap(_ => this.userService.getMe().pipe(
                mergeMap(me => [actionGeMeSuccess({ me }), actionGetMeFriends()]),
                catchError(error => of(actionGetMeFailure({ error })))
            ))
        )
    )

    getMeFriends$ = createEffect(
        () => this.actions$.pipe(
            ofType(actionGetMeFriends),
            withLatestFrom(this.store.pipe(select(selectMe))),
            mergeMap(([_, me]) => forkJoin(me.friends.map(f => this.userService.getUserById(f)))),
            map(friends => actionGetMeFriendsSuccess({ friends }))
        )
    )

    selectFriend$ = createEffect(
        () => this.actions$.pipe(
            ofType(actionSelectFriend),
            map(_ => actionGetSelectedFriendContents())
        )
    )

    getSelectedFriendContents$ = createEffect(
        () => this.actions$.pipe(
            ofType(actionGetSelectedFriendContents),
            withLatestFrom(this.store.pipe(select(selectSelectedFriend))),
            mergeMap(([_, selectedFriend]) => selectedFriend && selectedFriend.contents && selectedFriend.contents.length ?
                forkJoin(selectedFriend.contents.map(c => this.contentService.getContentById(c))) : of([])),
            map(contents => actionGetSelectedFriendContentsSuccess({ contents }))
        )
    )

    toggleContentLike$ = createEffect(
        () => this.actions$.pipe(
            ofType(actionToggleContentLike),
            withLatestFrom(this.store.pipe(select(selectMe))),
            mergeMap(([{ content }, me]) => this.contentService.toggleLike(content, me.id).pipe(
                map(content => actionToggleContentLikeSuccess({ content })),
                catchError(error => of(actionGetMeFriendsFailure({ error })))
            ))
        )
    )
}