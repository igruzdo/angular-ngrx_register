import { Injectable } from "@angular/core";
import { map, Observable } from "rxjs";
import { CurrentUserInterface } from "src/app/shared/types/currentUser.interface";
import { RegisterRequesInterface } from "../types/registerRequest.interface";
import { HttpClient } from '@angular/common/http'
import { environment } from "src/environments/environment";
import { AuthResponseInterface } from "../types/authResponse.interface";

@Injectable()
export class AuthService {

    constructor(private http: HttpClient){

    }
    public register(data: RegisterRequesInterface): Observable<CurrentUserInterface> {
        const URL = environment.apiUrl + '/users'
        return this.http.post<AuthResponseInterface>(URL, data).pipe(
            map(data => data.user)
        )
    }
}