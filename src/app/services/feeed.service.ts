import { Feed } from './../types/feed.type';
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Content } from 'src/app/types/content.type';
import { environment } from "src/environments/environment";
import { Id } from '../types/id.type';

@Injectable({
    providedIn: 'root'
})
export class FeedService {
    constructor(private http: HttpClient) { }

    getFeedById(id: Id): Observable<Feed> {
        const url = `${environment.baseUrl}/feeds/${id}`;
        return this.http.get<Feed>(url, {
            headers: { 'Content-Type': 'application/json' }
        })
    }
}