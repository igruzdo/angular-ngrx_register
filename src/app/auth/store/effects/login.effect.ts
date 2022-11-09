import { HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, of, switchMap, tap } from "rxjs";
import { CurrentUserInterface } from "src/app/shared/types/currentUser.interface";
import { PrsistanceSrvice } from "src/app/shared/services/prsistance.service";
import { AuthService } from "../../services/auth.service";
import { loginAction, loginFalureAction, loginSuccessAction } from "../actions/login.action";

@Injectable()
export class LoginEffect {
    register$ = createEffect(() => this.actions$.pipe(
        ofType(loginAction),
        switchMap(({request}) => {
            return this.authService.login(request).pipe(
                map((currentUser: CurrentUserInterface) => {
                    this.persistanceService.set('accessToken', currentUser.token)
                    return loginSuccessAction({currentUser})
                })
            )
        }),
        catchError((errorResponse: HttpErrorResponse) => {
            return of(loginFalureAction({errors: errorResponse.error.errors}))
        })
    ))

    redirectAfterSubmit$ = createEffect(() => this.actions$.pipe(
        ofType(loginSuccessAction),
        tap(() => {
            this.router.navigateByUrl('/')
        })
    ), {
        dispatch: false,
    })

    constructor(
        private actions$: Actions, 
        private authService: AuthService, 
        private persistanceService: PrsistanceSrvice,
        private router: Router) {}
}