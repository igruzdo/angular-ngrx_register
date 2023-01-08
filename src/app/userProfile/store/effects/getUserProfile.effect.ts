import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, of, switchMap } from "rxjs";
import { ProfileInterface } from "src/app/shared/types/profile.interface";
import { UserProfileService } from "../../services/userProfile.service";
import { getUserProfileAction, getUserProfileActionFalure, getUserProfileActionSuccess } from "../getUserProfile.action";

@Injectable()
export class GetUserProfileEffect {
    getUserProfile$ = createEffect(() => this.actions$.pipe(
        ofType(getUserProfileAction),
        switchMap(({slug}) => {
            return this.userProfileService.getUserProfile(slug).pipe(
                map((userProfile: ProfileInterface) => {
                    return getUserProfileActionSuccess({userProfile});
                })
            )
        }),
        catchError(() => {
            return of(getUserProfileActionFalure());
        })
    ))

    constructor(
        private actions$: Actions, 
        private userProfileService: UserProfileService, 
    ) {}
}