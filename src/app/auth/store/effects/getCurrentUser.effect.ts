import { HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, of, switchMap } from "rxjs";
import { CurrentUserInterface } from "src/app/shared/types/currentUser.interface";
import { PrsistanceSrvice } from "src/app/shared/types/services/prsistance.service";
import { AuthService } from "../../services/auth.service";
import { getCurrentUserAction, getCurrentUserFalureAction, getCurrentUserSuccessAction } from "../actions/getCurrentUser.action";

@Injectable()
export class GetCurrentUserEffect {
    getCurrentUser$ = createEffect(() => this.actions$.pipe(
        ofType(getCurrentUserAction),
        switchMap(() => {
            const token = this.persistanceService.get('accessToken')

            if(!token) return of(getCurrentUserFalureAction());

            return this.authService.getCurrentUser().pipe(
                map((currentUser: CurrentUserInterface) => {
                    return getCurrentUserSuccessAction({currentUser});
                })
            )
        }),
        catchError((errorResponse: HttpErrorResponse) => {
            return of( getCurrentUserFalureAction());
        })
    ))

    constructor(
        private actions$: Actions, 
        private authService: AuthService, 
        private persistanceService: PrsistanceSrvice,
    ) {}
}