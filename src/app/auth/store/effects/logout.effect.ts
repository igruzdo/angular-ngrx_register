import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { tap } from "rxjs";
import { PrsistanceSrvice } from "src/app/shared/services/prsistance.service";
import { logoutAction } from "../actions/sync.action";

@Injectable()
export class LogoutEffect {
    logout$ = createEffect(() => this.actions$.pipe(
            ofType(logoutAction),
            tap(() => {
                this.persistanceService.set('accessToken', '');
                this.router.navigateByUrl('/');
            }),
        ),
    {dispatch: false}
    )

    constructor(
        private actions$: Actions,
        private persistanceService: PrsistanceSrvice,
        private router: Router,
    ) {}
}