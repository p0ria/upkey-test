import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { map, mergeMap } from "rxjs/operators";
import { User } from 'src/app/types/user.type';
import { Id } from '../types/id.type';
import { environment } from './../../environments/environment';
import { Feed } from './../types/feed.type';
import { UserService } from './user.service';

@Injectable({
    providedIn: 'root'
})
export class FeedService {
    constructor(
        private http: HttpClient,
        private userService: UserService) { }

    getFeedById(id: Id): Observable<Feed> {
        const url = `${environment.baseUrl}/feeds/${id}`;
        return this.http.get<Feed>(url, {
            headers: { 'Content-Type': 'application/json' }
        })
    }

    addFeed(user: Partial<User>, html: string): Observable<{ user: User, feed: Feed }> {
        const url = `${environment.baseUrl}/feeds`;
        const body: Partial<Feed> = {
            html,
            timestamp: +new Date()
        }
        return this.http.post<Feed>(url, JSON.stringify(body), {
            headers: { 'Content-Type': 'application/json' }
        }).pipe(
            mergeMap(feed => this.userService.updateUser(user.id, {
                feeds: [...(user.feeds || []), feed.id]
            }).pipe(
                map(user => ({ user, feed }))
            ))
        )
    }
}