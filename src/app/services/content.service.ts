import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Content } from 'src/app/types/content.type';
import { environment } from "src/environments/environment";
import { Id } from './../types/id.type';

@Injectable({
    providedIn: 'root'
})
export class ContentService {
    constructor(private http: HttpClient) { }

    getContentById(id: Id): Observable<Content> {
        const url = `${environment.baseUrl}/contents/${id}`;
        return this.http.get<Content>(url, {
            headers: { 'Content-Type': 'application/json' }
        })
    }

    toggleLike(content: Content, userId: Id): Observable<Content> {
        const url = `${environment.baseUrl}/contents/${content.id}`;
        console.log(url, content.id)
        let likes = [...content.likes];
        if (likes.includes(userId)) {
            likes = likes.filter(like => like !== userId)
        } else {
            likes.push(userId);
        }
        const body: Partial<Content> = { likes };
        return this.http.patch<Content>(url, JSON.stringify(body), {
            headers: { 'Content-Type': 'application/json' }
        })
    }
}