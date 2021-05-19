import { Injectable } from "@angular/core";
import { NavigationEnd, Router } from "@angular/router";
import { Actions, createEffect, ofType, ROOT_EFFECTS_INIT } from "@ngrx/effects";
import { select, Store } from "@ngrx/store";
import { EMPTY, forkJoin, of, Observable } from 'rxjs';
import { catchError, debounceTime, filter, first, map, mergeMap, switchMap, tap, withLatestFrom } from 'rxjs/operators';
import { selectMe } from 'src/app/state/app.selectors';
import { UserService } from '../services/user.service';
import { Feed } from "../types/feed.type";
import { User } from "../types/user.type";
import { ContentService } from './../services/content.service';
import { FeedService } from './../services/feeed.service';
import { actionGeMeSuccess, actionGetFeeds, actionGetFeedsSuccess, actionGetMe, actionGetMeFailure, actionGetMeFriends, actionGetMeFriendsFailure, actionGetMeFriendsSuccess, actionGetSelectedFriendContents, actionGetSelectedFriendContentsSuccess, actionSelectFriend, actionToggleContentLike, actionToggleContentLikeSuccess } from './app.actions';
import { selectFriends, selectSelectedFriend } from './app.selectors';

@Injectable()
export class AppEffects {
    constructor(
        private actions$: Actions,
        private store: Store,
        private router: Router,
        private userService: UserService,
        private contentService: ContentService,
        private feedService: FeedService
    ) { }

    init$ = createEffect(
        () => this.actions$.pipe(
            ofType(ROOT_EFFECTS_INIT),
            mergeMap(_ => [actionGetMe()])
        )
    )

    watchNavigation$ = createEffect(
        () => this.router.events.pipe(
            filter(e => e instanceof NavigationEnd),
            debounceTime(200),
            map(_ => this.router.routerState.root.snapshot.queryParams),
            filter(({ friend }) => !!friend),
            map(({ friend }) => actionSelectFriend({ friendName: friend }))
        )
    )

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
            switchMap(([_, selectedFriend]) => selectedFriend && selectedFriend.contents && selectedFriend.contents.length ?
                forkJoin(selectedFriend.contents.map(c => this.contentService.getContentById(c))) : of([])),
            map(contents => actionGetSelectedFriendContentsSuccess({ contents }))
        )
    )

    toggleContentLike$ = createEffect(
        () => this.actions$.pipe(
            ofType(actionToggleContentLike),
            withLatestFrom(this.store.pipe(select(selectMe))),
            mergeMap(([{ content }, me]) => this.contentService.toggleLike(content, me.id).pipe(
                map(content => {
                    if (content.likes.includes(me.id)) console.log("LIKED")
                    else console.log("UNLIKED")
                    return actionToggleContentLikeSuccess({ content });
                }),
                catchError(error => of(actionGetMeFriendsFailure({ error })))
            ))
        )
    )

    getFeeds$ = createEffect(
        () => this.actions$.pipe(
            ofType(actionGetFeeds),
            tap(_ => this.router.navigate(['home'])),
            switchMap(_ => forkJoin([
                this.store.pipe(select(selectMe), first()),
                this.store.pipe(select(selectFriends), first())
            ])),
            switchMap(([me, friends]: [User, any]) => {
                let feeds$: Observable<Feed>[] = []
                feeds$.push(...me.feeds.map(f => this.feedService.getFeedById(f)));
                friends.forEach(friend => friend.feeds && feeds$.push(...friend.feeds.map(f => this.feedService.getFeedById(f))));
                return forkJoin(feeds$);
            }),
            map(feeds => actionGetFeedsSuccess({ feeds }))
        )
    )
}