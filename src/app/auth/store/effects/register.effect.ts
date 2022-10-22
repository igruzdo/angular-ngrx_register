import { HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, of, switchMap, tap } from "rxjs";
import { CurrentUserInterface } from "src/app/shared/types/currentUser.interface";
import { PrsistanceSrvice } from "src/app/shared/types/services/prsistance.service";
import { AuthService } from "../../services/auth.service";
import { registerAction, registerFalureAction, registerSuccessAction } from "../actions/register.action";

@Injectable()
export class RegisterEffect {
    register$ = createEffect(() => this.actions$.pipe(
        ofType(registerAction),
        switchMap(({request}) => {
            return this.authService.register(request).pipe(
                map((currentUser: CurrentUserInterface) => {
                    this.persistanceService.set('accessToken', currentUser.token)
                    return registerSuccessAction({currentUser})
                })
            )
        }),
        catchError((errorResponse: HttpErrorResponse) => {
            return of(registerFalureAction({errors: errorResponse.error.errors}))
        })
    ))

    redirectAfterSubmit$ = createEffect(() => this.actions$.pipe(
        ofType(registerSuccessAction),
        tap(() => {
            this.router.navigateByUrl('/')
        })
    ), {
        dispatch: false,
    })

    constructor(private actions$: Actions, 
        private authService: AuthService, 
        private persistanceService: PrsistanceSrvice,
        private router: Router) {}
}