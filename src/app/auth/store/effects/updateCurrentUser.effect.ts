import { HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, of, switchMap } from "rxjs";
import { CurrentUserInterface } from "src/app/shared/types/currentUser.interface";
import { AuthService } from "../../services/auth.service";
import { updateCurrentUserAction, updateCurrentUserFalureAction, updateCurrentUserSuccessAction } from "../actions/updateCurrentUser.action";

@Injectable()
export class UpdateCurrentUserEffect {
    updateCurrentUser$ = createEffect(() => this.actions$.pipe(
        ofType(updateCurrentUserAction),
        switchMap(({currentUserInput}) => {
            return this.authService.updateCurrentUser(currentUserInput).pipe(
                map((currentUser: CurrentUserInterface) => {
                    return updateCurrentUserSuccessAction({currentUser})
                })
            )
        }),
        catchError((errorResponse: HttpErrorResponse) => {
            return of(updateCurrentUserFalureAction({errors: errorResponse.error.errors}))
        })
    ))

    constructor(
        private actions$: Actions, 
        private authService: AuthService
        ) {}
}