import { Injectable } from "@angular/core";
import { map, Observable } from "rxjs";
import { CurrentUserInterface } from "src/app/shared/types/currentUser.interface";
import { RegisterRequesInterface } from "../types/registerRequest.interface";
import { HttpClient } from '@angular/common/http'
import { environment } from "src/environments/environment";
import { AuthResponseInterface } from "../types/authResponse.interface";
import { LoginRequesInterface } from "../types/loginRequest.interface";
import { CurrentUserInputInterface } from "src/app/shared/types/currentUserInput.interface";

@Injectable()
export class AuthService {

    constructor(private http: HttpClient) { }

    private getUser(response: AuthResponseInterface): CurrentUserInterface {
        return response.user
    }

    public register(data: RegisterRequesInterface): Observable<CurrentUserInterface> {
        const URL = environment.apiUrl + '/users'
        return this.http.post<AuthResponseInterface>(URL, data).pipe(
            map(this.getUser)
        )
    }

    public login(data: LoginRequesInterface): Observable<CurrentUserInterface> {
        const URL = environment.apiUrl + '/users/login'
        return this.http.post<AuthResponseInterface>(URL, data).pipe(
            map(this.getUser)
        )
    }

    public getCurrentUser(): Observable<CurrentUserInterface> {
        const URL = environment.apiUrl + '/user';
        return this.http.get<AuthResponseInterface>(URL).pipe(
            map(this.getUser)
        )
    }

    public updateCurrentUser(currentUserInput: CurrentUserInputInterface): Observable<CurrentUserInterface> {
        const URL = environment.apiUrl + '/user';
        return this.http.put<AuthResponseInterface>(URL, currentUserInput).pipe(
            map(this.getUser)
        )
    }
}