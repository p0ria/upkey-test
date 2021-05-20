import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { Observable } from 'rxjs';
import { mergeMap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Id } from './../types/id.type';
import { User } from './../types/user.type';

@Injectable({
    providedIn: 'root'
})
export class UserService {
    constructor(private http: HttpClient) { }

    getMe(): Observable<User> {
        const url = `${environment.baseUrl}/me`;
        return this.http.get<User>(url, {
            headers: { 'Content-Type': 'application/json' }
        }).pipe(
            mergeMap(({ id }) => this.getUserById(id))
        );
    }

    getUserById(id: Id): Observable<User> {
        const url = `${environment.baseUrl}/users/${id}`;
        return this.http.get<User>(url, {
            headers: { 'Content-Type': 'application/json' }
        })
    }

    updateUser(id: Id, patch: Partial<User>): Observable<User> {
        const url = `${environment.baseUrl}/users/${id}`;
        const body = JSON.stringify(patch);
        return this.http.patch<User>(url, body, {
            headers: { 'Content-Type': 'application/json' }
        })
    }
}