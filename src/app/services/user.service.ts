import { environment } from 'src/environments/environment';
import { User } from 'src/app/types/user.type';
import { Injectable } from "@angular/core";
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Id } from '../types/id.type';

@Injectable({
    providedIn: 'root'
})
export class UserService {
    constructor(private http: HttpClient) { }

    getMe(): Observable<User> {
        const url = `${environment.baseUrl}/me`;
        return this.http.get<User>(url, {
            headers: { 'Content-Type': 'application/json' }
        });
    }

    getUserById(id: Id): Observable<User> {
        const url = `${environment.baseUrl}/users/${id}`;
        return this.http.get<User>(url, {
            headers: { 'Content-Type': 'application/json' }
        })
    }
}