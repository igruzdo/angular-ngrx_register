import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map, Observable } from "rxjs";
import { ProfileInterface } from "src/app/shared/types/profile.interface";
import { environment } from "src/environments/environment";
import { GetUserProfileResponseInterface } from "../types/getUserProfileResponse.interface";

@Injectable()
export class UserProfileService {
    constructor(private http: HttpClient) {}

    public getUserProfile = (slug: string): Observable<ProfileInterface> => {
        const URL =`${environment.apiUrl}/profiles/${slug}`;

        return this.http.get<GetUserProfileResponseInterface>(URL).pipe(
            map((res) => res.profile)
        )
    }
}